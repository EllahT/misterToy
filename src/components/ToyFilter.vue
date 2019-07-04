<template>
  <div>
    <input type="text" v-model="filterBy.name" placeholder="search toy by name" @input="emitFilter"/>
      <select @change="emitFilter" v-model="filterBy.toyType">
        <option value="all">All</option>
        <option v-for="type in types" :value="type" :key="type">
          {{type}}
        </option>
      </select>
      <select @change="emitFilter" v-model="filterBy.stockStatus">
        <option value=true>In Stock</option>
        <option value=false>Not In Stock</option>
      </select>
      <select @change="emitFilter" v-model="filterBy.sort.sortBy">
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
      <select @change="emitFilter" v-model="filterBy.sort.way">
        <option value="+">+</option>
        <option value="-">-</option>
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
      stockStatus: true,
      toyType: 'all',
      sort: {
        sortBy: 'name',
        way: '+'
        }
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
 