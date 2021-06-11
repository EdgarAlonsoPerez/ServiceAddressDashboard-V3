<template>
 
      <div class="locations-list">
        <div class="card">
        
          <div class="card card-header-primary">
            <h6>{{ title }}</h6>
          </div>
          
          <div class="card card-body">
            <div class="row">
              <div class="col">
            
              </div>
            
              <div class="col">
              
              </div>
            </div>
          </div>
          
          <div class="card card-footer">
          
          </div>
          
        </div>
      </div>
</template>

<script>
export default {
  name: 'Locations',
  components:{
   
  },
  data (){
    return {
      title:"Locations List",
      msg:"",
    }
  },
  async mounted() {
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>