const express = require("express");
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Wow, im excited to learn node....")
});

const users =[
    {id:0, name: 'Rimon', email: 'rimon@gmail.com', phone: "0178787878"},
    {id:1, name: 'Jeba', email: 'jeba@gmail.com', phone: "0178787878"},
    {id:2, name: 'Ronit', email: 'ronit@gmail.com', phone: "0178787878"},
    {id:3, name: 'Parves', email: 'parves@gmail.com', phone: "0178787878"},
    {id:4, name: 'Tonmoy', email: 'tonmoy@gmail.com', phone: "0178787878"},
    {id:5, name: 'Rafi', email: 'rockrafi@gmail.com', phone: "0178787878"},
    {id:6, name: 'Mira', email: 'mira@gmail.com', phone: "0178787878"},
    {id:7, name: 'Rifat', email: 'rifat@gmail.com', phone: "0178787878"},
]

app.get('/users', (req, res) =>{
    const search =req.query.search;
    // use quarry parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
});


// daynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) =>{
    res.send(["mango", 'orange', 'banana', 'lichi'])
});

app.get('/fruits/mango/fazli', (req, res) =>{
    res.send("Yammi Yammi tok marka fazli")
})
app.listen(port, () => {
    console.log('listening to port', port)
})