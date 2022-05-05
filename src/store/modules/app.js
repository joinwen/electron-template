const app = {
  state: {
    leftSide: true, // 默认左边栏开启
    rightSide: true, // 默认右边栏开启
    themeType: "dark", // 主题：dark 暗色模式; light 亮色模式
    night: false, // 夜间模式
  },
  actions: {},
  mutations: {
    SET_LEFT_SIDE(state, value) {
      state.leftSide = value;
    },
    SET_RIGHT_SIDE(state, value) {
      state.rightSide = value;
    },
    SET_THEME_TYPE(state, value) {
      state.themeType = value;
    },
    SET_THEME_COLOR(state, value) {
      state.themeColor = value;
    },
  },
};
export default app;
