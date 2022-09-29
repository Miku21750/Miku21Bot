var url = "https://api.scripture.api.bible/v1/bibles/2dd568eeff29fb3c-02/books/MRK/sections";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);

xhr.setRequestHeader("accept", "application/json");
xhr.setRequestHeader("api-key", "5d9324630c852dcbd2bb643aa00d6987");

xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
   }};

xhr.send();