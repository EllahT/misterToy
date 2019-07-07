<template>
  <header>
    <h2>Mister Toy</h2>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/profile">User Profile</router-link> |
        <router-link to="/statistics">Statistics</router-link> |
        <router-link to="/stores">Stores</router-link> |
        <router-link to="/toy">Toys</router-link> 
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  
};
</script>

