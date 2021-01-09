const dataB = require("../config/oracleConnection");

exports.comment = async (req, res) => {
    const {
        body,
        date,
        cod_post,
        cod_child
    } = req.body;

    let query = `insert into commentary(datecomment, body, cod_post, cod_child)
    values('${date}', '${body}', ${cod_post}, ${cod_child})`;

    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "Insert Successfully"});

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.getPost = async (req, res) => {

    let query = `select * from post`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let posts = [];

        posts = result.rows.map((item) =>{
            let actionArray = {
                code: item[0],
                subject: item[1],
                body: item[2],
            };
            return actionArray;
        });
        
        res.json(posts);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.getCommentary = async (req, res) => {
    const code = req.params.code
    let query = `select * from COMMENTARY c
    join CHILD C2 on c.COD_CHILD = C2.COD_CHILD
    where cod_post = ${code}`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let commentarys = [];

        commentarys = result.rows.map((item) =>{
            let actionArray = {
                code: item[0],
                date: item[1],
                body: item[3],
                name: item[6]
            };
            return actionArray;
        });
        
        res.json(commentarys);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};