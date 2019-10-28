<template>
  <div id="app">
    <Header id="header"></Header>
    <main id="main">
        <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import Footer from '@/components/footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="less">
  @import "./assets/common.less";

  #app {
    display: grid;
    grid-template-columns: 12% auto 12%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "header header header"
      "main   main   main  "
      "footer footer footer";
    #header {
      grid-area: header;
    }
    #main {
      grid-area: main;
      margin-top: 60px;
      margin-bottom: 22px;
    }
    #footer {
      grid-area: footer;
    }
}
</style>
