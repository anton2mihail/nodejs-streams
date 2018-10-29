let getHTML = require("../module-https/http-functions");

function printlower(html) {
  console.log(html.toLowerCase());
  return html.toLowerCase();
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/lowercase.html"
};
getHTML(requestOptions, printlower);
