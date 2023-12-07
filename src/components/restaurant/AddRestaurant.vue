<template>
<div>
  <Header></Header>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 border p-3 rounded">
        <h4 class="my-3 text-center text-info">Restaurant Add From</h4>
        <form action="" method="POST"  @submit.prevent="addRestaurant" >
          <div class="mb-2">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Name"  required="" v-model="restaurant.name">
          </div>

          <div class="mb-2">
            <label for="contact">Contact</label>
            <input type="text" class="form-control" id="contact" placeholder="Contact"  required="" v-model="restaurant.contact">
          </div>

          <div class="mb-2">
            <label for="Address">Address</label>
            <input type="text" class="form-control" id="Address" placeholder="Address"  required="" v-model="restaurant.address">
          </div>

          <div class="text-end">
            <button type="submit" class="btn btn-info btn-sm">Add Resaurant</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import Header from "@/components/inc/Header.vue";
import axios from "axios";
export default {
  name:'AddRestaurant',
  data(){
    return{
      restaurant:{
        name:'',
        contact:'',
        address:'',
      }
    }
  },
  components:{
    Header
  },
  methods:{
    async addRestaurant(){
      let result = await axios.post("http://localhost:3000/restaurant",{
        name: this.restaurant.name,
        contact: this.restaurant.contact,
        address: this.restaurant.address,
      })
      if (result.status === 201){
        this.name = null
        this.contact = null
        this.address = null
        this.$router.push({name:'Home'})
      }

    }
  }
}
</script>
<style scoped>

</style>
