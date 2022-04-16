<template>

  <div>
    <div class="home">
      <img src="../assets/img/foto1.jpg" alt="foto1.jpg">
      <div class="overlay"></div>
      <div class="title">
        <p style="font-size: 2.5rem; font-weight: 900;">Gaetano Chianello PT</p>
        <p style="font-size: 1.25rem; font-weight: 300;">{{ $t('textHomePage') }}</p>
      </div>
    </div>

    <VideoSection />
    <ShopSection />
    <FooterView />
    

  </div>
  
</template>

<script>
import VideoSection from '../components/VideoSection.vue'
import ShopSection from '../components/ShopSection.vue'
import FooterView from '../partials/FooterView.vue'


export default {
  name: 'HomeView',
  components: {
    VideoSection,
    ShopSection,
    FooterView,
   
  }
  
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: bisque;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    opacity: 0.95;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #000000, $alpha: 0.7)
  }

  .title {
    position: absolute;
    text-align: center;
    color: white;
  }
}


</style>
