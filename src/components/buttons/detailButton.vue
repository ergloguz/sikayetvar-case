<template>
  <div>
    <button @click="onDetail" class="button flexCenter">
      <a class="button-text">DETAY</a>
    </button>
  </div>
</template>

<script>
export default {
  name: "DetailButton",
  methods: {
    onDetail(post) {
      this.$emit('onDetail',post);
    },
  },
}
</script>

<style scoped>
.button {
  width: 86px;
  height: 43px;
  background-color: rgb(var(--detailblue));
  box-shadow: var(--buttonshadow);
  border-radius: var(--buttonradius);
  margin-right: 20px;

  &-text {
    color: rgb(var(--white));
    font-family: Open Sans;
    font-weight: bold;
    font-size: var(--primaryfont);
    line-height: var(--line);
  }
}
</style>