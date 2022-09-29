# TechEval: Tyler Joseph

This is an application that retrieves and displays AI generated art from an express.JS backend & postgresql database on a React.JS frontend. Functionality includes creating, modifying, and deleting products.

[Live Deployment]()

## API

| Route       | Get         | Put        | Post         | Delete       |      
| ----------- | ----------- | ---------- | ------------ | ------------ |
| ```/products```      | ✅      |❌      | ✅    |       ❌       |
| ```/products/:product_id```   | ✅        | ✅       | ❌         | ✅         |
| ```/products/:product_id/like```      | ❌      |❌      | ✅    |       ✅       |
## Backend Routes - Explained
    
     /products 
        GET - Retrieves a list of all products
        POST - Creates a new product
            Format: 
            {
                "product_title": "Midnight Walks", 
                "product_description": "Great Description", 
                "product_image": "https://i.imgur.com/2S4GjDY.jpg", 
                "product_price": "109.99"
            }

     /products/:product_id
        GET - Retrieves a specific product. product_id must be a number
        PUT - Updates a specific product.
            Format:
            {
                "product_title": "Midnight Walks", 
                "product_description": "A Very Bland Description", 
                "product_image": "https://i.imgur.com/2S4GjDY.jpg", 
                "product_price": "119.99"
            }
        DELETE - Deletes a specified product.

    /products/:product_id/like
        POST - Increments the likes on a product by 1.
        DELETE - Decrements the likes on a product by 1.


## Technology Used
[![postgresql](https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png)](https://www.postgresql.org/) 
[![react](https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png)](https://reactjs.org/)
[![expressjs](https://hackr.io/tutorials/learn-express-js/logo/logo-express-js?ver=1557508379)](https://expressjs.com/)
[![nodejs](https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png)](https://nodejs.org/en/)

## Installation
    