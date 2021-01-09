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

exports.modify = async (req, res) => {
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
  const code = req.params.code;

  let query = `update Users set name = '${name}', email = '${email}', 
  password = '${password}', telephone = ${telephone}, cod_userType = ${userType}, cod_municipality =  ${municipality}, 
  cod_department = ${department}, longitude =  ${longitude}, latitude =  ${latitude}, description = '${description}' where cod_user = ${code}`;
  try {
    await dataB.Open(query, [], true);

    res.json({ Info: "User added successfully" });
  } catch (err) {
    console.log("Error to realise consult: ", err);
    res.json({});
  }
};

exports.delete = async (req, res) =>{
  const code = req.params.code;
  let query = `delete from Users where cod_user = ${code}`;

  try {
    
    await dataB.Open(query, [], true);

    res.json({"Info": "deleted Successfully"});

  } catch (error) {
    console.log(error);
    res.json({});
  }
};

exports.getUsers = async (req, res) => {
  let query = `select U.COD_USER, U.NAME, U.EMAIL, U.PASSWORD, U.TELEPHONE, U.COD_DEPARTMENT, D.NAME, U.COD_MUNICIPALITY, M.NAME, UT.COD_USERTYPE, UT.NAME as UserType, to_number(null) as Budget, to_number(null) as cod_user, null as Name, null as Birthdate, to_number(null) as code_gender, null as name,
  U.DESCRIPTION, U.LONGITUDE, U.LATITUDE
from USERS U
    JOIN USERTYPE UT on U.COD_USERTYPE = UT.COD_USERTYPE
   join DEPARTMENT D on U.COD_DEPARTMENT = D.COD_DEPARTMENT
   join MUNICIPALITY M on U.COD_MUNICIPALITY = M.COD_MUNICIPALITY
union all
select C.COD_CHILD as COD_USER, C.NAME, C.NICKNAME as EMAIL, C.PASSWORD, U.TELEPHONE, U.COD_DEPARTMENT, D.NAME, U.COD_MUNICIPALITY, M.NAME, 0 as cod_userType, null as UserType, C.BUDGET, C.COD_USER, U.NAME, C.BIRTHDATE, C.COD_GENDER, G.NAME,
  U.DESCRIPTION, U.LONGITUDE, U.LATITUDE
from CHILD C
join USERS U on C.COD_USER = U.COD_USER
join DEPARTMENT D on U.COD_DEPARTMENT = D.COD_DEPARTMENT
   join MUNICIPALITY M on U.COD_MUNICIPALITY = M.COD_MUNICIPALITY
   left join GENDER G on C.COD_GENDER = G.COD_GENDER`
  try {
    result = await dataB.Open(query, [], false);
    users = [];

    users = result.rows.map((user) => {
      let userRows = {
        code: user[0],
        name: user[1],
        email: user[2],
        password: user[3],
        telephone: user[4],
        codeDepartment: user[5],
        department: user[6],
        codeMunicipality: user[7],
        municipality: user[8],
        userType: user[9],
        nameUserType: user[10],
        budget: user[11],
        codeParent: user[12],
        nameParent: user[13],
        birthdate: user[14],
        codeGender: user[15],
        gender: user[16],
        description: user[17],
        longitude: user[18],
        latitude: user[19]
      };
      console.log(user[18]);
      return userRows;
    });

    res.json(users);
  } catch (err) {
    console.log(err);
    res.json({});
  }
};

exports.getUserType = async (req, res) =>{
  let query = "select * from UserType";

  try {
    
    let result = await dataB.Open(query, [], false);
    let usersType = []

    usersType = result.rows.map((item) =>{
      let typeArray = {
        code: item[0],
        name: item[1]
      };
      
      return typeArray;
    });

    res.json(usersType);

  } catch (error) {
    console.log(error);
    res.json({});
  }
};

exports.getGender = async (req, res) =>{
  let query = "select * from gender";

  try {
    
    let result = await dataB.Open(query, [], false);
    let genders = []
    
    genders = result.rows.map((item) =>{
      let genderArray = {
        code: item[0],
        name: item[1]
      };

      return genderArray;
    });

    res.json(genders);

  } catch (error) {
    console.log(error);
    res.json({});
  }
};

exports.getParents = async (req, res) =>{
  let query = "select * from users where cod_usertype = 2";

  try {
    
    let result = await dataB.Open(query, [], false);
    let parents = []
    
    parents = result.rows.map((item) =>{
      let parentArray = {
        code: item[0],
        name: item[1]
      };

      return parentArray;
    });

    res.json(parents);

  } catch (error) {
    console.log(error);
    res.json({});
  }
};
