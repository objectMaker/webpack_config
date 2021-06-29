const express = require('express')
const app = express()
app.get('/test',(req,res)=>{
    console.log(req.query);
    console.log(req.data);
    if(req.query.name === 'abc'){
        res.send('你的名字是abc')
    }else{
        res.send('你的名字不是abc')
    }
})
app.listen('3001',function (){
    console.log('服务器启动成功');
})