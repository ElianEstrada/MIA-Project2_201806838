const dataB = require("../config/oracleConnection");

exports.addLetter = async (req, res) => {

    const {
        name, 
        body,
        date,
        cod_child
    } = req.body;

    let query = `insert into Letter(title, body, date, cod_child, cod_statusletter)
    values('${name}', '${body}', '${date}', ${cod_child}, 2)`;

    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "Insert Successfully"});

    } catch (error) {
        console.log(error);
        res.json({});
    }

};

exports.showLetters = async (req, res) => {
    const code = req.params.code
    let query = `select * from letter where cod_child = ${code}`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let letters = [];

        letters = result.rows.map((item) =>{
            let actionArray = {
                code: item[0],
                name: item[1],
                body: item[3],
                date: item[4]
            };
            return actionArray;
        });
        
        res.json(letters);

    } catch (error) {
        console.log(error);
        res.json({});
    }

};

exports.Send = async (req, res) => {

};
