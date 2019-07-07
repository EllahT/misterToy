<template>
  <div>
    <input type="text" v-model="filterBy.name" placeholder="Search toy by name..." @input="emitFilter"/>
      <select @change="emitFilter" v-model="filterBy.toyType">
        <option value="all">All</option>
        <option v-for="type in types" :value="type" :key="type">
          {{type}}
        </option>
      </select>
      <select @change="emitFilter" v-model="filterBy.inStock">
        <option value=null>All</option>
        <option value=true>In Stock</option>
        <option value=false>Not In Stock</option>
      </select>
      <select @change="emitFilter" v-model="filterBy.sortBy">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>

      <select @change="emitFilter" v-model="filterBy.sortWay">
        <option value="up">Ascending</option>
        <option value="down">Descending</option>
      </select>
  </div>
</template>

<script>

export default {
  props: {
    currFilter: {
      type: Object
    }
  },
  
  data() {
    return {
      filterBy: {
      name: '',
      inStock: null,
      toyType: 'all',
      sortBy: 'name',
      sortWay: 'up'
      }
    }
  },

  created() {
    this.filterBy = JSON.parse(JSON.stringify(this.currFilter));
  },

  computed: {
      types() {
          return this.$store.getters.toyTypes;
      }
  },

  methods: {
    emitFilter() {
        this.$emit('filterChanged',this.filterBy);
    }
  }
}
</script>
 