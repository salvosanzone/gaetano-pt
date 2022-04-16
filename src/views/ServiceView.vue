<template>
  <div class="wrapper">
    <div class="service-jumbotron">
      <div class="video-container">
        <video autoplay loop muted>
          <source src="../assets/video/video1.mp4" type="video/mp4">  
        </video>
      </div>
        <span class="title">{{ $t('nav.service') }}</span>
        <div class="overlay"></div>
    </div>
    <div class="service-text">
      <div class="container">
        <div class="row">
          <div class="col-8 offset-2">
            <div v-html="$t('textService')"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceView',
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .service-jumbotron {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .video-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.7);
    }

    .title {
      z-index: 1;
      position: absolute;
      font-size: 5rem;
      font-weight: 900;
      text-transform: uppercase;
      color: white;
      opacity: 0.5;
    }

  }

  .service-text {
    padding: 50px;
  }
}


</style>
