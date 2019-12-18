const express =require("express");
const bodyparser =require("body-parser");
const jwt = require('jsonwebtoken');
const app =  express();

//DB  Connection
require("./mongoDBConnection")


//Using bodyparser in express
app.use(bodyparser.json());

// Need to refactor later
app.post('/api/login', (req, res) => {
    // Mock user
    const user = {
      id: 1, 
      username: 'brad',
      email: 'brad@gmail.com'
    }

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
          token
        });
      });
    });

    // FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[1];
      // Set the token
      req.token = bearerToken;
      // Next middleware
      next();
    } else {
      // Forbidden
      res.sendStatus(403);
    }
  
  }

  //End of Refactor code

//Using Multiple CustomRouters in express
app.use("/category",require("./routes/CategoryRoute"));
app.use("/product",verifyToken,require("./routes/ProductRoute"));


app.listen(7777,function(){
    console.log("server is running");
});