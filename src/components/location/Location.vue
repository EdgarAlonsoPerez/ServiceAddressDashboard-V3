<template>
    <div class="p-md-10 p-jc-center">
        <Panel :toggleable="true">
            <template #header>
                Select your City
            </template>
            <div class="p-fluid p-grid">
                <div class="p-field p-col-6 p-md-6">
                    <span class="p-float-label">
                        <AutoComplete id="city-autocomplete" @item-select="updateMunicipalities($event)" v-model="selectedCity" :suggestions="filteredCities" @complete="searchCity($event)" field="name" />
                        <label for="city-autocomplete">InputText</label>
                    </span>
                </div>
                <div class="p-field p-col-6 p-md-6">
                    <span class="p-float-label">
                        <Dropdown id="sel-municipality"  @change="setMunicipality" v-model="selectedMunicipality" :options="filteredMunicipalities" optionLabel="name" />
                        <label for="sel-municipality">Municipality</label>
                    </span>
                </div>
            </div>
        </Panel>
    </div>
</template>

<script>
import Panel from 'primevue/panel';
import AutoComplete from 'primevue/autocomplete';
import Dropdown from 'primevue/dropdown';
import LocationService from "../../services/LocationService.js"

export default {
  name: "Location",
  props: {},
  data(){
    return {
        selectedCity:null,
        filteredCities:null,
        filteredMunicipalities:[],
        selectedMunicipality:null
    }
  },
  LocationService:null,
  created(){
      this.LocationService = new LocationService()
      this.LocationService.getCities();
  },
  components:{
      AutoComplete,
      Panel,
      Dropdown
  },
  methods:{
    searchLocation(event){
        this.filteredLocations = this.LocationService.searchLocationByCity(event.query)
    },
    searchCity(event){
        this.filteredCities =  this.LocationService.searchCity(event.query)
        console.log(this.filteredCities);
    },
    updateMunicipalities(event){
        this.filteredMunicipalities =  event.value.municipalities
        if(this.filteredMunicipalities.length == 0){
            this.$emit('municipality-has-change', {'city':this.selectedCity,'municipality':this.selectedMunicipality})
        }
    },
    setMunicipality(){
        this.$emit('municipality-has-change', {'city':this.selectedCity,'municipality':this.selectedMunicipality})
    },
}
}
</script>


<style scoped>

</style>
