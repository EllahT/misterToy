<template>
  <div id="app" @keydown.escape="closeChat">
    <app-header></app-header>
    <router-view/>
    <footer><social-sharing></social-sharing></footer>
    <chat-app v-if="showChat">
        <h1 slot="box-header">User Chat</h1>
        <div></div>
        <h6 slot="box-footer">Mister Toys User Chat</h6>
      </chat-app>
    <button class="showChatBtn" @click="toggleShowChat">💬</button>
  </div>
</template>

<script>
import SocialSharing from './components/SocialSharing.vue';
import AppHeader from './components/AppHeader.vue';
import ChatApp from './components/ChatApp.vue';

export default {
  computed: {
      showChat() {
        return this.$store.getters.showChat;
      }
  },

  methods: {
      toggleShowChat() {
        this.$store.dispatch({type: 'toggleChat'})
      },

      closeChat() {
        if (this.showChat) this.toggleShowChat();
      }
  },
  
  components: {
    SocialSharing,
    AppHeader,
    ChatApp
  }
}
</script>

