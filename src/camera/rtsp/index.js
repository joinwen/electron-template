const RTSPClient = require("rtsp-client");
const dgram = require("dgram");
let client = null,
  server = null;

const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const getSdp = async ({ rtspUrl, username, password }) => {
  client = new RTSPClient();
  client.authenticate(username, password);
  await client.connect(rtspUrl);
  const options = await client.options();
  console.log(options);
  let describe2 = await client.describe();
  console.log(describe2);
  // let sdp = describe2.body.plain;
  // let sessionId = /\r\no(.*)\r\n/.exec(sdp)[1].split(" ")[1];
  return describe2;
};

const getStream = async (cb) => {
  // the arguments should be retrieved from sdp;
  let res = await client.setup(
    "trackID=1",
    "RTP/AVP;unicast;client_port=42845-42846;mode=play"
  );
  let sessionId = res.headers[1].values[0].value;
  client.setSession(sessionId.split(";")[0]);
  setTimeout(() => {
    client.close();
    server.close();
  }, 100);
  server = dgram.createSocket("udp4");
  server.on("message", function (message) {
    cb(message);
  });
  server.bind(42845, client.socket.address().address);
  return client.play();
};
export { getSdp, getStream, uuid };
