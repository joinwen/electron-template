<template>
  <section class="Class-Centre-Room-List">
    <main class="room-list">
      <div
        class="room-item shadow-light"
        v-for="(item, index) in roomListData"
        :key="index"
      >
        <img cursor="pointer" :src="item.url" @click="handleRoomClick(item)" />
        <h2 class="color-gray-700">{{ item.name }}</h2>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  name: "ClassCentreRoomList",
  components: {},
  data() {
    return {
      roomListData: [
        {
          id: 1,
          name: "房间一",
          url: require("@/assets/images/g-1.jpg"),
        },
        {
          id: 2,
          name: "房间二",
          url: require("@/assets/images/g-2.jpg"),
        },
        {
          id: 3,
          name: "房间三",
          url: require("@/assets/images/g-3.jpg"),
        },
      ],
    };
  },
  methods: {
    handleRoomClick(item) {
      this.$emit("toggleRoom", item);
    },
  },
};
</script>
<style lang="less" scoped>
.Class-Centre-Room-List {
  height: 100%;
  padding: 1em;

  .room-list {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-content: baseline;
    .room-item {
      margin-bottom: 2em;
      flex: 1 1 auto;
      width: 120px;
      height: 80px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
      h2 {
        margin: 0;
        text-align: center;
        font: 400 14px/18px "微软雅黑";
      }
    }
  }
}
</style>
