<template>
  <div>
      <toy-filter :currFilter="filterBy" @filterChanged="setFilter"></toy-filter>
      <router-link to="/edit">Add Toy</router-link>
      <toy-list :toys="toys" @remove="removeToy"></toy-list>

  </div>
</template>

<script>
import ToyFilter from '@/components/ToyFilter.vue';
import ToyList from '@/components/ToyList.vue';

export default {
  name: 'ToyAppPage',
  created() {
      this.$store.dispatch({type: 'loadToys'})
  },

  computed: {
      toys() {
          return this.$store.getters.toys;
      },

      filterBy() {
          return this.$store.getters.filterBy;
      }
  },

  methods: {
      removeToy(toyId) {
        this.$store.dispatch({type: 'removeToy', toyId})
        .then(() => {
            console.log('toy has been deleted',toyId)
          })
      },

      setFilter(filterBy) {
        this.$store.dispatch({type:'setFilter', filterBy});
      }
  },

  components: {
      ToyFilter,
      ToyList
  }
};
</script>
