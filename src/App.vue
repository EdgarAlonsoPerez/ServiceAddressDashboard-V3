<template>
  <Header/>
  <Content/>
  <!--Footer/-->
</template>

<script>
// import HelloWorldVue from "./components/HelloWorld.vue";
import Header from "./components/structure/Header.vue";
import Content from "./components/structure/Content.vue";
// import Footer from "./components/structure/Footer.vue";
// import Location from "./components/location/Location.vue";


export default {
  data(){
    return {
      text:"Primevue"
    }
  },
  name: "App",
  components: {
    Header,
    Content,
    // Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
