const dataB = require("../config/oracleConnection");

exports.products10 = async (req, res) =>{
    let query = `select p.NAME, Count(p.NAME) as quantity
    from PRODUCT p
    join PRODUCTDETAIL P2 on p.COD_PRODUCT = P2.COD_PRODUCT
    join LETTER L on P2.COD_LETTER = L.COD_LETTER
    join STATUSLETTER S on L.COD_STATUSLETTER = S.COD_STATUSLETTER
    where S.COD_STATUSLETTER = 2
    group by p.NAME
    order by QUANTITY desc
    fetch first 10 rows only`

    try {
        
        let result = await dataB.Open(query, [], false);
        let data = []

        data = result.rows.map((item) =>{
            let dataArray = {
                name: item[0],
                quantity: item[1]
            };

            return dataArray;
        });

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.department10 = async (req, res) => {
    let query = `select d.NAME, count(d.NAME) as quantity
    from LETTER l
    join PRODUCTDETAIL P on l.COD_LETTER = P.COD_LETTER
    join CHILD C2 on l.COD_CHILD = C2.COD_CHILD
    join USERS u on C2.COD_USER = u.COD_USER
    join DEPARTMENT D on u.COD_DEPARTMENT = d.COD_DEPARTMENT
    join STATUSLETTER st on l.COD_STATUSLETTER = st.COD_STATUSLETTER
    where st.COD_STATUSLETTER = 2
    group by d.NAME
    order by QUANTITY desc
    fetch first 10 rows only`

    try {
        
        let result = await dataB.Open(query, [], false);
        let data = []

        data = result.rows.map((item) =>{
            let dataArray = {
                name: item[0],
                quantity: item[1]
            };

            return dataArray;
        });

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.municipality10 = async (req, res) => {
    let query = `select m.NAME, count(m.NAME) as quantity
    from LETTER l
    join PRODUCTDETAIL P on l.COD_LETTER = P.COD_LETTER
    join CHILD C2 on l.COD_CHILD = C2.COD_CHILD
    join USERS u on C2.COD_USER = u.COD_USER
    join MUNICIPALITY m on u.COD_MUNICIPALITY = m.COD_MUNICIPALITY
    join STATUSLETTER st on l.COD_STATUSLETTER = st.COD_STATUSLETTER
    where st.COD_STATUSLETTER = 2
    group by m.NAME
    order by QUANTITY desc
    fetch first 10 rows only`

    try {
        
        let result = await dataB.Open(query, [], false);
        let data = []

        data = result.rows.map((item) =>{
            let dataArray = {
                name: item[0],
                quantity: item[1]
            };

            return dataArray;
        });

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.category5 = async (req, res) => {
    let query = `select c.NAME, Count(c.NAME) as quantity
    from CATEGORY c
    join PRODUCT p on c.COD_CATEGORY = p.COD_CATEGORY
    join PRODUCTDETAIL P2 on p.COD_PRODUCT = P2.COD_PRODUCT
    join LETTER L on P2.COD_LETTER = L.COD_LETTER
    join STATUSLETTER S on L.COD_STATUSLETTER = S.COD_STATUSLETTER
    where S.COD_STATUSLETTER = 2
    group by c.NAME
    order by QUANTITY desc
    fetch first 5 rows only`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let data = []

        data = result.rows.map((item) =>{
            let dataArray = {
                name: item[0],
                quantity: item[1]
            };

            return dataArray;
        });

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.goodAction5 = async (req, res) => {
    let query = `select g.TITLE, count(g.TITLE) as quantity
    from GOODACTION g
    join GOODACTIONDETAIL gd on gd.COD_GOODACTION = g.COD_GOODACTION
    join STATUS s on gd.COD_STATUS = s.COD_STATUS
    where s.COD_STATUS = 2
    group by g.TITLE
    order by quantity desc
    fetch first 5 rows only`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let data = []

        data = result.rows.map((item) =>{
            let dataArray = {
                name: item[0],
                quantity: item[1]
            };

            return dataArray;
        });

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};

exports.letters = async (req, res) => {
    let query = `select l.DATELETTER, c.NAME, Sum(p2.PRICE * p.QUANTITY) as totalSale
    from LETTER l
    join CHILD c on l.COD_CHILD = c.COD_CHILD
    join PRODUCTDETAIL P on l.COD_LETTER = P.COD_LETTER
    join PRODUCT P2 on P.COD_PRODUCT = P2.COD_PRODUCT
    join STATUSLETTER st on l.COD_STATUSLETTER = st.COD_STATUSLETTER
    where st.COD_STATUSLETTER = 2
    group by l.DATELETTER, c.NAME
    order by totalSale desc`;

    try {
        
        let result = await dataB.Open(query, [], false);
        let data = []

        data = result.rows.map((item) =>{
            let dataArray = {
                date: item[0],
                name: item[1],
                total: item[2]
            };

            return dataArray;
        });

        res.json(data);

    } catch (error) {
        console.log(error);
        res.json({});
    }
};