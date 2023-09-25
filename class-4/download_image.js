async function downloadImage(imageSrc, nameOfDownload = "coding.gif") {
  //downloadImage uses the built-in fetch() method to fetch the image from a URL (or from the local file system)
  const response = await fetch(imageSrc);

  const blobImage = await response.blob();

  const href = URL.createObjectURL(blobImage);

  const anchorElement = document.createElement("a");
  anchorElement.href = href;
  anchorElement.download = nameOfDownload;

  document.body.appendChild(anchorElement);
  anchorElement.click();

  document.body.removeChild(anchorElement);
  window.URL.revokeObjectURL(href);
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  downloadImage(
    "https://media.tenor.com/NOYF3f82b_gAAAAC/programmer.gif",
    "coding.gif"
  )
    .then(() => {
      console.log("This Gif has been downloaded");
    })
    .catch((err) => {
      console.log("Error downloading Gif: ", err);
    });
});
