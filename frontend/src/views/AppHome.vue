<template>
  <div class="homepage">
      <h1>Bring Your Toys To The Next Level</h1>
      <form v-if="!loggedUser" @submit.prevent="changedLoggedUser">
        <label>Email: </label>
        <input type="text" v-model="email"/>
        <button>Login</button>
        <router-link to="/user/edit">Sign Up</router-link>
      </form>
      
  </div>
</template>

<script>

export default {
  name: 'home',
  
  data() {
    return {
        email: ''
    }
  },

  created() {
    this.$store.dispatch({type: 'loadLoggedUser'})
  },

  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    }
  },

  methods: {
    changedLoggedUser() {
      this.$store.dispatch({type: 'loginUser', email: this.email})
      .then(() => {
        this.email = '';
      })
    }
  }
};
</script>
