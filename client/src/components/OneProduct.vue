<template>
  <div class="container" >
    <div class="form-box" >
      <div class="left" >
        <img :src="$store.state.oneProduct.image"
         style="height: 10rem;" alt="">
        <!-- <p>Title: {{ $store.state.oneProduct.name }}</p> -->
        <div class="price-stock-box">
        <p>Price: {{ $store.state.oneProduct.price }}</p>
        <p>Dimension: {{ $store.state.oneProduct.dimension }}</p>
        </div>
      </div>
      <div class="right">
      <form @submit.prevent="updateProduct">
        <h2>{{ $store.state.oneProduct.product_name }}</h2>
        <input type="text" class="field" v-model="oneProduct.product_name"
          name="" id=""
        disabled>
        <input type="text" class="field" v-model="oneProduct.image" name=""
          id="" placeholder="Update image"
        />
          <!-- placeholder="Update the image url for cover" -->
        <input type="number" class="field" v-model="oneProduct.price" name=""
          id=""
         placeholder="Update price" required
        />
        <input type="text" class="field" v-model="oneProduct.colours" name="" id=""
        placeholder="Set ur Colour" required
        />
        <input type="text" class="field" v-model="oneProduct.dimension" name="" id=""
        placeholder="Update stock" required
        />
        <div class="btn-wrapper">
          <button id="btn1" class="btn">Update</button>
        </div>
      </form>
          <button @click.prevent="deleteProduct" id="btn2" class="btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OneProduct',
  // props: ['product'],
  data () {
    return {
      input: {
        product_name: '',
        image: '',
        price: '',
        dimension: '',
        colours: '',
        material: ''
      }
    }
  },
  methods: {
    getOneProduct () {
      const productId = this.$route.params.product_id
      this.$store.dispatch('getOne', productId)
      // this.imageUrl = this.$store.state.product.oneProduct.image_url
    },
    updateProduct () {
      const dataProduct = {
        product_name: this.oneProduct.product_name,
        image: this.oneProduct.image,
        price: this.oneProduct.price,
        material: this.oneProduct.material,
        id: this.$route.params.product_id,
        dimension: this.oneProduct.dimension,
        colours: this.oneProduct.colours
      }
      this.$store.dispatch('updateProduct', dataProduct)
    },
    deleteProduct () {
      console.log('ONEPRO')
      const deleteId = this.$route.params.product_id
      this.$store.dispatch('deleteProduct', deleteId)
    }
  },

  computed: {
    oneProduct () {
      return this.$store.state.oneProduct
    }
  },
  mounted () {
    this.getOneProduct()
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 100px;
  font-family: Clarkson;
}
.container:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  /* background: url() no-repeat center; */
  filter: blur(50px);
  z-index: -1;
}

.form-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 19px 5px rgba(0,0,0,0.19);
}

.left {
  /* background: url('../assets/sf-wp5.jpg')no-repeat center; */
  background-size: cover;
  height: 90%;
  margin: 10px;
  padding: 25px 40px;
}

.price-stock-box {
  margin: 10px 0 0 0px;
}

.left p {
  margin: 7px 0 0 0;
}

.right {
  padding: 25px 40px;
}

h2 {
  position: relative;
  padding: 0 0 10px;
  margin-bottom: 10px;
}

h2:after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: #2ecc71;
}

.field {
  width: 100%;
  border: 2px solid rgba(0,0,0,0);
  outline: none;
  background-color: rgba(230, 230, 230, 0.6);
  padding: 0.5rem 1rem;
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: .3s;
}

.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

textarea {
  min-height: 150px;
}

/* .btn-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
} */
  /* justify-content: space-between; */

#btn1 {
  width: 30%;
  padding: 0.4rem 0.5rem;
  background-color: #2ecc71;
  color: #fff;
  font-size: 0.9rem;
  border: #fff;
  outline: none;
  cursor: pointer;
  transition: .3s;
}

#btn1:hover {
  background-color: #27ae60;
}

#btn2 {
  width: 30%;
  padding: 0.4rem 0.5rem;
  background-color: #cc402e;
  color: #fff;
  font-size: 0.9rem;
  border: #fff;
  outline: none;
  cursor: pointer;
  transition: .3s;
  margin: 10px;
}

#btn2:hover {
  background-color: #ae3b27;
}

.field:focus {
  border: 2px solid rgba(30,85,250,0.47);
  background: #fff;
}

@media screen and (max-width: 880px) {
  .form-box {
    grid-template-columns: 1fr;
  }
  .left {
    height: 200px;
  }
}
</style>
