const dataB = require("../config/oracleConnection");

exports.add = async (req, res) =>{
    const {
        name, 
        description,
        reward,
        age
    } = req.body;

    let query = `insert into GoodAction(title, description, reward, age)
    values('${name}', '${description}', ${reward}, ${age})`;

    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "Insert Successfully"});

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.addDetail = async (req, res) =>{
    const {
        code, 
        child
    } = req.body;

    let query = `insert into GOODACTIONDETAIL(cod_child, cod_goodaction, cod_status)
    values(${child}, ${code}, 2)`;
    console.log(query);
    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "Insert Successfully"});

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.show = async (req, res) =>{

    let query = "select * from goodaction";
    
    try {
        
        let result = await dataB.Open(query, [], false);
        let goodActions = [];

        goodActions = result.rows.map((item) =>{
            let actionArray = {
                code: item[0],
                name: item[1],
                description: item[4],
                reward: item[2],
                age: item[3]
            };
            return actionArray;
        });
        
        res.json(goodActions);

    } catch (error) {
        console.log(error);
        res.json({});
    }

};

exports.show2 = async (req, res) =>{

    const code = req.params.code

    let query = `select * from goodaction g
    where g.COD_GOODACTION not in (
        select gt.COD_GOODACTION from GOODACTIONDETAIL gt
        )
    or ${code} not in (
        select gt.COD_CHILD from GOODACTIONDETAIL gt
        )`;
    
    try {
        
        let result = await dataB.Open(query, [], false);
        let goodActions = [];

        goodActions = result.rows.map((item) =>{
            let actionArray = {
                code: item[0],
                name: item[1],
                description: item[4],
                reward: item[2],
                age: item[3]
            };
            return actionArray;
        });
        
        res.json(goodActions);

    } catch (error) {
        console.log(error);
        res.json({});
    }

};

exports.count = async (req, res) =>{
    const code = req.params.code

    let query = `select sum(g.REWARD) as canes
    from GOODACTION g
    join GOODACTIONDETAIL gd on g.COD_GOODACTION = gd.COD_GOODACTION
    where gd.COD_CHILD = ${code}`;
    
    try {
        
        let result = await dataB.Open(query, [], false);
        
        let canes = result.rows[0][0];
        
        res.json({canes});

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.modify = async (req, res) =>{

    const {
        name,
        description, 
        reward,
        age
    } = req.body;

    const code = req.params.code;

    let query = `update goodaction set title = '${name}', description = '${description}',
    reward = ${reward}, age = ${age} where cod_goodaction = ${code}`;
    console.log(query);
    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "action modify"})

    } catch (error) {
        console.log(error);
        res.json({});
    }

};

exports.delete  = async (req, res) =>{

    const code = req.params.code;

    let query = `delete from goodaction where cod_goodaction = ${code}`;

    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "Action deleted"});

    } catch (error) {
        console.log(error);
        res.json({});
    }

};