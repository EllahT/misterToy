<template>
  <div>
      <router-link to="/user/edit">Add User</router-link>
      <ul>
          <user-preview v-for="user in users" :key="user._id" @removeUser="removeUser" :user="user"></user-preview>
      </ul>
  </div>
</template>

<script>
import UserPreview from '@/components/UserPreview.vue';

export default {
    created() {
        this.$store.dispatch({type: 'loadUsers'});
    },

    computed: {
        users() {
            return this.$store.getters.users;
        }
    },

    methods: {
        removeUser(userId) {
            this.$store.dispatch({type: 'removeUser', userId})
            .then(() => {
                console.log('user deleted', userId);
            })
        }
    },

    components: {
        UserPreview
    }
};
</script>