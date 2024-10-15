const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/", async (req, res) => {
  const { email, password } = req.body;

  // Check if password is empty
  if (!password) {
      return res.status(401).send('Password is required');
  }

  try {
      const check = await collection.findOne({ email: email });

      if (check) {
          // Check if the password matches the one in the database
          if (check.password === password) {
              res.json("exist");
          } else {
              res.json("wrong password");
          }
      } else {
          res.json("notexist");
      }

  } catch (e) {
      res.json("fail");
  }

});


app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  // Check if password is empty
  if (!password) {
      return res.status(401).send('Password is required');
  }

  const data = {
      email: email,
      password: password
  };

  try {
      const check = await collection.findOne({ email: email });

      if (check) {
          res.json("exist");
      } else {
          res.json("notexist");
          await collection.insertMany([data]);
      }

  } catch (e) {
      res.json("fail");
  }

});


app.listen(8000,()=>{
    console.log("port connected");
})