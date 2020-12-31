const dataB = require("../config/oracleConnection");

exports.addChild = async (req, res) => {
  const {
    name,
    nickName,
    password,
    birthDate,
    budget,
    gender,
    father,
  } = req.body;

  let query = `begin addChild('${name}', '${nickName}', '${password}', '${birthDate}', '${budget}', '${gender}', '${father}'); end;`;
  try {
    await dataB.Open(query, [], false);

    res.json({ Info: "Child added successfully" });
  } catch (err) {
    console.log("Error to realise consult: ", err);
    res.json({});
  }
};

exports.getChild = async (req, res) => {
  let query = "select * from Child";
  try {
    result = await dataB.Open(query, [], false);
    users = [];

    console.log(result.rows);
    users = result.rows.map((user) => {
      let userRows = {
        name: user[1],
        email: user[2],
        password: user[3],
      };

      return userRows;
    });

    res.json(users);
  } catch (err) {
    console.log(err);
    res.json({});
  }
};

exports.deleteChild = async (req, res) =>{ 
  const codeChild = req.params.code
  let query = `begin deleteChild(${codeChild}); end;`
  console.log(query);
  try {
      result = await dataB.Open(query, [], false);
      console.log(result);
      res.json({"Info": "The Child delete successfully"})
  }
  catch(err) {
    console.log(err);
    res.json({})
  }
}

exports.modifyChild = async (req, res) =>{
  const code = req.params.code;
  const {name, nickName, budget } = req.body;

  let query = `begin modifyChild(${code}, '${name}', '${nickName}', '${budget}'); end;`;
  console.log(query);

  try{
    result = await dataB.Open(query, [], false);
    console.log(result);
    res.json({"Info": "The child modify successfully"});
  }
  catch(err){
    console.log(err);
    res.json({})
  }

}