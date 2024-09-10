// //"type": "module",
// // import { sumData } from "./Calculator.js";

// const sumData  = require("./Calculator")


// let output=sumData(10,20)

// console.log(output)

// import http from "http"

let http=require("http")

let server=http.createServer((req,res)=>{

    if(req.url=="/"){  //http://localhost:8000
        let obj={
            title:"Home Page",
            desc:"hello World"
        }
        res.end(JSON.stringify(obj))
    }
    if(req.url=="/about-us"){  //http://localhost:8000/about-us
        let obj={
            title:"About Page",
            desc:"hello World"
        }
        res.end(JSON.stringify(obj))
    }

    // // let user=[
    // //     {
    // //         name:"pradeep",
    // //         email:"pradeep@gmail.com"
    // //     },
    // //     {
    // //         name:"ravi",
    // //         email:"ravi@gmail.com"
    // //     }
    // // ]

    // // let obj={
    // //     status:1,
    // //     userList:user
    // // }
    // res.end( JSON.stringify(user) )
})

server.listen("8000")

//http://localhost:8000