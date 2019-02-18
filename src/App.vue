<template>
  <div id="app">
    <img class="portrait" src="./assets/me.png">
    <HomePage :email="email" :emailRef="emailRef" :width="windowWidth"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  data() {
    return {
      user: 'michael',
      domain: 'whale.coffee',
    }
  },
  components: {
    HomePage
  },
  computed: {
    email() {
      return `${this.user}@${this.domain}`;
    },
    emailRef() {
      return `mailto:${this.user}@${this.domain}`;
    }
  },
};
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.portrait {
  max-height: 25em;
  margin-bottom: 1em;
}
</style>
