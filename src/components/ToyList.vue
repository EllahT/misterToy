<template>
  <div>
      <ul>
          <toy-preview v-for="toy in toys" 
          :toy="toy" :key="toy._id"
          @removeToy="emitRemoveToy"></toy-preview>
      </ul>
  </div>
</template>

<script>
import ToyPreview from '@/components/ToyPreview.vue';

export default {
  props: {
      toys: {
          type: Array,
          require: true
      }
  },

  methods: {
      emitRemoveToy(toyId) {
          this.$emit('remove', toyId);
      }
  },

  components: {
      ToyPreview
  }
};
</script>

<style>
    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
</style>
