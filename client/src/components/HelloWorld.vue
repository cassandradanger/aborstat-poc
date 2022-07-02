<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      HELLOO!!!!!! click here for more info
    </p>
    <button @click="getInfo">click me</button>
    <div v-if="loading.value">loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return{
      loading: {},
      error: {},
      data: {},
    }
  },
  methods: {
    getInfo() {
      console.log("hi");
      this.fetchData();
    },
    async fetchData() {
    let res = await axios.get("api/info");
    console.log('res', res);
    this.data = res.data;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
