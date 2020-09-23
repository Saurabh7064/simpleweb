const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('Hi there sairabh');
})

app.listen(9293, ()=> {
    console.log('Listening on port 9293')
});