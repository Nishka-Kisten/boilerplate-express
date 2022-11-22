let express = require('express');
let app = express();


app.get("/", (req, res)=> {
  console.log("Hello World")
}
)

















app.listen(3000, function () {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });
















 module.exports = app;
