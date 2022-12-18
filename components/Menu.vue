<template>
  <header id="menu" class="menu-g">
    <Nuxt-link to="/"><img src="~assets/logo.svg" alt="Logo de Lucas" /></Nuxt-link>
    <div class="menubureau">
      <Nuxt-link to="/projets">Projets</Nuxt-link>
      <Nuxt-link to="/articles">Articles</Nuxt-link>
      <Nuxt-link to="/a-propos">À propos</Nuxt-link>
    </div>
    <div class="menutap" @click="menu()" aria-label="Ouvrir le menu"><img src="~assets/menu.svg" alt="Menu" /></div>
    <div class="menumobile" v-show="open">
      <div class="mobilehead">
        <Nuxt-link @click="menu()" to="/"><img src="~assets/logob.svg" alt="Logo de Lucas" /></Nuxt-link>
        <div class="menutap" @click="menu()" aria-label="Fermer le menu"><img src="~assets/fermer.svg" alt="Fermer" /></div>
      </div>
      <div class="lienmobile">
        <Nuxt-link to="/projets" @click="menu()">Projets</Nuxt-link>
        <Nuxt-link to="/articles" @click="menu()">Articles</Nuxt-link>
        <Nuxt-link to="/a-propos" @click="menu()">À propos</Nuxt-link>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  data: () => ({
    open: false,
  }),
  methods: {
    menu() {
      this.open = !this.open;
    },
  },
  watch: {
    '$route'() {
      this.open = false
    }
  }
}
</script>


<style>
.menu-g div a {
  padding: 8px;
  margin: 12px;
  position: relative;
}


.menubureau a.router-link-active::after {
  content: '';
  display: flex;
  width: 16px;
  height: 4px;
  border-radius: 5px;
  background-color: #4832CF;
  position: absolute;
  bottom: -4px;
  left: calc(61% - 16px);
}

 .lienmobile a.router-link-active::after {
  content: '';
  display: flex;
  width: 15px;
  height: 4px;
  border-radius: 5px;
  background-color: #4832CF;
  position: absolute;
  bottom: 16px;
  left: -25px;
}

.menu-g {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 14px;
  padding-top: 29px;
}

.menu-g img {
  width: 50px;
  padding: 5px;
}

.menu-g a {
  border-bottom: 1px #00000000 solid;
  transition: 0.3s;
}

.presentation .menu-g a,
.banniere .menu-g a,
.fond-sombre .menu-g a {
  color: #fafafa;
}

.presentation header img,
.banniere header img,
.fond-sombre img {
  filter: invert(100%);
}

header {
  z-index: 2300;
  max-width: 1200px;
  display: block;
  margin: 0 auto;
}

.menumobile {
  background-color: #0B051E;
  color: white;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.presentation header .menumobile img,
.banniere header .menumobile img {
  filter: invert(0%);
}

.menutap {
  display: none;
}

.menumobile a {
  font-size: x-large;
  color: white;
}

.mobilehead {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 18px 12px 10px 0px;
}

.lienmobile {
  display: flex;
  flex-direction: column;
  margin: 25px auto;
  width: fit-content;
}

/* Adaptabilité */
@media (max-width: 700px) {

  .menu-g a {
    display: inline-block;
  }

  .menu-g div a {
    padding: 5px;
    margin: 6px 9px;
  }

  .menubureau {
    display: none;
  }

  .menutap {
    display: block;
  }

  .menu-g {
    margin-bottom: 0px;
    margin-top: 0px;
  }
}
</style>
