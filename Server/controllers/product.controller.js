const { query } = require("express");
const dataB = require("../config/oracleConnection");
const { login } = require("./login.controller");

exports.showAll = async (req, res) =>{
    let query = `select p.COD_PRODUCT, p.NAME, p.PRICE, p.AGE, c.cod_category, c.NAME from PRODUCT p
    join CATEGORY c on c.COD_CATEGORY = p.COD_CATEGORY
    order by p.COD_PRODUCT`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let products = []

        products = result.rows.map((item) =>{
            let productArray = {
                code: item[0],
                name: item[1],
                price: item[2],
                age: item[3], 
                category: item[4],
                nameCategory: item[5]
            };

            return productArray;
        });

        res.json(products); 
    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.getCategorys = async (req, res) =>{
    let query = "select * from category"
    try {
        
        let result = await dataB.Open(query, [], false);
        let category = []

        category = result.rows.map((item) =>{
            let categoryArray = {
                code: item[0],
                name: item[1]
            };

            return categoryArray;
        });

        console.log(category);
        res.json(category); 

    } catch (error) {
        console.log(error);
        res.json({});
    }
}

exports.addProduct = async (req, res) =>{
    const { name, price, age, category } = req.body
    let query = `begin addProduct('${name}', ${price}, ${age}, ${category}); end;`;

    try {
        
        await dataB.Open(query, [], false);

        res.json({"Info": "Successfully"})

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.modify = async (req, res) =>{
    const {name, price, age, category } = req.body
    const code = req.params.code;
     
    let query = `update product set name = '${name}', price = ${price}, age = ${age}, cod_category = ${category} where cod_product = ${code}`

    try {
        
        await dataB.Open(query, [], true);

        res.json({"Info": "Modify Successfully"});

    } catch (error) {
        console.log(error);
        res.json({});
    }
}

exports.delete = async (req, res) =>{
    let query = `delete from Product p where p.COD_PRODUCT = ${req.params.code}`;
    
    try {
        await dataB.Open(query, [], true);

        res.json({"Info": "Successfully"})
    } catch (error) {
        console.log(error);
        res.json({})
    }
};