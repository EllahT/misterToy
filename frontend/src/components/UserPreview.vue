<template>
  <li class="user-preview">
      <h1>{{user.name}}</h1>
      <h4>Admin: {{user.isAdmin}}</h4>
      <div class="actions">
        <button @click="emitRemoveUser(user._id)">Delete</button>
        <router-link :to="editUrl">Edit</router-link>
        <router-link :to="detailsUrl">Details</router-link>
      </div>
  </li>
</template>

<script>

export default {
  props: {
      user: {
          type: Object,
          require: true
      }
  },

  computed: {
    editUrl() {
      return `/user/edit/${this.user._id}`;
    },

    detailsUrl() {
      return `/user/${this.user._id}`;
    }
  },

  methods: {
    emitRemoveUser(userId) {
      this.$emit('removeUser', userId);
    }
  }
};
</script>
