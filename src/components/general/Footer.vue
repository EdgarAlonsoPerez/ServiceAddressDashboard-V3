<template>
  <b-row>
    <div class="footer">
     {{ msg }}
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'This is the Footer'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.footer {
  bgcolor: #42b983;
}
</style>