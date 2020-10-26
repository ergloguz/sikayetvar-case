<template>
  <div class="c">
    <div class="image">
      <img src="./assets/bg.png" alt="">
    </div>

    <Container>
      <Header/>
      <router-view/>
      <Footer/>
    </Container>
  </div>
</template>

<style>

</style>
<script>
import Container from "@/components/Container";
import Header from "@/components/global/header";
import Footer from "@/components/global/footer";

export default {
  name:"App",
  components: {
    Footer,
    Header,
    Container,
  }
}
</script>

<style>
.c {
  display: flex;
  align-items: center;
  justify-content: center;
}
.image {
  top: 0;
  position: absolute;
  z-index: -1;
}
</style>