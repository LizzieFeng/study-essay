let express = require('express'); 
let app = new express(); 

let filter = (req, res, next) => {
    console.log(req.query);
    let {sleep} = req.query;
    if(sleep){
        sleepFun(sleep).then(()=> next());
    }else{
        next();
    }

};

app.use(filter);
app.use('/static', express.static('public'));

app.listen(3000,"127.0.0.1");

function sleepFun(time) {
    return new Promise(function(res) {
        setTimeout(() => {
            res()
        }, time);
    })
}

