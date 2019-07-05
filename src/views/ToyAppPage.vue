<template>
  <div @keydown.escape="closeChat">
      <toy-filter :currFilter="filterBy" @filterChanged="setFilter"></toy-filter>
      <router-link to="/edit">Add Toy</router-link>
      <img v-if="loadingToys" src="@/assets/loading.gif"/>
      <toy-list v-else :toys="toys" @remove="removeToy"></toy-list>
      <chat-app v-if="showChat">
        <h1 slot="box-header">User Chat</h1>
        <div></div>
        <h6 slot="box-footer">Mister Toys User Chat</h6>
      </chat-app>
      <button class="showChatBtn" @click="toggleShowChat">💬</button>
  </div>
</template>

<script>
import ToyFilter from '@/components/ToyFilter.vue';
import ToyList from '@/components/ToyList.vue';
import ChatApp from '@/components/ChatApp.vue';

export default {
  name: 'ToyAppPage',
  created() {
      this.$store.dispatch({type: 'loadToys', filterBy: this.filterBy})
  },

  computed: {
      toys() {
          return this.$store.getters.toys;
      },

      filterBy() {
          return this.$store.getters.filterBy;
      },

      showChat() {
        return this.$store.getters.showChat;
      },

      loadingToys() {
        return this.$store.getters.loadingToys;
      }
  },

  methods: {
      removeToy(toyId) {
        this.$store.dispatch({type: 'removeToy', toyId})
        .then(() => {
            console.log('toy has been deleted',toyId)
          })
      },

      setFilter(filterBy) {
        this.$store.dispatch({type:'setFilter', filterBy});
      },

      toggleShowChat() {
        this.$store.dispatch({type: 'toggleChat'})
      },

      closeChat() {
        if (this.showChat) this.toggleShowChat();
      }
  },

  components: {
      ToyFilter,
      ToyList,
      ChatApp
  }
};
</script>

<style>
  .showChatBtn {
    position: fixed;
    z-index: 1;
    bottom: 0;
    right: 0;
    margin: 5px;
  }
</style>
