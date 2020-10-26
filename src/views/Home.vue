<template>
  <div>
    <ItemContainer>
      <ListCardItem v-for="(post, index) in getPosts"
                    :key="index" :post="post"
                    @onEdit="showModal"
                    @onDelete="showDeleteModal"
                    @onDetail="showDetail"
      >
      </ListCardItem>

      <Modal v-if="selectedPost"
             :post="selectedPost"
             @close="closeModal"
      />

      <DeleteModal v-if="selectedDeletePost"
                   :post="selectedDeletePost"
                   @close="closeDeleteModal"
      />

    </ItemContainer>
  </div>
</template>

<script>

import {mapGetters} from "vuex";
import ListCardItem from '@/components/cards/listCardItem';
import ItemContainer from "@/components/cards/itemContainer";


export default {
  name: 'Home',
  components: {
    ItemContainer,
    ListCardItem,
    DeleteModal: () => import("@/components/global/deleteModal"),
    Modal: () => import('@/components/global/modal'),
  },
  data() {
    return {
      selectedPost: null,
      selectedDeletePost: null,
    }
  },
  computed: {
    ...mapGetters(["getPosts"]),
  },
  methods: {
    showDetail(post) {
      this.$router.push({
            name: 'Detail',
            params: {
              id: post.id,
              body: post.body}
          }
      )
    },
    showModal(post) {
      this.selectedPost = post;
    },
    closeModal() {
      this.selectedPost = null;
    },
    showDeleteModal(post) {
      this.selectedDeletePost = post;
    },
    closeDeleteModal() {
      this.selectedDeletePost = null;
    },
    getAllPosts() {
      this.$store.dispatch('loadPosts');
    }
  },
  created() {
    this.getAllPosts();
  }
}
</script>