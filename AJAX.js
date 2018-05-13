
$.ajax({ url: "/books", type: "GET" }, function(data) {
  data.books.forEach(function (book) {
      var endpoint = "/books/" + book.id;
      if (book.author == "Lewis Carroll") {
          $.ajax({ url: endpoint, type: "DELETE" });
      } else if (book.author == "Terry Pratchett") {
          var request = {title: book.title.toUpperCase(), author: book.author};
          $.ajax({ url: endpoint, type: "POST", data: JSON.stringify(request) });
      }
  });
});