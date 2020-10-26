<template>
  <div>
    <button class="button flexCenter">
      <a class="button-text">Login</a>
    </button>
  </div>
</template>

<script>
export default {
  name:"LoginButton"
}
</script>

<style scoped>
.button {
  width: 99px;
  height: 43px;
  background-color: rgb(var(--white));
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: var(--radius);
  &-text {
    color: rgb(var(--detailblue));
    font-weight: normal;
    font-size: var(--primaryfont);
    line-height: var(--line);
    letter-spacing: 0.4px;
  }
}
</style>