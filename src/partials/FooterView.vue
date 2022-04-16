<template>
  <footer>
      <div class="overlay"></div>
      <div class="container p-3 border-bottom border-light">
        <h1>Social</h1>
        <div>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
        </div>
        <div>
            <a href="#">

            </a>
        </div>
        <div>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
      </div>

  </footer>
</template>

<script>
export default {
    name: 'FooterView'
}
</script>

<style lang="scss" scoped>

footer {
    position: relative;
    width: 100%;
    height: 380px;
    background-image: url('https://dfd5gcc6b7vw5.cloudfront.net/assets/thenx-footer-24e7f3e5fe00928e95944891a14955366b4f613552ef83a87a0703bb8fe0464a.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.6);

    }
}

</style>