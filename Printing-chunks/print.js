let https = require("https");
function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step1.html"
  };

  /* Add your code here */
  https.get(requestOptions, res => {
    res.setEncoding("utf8");
    res.on("data", data => {
      console.log("Data: " + data + "\n");
    });
    res.on("error", err => {
      if (err) throw err;
    });
    res.on("end", () => {
      console.log("Connection closed");
    });
  });
}
getAndPrintHTMLChunks();
