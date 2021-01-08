const dataB = require("../config/oracleConnection");

exports.login = async (req, res) => {
  const { nickName, email, password } = req.body;

  if (nickName === undefined) {
    console.log("this father");
    let query = `select * from USERS where email = '${email}' and password = '${password}'`;
    try {
      let result = await dataB.Open(query, [], false);
      if (result.rows.length !== 0) {
        let user = {
          code: result.rows[0][0],
          name: result.rows[0][1], 
          userType: result.rows[0][5]
      }
      
      res.json({user, Auth: "true"});
      } else {
        res.json({ Info: "The user doesn't exist" });
      }
    } catch (err) {
      console.log(err);
      res.json({});
    }
  } else if (email === undefined) {
    let query = `select * from Child where nickName = '${nickName}' and password = '${password}'`;
    try {
      let result = await dataB.Open(query, [], false);
      if (result.rows.length !== 0) {

        let user = {
            code: result.rows[0][0],
            nicikName: result.rows[0][2],
            budget: result.rows[0][5],
        }
        
        res.json({user, Auth: "true"});
      } else {
        res.json({ Info: "The user doesn't exist" });
      }
    } catch (err) {
      console.log(err);
      res.json({});
    }
  }
};
