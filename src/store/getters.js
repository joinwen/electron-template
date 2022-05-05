const avatar = (state) => state.user.avatar;
const nickname = (state) => state.user.nickname;
const leftSide = (state) => state.app.leftSide;
const rightSide = (state) => state.app.rightSide;
export default {
  avatar,
  nickname,
  leftSide,
  rightSide,
};
