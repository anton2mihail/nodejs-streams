let https = require("https");
function getAndPrintHTMLChunks(options) {
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
      console.log(ans);
      console.log("Connection closed");
    });
  });
}
var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step1.html"
};

getAndPrintHTMLChunks(requestOptions);
