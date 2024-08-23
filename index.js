const express = require("express")

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log("Server is running!")
})




// Home page

app.get("/", (request, response) => {
    response.json("Welcome to the Home Page.")
}) 



// User data

app.get("/user/data", (request, response) => {
    const user_data = [
        {
            "name": "Rilwan",
            "email": "rilwan@gmail.com",
            "is_verified": false,
            "has_products": true
        },

        {
            "name": "Emiloju",
            "email": "emiloju@gmail.com",
            "is_verified": false,
            "has_products": false
        },

        {
            "name": "David",
            "email": "david@gmail.com",
            "is_verified": true,
            "has_products": false
        },

        {
            "name": "Shawn",
            "email": "shawn@gmail.com",
            "is_verified": true,
            "has_products": true
        },

        {
            "name": "Victoria",
            "email": "victoria@gmail.com",
            "is_verified": false,
            "has_products": true
        },


    ]
    response.json(user_data)
})



// Users' names

app.get("/users/names", (request, response) => {
    const names = ["Rilwan", "Emiloju", "David", "Shawn", "Victoria"]
    response.json(names)
})



// Users' ages

app.get("/users/ages", (request, response) => {
    const ages = [18, 20, 35, 45, 50]
    response.json(ages)
})


