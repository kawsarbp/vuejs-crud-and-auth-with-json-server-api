<template>
  <div class="">
    <br><br><br><br>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-5 border p-4 rounded">
          <h3 class="text-center text-primary">Sing Up Page</h3>
          <br>
          <form action="" method="POST" @submit.prevent="signUp">
            <div class="mb-2">
              <label for="name">Name</label>
              <input type="text" class="form-control" id="name" placeholder="Name" v-model="name" required="">
            </div>
            <div class="mb-2">
              <label for="email">E-mail</label>
              <input type="text" class="form-control" id="email" placeholder="E-mail" v-model="email" required="">
            </div>
            <div class="mb-2">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password" required="">
            </div>
            <div class="mb-2 text-end">
              <button type="submit" class="btn btn-primary btn-sm">Sign Up</button>
            </div>
            <div class="text-center"><router-link to="/sign-in">LOGIN PAGE</router-link></div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password
      })
      if (result.status === 201) {
        this.name = null
        this.email = null
        this.password = null

        localStorage.setItem("user-info",JSON.stringify(result.data))
        this.$router.push({name:"Home"})
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
