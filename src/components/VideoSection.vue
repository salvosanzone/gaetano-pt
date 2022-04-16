<template>
  <section class="videoSection py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 box align-items-center">
          <div class="text leftText ">
            <p class="my-0" style="font-size: 1.25rem; font-weight: 300;">
              Get the app
            </p>
            <h1 style="font-size: 2.9rem; font-weight: 900;">From Beginner to Pro, trusted by 2 million people
            </h1>
            <div class="my-3">
              <a class="btn btn-outline-light" href="#">App Store</a>
            </div>
          </div>
        </div>
        <div class="col-md-6 box justify-content-center">
          <div class="container-video leftVideo mb-3">
            <img src="../assets/img/foto2.jpg" alt="foto2.jpg">
            <div class="overlay"></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 box">
          <div class="container-video rightVideo">
            <img src="../assets/img/foto3.jpg" alt="foto2.jpg">
            <div class="overlay"></div>
          </div>
        </div>
        <div class="col-md-6 box align-items-center">
          <div class="text rightText">
            <p class="my-0" style="font-size: 1.25rem; font-weight: 300;">
              For every level
            </p>
            <h1 style="font-size: 2.9rem; font-weight: 900;">
              Custom Programs & Technique guides for you
            </h1>
            <div class="my-3">
              <a class="btn btn-outline-light" href="#">App Store</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>
</template>

<script>

export default {
  name: 'VideoSection'
  
}


{
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll',() => {
    const leftText = document.querySelector('.leftText');
    const leftVideo = document.querySelector('.leftVideo');
    if(lastScrollY > 500) {
      leftText.style.opacity = '1';
      leftVideo.style.opacity = '1';
      leftText.style.transform = 'translateX(0px)';
      leftVideo.style.transform = 'translateX(0px)';
      leftText.style.transition = '1s ease-in-out';
      leftVideo.style.transition = '1s ease-in-out';
    } else {
      leftText.style.opacity = '0';
      leftVideo.style.opacity = '0';
      leftText.style.transform = 'translateX(-50px)';
    }
    lastScrollY = window.scrollY;
  })
}
{
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll',() => {
    const rightText = document.querySelector('.rightText');
    if(lastScrollY > 1100) {
      rightText.style.opacity = '1';
      // rightText.style.transform = 'translateX(0px)';
      rightText.style.transition = '1s ease-in-out';
    } else {
      rightText.style.opacity = '0';
      // rightText.style.transform = 'translateX(50px)';
    }
    lastScrollY = window.scrollY;
  })
}


</script>
<style lang="scss" scoped>
.videoSection {
  width: 100%;
  background-color: black;
  color: white;

  .box {
    display: flex;
    // justify-content: center;
  }

  .text {

    
  }

  .container-video {
    position: relative;
    width: 400px;
    height: 100%;
    border-radius: 10px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }

    .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(rgba(0, 0 , 0 , 0.3), black);
    }
  }
}

 @media screen and (max-width: 768px) {
   .box {
     justify-content: center;
   }
 }


</style>
