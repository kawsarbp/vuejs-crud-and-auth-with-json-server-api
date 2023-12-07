<template>
<div>
  <Header></Header>
  <h2 class="my-3 text-center text-info">Hello {{ name }}, Welcome to our Restaurant </h2>




  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">

        <table class="table-hover table table-bordered">
          <tr>
            <th>Sn</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Action</th>
          </tr>

          <tr v-for="(item, index) in restaurants" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.contact }}</td>
            <td>{{ item.address }}</td>
            <td>
              <router-link :to="'/update-restaurant/'+item.id">Update</router-link>
              <button class="btn" type="button" @click="deleteData(item.id)">Delete</button>
            </td>
          </tr>



        </table>

      </div>
    </div>
  </div>


</div>
</template>

<script>
import Header from "@/components/inc/Header.vue";
import axios from "axios";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Home',
  data(){
    return{
      name:'',
      restaurants:[]
    }
  },
  components:{
    Header
  },
  methods:{
    async getData(){
      let result = await axios.get("http://localhost:3000/restaurant")
      this.restaurants = result.data
    },
    //delete data
    async deleteData(id){
      let result = await axios.delete("http://localhost:3000/restaurant/"+id)
      if (result.status === 200){
        this.$router.push({name:'Home'})
        this.getData()
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info")
    this.name = JSON.parse(user)[0].name
    if (!user){
      this.$router.push({name:'SignIn'})
    }
    //get data
    this.getData()
  }
}
</script>
<style scoped>

</style>
