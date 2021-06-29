import './test.css'
import axios from "axios";
console.log(1);
let abc= ()=>{

};
import a from './eee.png';
let b = new Image();
b.src = a;
document.querySelector('#root').appendChild(b);
import f from './fff.png';
let c = new Image();
c.src = f;
document.querySelector('#root').appendChild(c);

//发送跨域请求测试
axios.get('http://localhost:8082/api/test',{
    params:{
        name:'abc'
    },
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
}).then(value=>{
    console.log(value);
},reason=>{
    console.log(reason);
})
