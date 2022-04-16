<template>
  <div class="app">
    <nav>
      <div class="logo">
        <img src="https://dfd5gcc6b7vw5.cloudfront.net/assets/logo-8a7bb8b7de46c1b7163081c1d735c55860cf8d83689ad0a98a1865826a82b7cc.svg" alt="logo">
      </div>
      <div class="link">
        <router-link :to="`/${$i18n.locale}`">{{ $t('nav.home') }}</router-link> |
        <router-link class="mx-1" :to="`/${$i18n.locale}/service`">{{ $t('nav.service') }}</router-link>
        <router-link :to="`/${$i18n.locale}/bio`">{{ $t('nav.bio') }}</router-link>
          <i class="fa-solid fa-globe ms-3 me-1"></i>
          <i  
            @click="menuLanguages" 
            class="fa-solid fa-caret-down arrow"
            :class="{ active: caretActive }"
          >
            <div 
              :class="{ active: menuLanguagesActive }" class="languages-menu"
            >
              <ul>
                <li>
                  <a 
                    href=""
                    @click.prevent="setLocale('en')"
                  >
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" alt="english flag">
                    </span>
                    <span>
                      en
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href=""
                    @click.prevent="setLocale('it')"
                  >
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" alt="italian flag">
                    </span>
                    it
                  </a>
                </li>
                <li>
                  <a 
                    href=""
                    @click.prevent="setLocale('es')"
                  >
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="spanish flag">
                    </span>
                    es
                  </a>
                </li>
              </ul>
            </div>    
          </i>
      </div>
      <div class="btn-hamburger-menu">
        <span @click="isActive = !isActive">&#9776;</span>
        <i class="fa-solid fa-globe ms-3 me-1 fs-5"></i>
          <i  
            @click="menuLanguages" 
            class="fa-solid fa-caret-down arrow fs-5"
            :class="{ active: caretActive }"
          >
            <div 
              :class="{ active: menuLanguagesActive }" class="languages-menu"
            >
              <ul>
                <li>
                  <a 
                    href=""
                    @click.prevent="setLocale('en')"
                  >
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Flag_of_the_United_Kingdom.svg" alt="english flag">
                    </span>
                    <span style="width: font-size: 10px;">
                      en
                    </span>
                  </a>
                </li>
                <li>
                  <a 
                    href=""
                    @click.prevent="setLocale('it')"
                  >
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" alt="italian flag">
                    </span>
                    it
                  </a>
                </li>
                <li>
                  <a 
                    href=""
                    @click.prevent="setLocale('es')"
                  >
                    <span>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="spanish flag">
                    </span>
                    es
                  </a>
                </li>
              </ul>
            </div>    
          </i>
      </div>
      <div :class="{ active: isActive  }" class="hamburger-menu">
      <div class="link-hamburger-menu">
        <span @click="isActive = false">
          <router-link :to="`/${$i18n.locale}`">{{ $t('nav.home') }}</router-link>
        </span>
        <span @click="isActive = false">
          <router-link class="mx-1" :to="`/${$i18n.locale}/service`">{{ $t('nav.service') }}</router-link>
        </span>
        <span @click="isActive = false">
          <router-link :to="`/${$i18n.locale}/bio`">{{ $t('nav.bio') }}</router-link>  
        </span>
      </div>  
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isActive: false,
      menuLanguagesActive: false,
      caretActive: false
    }
  },
  components: {
    
  },
  
  methods: {

    menuLanguages() {
      this.menuLanguagesActive = !this.menuLanguagesActive;
      this.caretActive = !this.caretActive;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
    },
    inters() {
      console.log('entered');
    }

  }
}

</script>
<style lang="scss">
@import './assets/style/general.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

nav {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 50px;
  background-color: black;
  

  .logo {
    width: 34px;
    height: 34px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .globe {
    color: white;
  }

  .arrow {
    position: relative;
    border: none;
    cursor: pointer;

    &.active {
      border: 1px solid rgba(255,255,255,0.65);
      padding: 2px;
    }

    .languages-menu {
      display: none;
      position: absolute;
      top: 30px;
      right: 0;
      z-index: 1;
      width: 145px;
      height: 200px;
      background-color: rgba($color: #000000, $alpha: 0.8);
      border: 1px solid rgba(255,255,255,0.65);
      border-radius: 10px 0 10px 10px;
      box-shadow: 0 0 5px rgba($color: white, $alpha: 0.8);
      color: rgb(14, 12, 12);

      &.active {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      ul {
        width: 100%;

        li {
          list-style: none;
          padding: 5px 0;

          a {
            text-decoration: none;
            color: rgba(255,255,255,0.65);

            &:hover {
              color: white;
            }

          }

          img {
            width: 40px;
            margin-right: 15px;
          }
          
        }
      }
    }
  }

  .link, .link-hamburger-menu {
    display: flex;
    align-items: baseline;
    a {
      text-decoration: none;
      text-transform: uppercase;
      color: rgba(255,255,255,0.65);

      &:hover {
        color: white;
        cursor: pointer;
      }
    }

  }

  .link-hamburger-menu {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    span {
      font-size: 50px;
    }
  }

  .btn-hamburger-menu {
    display: none;
    font-size: 23px;
    color: white;

    &:hover {
      cursor: pointer;
    }
  }
  .hamburger-menu {
    position: fixed;
    top: 70px;
    left: -100%;
    right: 100%;
    bottom: 0;
    transition: 0.9s;
    background-color: rgb(14, 12, 12);
    color: white;

    &.active {
      left: 0;
      right: 0;
    }

  }

  @media screen and (max-width: 995px) {
    .link {
      display: none;
    }

    .btn-hamburger-menu {
      display: block;

      .languages-menu {
        width: 150px;

        a {
          font-size: 15px;
        }

      }
    }
    
  }

  @media screen and (min-width: 995px) {
    .hamburger-menu {
      display: none;
    }
  }
}


</style>
