var http = require("http"),
// utilities for working with file paths
  path = require("path"),
// utilities for accessing the file system
  fs = require("fs"),
  extensions = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png",
    ".gif": "image/gif",
    ".jpg": "image/jpeg",
    ".ttf": "font/truetype",
    ".otf": "font/opentype",
    ".woff": "application/x-font-woff"
  };


http.createServer(function(req, res) {

// look for a filename in the URL, default to index.html
  var filename = path.basename(req.url) || "index.html",
    ext = path.extname(filename),
    dir = path.dirname(req.url).substring(1),
// __dirname is a built-in variable containing the path where the code is running
    localPath = __dirname + "/assets/";
  if (extensions[ext]) {
    localPath += (dir ? dir + "/" : "") + filename;
    fs.exists(localPath, function(exists) {
      if (exists) {
        getFile(localPath, extensions[ext], res);
      } else {
        res.writeHead(404);
        res.end();
      }
    });
  }

  function getFile(localPath, mimeType, res) {
    fs.readFile(localPath, function(err, contents) {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": mimeType,
          "Content-Length": contents.length
        });
        res.end(contents);
      } else {
        res.writeHead(500);
        res.end();
      }
    });
  }


}).listen(process.env.PORT || 3000, function() {
  console.log("listening on 3000");
});