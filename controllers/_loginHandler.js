const bcrypt = require("bcryptjs");
const user = require("../models/User");
const cors = require("cors");

router.use(cors());

async function signinHandler(req, res) {
  const body = req.body;
  try {
    console.log(body);

    const result = await user.find({ username: body.username });
    console.log("result="+result[0])

    const passwordMatch = bcrypt.compareSync(body.password, result[0].password);
    if (passwordMatch) {
    //   if (result[0].isAdmin) {
    //    console.log("Redirect to Admin Dashboard");
    //    res.redirect('/');
    //   } else {
    //     res.send("Redirect to user dashboard");
    //     res.redirect('/');
    //   }
    res.json(result[0])
    } else {
      res.json({"error":"password doesnt match"});
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = signinHandler;
