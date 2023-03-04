const express = require('express');
const mysql = require('mysql');
const random = require('random-name');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'appdb',
};

const insertRandomName = () => {
    const connection = mysql.createConnection(config);

    connection.query(`INSERT INTO people(name) VALUES ('${random()}')`);

    connection.end();
};

insertRandomName();

const fetchNameList = () => {
    const errorResponse = '<p style="color:indianred">Something went wrong :(</p>';

    const connection = mysql.createConnection(config);

    return new Promise(resolve => {
        connection.query('SELECT * FROM people', (error, result) => {
            if (error != null) {
                resolve(errorResponse);

                return;
            }

            const items = result.map(({name}) => `<li>${name}</li>`);

            resolve(`<ul>${items.join('')}</ul>`);
        });
    }).finally(() => connection.end());
}

app.get('/', async (req, res) => {
    res.send(`
        <h1>Full Cycle Rocks!</h1>
        ${await fetchNameList()}
    `);
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
