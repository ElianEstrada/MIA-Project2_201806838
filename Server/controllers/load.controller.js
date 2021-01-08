const dataB = require("../config/oracleConnection");
const fs = require('fs'),
readline = require('readline');

exports.load = async (req, res) =>{
    const file = req.files;
    let query = "truncate table TEMPORAL"
    try {
        let array = [];
        let count = 0;

        await dataB.Open(query, [], false);

        fs.readFile(file.fileKey.path, 'utf8', (err, data) =>{
            console.log("Entro");
            if(err){
                console.log(err);
                return
            }

            array = data.split("\r\n");
            validation(array);
            res.json({})
        })

    } catch (err) {
        console.log(err);
        res.json({})
    }
};

validation = async (array) =>{
    let attributes = []

    for (let i = 1; i < array.length; i++) {
        attributes = array[i].split(',')

        let query = `begin bulk_load('${attributes[0]}', '${attributes[1]}', '${attributes[2]}', '${attributes[3]}', '${attributes[4]}', 
        '${attributes[5]}', '${attributes[6]}', '${attributes[7]}', ${attributes[8]}, ${attributes[9]}, ${attributes[10]}, '${attributes[11]}', 
        '${attributes[12]}', '${attributes[13]}', ${attributes[14]}, ${attributes[15]}); end;`;

        try {
            
            await dataB.Open(query, [], false);
            
        } catch (error) {
            console.log(error);
        }
    }

    console.log("Successfully");

}