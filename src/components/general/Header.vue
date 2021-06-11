<template>
  <b-row>
    <b-col>
      <b-row class="text-md-center">
        <div class="h3"> 
          {{ title }}
          <b-icon icon="star-fill" animation="fade" font-scale="1"></b-icon>
         </div>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>

  export default {
    name: 'Header',
    data (){
      return {
       title : "Service Address Dashboard"
      }
    }
  }

</script>

<style>

</style>