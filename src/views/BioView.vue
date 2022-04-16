<template>
  <div class="wrapper">
    <div class="bio-jumbotron">
      <img src="../assets/img/foto4.jpg" alt="">
      <div class="overlay"></div>
      <span class="title">{{ $t('nav.bio') }}</span>
    </div>
    <div class="bio-text">
      <div class="container">
        <div class="row">
          <div class="col-8 offset-2">
            <div v-html="$t('textBio')"></div>
            <div href="#" class="btn btn-outline-dark">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BioView',
  data() {
    return {
      activeLanguage : 0,

      

    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {

  .bio-jumbotron {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
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
      text-transform: uppercase;
      font-size: 5rem;
      font-weight: 900;
      color: white;
      opacity: 0.5;
    }
    
  }

  .bio-text {
    background-color: white;
    padding: 50px;

  }

}


</style>
