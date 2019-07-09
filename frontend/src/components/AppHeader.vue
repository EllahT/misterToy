<template>
  <header>
    <div>
      <h2>Mister Toy</h2>
      <h6 v-if="Object.keys(loggedUser).lenght">Welcome {{loggedUser}}</h6>
      <button v-if="Object.keys(loggedUser).lenght" @click="logout">Logout</button>
    </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/user">Users</router-link> |
        <router-link to="/statistics">Statistics</router-link> |
        <router-link to="/stores">Stores</router-link> |
        <router-link to="/toy">Toys</router-link> 
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  
  computed: {
    loggedUser() {
      return this.$store.getters.loggedUser;
    }
  },

  methods: {
    logout() {
      this.$store.dispatch({type: 'logout'})
    }
  }
};
</script>

