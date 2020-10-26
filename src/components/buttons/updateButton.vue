<template>
  <div>
    <button @click="submitForm" class="button flexCenter">
      <a class="button-text">GÜNCELLE</a>
    </button>
  </div>
</template>

<script>
export default {
  name:"UpdateButton",
  methods:{
    submitForm(post){
      this.$emit("submitForm",post);
      this.clearForm();
    },
    clearForm(){
      this.formModel = {
        bookName: "",
        bookAuthor: "",
        bookImage:"",
      }
    },
  },

}
</script>

<style scoped>
.button {
  width: 118px;
  height: 43px;
  background-color: rgb(var(--updateblue));
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.08), 0px 4px 6px rgba(50, 50, 93, 0.11);
  border-radius: 4px;
  &-text {
    color: rgb(var(--white));
    font-family: Open Sans;
    font-weight: bold;
    font-size: var(--primaryfont);
    line-height: var(--line);
    letter-spacing: 0.08px;
  }
}
</style>