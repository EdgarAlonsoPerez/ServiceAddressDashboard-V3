<template>
 
      <div class="suites-list">
        <div class="card">
        
          <div class="card-header">
            <h6 class="card-title">{{ title }}</h6>
          </div>
          
          <div class="card-body">
            <div class="row">
              <div class="col">
            
              </div>
            
              <div class="col">
              
              </div>
            </div>
          </div>
          
          <div class="card-footer">
          
          </div>
          
        </div>
      </div>
</template>

<script>
export default {
  name: 'Suites',
  components:{
   
  },
  data (){
    return {
      title:"Suites List",
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