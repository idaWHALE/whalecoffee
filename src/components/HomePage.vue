<template>
  <div class="hello">
    <p class="title">Michael Whalen</p>
    <div class="section has-text-dark">
      <span class="far fa-whale whaleicon icon"></span>
      <span class="fas fa-mug-hot coffeeicon icon"></span>
    </div>
    <p class="subtitle skilllist">Main: Python, Java, Node.js</p>
    <p class="subtitle skilllist">Frameworks: Vue.js, Play, Express.js</p>
    <p class="subtitle skilllist">Databases: Mongodb, MySQL, Redis</p>
    <p class="subtitle skilllist">Others: C, C++, (Just getting started with Go)</p>
    <p class="subtitle skilllist">AWS: EC2, S3, API Gateway, Lambda, CloudFront</p>
    <div class="section email">
      <b-tooltip :label="email"
            position="is-right"
            animated>
        <a v-if="!showEmail" @click="enableEmail()" class="button is-warning is-medium">Email</a>
        <a v-if="showEmail" :href="emailRef">{{ email }}</a>
      </b-tooltip>
    </div>  
    
    <div class="tile is-ancestor tile-container">
      <div class="tile is-parent">
        <article class="tile is-child notification is-light  has-text-dark is-one-fifth article box">
          <span class="fab fa-github icons githubicon article"></span>
          <a href="https://github.com/idaWHALE" class="title">GitHub</a>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-dark is-one-fifth article box">
          <span class="fab fa-linkedin icons githubicon article"></span>
          <a href="https://www.linkedin.com/in/whalen-michael" class="title">LinkedIn</a>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor tile-container">
      <div class="tile is-parent">
        <article class="tile is-child notification has-background-primary has-text-light is-one-forth article box">
          <span class="fas fa-monkey icons githubicon article"></span>
          <a href="https://indexmonkey.com" class="title">IndexMonkey</a>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification has-background-light has-text-dark is-one-forth article box">
          <span class="far fa-chart-bar icons githubicon article"></span>
          <a href="https://edgeanalysis.co" class="title">Edge Analysis</a>
        </article>
      </div>
    </div>
    
    <div class="ttabs">
      <template class="ttabs">
        <b-tabs position="is-centered">
            <b-tab-item label="IndexMonkey" icon="fas fa-monkey">
              <section class="section projects is-large">
                <div class="container">
                  <h1 class="title">IndexMoney</h1>
                  <h2 class="subtitle">
                    <a href="https://indexmonkey.com">IndexMonkey</a> is a cryptocurrency index trading tool. 
                    Users maintain complete control of their funds, balance remaining in their accounts.
                    Users can set their own parameters to track the index that they want.
                  </h2>
                  <h2 class="subtitle">
                    <a>Backend:</a> Trading is handled with a multithreaded <strong>Python</strong> <i class="fab fa-python"></i> program. <strong>Mongodb</strong> and <strong>Redis</strong>
                    are used for database and value store. I have started looking into and using <strong>Go</strong> for some of the backend services.
                  </h2>
                  <h2 class="subtitle">
                    <a>Frontend:</a> <strong>Vue.js</strong> <i class="fab fa-vuejs"></i> UI with <strong>Express.js</strong> <i class="fab fa-node-js"></i> API. Had originally build API with AWS API Gateway and Lambda. API is hosted with Heroku
                    and UI in AWS CloudFront <i class="fab fa-aws"></i>.
                  </h2>
                  <!-- <nav class="level is-mobile">
                    <div class="level-item has-text-centered">
                      <i class="fab fa-python"></i>
                    </div>
                    <div class="level-item has-text-centered">
                      <i class="fab fa-vuejs"></i>
                    </div>
                    <div class="level-item has-text-centered">
                      <i class="fab fa-node-js"></i>
                    </div>
                    <div class="level-item has-text-centered">
                      <i class="fab fa-aws"></i>
                    </div>
                  </nav> -->
                </div>
              </section>
            </b-tab-item>
            <b-tab-item label="Edge Analysis" icon="far fa-chart-bar">
              <section class="section projects is-large">
                <div class="container">
                  <h1 class="title">Edge Analysiis</h1>
                  <h2 class="subtitle">
                    <a href="https://edgeanalysis.co">Edge Analysis</a> is a community centered around blockchain
                    education and information. Developed Python <i class="fab fa-python"></i> chat bots and trading indicators for use on our different 
                    community platforms <i class="fab fa-discord"></i> <i class="fab fa-telegram-plane"></i>.
                  </h2>
                  <!-- <nav class="level is-mobile">
                    <div class="level-item has-text-centered">
                      <i class="fab fa-python"></i>
                    </div>
                    <div class="level-item has-text-centered">
                      <i class="fab fa-discord"></i>
                    </div>
                    <div class="level-item has-text-centered">
                      <i class="fab fa-telegram-plane"></i>
                    </div>
                    <div class="level-item has-text-centered">
                      <i class="fab fa-aws"></i>
                    </div>
                  </nav> -->
                </div>
              </section>
            </b-tab-item>
            <b-tab-item label="This Website" icon="far fa-whale fas fa-mug-hot">
              <section class="section projects is-large">
                <div class="container">
                  <h1 class="title">This Website</h1>
                  <h2 class="subtitle">
                    This website is a <strong>Vue.js</strong> <i class="fab fa-vuejs"></i> static site hosted with  <i class="fab fa-aws"></i><strong> S3 </strong>.
                  </h2>
                  <h2 class="subtitle">
                    Thanks to the great <a href="https://buefy.org/">Buefy</a> (and <a href="https://bulma.io/">Bulma</a>) CSS frameworks for some amazingly smooth CSS wizardry.
                  </h2>
                </div>
              </section>
            </b-tab-item>
        </b-tabs>
      </template>
    </div>

    <section class="section">
      <div class="container">
        <h1 class="title">I <i style="color:#00C853" class="fas fa-heart"></i> THE OUTDOORS</h1>
        <div class="columns">
          <div class="column">
            <img class="bd-notification is-info xph" src="../assets/scuba.jpeg">
            <img class="bd-notification is-info xph" src="../assets/hiking.jpg">
          </div>
          <div class="column">
            <img class="bd-notification is-info xph" src="../assets/bend.jpeg">
            <img class="bd-notification is-info xph" src="../assets/road.jpg">
          </div>
          <div class="column">
            <img class="bd-notification is-info xph" src="../assets/sunset.jpg">
            <img class="bd-notification is-info xph" src="../assets/glacier.jpg">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Whale Coffee',
  props: {
    email: String,
    emailRef: String
  },
  data() {
    return {
      showEmail: false
    }
  },
  methods: {
    enableEmail() {
      this.showEmail = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  i {
    margin-left: .25em;
    margin-right: .25em;
  }

  .icon {
    vertical-align: middle;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .15em
  }
  .whaleicon {
    font-size: 2.5em;
    margin-right: .5em;
  }
  .coffeeicon {
    font-size: 2em;
  }
  .githubicon {
    font-size: 2.2em;
    padding-right: .3em;
  }
  .section {
    padding: .3em;
    padding-bottom: .5em;
  }
  .tile-container {
    max-width: 800px;
    margin:0 auto;
  }
  .ttabs {
    margin-bottom: 2em;
    margin-top: 3em;
  }
  .iconcontainer {
    width: 3em;
  }
  .subtitle {
    max-width: 70%;
    margin: 0 auto;
    margin-top: 1em;
  }
  .level {
    margin: 1em;
    font-size: 3em;
  }
  .projects {
    margin-top: 1.5em;
  }
  .skilllist {
    margin-top: 0em;
  }
  .email {
    margin-top: 1em;
  }
  .xph {
    /* max-width: 500px; */
    max-height: 288px;
  }
</style>
