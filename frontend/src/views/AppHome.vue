<template>
  <div class="homepage">
      <h1>Bring Your Toys To The Next Level</h1>
      <form @submit.prevent="changedLoggedUser">
        <label>UserName: </label>
        <input type="text" v-model="username"/>
        <button>Login</button>
      </form>
      
  </div>
</template>

<script>

export default {
  name: 'home',
  
  data() {
    return {
        username: ''
    }
  },

  methods: {
    changedLoggedUser() {
      this.$store.dispatch({type: 'loginUser', username: this.username})
    }
  }
};
</script>
