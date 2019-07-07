<template>
  <social-sharing class="social"
    url="https://toys.org"
    title="Progressive Uniqe Toys Shop"
    description="a Place to find happiness in all sizes and colors, toys for kids and grownups."
    quote="To Infinity and Beyond."
    hashtags="toys, kids, adults, ediucational"
    twitter-user="toys"
    inline-template
  >
    <div class="share">
      <network network="facebook">
        <i class="fa fa-facebook"></i> Facebook
      </network>
      <network network="telegram">
        <i class="fa fa-telegram"></i> Telegram
      </network>
      <network network="twitter">
        <i class="fa fa-twitter"></i> Twitter
      </network>
      <network network="whatsapp">
        <i class="fa fa-whatsapp"></i> Whatsapp
      </network>
    </div>
  </social-sharing>
</template>

<script>
// import SocialSharing from 'vue-social-sharing';

// export default {
//   name: 'social-sharing',
//   components: {
//     SocialSharing
//   }
// }
</script>

<style>
.social {
    cursor: pointer;
}
</style>
