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
app.get('/bc',(req,res)=>{
    if(req.query.name = '小红'){
        res.send('赤饭睡觉')
    }else{
        res.send('你不是小红')
    }
})
app.listen('3001',function (){
    console.log('服务器启动成功');
})
