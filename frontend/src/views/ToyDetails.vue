<template>
  <div class="toy-details" @keydown.escape.stop="toggleShowChat">
      <h1>{{toy.name}}</h1>
      <img :src="toy.imgSrc"/>
      <div class="details-container">
        <h4>Price: {{toy.price | formatPrice}}</h4>
        <h4>Type: {{toy.type}}</h4>
        <h4>Added to store {{toy.createdAt | timeAgo}}</h4>
        <h5>{{inStockToDisplay}}</h5>
        <div class="actions">
          <button @click="removeToy(toy._id)">Delete</button>
          <router-link :to="editUrl">Edit</router-link>
          <button class="showChatBtn" @click="toggleShowChat">💬</button>
        </div>
      </div>
       <toy-chat @close="toggleShowChat" v-if="showChat" :toyId="toy._id">
        <h1 slot="box-header">Toy Chat For {{toy.name}}</h1>
        <div></div>
        <h6 slot="box-footer">Toy Chat</h6>
      </toy-chat>
    </div>
</template>

<script>
import ToyChat from '@/components/ToyChat.vue';

export default {
   data() {
      return {
          toy: {
            _id: null,
            name: '',
            price: 0,
            type: '',
            inStock: true,
            imgSrc: ''
          },
          showChat: false
      }
  },
  created() {
      const toyId = this.$route.params.toyId;
      this.$store.dispatch({type: 'loadToys'})
      .then (() => {
        if (toyId) this.toy = JSON.parse(JSON.stringify(this.$store.getters.toyById(toyId)));
        else this.$router.push('/toy');
      })
      
  },

  computed: {
    inStockToDisplay() {
      return (this.toy.inStock)? 'in Stock': 'Currently Not In Stock';
    }, 

    editUrl() {
      return `/edit/${this.toy._id}`;
    },
  },

  methods: {
    removeToy(toyId) {
      this.$store.dispatch({type: 'removeToy', toyId}).then(() => {
        this.$router.push('/toy');
      })
    },

    toggleShowChat() {
      this.showChat = !this.showChat;
    }
  },

  components: {
    ToyChat
  }
}
</script>

