<template>
  <div>
    <b-form-select 
      v-model="selected"
      :options="options"
      :value-field="valueField"
      :text-field="textField"
     ></b-form-select>
    <!-- <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div> -->
  </div>
</template>

<script>
  export default {
    name:"CustomSelect",
    props:{
      options:{
        type: Array,
        default:[{ value: null, text: 'Please select some item' }]
      },
      valueField:{
        type:String
      },
      textField:{
        type:String
      }
    },
    data() {
      return {
        selected: null
      }
    },
    mounted() {
     
    }
  }
</script>