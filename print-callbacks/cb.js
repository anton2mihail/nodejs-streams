let https = require("https");
function getHTML(options, callback) {
  /* Add your code here */
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
}

function printHTML(html) {
  console.log(html);
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step4.html"
};
getHTML(requestOptions, printHTML);
