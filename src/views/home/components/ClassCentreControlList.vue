<template>
  <section class="Class-Centre-Control-List">
    <el-form label-width="60px" :model="camera">
      <el-form-item label="RTSP:">
        <el-input v-model="camera.rtspUrl"></el-input>
      </el-form-item>
      <el-form-item label="用户名:">
        <el-input v-model="camera.username"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="camera.password"></el-input>
      </el-form-item>
      <el-form-item label="SDP:">
        <el-input type="textarea" :rows="3" v-model="camera.sdp"></el-input>
      </el-form-item>
      <el-form-item label="Stream:">
        <el-input
          type="textarea"
          columns="5"
          v-model="camera.stream"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleGetSdp"
          >获取球机的 SDP</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleGetStream"
          >获取球机的 RTP 流</el-button
        >
      </el-form-item>

      <el-form-item label="IP:">
        <el-input v-model="camera.ip"></el-input>
      </el-form-item>

      <el-form-item label="x:">
        <el-input v-model="camera.x"></el-input>
      </el-form-item>
      <el-form-item label="y:">
        <el-input v-model="camera.y"></el-input>
      </el-form-item>
      <el-form-item label="z:">
        <el-input v-model="camera.z"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleCameraControl">球控</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleDiscovery">探寻球机</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>
<script>
import { getSdp, getStream } from "../../../camera/rtsp";
import { control, discovery } from "../../../camera/onvif";
export default {
  name: "ClassCentreControlList",
  components: {},
  data() {
    return {
      camera: {
        username: "admin",
        password: "f35guiniao",
        ip: "192.168.1.64",
        rtspUrl: "rtsp://192.168.1.64:554",
        sdp: "",
        stream: "暂无二进制数据",
        x: 1,
        y: 0,
        z: 0,
      },
    };
  },
  methods: {
    async handleGetSdp() {
      console.log(this.rtspUrl);
      let describe = await getSdp(this.camera);
      this.camera.sdp = describe.body.plain;
    },
    async handleGetStream() {
      getStream((message) => {
        this.camera.stream = message.toString();
      });
    },
    handleCameraControl() {
      let { ip, username, password, x, y, z } = this.camera;
      control(ip, username, password, x, y, z);
    },
    handleDiscovery() {
      discovery();
    },
  },
};
</script>
<style lang="less" scoped>
.Class-Centre-Control-List {
  height: 100%;
  padding: 1em;

  /deep/ .el-form-item__label {
    color: #fff !important;
  }
}
</style>
