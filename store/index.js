import Vue from 'vue'
import Vuex from 'vuex'
import City from './modules/city'
import Navbar from './modules/navbar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
	modules: {
		City,
		Navbar
	},
	actions:{		}
})

export default store