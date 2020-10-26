<template>
  <div>
    <ItemContainer>
      <div class="containers">
        <div class="divider">
          <div class="containers-left">
            <a class="containers-left-name">{{ myDetail.name }}</a>
            <a class="containers-left-location">{{myDetail.address.city}}</a>

            <div class="containers-left-userinfo">

              <div class="containers-left-userinfo-titles">
                <a class="containers-left-userinfo-titles-username">Username</a>
                <a class="containers-left-userinfo-titles-username">Email</a>
                <a class="containers-left-userinfo-titles-username">Phone</a>
                <a class="containers-left-userinfo-titles-username">Website</a>
                <a class="containers-left-userinfo-titles-username">Company</a>
              </div>

              <div class="containers-left-userinfo-infos">
                <a class="containers-left-userinfo-infos-text">{{myDetail.username}}</a>
                <a class="containers-left-userinfo-infos-text">{{ myDetail.email }}</a>
                <a class="containers-left-userinfo-infos-text">{{ myDetail.phone }}</a>
                <a class="containers-left-userinfo-infos-web">{{ myDetail.website }}</a>
                <a class="containers-left-userinfo-infos-text">{{ myDetail.company.name }}</a>
              </div>
            </div>

          </div>

          <div  class="containers-right">
            <img src="../assets/map.png">
          </div>
        </div>
        <div class="containers-bottom">
          <div class="hr"></div>
          <div class="containers-bottom-detail ">
            <a class="containers-bottom-detail-text">{{body}}</a>


          </div>
          <button class="containers-bottom-show">
            <a class="containers-bottom-show-text">Show More</a>
          </button>
        </div>
      </div>
    </ItemContainer>
  </div>
</template>

<script>

import ItemContainer from "@/components/cards/itemContainer"
import { mapState, mapGetters } from "vuex";


export default {
  name:"Detail",
  components:{
    ItemContainer
  },
  data(){
    return{
      myDetail:null,
    }
  },
  created() {
    const id = this.$route.params.id - 1
    this.myDetail = this.getUsers[id]
    this.$store.dispatch("loadUsers",this.$route.params.id);
    this.$store.dispatch("loadPosts",this.$route.params.id)
    this.id = this.$route.params.id;
    this.body = this.$route.params.body;
  },
  computed: {
    ...mapGetters(["getUsers"]),
    ...mapState(['posts',"users"])
  },
}
</script>

<style scoped>

.divider {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.hr {
  height: 1px;
  width: 954px;
  background-color: #E9ECEF;
}
.containers {
  display: grid;
  grid-template-rows:320px 1fr ;
  padding: 28px;
  &-bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-show {
      background-color: white;
      margin-bottom: 45px;
      margin-top: 20px;
      &-text {
        font-weight: normal;
        font-size: var(--secondaryfont);
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.3px;
        color: #4A90E2;
      }
    }
    &-detail {
      display: flex;
      flex-direction: column;
      padding-left: 97.5px;
      padding-right: 95.5px;
      margin-top: 60px;

      text-align: center;

      &-text {
        font-weight: normal;
        font-size: var(--secondaryfont);
        line-height: 27px;
        text-align: center;
        letter-spacing: -0.3px;

        color: #525F7F;
      }
    }

  }
  &-left {
    display: flex;
    flex-direction: column;
    margin-top:12px;

    &-userinfo {
      display: flex;
      flex-direction: row;
      &-infos {
        display: flex;
        flex-direction: column;
        margin-top: 38px;
        margin-left: 25px;
        &-web {
          font-weight: 600;
          font-size: var(--secondaryfont);
          line-height: 26px;
          letter-spacing: 0.114286px;
          color: #4A90E2;
        }
        &-text {
          font-weight: 600;
          font-size: var(--secondaryfont);
          line-height: 26px;
          letter-spacing: 0.114286px;
          color: #525F7F;
        }
      }
      &-titles{
        display: flex;
        flex-direction: column;
        margin-top: 38px;
        &-username{
          font-weight: normal;
          font-size: var(--primaryfont);
          line-height: 26px;
          letter-spacing: 0.1px;
          color: #ADB5BD;
        }
      }

    }

    &-name {
      font-weight: normal;
      font-size: 28px;
      line-height: 38px;
      color: #32325D;
    }
    &-location {
      font-weight: 300;
      font-size: var(--secondaryfont);
      margin-top: 18px;
      line-height: 22px;
      color: #32325D;
    }
  }
}
</style>