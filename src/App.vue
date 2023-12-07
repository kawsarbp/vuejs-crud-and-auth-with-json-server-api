<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import SignUp from "@/components/auth/SignUp.vue";
export default {
  name: 'App',
  components:{
    // eslint-disable-next-line vue/no-unused-components
    SignUp
  }
}
</script>

<style scoped>


</style>
