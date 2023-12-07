<template>
  <div>
    <br><br><br><br>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 border p-4 rounded">
          <h3 class="text-center text-primary">Sing In Page</h3>
          <br>
          <form action="" method="POST" @submit.prevent="signIn">
            <div class="mb-2">
              <label for="email">E-mail</label>
              <input type="text" class="form-control" id="email" placeholder="E-mail" v-model="email" required="" >
            </div>
            <div class="mb-2">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required="" >
            </div>
            <div class="mb-2 text-end">
              <button type="submit"  class="btn btn-primary btn-sm">Sign In</button>
            </div>
            <div class="text-center">
              <router-link to="/sign-up">REGISTER PAGE</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email:'',
      password:''
    }
  },
  methods: {
    async signIn() {
      let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
      if (result.status === 200 && result.data.length > 0){
        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:'Home'})
      }
    }
  },
  mounted() {
    let user = localStorage.getItem("user-info")
    if (user){
      this.$router.push({name:'Home'})
    }
  }
}
</script>
<style scoped>

</style>
