// Script for integrating Google Books API into the website

// Declaring the required variables
var bookList = document.getElementById("bookList");
var key = "AIzaSyBZWTax1KKkjwbTqxzLJ05mEWgX9S0wlMk";

/*
Documentation
https://developers.google.com/books/docs/v1/getting_started
*/

// Fetching the data from the API
async function getData() {
  var url = `https://www.googleapis.com/books/v1/volumes?q=women&key=${key}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response.status: ${response.status}`);
    }
    var data = await response.json();
    console.log(data);

    data.items.forEach(function (item) {
      var title = item.volumeInfo.title;
      var author = item.volumeInfo.authors[0];
      var link = item.volumeInfo.previewLink;
      var imageLink = item.volumeInfo.imageLinks.smallThumbnail;
      var newItem = `<li>Title: ${title}<br> Author:${author}<br><a href="${link}">${link}</a><br><img src="${imageLink}"></li><br><br><br>`;
      bookList.innerHTML += newItem;
    });
  } catch (error) {
    console.log(error.message);
  }
}

getData();
