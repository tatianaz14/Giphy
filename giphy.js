var topics = ['gay', 'women', 'cars', 'motorbie'];


var userTag = document.querySelector('#myTag').value;
 var queryURL = `https://api.giphy.com/v1/gifs/trending?api_key=${oAPKq0ycl46LlXlQ6CpSi5k9jK2cPOqB}&q=${userTag}`;
=
$("#gifBTN").on("click", function () {
  event.preventDefault();
  var myKey = 'oAPKq0ycl46LlXlQ6CpSi5k9jK2cPOqB';
  // var userTag = 'dogs';
  var userTag = document.querySelector('#myTag').value;
  var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${myKey}&tag=${userTag}`;
//
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(queryURL);
    var imageUrl = response.data.image_original_url;
    console.log(imageUrl);
    myImage(imageUrl, userTag);



  });
});

function myImage(image, tag) {
  var gifImage = $("<img>");

  // Setting the Image src attribute to imageUrl
  gifImage.attr("src", image);
  gifImage.attr("alt", `${tag} image`);

  // Prepending the Image to the images div
  $("#gifDisplay").prepend(gifImage);
}