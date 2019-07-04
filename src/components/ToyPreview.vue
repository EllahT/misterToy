<template>
  <li>
      <h1>{{toy.name}}</h1>
      <h4>{{toy.price | formatPrice}}</h4>
      <div class="actions">
        <button @click="emitRemoveToy(toy._id)">Delete</button>
        <router-link :to="editUrl">Edit</router-link>
        <router-link :to="detailsUrl">Details</router-link>
      </div>
  </li>
</template>

<script>

export default {
  props: {
      toy: {
          type: Object,
          require: true
      }
  },

  computed: {
    editUrl() {
      return `/edit/${this.toy._id}`;
    },

    detailsUrl() {
      return `/toy/${this.toy._id}`;
    }
  },

  methods: {
    emitRemoveToy(toyId) {
      this.$emit('removeToy', toyId);
    }
  }
};
</script>

<style scoped>
  li {
    display: flex;
    margin: 5px;
    padding: 5px 2px;
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
    margin: 0 3px;
    padding: 0;
  }

  button:hover, a:hover {
    color: hotpink;
  }

</style>
