<template>
  <div>
      <h1>{{toy.name}}</h1>
      <h4>{{toy.price | formatPrice}}</h4>
      <h4>{{toy.type}}</h4>
      <h4>{{toy.createdAt | timeAgo}}</h4>
      <h6>{{inStockToDisplay}}</h6>
      <div class="actions">
        <button @click="emitRemoveToy(toy._id)">Delete</button>
        <router-link :to="editUrl">Edit</router-link>
      </div>
  </div>
</template>

<script>

export default {
   data() {
      return {
          toy: {
            name: '',
            price: 0,
            type: '',
            inStock: true
          }
      }
  },
  created() {
      const toyId = this.$route.params.toyId;
      if (toyId) this.toy = JSON.parse(JSON.stringify(this.$store.getters.toyById(toyId)));
      else this.$router.push('/toy');
  },

  computed: {
    inStockToDisplay() {
      return (this.toy.inStock)? 'in Stock': 'Currently Not In Stock';
    }, 

    editUrl() {
      return `/edit/${this.toy._id}`;
    },
  },

  methods: {
    emitRemoveToy(toyId) {
      this.$emit('removeToy', toyId);
    }
  }
}
</script>

<style scoped>
  li {
    display: flex;
    margin: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
    background-color: lightblue;
    border-radius: 5px;
    max-width: max-content;
  }

  li h1 {
    flex-basis: 100%;
  }

  li h4, li h1, li h6 {
    margin: 5px;
  }

  .actions {
    flex-basis: 100%;
  }

  button, a {
    background-color: transparent;
    border: none;
    outline: none;
    color: inherit;
    font-size: 1rem;
  }

  button:hover, a:hover {
    color: hotpink;
  }

</style>