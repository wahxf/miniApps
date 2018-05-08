const express = require("express");

let server = express();
server.listen(8080);
console.log("dfdf");
server.get("/tags",(req,res)=>{
//	res.send({name:"张三",age:40})
	res.send({"sites": [
        { "title":"Google", "info":[ "Android"]},
        { "title":"Runoob", "info":[ "菜鸟教程", "菜鸟工具"]},
        { "title":"Taobao", "info":[ "淘宝"]},
        { "title":"Google", "info":[ "Android"]},
        { "title":"Runoob", "info":[ "菜鸟教程", "菜鸟工具"]},
        { "title":"Taobao", "info":[ "淘宝"]},
        { "title":"Google", "info":[ "Android"]},
        { "title":"Runoob", "info":[ "菜鸟教程", "菜鸟工具"]},
        { "title":"Taobao", "info":[ "淘宝"]}
        
    ]})
})

server.get("/tags2",(req,res)=>{
//	res.send({name:"张三",age:40})
	res.send({"num":"true","sites": [
        { "title":"1", "info":[ "Android"]},
        { "title":"2", "info":[ "菜鸟教程", "菜鸟工具"]},
        { "title":"3", "info":[ "淘宝"]},
        { "title":"4", "info":[ "Android"]},
        { "title":"5", "info":[ "菜鸟教程", "菜鸟工具"]},
        { "title":"6", "info":[ "淘宝"]},
        { "title":"7", "info":[ "Android"]},
        { "title":"8", "info":[ "菜鸟教程", "菜鸟工具"]},
        { "title":"9", "info":[ "淘宝"]}
        
    ]})
})