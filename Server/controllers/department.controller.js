const dataB = require("../config/oracleConnection");

exports.getDepartment = async (req, res) => {
    let query = "select * from Department d order by d.COD_DEPARTMENT";
    
    try {
        
        result = await dataB.Open(query, [], false);
        let departments = []

        departments = result.rows.map((department) =>{
            let deptoArray = {
                value: department[0],
                name: department[1]
            };

            return deptoArray;
        });

        res.json(departments);

    } catch (err) {
        console.log(err);
        res.json({});
    }
}

exports.getMunicipality = async (req, res) =>{
    const { department } = req.body
    let query = `select * from Municipality m where cod_department =  ${department} order by m.cod_municipality`

    try {
        
        result = await dataB.Open(query, [], false);
        let municipalitys = []

        municipalitys = result.rows.map((municipaility) =>{
            let muniArray = {
                value: municipaility[0],
                name: municipaility[1]
            };

            return muniArray;
        });

        res.json(municipalitys);

    } catch (error) {
        console.log(error);
        res.json({});
    }
}