/* // callback Hell
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
*/
var photo = downloadPhoto("https://tenor.com/view/programmer-gif-19019116");
downloadPhoto("https://tenor.com/view/programmer-gif-19019116", handlePhoto);

function handlePhoto(error, photo) {
  if (error) console.error("Download error!", error);
  else console.log("Download finished", photo);
}

console.log("Download started");
//fix callback hell

var form = document.querySelector("form");
// form.onsubmit = function (submitEvent) {
form.onsubmit = function formSubmit(submitEvent) {
  var name = document.querySelector("input").value;
  request(
    {
      uri: "http://example.com/upload",
      body: name,
      method: "POST",
    },
    // function (err, response, body) {
    function postResponse(err, response, body) {
      var statusMessage = document.querySelector(".status");
      if (err) return (statusMessage.value = err);
      statusMessage.value = body;
    }
  );
};
