<template>
  <div class="container">
      <div class="container-left">
        <Logo/>
        <a class="container-left-link">Posts</a>
      </div>

    <div class="container-right">
      <LoginButton/>
    </div>
  </div>
</template>

<script>
import LoginButton from "../buttons/loginButton";
import Logo from "@/icons/logo.svg"
export default {
  name:"Header",
  components:{
    LoginButton,
    Logo
  }

}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 1013px;
  height: 43px;
  margin-top: 40px;
   &-left {
     display: flex;
     align-items: center;
      &-link{
        color: rgb(var(--white));
        margin-left: 51px;
        font-weight: normal;
        font-size: var(--primaryfont);
        line-height: var(--line);
      }
   }
}
</style>