const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const pool = require("../database/pgdb")


exports.registerUser = async (req, res, next) => {
    const { email, password, role } = req.body;

    if (email === '' || password === '' || role === '') {
        return res.status(422).json({ msg: "Incomplete fields", success: 0 });
    }

    let sql = `SELECT * FROM users WHERE email=$1;`;

    const user = await pool.query(sql, [email]);
    if (user.rows[0]) {
       return res.status(200).json({ msg: "User already exists", success: 0 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    sql = `INSERT INTO users (email,password,role) VALUES ($1,$2,$3);`;
    let bind = [email, hashedPassword, role];
    try {
        await pool.query(sql, bind);
       return res.status(200).json({ msg: "User created successfully", success: 1 });
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ msg: err, success: 0 });
    }

}

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    let sql = `SELECT * FROM users WHERE email=$1;`;

    let user = await pool.query(sql, [email]);
    if (!user.rows[0]) {
        return res.status(200).json({ msg: "User not found", success: 0 });
    }

    user = user.rows[0];
    console.log(user);

    let userPassword = user.password;
    if (bcrypt.compareSync(password, userPassword)) {
        const token = jwt.sign({
            email
        }, "SecretNooneShouldKnow", { expiresIn: '2h' });
        return res.status(200).json({ msg: "Logged In successfully", token, success: 1 })
    }

    return res.status(500).json({ msg: "Login failed", success: 0 })

}

exports.getUsers = async (req, res, next) => {

    if (!req.isAuth) {
        return res.json({ msg: "Unauthorized entry" })
    }

    let sql = `SELECT * FROM users;`;

    let user = await pool.query(sql);

    return res.status(200).json({ success: 1, user: user.rows });

}