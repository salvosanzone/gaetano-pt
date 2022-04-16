<template>
  <section class="shop-section">
    <div class="my-5">
      <h1>Shop</h1>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4 ">
            <div class="box">
              <img src="https://dfd5gcc6b7vw5.cloudfront.net/assets/equipments/rings-6aad838348a180ba305a9e299e9b0c8c959be64778998782d52fe5375b3edc7a.jpg" alt="">
              <div class="overlay">
              <div class="text">
                <p>Gymnastics Rings</p>  
                <p>$49.99</p>  
              </div>  
              </div>
            </div>
          </div>
          <div class="col-sm-4 ">
            <div class="box">
              <img src="https://dfd5gcc6b7vw5.cloudfront.net/assets/equipments/paralettes-fafd7be0d551a1b8cf12ba1a875372fad8ec0c8c8fbb66182c46aef34332bc0f.jpg" alt="">
              <div class="overlay">
              <div class="text">
                <p>Gymnastics Rings</p>  
                <p>$49.99</p>  
              </div>  
              </div>
            </div>
          </div>
          <div class="col-sm-4 ">
            <div class="box">
              <img src="https://dfd5gcc6b7vw5.cloudfront.net/assets/equipments/bands-42412e7f634b9e31f039130383bc4ddf9a38e35adf61d390e44fe318cf7eadf3.jpg" alt="">
              <div class="overlay">
              <div class="text">
                <p>Gymnastics Rings</p>  
                <p>$49.99</p>  
              </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="my-5">
      <a class="btn btn-outline-dark" href="#">Shop</a>
    </div>

  </section>
</template>

<script>
export default {
  name: 'ShopSection'
}
</script>

<style lang="scss" scoped>
.shop-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .box {
    position: relative;


    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #000000, $alpha: 0.4);
      border-radius: 10px;

    }

    .text {
      position: absolute;
      left: 10px;
      bottom: 10px;
      color: white;
    }
  }

  

}

@media screen and (max-width: 576px) {
  .box {
    height: 250px;
    margin: 5px 0;
  }
}

</style>