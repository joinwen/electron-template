<template>
  <section class="Class-Centre">
    <aside
      :class="[
        'class-centre-control',
        'shadow-light ease-in-out-0.25',
        !leftSide && 'class-centre-control-hidden',
      ]"
    >
      <class-centre-control-list />
    </aside>
    <main class="class-centre-show">
      <class-centre-show :item="item" />
    </main>
    <aside
      :class="[
        'class-centre-room',
        'shadow-light ease-in-out-0.25',
        !rightSide && 'class-centre-room-hidden',
      ]"
    >
      <class-centre-room-list @toggleRoom="handleToggleRoom" />
    </aside>
  </section>
</template>
<script>
import ClassCentreShow from "./components/ClassCentreShow";
import ClassCentreRoomList from "./components/ClassCentreRoomList";
import ClassCentreControlList from "./components/ClassCentreControlList";
import { mapGetters } from "vuex";
const fs = require("fs");
const wrtc = require("wrtc");

export default {
  name: "ClassCentre",
  components: {
    ClassCentreShow,
    ClassCentreRoomList,
    ClassCentreControlList,
  },
  data() {
    return {
      stream: null,
      item: {},
    };
  },
  computed: {
    ...mapGetters(["leftSide", "rightSide"]),
  },
  async mounted() {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    // let stream = await mediaDevices.getUserMedia({
    //   video: true,
    //   audio: true
    // });
    console.log(fs, wrtc);
    this.stream = stream;
    this.item = {
      id: 3,
      url: this.stream,
    };
  },
  methods: {
    handleToggleRoom(item) {
      if (item.id === 3) {
        item.url = this.stream;
      }
      this.item = item;
    },
  },
};
</script>
<style lang="less" scoped>
.Class-Centre {
  display: flex;
  height: 100vh;

  .class-centre-control {
    width: 256px;
    flex: 0 0 auto;
    overflow: hidden;
    background-color: #37486b;
  }
  .class-centre-control-hidden {
    width: 0;
    overflow: hidden;
  }
  .class-centre-show {
    flex: 1 1 auto;
    background-color: #fafbfc;
  }
  .class-centre-room {
    width: 200px;
    flex: 0 0 auto;
    overflow: hidden;
    background-color: #f5f6f7;
  }
  .class-centre-room-hidden {
    width: 0;
    overflow: hidden;
  }
}
</style>
