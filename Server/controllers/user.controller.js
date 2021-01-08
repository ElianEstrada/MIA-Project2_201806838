const dataB = require("../config/oracleConnection");

exports.addUsers = async (req, res) => {
  const {
    name,
    email,
    password,
    telephone,
    userType,
    municipality,
    department,
    longitude,
    latitude,
    description
  } = req.body;

  let query = `begin addUser('${name}', '${email}', '${password}', ${telephone}, ${userType}, ${municipality}, ${department}, ${longitude}, 
  ${latitude}, '${description}'); end;`;
  try {
    await dataB.Open(query, [], false);

    res.json({ Info: "User added successfully" });
  } catch (err) {
    console.log("Error to realise consult: ", err);
    res.json({});
  }
};

exports.getUsers = async (req, res) => {
  let query = "select * from Users";
  try {
    result = await dataB.Open(query, [], false);
    users = [];

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
