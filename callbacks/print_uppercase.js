let getHTML = require("../module-https/http-functions");
function printUpper(html) {
  console.log(html.toUpperCase());
  return html.toUpperCase();
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/uppercase.html"
};
getHTML(requestOptions, printUpper);
