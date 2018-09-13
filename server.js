const express = require('express');
const app = express();
let port = process.env.PORT || '5000';
app.use(express.static('./'))
app.use(express.static('public'))


app.listen(port, () => {
    console.log(`running on ${port}`);
    
})

