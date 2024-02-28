const mongoose = require('mongoose');
mongoose.connect(process.env.DbUrl).then(()=>{
    console.log('DB connect successfull');
}).catch((err)=>{
    console.log('DB connection Failed');
    console.log(err);
})  ;