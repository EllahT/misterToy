<template>
  <div>
      <form @submit.prevent="saveToy">
        <label>
            Name:
            <input type="text" v-model="toy.name"/>
        </label>
        <label>
            Price:
            <input type="number" v-model="toy.price"/>
        </label>
        <label>
            Type:
            <input list="types" v-model="toy.type"/>           
            <datalist id="types">
                <option v-for="type in types" :value="type" :key="type">
                    {{type}}
                </option>
            </datalist>
        </label>
        <label>
            In Stock:
            <input type="checkbox" v-model="toy.inStock"/>
        </label>
        <button>Save</button>
      </form>
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
    },

  computed: {
      types() {
          return this.$store.getters.toyTypes;
      }
  },

  methods: {
      saveToy() {
          if (this.toy._id) {
              this.$store.dispatch({type: 'updateToy', toy:this.toy})
              .then(() => {
                console.log('updated toy');
                this.$router.push('/toy');
              })
          } else {
              this.$store.dispatch({type: 'addToy', toy:this.toy})
              .then(() => {
                console.log('added toy');
                this.$router.push('/toy');
              })
          }

          
      }
  }
};
</script>
