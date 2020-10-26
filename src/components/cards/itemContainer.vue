<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "ItemContainer"
}
</script>

<style scoped>
.container {
  background-color: white;
  width: 1014px;
  margin-top: 188px;
  border-radius: var(--radius);
  align-items: center;
  justify-content: center;
  box-shadow: 0px 15px 35px rgba(var(--dark), 0.1),
  0px 5px 15px rgba(0, 0, 0, 0.07);
}
</style>