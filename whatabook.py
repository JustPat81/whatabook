#    Title: whatabook.py
#    Author: Patrick Wolff & Kailee Stephens 
#    Date: 7 October 2022
#    Description: WhatABookConnect Python to MongoDB 

from pymongo import MongoClient
from pprint import pp

#SSL certification fix 
import certifi
ca = certifi.where()

# connection to MongoDB
client = pymongo.MongoClient("mongodb+srv://web335_user:s3cret@buwebdev-cluster-1.tq1o4.mongodb.net/?retryWrites=true&w=majority",tlsCAFile=ca)

# Variable to access web335DB
db = client["web335DB"]
# Variable to access the customer collection
customerCol = db["customers"]
# Variable to access books collection
bookCol = db["books"]


# Display a list of books
print("List of Books")
books = bookCol.find({},{"_id":0})
for book in books:
    pp(book)
print('\n')

# Display a list of customers
print("CustomerId List")
customerId = customerCol.find({},{"_id":0})
for customer in customerId:
    pp(customer)
print('\n')

#Display a list of books by Genre
print("View by Genre")
genre = input("Enter a genre:")
books = bookCol.find_one({"genre": genre},{"_id": 0, "firstName": 0, "lastName": 0})

if books :
    pp(books)
else:
    raise Exception("No Books in This Genre.")

# Display a customers wishlist by customerId.
# Insert customerId to view wishlist 
print("Wishlist by CustomerId")
customerId = input("Enter a customer id: ")
customer = customerCol.find_one({"customerId": customerId},{ "_id": 0, "firstName": 0, "lastName": 0 })

if customer: 
    pp(customer)
else: 
    raise Exception("Customer does not exist.")
  
