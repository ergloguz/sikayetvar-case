<template>
  <div class="modal-backdrop">
    <div class="deleteModal">

      <div class="deleteModal-head">
        <a class="deleteModal-head-edit">Sil</a>
        <IconClose @click="$emit('close')"/>
      </div>

      <div class="hr"></div>

      <div class="deleteModal-alert flexCenter">
        <a class="deleteModal-alert-text">Are you sure you want to delete this ?</a>
      </div>


      <div class="hr"></div>


      <div class="deleteModal-footer">
        <DeleteButton @onDelete="deletePosts"></DeleteButton>
      </div>
    </div>
  </div>

</template>


<script>

import IconClose from "@/icons/close.svg"
import DeleteButton from "../buttons/deleteButton";


export default {
  name: 'DeleteModal',
  props:["post"],
  components:{
    DeleteButton,
    IconClose,
  },
  methods: {
    deletePosts() {
      this.$store.commit('REMOVE_POSTS', this.post);
      this.$emit('close');
    },
  },
};
</script>



<style>
.hr {
  height: 1px;
  background-color: #E9ECEF;
}
.modal-backdrop {
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

.deleteModal {
  background-color: white;
  box-shadow: 0px 1px 5px rgba(50, 50, 93, 0.1), 0px 5px 15px rgba(0, 0, 0, 0.07);
  height: 240px;
  width: 500px;
  border-radius:var(--radius) ;
  &-alert {

    padding: var(--padding);
    &-text {
      font-weight: normal;
      font-size: 26px;
      line-height: 38px;
      color: #32325D;
    }
  }
  &-head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--padding);
    &-edit{
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