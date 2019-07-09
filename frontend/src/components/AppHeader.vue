<template>
  <header>
    <div>
      <h2>Mister Toy</h2>
      <h4 v-if="loggedUser">Welcome {{loggedUser.name}}</h4>
    </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/user">Users</router-link> |
        <router-link to="/statistics">Statistics</router-link> |
        <router-link to="/stores">Stores</router-link> |
        <router-link to="/toy">Toys</router-link> 
    </nav>
    <button v-if="loggedUser" @click="logout">Logout</button>
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

