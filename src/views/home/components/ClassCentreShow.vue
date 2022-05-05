<template>
  <section class="ClassCentreShow">
    <video
      v-if="item.id === 3"
      ref="video"
      class="shadow-basic rounded-4"
      controls
      autoplay
    ></video>
    <img v-else :src="item.url" />
    <div class="left-hamburger ease-in-out-1/60 hover:gray-200">
      <hamburger
        o-w="64px"
        o-h="64px"
        i-h="20"
        i-w="20"
        @toggleClick="handleToggleLeftHamburger"
      />
    </div>
    <div class="right-hamburger ease-in-out-1/60 hover:gray-200">
      <hamburger
        o-w="64px"
        o-h="64px"
        i-h="20"
        i-w="20"
        direction="rightSide"
        @toggleClick="handleToggleRightHamburger"
      />
    </div>
  </section>
</template>
<script>
import Hamburger from "../../../components/hambuger/Hamburger";
export default {
  name: "ClassCentreShow",
  components: {
    Hamburger,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  watch: {
    item: {
      handler(newVal) {
        if (newVal.id === 3) {
          this.$nextTick(() => {
            this.$refs["video"].srcObject = newVal.url;
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleToggleLeftHamburger(val) {
      this.$store.commit("SET_LEFT_SIDE", val);
    },
    handleToggleRightHamburger(val) {
      this.$store.commit("SET_RIGHT_SIDE", val);
    },
  },
};
</script>
<style lang="less" scoped>
.ClassCentreShow {
  padding: 64px;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  img {
    width: 100%;
    margin: 1em;
    max-height: 100%;
  }
  video {
    margin: 1em;
    width: 100%;
    max-height: 100%;
    object-fit: cover;
    background-color: #ffffff;
  }

  .left-hamburger {
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .right-hamburger {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
