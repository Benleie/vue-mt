<template>
  <div class="small">
      this is my search house
      <ul>
      	<li v-for="(item, id) in $store.state.City.list" :key="id"> {{ item }} </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'search',
  data() {
  	return {
  		list:[]
  	}
  },
  /*async mounted () {
  	let self = this;
  	let {status, data: {list}} = await axios.get('/city/list')
  	if(status === 200) {
  		self.list = list;
  	}
  }*/
  async asyncData () {
  	let {status, data: {list}} = await axios.get('http://localhost:3000/city/list')
  	if(status === 200) return { list }
  }
}
</script>
