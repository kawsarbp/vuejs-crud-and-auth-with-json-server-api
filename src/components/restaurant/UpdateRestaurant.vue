<template>
<div>
  <Header></Header>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6 border p-3 rounded">
        <h4 class="my-3 text-center text-info">Restaurant Update From</h4>
        <form action="" method="POST"  @submit.prevent="updateRestaurant" >
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
            <button type="submit" class="btn btn-info btn-sm">Update Resaurant</button>
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
  name:'UpdateRestaurant',
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
    async updateRestaurant(){
      const result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
        name:this.restaurant.name,
        contact:this.restaurant.contact,
        address:this.restaurant.address
      })
      if (result.status === 200){
        this.$router.push({name:'Home'})
      }
    }
  },
  async mounted() {
    const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id)
    this.restaurant = result.data
  }
}
</script>
<style scoped>

</style>
