const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hellow From My First Ever Node")
});

app.listen(port, () => {
    console.log('listening to port', port)
})