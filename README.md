# TechEval: Tyler Joseph

This is an application that retrieves and displays AI generated art from an express.JS backend & postgresql database on a React.JS frontend. Functionality includes creating, modifying, and deleting products.

[Live Deployment](https://tylerjoseph-techeval-frontend.herokuapp.com/products)

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
                "data": 
                {
                    "product_title": "Midnight Walks", 
                    "product_description": "Great Description", 
                    "product_image": "https://i.imgur.com/2S4GjDY.jpg", 
                    "product_price": "109.99"
                }  
            }

     /products/:product_id
        GET - Retrieves a specific product. product_id must be a number
        PUT - Updates a specific product. Likes is required
            Format:
            {
                "data":
                {
                    "product_title": "Midnight Walks", 
                    "product_description": "A Very Bland Description", 
                    "product_image": "https://i.imgur.com/2S4GjDY.jpg", 
                    "product_price": 119.99,
                    "product_likes": 101
                }
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

## Installation Tips
- To host the backend on your local machine, set the REACT_APP_BACKEND_API environment variable with ```http://localhost:5000``` Mac users may need to specify a different port.

- Please check sample .env file

1. Run ```npm install``` in both the ```front-end``` & ```back-end``` folders, then run ```npm run start``` in both directories. 

## Reflection
Overall this project has been a great experience, from start to finish. After spending a great deal of time on the frontend, I realize that I still have very much to learn about CSS and HTML in general. 

The state of the frontend alone has inspired me to take a step back, assess my CSS skills, and start focusing on learning more about CSS and frontend development. I built the backend out more, and had a great time developing it. 

Perhaps I could investigate different design patterns or workflows for using Express.js in the future.
