<template>
  <div class="container">
    <footer class="container-footer">
      <div class="container-footer-top">
        <div class="container-footer-top-text">
          <a class="container-footer-top-text-green">Thank you for supporting us!</a>
          <a class="container-footer-top-text-second">Let's get in touch on any of these platforms.</a>
        </div>

        <div class="container-footer-top-social">
          <TwitterButton/>
          <FacebookButton/>
          <DribbleButton/>
          <GithubButton/>
        </div>
      </div>
      <Divider/>
      <div class="container-footer-bottom">
        <div class="container-footer-bottom-index">
          <a class="container-footer-bottom-index-copy">&copy 2018</a>
          <a class="container-footer-bottom-index-brand">Şikayetvar</a>
        </div>
        <div class="container-footer-bottom-route">
          <a class="container-footer-bottom-route-nav">Posts</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import GithubButton from "../buttons/githubButton";
import TwitterButton from "../buttons/twitterButton";
import FacebookButton from "../buttons/facebookButton";
import DribbleButton from "../buttons/dribbleButton";
import Divider from "./divider";

export default {
  name: "Footer",
  components: {
    Divider,
    DribbleButton,
    FacebookButton,
    TwitterButton,
    GithubButton,
  }
}
</script>

<style scoped>

.container {
  justify-content: flex-end;
  background-color: white;
  max-width: 1010px;
  height: 204px;
  margin-top: 160px;

  &-footer {
    display: grid;
    grid-template-rows: 185px 1fr;
    bottom: 0;
    position: relative;

    &-bottom {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 53px;
      margin-top: 37px;

      &-route {
        padding-right: 21px;

        &-nav {
          font-weight: bold;
          font-size: var(--primaryfont);
          line-height: var(--line);
          text-align: center;
          letter-spacing: -0.4px;
          color: #8898aa;
        }
      }

      &-index {
        display: flex;
        padding-left: 9px;

        &-copy {
          font-weight: bold;
          font-size: var(--primaryfont);
          color: rgb(var(--dark))

        }

        &-brand {
          font-weight: bold;
          font-size: var(--primaryfont);
          line-height: var(--line);
          margin-left: 12px;
          letter-spacing: -0.4px;
          color: rgb(var(--green));
        }
      }
    }

    &-top {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      &-social {
        display: flex;
        flex-direction: row;
      }

      &-text {
        display: flex;
        flex-direction: column;

        &-green {
          font-weight: normal;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: -0.45px;
          color: rgb(var(--green));
        }

        &-second {
          font-weight: 300;
          font-size: 22px;
          margin-top: 23px;
          color: rgb(var(--dark));
        }

      }

    }


    &-copy {
      font-weight: bold;
      font-size: var(--primaryfont);
      color: rgb(var(--dark))
    }

    &-brand {
      font-weight: bold;
      font-size: var(--primaryfont);
      line-height: var(--line);
      text-align: center;
      letter-spacing: -0.4px;

      color: #00CDAC;
    }

    &-text {
      display: flex;
      flex-direction: column;

      &-green {
        font-size: 24px;
        color: rgb(var(--green));
      }

      &-second {
        font-size: 22px;
        color: rgb(var(--dark));

      }
    }

    &-social {
      display: flex;
      flex-direction: row;
      font-weight: normal;

    }

  }
}
</style>