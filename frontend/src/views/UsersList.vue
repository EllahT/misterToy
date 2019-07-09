<template>
  <div>
      <ul>
          <li v-for="user in users" :key="user._id">{{user}}</li>
      </ul>
  </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch({type: 'loadUsers'});
    },

    computed: {
        users() {
            return this.$store.getters.users;
        }
    }
};
</script>