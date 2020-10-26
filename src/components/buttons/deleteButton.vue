<template>
  <div>
    <button @click="onDelete" class="button">
      <a class="button-text">SİL</a>
    </button>
  </div>
</template>

<script>
export default {
  name:"DeleteButton",
  methods: {
    onDelete(post) {
      this.$emit('onDelete',post);
    },
  },
}
</script>

<style scoped>
.button {
  width: 63px;
  height: 43px;
  background-color: rgb(var(--deletered));
  box-shadow: var(--buttonshadow);
  border-radius: var(--buttonradius);
  cursor: pointer;
  &-text {
    color: white;
    color: rgb(var(--white));
    font-weight: bold;
    font-size: var(--primaryfont);
    line-height: var(--line);
    }
}

</style>