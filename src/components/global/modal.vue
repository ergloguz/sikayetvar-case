<template>
    <div class="modals-backdrop">
      <div class="modals">
        <div class="modals-head">
          <a class="modals-head-edit">Düzenle</a>
          <IconClose @click="close"/>
        </div>
        <hr class="hr">

        <div class="modals-form">
          <div class="modals-form-title">
            <a class="modals-form-title-label">Title</a>
            <input v-model="formData.title" class="modals-form-title-input">
          </div>
          <div class="modals-form-body">
            <a class="modals-form-body-label">Body</a>
            <input v-model="formData.body" class="modals-form-body-input">
          </div>
        </div>
        <hr class="hr">
        <div class="modals-footer">
          <UpdateButton @submitForm="updatePost"></UpdateButton>
        </div>
      </div>
    </div>

</template>


<script>

import IconClose from "@/icons/close.svg"
import UpdateButton from "../buttons/updateButton";

export default {
  name: 'Modal',
  props: ['post'],
  components:{
    UpdateButton,
    IconClose,
  },
  data(){
    return {
      formData: {
        body:"",
        title:"",
      }
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    updatePost(){
      this.$store.dispatch('updatePosts', this.formData).then((response) => {
        if(response.status === 200) {
          this.$store.commit('UPDATE_POST_ITEM', response.data);
          // Json place holder bizim updatelerimizi gerçekten db ye yazmadığı için ben postları tekrar
          // çekmek yerine storeda kendim update ettim.
        }
      });
      this.clearForm();
    },
    clearForm(){
      this.formData = {
        body: "",
        title: "",
      }
    },
  },
  mounted() {
    this.formData = { ...this.post }
  }
};
</script>

<style>
.hr {
  height: 1px;
  background-color: #E9ECEF;
}
.modals-backdrop {
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.modals {
  position: fixed;
  background-color: rgb(var(--white));
  box-shadow: 0px 1px 5px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  height: 429px;
  width: 500px;
  border-radius:var(--radius) ;
    &-form {
      display: flex;
      padding: var(--padding);
      flex-direction: column;
      &-body {
        display: flex;
        flex-direction: column;
        margin-top: 18px;

        &-label {
          font-weight: 600;
          font-size: var(--primaryfont);
          line-height: var(--line);
          letter-spacing: 0.431667px;
          color: #525F7F;
        }
        &-input {
          display: flex;
          height: 102px;
          border-radius:var(--radius);
          border: 1px solid #CAD1D7;
          margin-top: 13px;
          padding-left: 13px;
          text-align-all: center;
        }
      }
      &-title{
        display: flex;
        flex-direction: column;
        &-label {
          font-weight: 600;
          font-size: var(--primaryfont);
          line-height: var(--line);
          letter-spacing: 0.431667px;
          color: #525F7F;
        }
        &-input {
          height: 43px;
          border-radius:var(--radius);
          border: 1px solid #CAD1D7;
          margin-top: 13px;
          padding-left: 13px;
          font-weight: normal;
          font-size: var(--primaryfont);
          line-height: var(--line);
          color: #8898AA;

        }
      }

    }
  &-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--padding);

    &-edit{
      font-family: Open Sans;
      font-weight: normal;
      font-size: var(--secondaryfont);
      line-height: 22px;
      color: #32325D;
    }
  }

  &-footer {
    padding: var(--padding);
  }
}







</style>