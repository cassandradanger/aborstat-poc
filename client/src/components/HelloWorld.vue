<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      HELLOO!!!!!!
    </p>
    <button @click="getInfo">click me</button>
    <div v-if="loading.value">loading...</div>
    <div v-else>{{ data }}</div>
  </div>
</template>

<script>
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
    fetchData() {
      console.log('hello');
      this.loading.value = true;
      // I prefer to use fetch
      // you can use use axios as an alternative
      return fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'get',
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(res => {
        console.log('res', res);
        // a non-200 response code
        if (!res.ok) {
          // create error instance with HTTP status text
          const error = new Error(res.statusText);
          error.json = res.json();
          throw error;
        }
        else {
          this.data = res.body;
        }
      })
      .then(() => {
        this.loading.value = false;
      });
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
