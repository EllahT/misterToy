<template>
  <div class="toy-details">
      <h1>{{toy.name}}</h1>
      <img :src="toy.imgSrc"/>
      <div class="details-container">
        <h4>Price: {{toy.price | formatPrice}}</h4>
        <h4>Type: {{toy.type}}</h4>
        <h4>Added to store {{toy.createdAt | timeAgo}}</h4>
        <h5>{{inStockToDisplay}}</h5>
        <div class="actions">
          <button @click="removeToy(toy._id)">Delete</button>
          <router-link :to="editUrl">Edit</router-link>
        </div>
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
            inStock: true,
            imgSrc: ''
          }
      }
  },
  created() {
      const toyId = this.$route.params.toyId;
      this.$store.dispatch({type: 'loadToys'})
      .then (() => {
        if (toyId) this.toy = JSON.parse(JSON.stringify(this.$store.getters.toyById(toyId)));
        else this.$router.push('/toy');
      })
      
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
    removeToy(toyId) {
      this.$store.dispatch({type: 'removeToy', toyId}).then(() => {
        this.$router.push('/toy');
      })
    }
  }
}
</script>

