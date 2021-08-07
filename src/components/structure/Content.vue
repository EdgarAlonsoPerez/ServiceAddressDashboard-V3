<template>
    <div class="p-grid">
        <div class="p-md-12">
            <Location></Location>
        </div>
        <Divider/>

        <div class="p-md-6">
            <LocationPanel/>
        </div>
        
        <div class="p-md-6">
            <SuitePanel/>
        </div>
        
  </div>
</template>

<script>
import Location from '../location/Location.vue';
import LocationPanel from '../service_addresses/LocationPanel.vue';
import SuitePanel from '../service_addresses/SuitePanel.vue';
import Divider from 'primevue/divider';


export default {
  name: "Content",
  props: {
    msg: String,
  },
  components: {
      Location,
      LocationPanel,
      SuitePanel,
      Divider
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
