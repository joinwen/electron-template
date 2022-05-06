let onvif = require("onvif"),
  Cam = onvif.Cam;

const control = (ip, username, password, x, y, z) => {
  let cam = new Cam(
    {
      hostname: ip,
      username: username,
      password: password,
      port: 80,
    },
    function (err) {
      if (err) {
        return console.log(err);
      }
      this.absoluteMove({
        x,
        y,
        zoom: z,
      });
    }
  );
  window.cam = cam;
};

const discovery = () => {
  onvif.Discovery.probe();
  onvif.Discovery.on("device", function (cam, rinfo, xml) {
    console.log(cam, rinfo, xml);
  });
  onvif.Discovery.on("error", function (err, xml) {
    console.log("Discovery error" + err, xml);
  });
};
export { discovery, control };
