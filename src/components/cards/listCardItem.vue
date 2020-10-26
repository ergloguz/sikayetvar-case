<template>
  <div class="list-item">
    <div class="container flexCenter">
      <div>
        <a class="container-id"> {{ post.id }} </a>
        <a class="container-text">{{ post.title }}</a>
      </div>

      <div class="container-button">
        <button
            @click="$emit('onDetail', post)"
            class="detailButton flexCenter">
          <a class="detailButton-text">DETAY</a>
        </button>
        <button
            @click="$emit('onEdit', post)"
            class="editButton flexCenter">
          <a class="editButton-text">DÜZENLE</a>
        </button>
        <button
            @click="$emit('onDelete', post)"
            class="deleteButton flexCenter">
          <a class="deleteButton-text">SİL</a>
        </button>

      </div>

    </div>
    <div class="flexCenter">
      <hr>
    </div>
  </div>
</template>

<script>


export default {
  name: "listCardItem.vue",
  props: ['post'],
  data() {
    return {
      isModalVisible: false,
      isDeleteVisible: false,
    }
  },
}
</script>
<style scoped>


.container {
  height: 100px;
  max-width: 1014px;
  padding: 0 30px;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  border-bottom-color: black;
  justify-content: space-between;

  &-button {
    display: flex;
    flex-direction: row;
  }

  &-id {
    font-weight: bold;
    font-size: var(--primaryfont);

    color: rgb(var(--darker));
  }

  &-text {
    font-size: var(--primaryfont);
    font-weight: lighter;
    color: rgb(var(--dark));
    margin-left: 12px;
  }

}

.detailButton {
  width: 86px;
  height: 43px;
  background-color: rgb(var(--detailblue));
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

.deleteButton {
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

.editButton {
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

.list-item:not(:last-child) hr {
  height: 1px;
  width: 954px;
  background-color: #E6E6E6;
}

</style>