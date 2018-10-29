let https = require("https");
module.exports = function getHTML(options, callback) {
  /* Your code here */
  https.get(options, res => {
    let ans = "";
    res.setEncoding("utf8");
    res.on("data", data => {
      ans += data;
    });
    res.on("error", err => {
      if (err) throw err;
    });
    res.on("end", () => {
      callback(ans);
      console.log("Connection closed");
    });
  });
};
