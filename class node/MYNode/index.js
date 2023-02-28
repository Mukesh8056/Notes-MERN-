const express = require('express')

const app = express();

const port =process.env.PORT||3005;

app.get ('/',(req,res)=>{

    res.sent("hello fucking world")
});

const routes = require('./src/routes/routes');

app.use('/api/user' , routes);

app.listen(port,()=>{

    console.log(`server is running in ${port}`)
})