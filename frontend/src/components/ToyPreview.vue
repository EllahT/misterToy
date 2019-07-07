<template>
  <li class="toy-preview" :class="classByStock">
      <h1>{{toy.name}}</h1>
      <img :src="toy.imgSrc"/>
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
    },

    classByStock() {
      return (this.toy.inStock)? 'inStock': 'notInStock';
    }
  },

  methods: {
    emitRemoveToy(toyId) {
      this.$emit('removeToy', toyId);
    }
  }
};
</script>
