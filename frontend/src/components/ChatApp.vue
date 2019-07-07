<template>
  <div class="chat-box">
    <header>
      <slot name="box-header"></slot>
    </header>
    <slot></slot>
    <div>
      <ul>
        <li v-for="chat in chats" :key="chat._id">{{chat.txt}}</li>
        <li v-if="loadingChatLine">
          <img src="@/assets/ellipsis.gif" />
        </li>
      </ul>

      <input type="text" v-model="newLine" @change="addLine" />
    </div>
    <footer>
      <slot name="box-footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newLine: ""
    };
  },

  computed: {
    chats() {
      return this.$store.getters.chats;
    },

    loadingChatLine() {
      return this.$store.getters.loadingChatLine;
    }
  },

  methods: {
    addLine() {
      this.$store.dispatch({ type: "addChatLine", chatLine: this.newLine });
      this.newLine = "";
    }
  }
};
</script>

<style scoped lang="scss">
.chat-box {
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 15px;
  background-color: #fafcfc;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.5);
 
  ul {
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin-bottom: 0;
    max-height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    flex-wrap: nowrap;

    li {
      text-align: start;
      width: 250px;
      padding: 5px;
      word-wrap: break-word;
    }

    li:nth-child(odd) {
      background-color: lightgray;
    }

    li:nth-child(even) {
      background-color: lightpink;
    }
  }

  img {
    max-height: 20px;
    margin: 0;
    padding: 0;
  }
}
</style>


