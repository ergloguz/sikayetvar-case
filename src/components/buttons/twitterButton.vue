<template>
  <div>
    <button class="modal flexCenter socialButton">
      <IconTwitter/>
      <span class="content flexCenter">Follow us</span>
    </button>
  </div>
</template>

<script>


import IconTwitter from "@/icons/twitter.svg"

export default {
  name:"DribbleButton",
  components:{
    IconTwitter
  }
}
</script>

<style scoped>

.modal {
  position: relative;
  background-color: rgb(var(--twitter));
  box-shadow: var(--iconshadow);
  &:hover{
    margin-top: -2px;
  }
}
.modal .content::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 45%;
  margin-left: -5px;
  border-width: 10px;
  border-style: solid;
  border-radius: 1px;
  margin-top: 1px;
  border-color: #212529 transparent transparent transparent;
}
.modal .content {
  visibility: hidden;
  text-align: center;
  height: 29px;
  width: 77px;
  bottom: 100%;
  margin-bottom: 5px;
  left: 105%;
  margin-left: -60px;
  background-color: #212529;
  font-weight: normal;
  font-size: var(--primaryfont);
  line-height: var(--line);
  letter-spacing: -0.3px;
  color: #FFFFFF;
  border-radius: var(--radius);
  position: absolute;
  z-index: 1;
}

.modal:hover .content {
  visibility: visible;
}

</style>