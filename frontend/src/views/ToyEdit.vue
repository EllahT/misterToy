<template>
  <div class="edit-toy">
    <form @submit.prevent="saveToy">
      <div>
        <label>Name:</label>
        <input type="text" v-model="toy.name" />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" v-model="toy.price" />
      </div>
      <div>
        <label>Type:</label>
        <input list="types" v-model="toy.type" />
        <datalist id="types">
          <option v-for="type in types" :value="type" :key="type">{{type}}</option>
        </datalist>
      </div>
      <div>
        <label>In Stock:</label>
        <input type="checkbox" v-model="toy.inStock" />
      </div>
      <div class="img-form" v-if="toy._id">
        <label>Image:</label>
        <div class="actions">
          <img :src="toy.imgSrc" />
          <button @click.prevent="changeImg">Set a random image</button>
          <button @click.prevent="uploadImg">Upload an image</button>
        </div>
      </div>
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
      })
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
    },

    changeImg() {
        this.$store.dispatch({type: 'changeImg', toyId: this.toy._id})
        .then(updatedToy => {
            this.toy.imgSrc = updatedToy.imgSrc;
        })
    },

    uploadImg() {

    }
  }
};
</script>
