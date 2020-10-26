<template>
  <div>
    <button @click="onEdit" class="button flexCenter">
      <a class="button-text">DÜZENLE</a>
    </button>
  </div>
</template>

<script>
export default {
  name:"EditButton",
  methods: {
    onEdit(post) {
      this.$emit('onEdit',post);
    },
  },
}
</script>

<style scoped>
.button {
  width: 107px;
  height: 43px;
  background-color: rgb(var(--editgreen));
  box-shadow: var(--buttonshadow);
  border-radius: var(--buttonradius);
  margin-right: 20px;
  &-text {
    color: rgb(var(--white));
    font-weight: bold;
    font-size: var(--primaryfont);
    line-height: var(--line);
  }
}
</style>