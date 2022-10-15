//Middleware example
//  const express = require('express');
//  const app = express();
// function middle(req,res,next)
// {
//     console.log('Middle ware data');
//     next();
// }
// //  app.use(middle);

// app.get('/',middle,(req,res)=> { console.log("request done")})


// app.listen(5000,() => console.log(`server is started at 5000`))

const express = require('express');
const app = express();

const middle = (req,res,next) =>{
    console.log('This is middle ware')
    next();
}

// app.use(middle)

app.get('/',middle,(req,res) => {
    console.log(" hii")
})

app.listen(5000,() => console.log("server started at 5000 7"))