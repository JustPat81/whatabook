/* =========================================
* Title: brainybadgers-whatabook.js
* Authors: Patrick Wolff, Kailee Stephens, Anita Taylor
* Date: 27 September 2022
* Description: Queries for WhatABook project
* ==========================================
*/

// Delete the customers and books collections.
db.customers.drop();
db.books.drop();

//create customers and books collection using document validation
db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        customerId: {
          bsonType: "string",
        },
        wishlistItems: {
          books: [
            {
              title: {
                bsonType: "string",
              },
              genre: {
                bsonType: "string",
              },
              author: {
                bsonType: "string",
              },
              bookId: {
                bsonType: "string",
              },
            },
          ],
        },
      },
    },
  },
});

db.createCollection("books", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        title: {
          bsonType: "string",
        },
        genre: {
          bsonType: "string",
        },
        author: {
          bsonType: "string",
        },
        bookId: {
          bsonType: "string",
        },
      },
    },
  },
});

//create customers with wishlist
winslow = {
    customerId: "1000",
    firstName: "Carl",
    lastName: "Winslow",
    wishlistItems: [
        {
            "title": "Fairy Tale",
            "genre": "Horror",
            "author": "Stephen King",
            "bookId": "1668002175"
        },
        {
            "title": "Infinite Jest",
            "genre": "Fiction",
            "author": "David Foster Wallace",
            "bookId": "0316920045" 
        },
    ],
};

anderson = {
    customerId: "1001",
    firstName: "Patricia",
    lastName: "Anderson",
    wishlistItems: [
        {
            "title": "Dinners with Ruth",
            "genre": "Memoir",
            "author": "Nina Totenberg",
            "bookId": "1982188081"
        },
        {
            "title": "The Quarry Girls",
            "genre": "Thriller",
            "author": "Jess Lourey",
            "bookId": "1542034299" 
        },  
    ],
};

shanahan = {
    customerId: "1002",
    firstName: "Robin",
    lastName: "Shanahan",
    wishlistItems: [
        {
            "title": "Fire & Blood",
            "genre": "Fantasy",
            "author": "George R.R. Martin",
            "bookId": "1524796301"
        },
        {
            "title": "The Year of the Puppy",
            "genre": "Non-Fiction",
            "author": "Alexandra Horowitz",
            "bookId": "0593298004" 
        },
    ],
};


// Insert the customer documents
db.customers.insertOne(winslow);
db.customers.insertOne(anderson);
db.customers.insertOne(shanahan);

//create books

fairyTale = {
    title: "Fairy Tale",
    genre: "Horror",
    author: "Stephen King",
    bookId: "1668002175",
};

infiniteJest = {
    title: "Infinite Jest",
    genre: "Fiction",
    author: "David Foster Wallace",
    bookId: "0316920045"
};

dinnersWithRuth = {
    title: "Dinners with Ruth",
    genre: "Memoir",
    author: "Nina Totenberg",
    bookId: "1982188081"
};

theQuarryGirls = {
    title: "The Quarry Girls",
    genre: "Thriller",
    author: "Jess Lourey",
    bookId: "1542034299" 
};

fireAndBlood = { 
    title: "Fire & Blood",
    genre: "Fantasy",
    author: "George R.R. Martin",
    bookId: "1524796301"
};

theYearOfThePuppy = {
    title: "The Year of the Puppy",
    genre: "Non-Fiction",
    author: "Alexandra Horowitz",
    bookId: "0593298004"
};


//insert book documents
db.books.insertOne(fairyTale);
db.books.insertOne(infiniteJest);
db.books.insertOne(dinnersWithRuth);
db.books.insertOne(theQuarryGirls);
db.books.insertOne(fireAndBlood);
db.books.insertOne(theYearOfThePuppy);

//queries

//display a list of books
db.books.find();

//display books by genre
db.books.aggregate([{ $sort: { genre: 1 } }]);

//display books by author
db.books.aggregate([{ $sort: { author: 1 } }]);

//display books by bookId
db.books.find({ bookId: "0593298004" });

// Display a wishlist by customerId.
db.customers.find({ customerId: "1002" });
