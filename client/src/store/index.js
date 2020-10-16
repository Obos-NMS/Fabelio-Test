import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../config/axios'
import router from '../router'
import { Toast } from '../config/toaster'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    role: localStorage.getItem('role'),
    name: localStorage.getItem('user'),
    allProduct: [],
    oneProduct: [],
    updatedProduct: '',
    landing: false
  },
  mutations: {
    changeLogin (state, status) {
      state.isLogin = status
    },
    setRole (state, role) {
      state.role = role
    },
    setName (state, name) {
      state.name = name
    },
    setAllProduct (state, products) {
      state.allProduct = products
    },
    setOneProduct (state, oneProduct) {
      state.oneProduct = oneProduct
    },
    setLanding (state, landing) {
      state.landing = landing
    },
    setUpdatedProduct (state, updatedProduct) {
      state.updatedProduct = updatedProduct
    }

  },
  actions: {
    login (context, form) {
      console.log(form, 'HIT')
      const data = {
        email: form.email,
        password: form.password
      }
      axios
        .post('/login', data)
        .then(({ data }) => {
          console.log(data.access_token)
          localStorage.setItem('access_token', data.access_token)
          localStorage.setItem('role', data.role)
          localStorage.setItem('user', data.name)
          console.log(context)
          context.commit('changeLogin', true)
          context.commit('setRole', data.role)
          context.commit('setName', data.name)
          console.log(this.state.isLogin, this.state.role, this.state.name, '<<<<<<<')

          if (data.role === 'admin' || data.role === 'security') {
            router.push('/')

            Toast.fire({
              icon: 'success',
              title: `You have sign in successfully. Welcome Test-Fabelio, ${this.state.name}!`
            })
          }
        })
    },
    getProduct (context) {
      axios
        .get('/products', {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          context.commit('setAllProduct', data)
          context.commit('setLanding', true)
        })
    },
    addProduct (context, input) {
      const data = {
        product_name: input.product_name,
        image: input.image,
        price: input.price,
        dimension: input.dimension,
        colours: input.colours,
        material: input.material
      }
      axios
        .post('/products', data, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log(data)
          if (data) {
            context.commit('setUpdatedProduct', data.product_name)
            router.push('/products')
            // console.log(this.state.updatedProduct)
            Toast.fire({
              icon: 'success',
              title: `You have added "${this.state.updatedProduct}"`
            })
          }
        })
    },
    getOne (context, id) {
      if (this.state.role === 'admin') {
        console.log(id, 'GET')
        axios
          .get(`/products/${id}`, {
            headers: {
              access_token: localStorage.access_token
            }
          })
          .then(({ data }) => {
            console.log(data)
            context.commit('setOneProduct', data)
          })
      } else {
        router.push('/products')
      }
    },
    updateProduct (context, update) {
      const id = update.id
      const data = {
        product_name: update.name,
        image: update.image,
        price: update.price,
        dimension: update.stock,
        colours: update.colours,
        material: update.material
      }
      if (!data.image_url) {
        data.image_url = this.state.oneProduct.image
      }
      if (!data.name) {
        data.name = this.state.oneProduct.product_name
      }
      axios
        .put(`/products/${id}`, data, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          if (data) {
            router.push('/products')
            context.commit('setUpdatedProduct', data.product_name)
            Toast.fire({
              icon: 'success',
              title: `You have updated "${this.state.updatedProduct}"`
            })
          }
        })
    },
    deleteProduct (context, id) {
      console.log('HIT')
      axios
        .delete(`/products/${id}`, {
          headers: {
            access_token: localStorage.access_token
          }
        })
        .then(({ data }) => {
          console.log('deleted')
          router.push('/products')
          Toast.fire({
            icon: 'success',
            title: 'You have deleted successfully!'
          })
        })
    }
  },
  modules: {
  }
})
