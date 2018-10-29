let https = require("https");
function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  /* Add your code here */
  https.get(requestOptions, res => {
    let ans = "";
    res.setEncoding("utf8");
    res.on("data", data => {
      ans += data + "\n";
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
getAndPrintHTMLChunks();
