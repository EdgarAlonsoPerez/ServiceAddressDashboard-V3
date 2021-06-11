<template>
  <div id="service-address-dashboard">
    <!--<b-container fluid>-->
    <div class="container">
      <Header/>
      <CityMunicipality/> 
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-6">  <Locations/>  </div>
        
       <div class="col-sm-12 col-md-12 col-lg-6">  <Suites/>  </div>
      </div>
     
      <Footer/>
      
    <!-- </b-container> -->
    </div>
  </div>
</template>

<script>
import Header from './components/general/Header';
import Locations from './components/sad/Locations';
import CityMunicipality from './components/sad/filters/CityMunicipality';
import Suites from './components/sad/Suites';
import Footer from './components/general/Footer.vue';

export default {
  name: 'ServiceAddressDashboard',
  components: {
    Header,
    CityMunicipality,
    Locations,
    Suites,
    Footer
  }
}

</script>

<style>
#service-address-dashboard {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
