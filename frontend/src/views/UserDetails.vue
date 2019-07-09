<template>
  <div class="user-details">
      <h1>{{user.name}}</h1>
      <h2>Email: {{user.email}}</h2>
      <h4>Gender: {{user.gender.display}}</h4>
      <h4 :style="{'color': user.color}">Color</h4>
      <h4>Time: {{user.time.hours}}: {{user.time.minutes}} {{user.time.AMPM}}</h4>
      <h4>Admin: {{user.isAdmin}}</h4>
        <div class="actions">
          <button @click="removeUser(user._id)">Delete</button>
          <router-link :to="editUrl">Edit</router-link>
        </div>
      </div>
    </div>
</template>

<script>

export default {
   data() {
      return {
          user: {
              _id: '',
              name: '',
              gender: {type: '', display: ''},
              time: {hours: '', minutes: '', AMPM: ''},
              color: '',
              email: null,
              isAdmin: false
          }
      }
  },
  created() {
      const userId = this.$route.params.userId;
      this.$store.dispatch({type: 'loadUsers'})
      .then (() => {
        if (userId) this.user = JSON.parse(JSON.stringify(this.$store.getters.userById(userId)));
        else this.$router.push('/user');
      })
      
  },

  computed: {
    editUrl() {
      return `/user/edit/${this.user._id}`;
    },
  },

  methods: {
    removeUser(userId) {
      this.$store.dispatch({type: 'removeUser', userId}).then(() => {
        this.$router.push('/user');
      })
    }
  }
}
</script>

