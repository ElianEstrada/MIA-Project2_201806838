const dataB = require("../config/oracleConnection");

exports.login = async (req, res) => {
    const {nickName, email, password} = req.body;

    if (nickName === undefined) {
        console.log("this father");
        let query = `select * from USERS where email = '${email}' and password = '${password}'`
        try{
            let result = await dataB.Open(query, [], false);
            if (result.rows.length !== 0){
                res.json({"Info": `Welcome user ${result.rows[0][1]}`});
            }else{
                res.json({"Info": "The user doesn't exist"});
            }
        }
        catch(err){
            console.log(err);
            res.json({});
        }
    }else if (email === undefined){
        let query = `select * from Child where nickName = '${nickName}' and password = '${password}'`
        try{
            let result = await dataB.Open(query, [], false);
            if (result.rows.length !== 0){
                res.json({"Info": `Welcome user ${result.rows[0][1]}`});
            }else{
                res.json({"Info": "The user doesn't exist"});
            }
        }
        catch(err){
            console.log(err);
            res.json({});
        }
    }
};