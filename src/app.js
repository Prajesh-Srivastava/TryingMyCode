// const path =require('path')
// const express = require('express')

// const app =express()

// const publicsrchai =path.join(__dirname,'../public')

// app.use(express.static(publicsrchai))

// app.listen(3000,()=>{
//     console.log('serverpage satrted')
// })

const { response } = require('express')
const express =require('express')
const app=express()

// app.use((req, res)=> {
//             res.status(200).json({
//               message:'This is working'
//             })
//             res.send('Server is running at 3003')
           
//changin some things here to try github checks
//         })


app.post('/',(req,res)=>{
  res.send('jadsdnjnsd')
})



app.get('/postme',(req,res)=>{
  res.send('hello')
})


// app.get('*',(req,res)=>{
//   res.send('404 Page  ')
// })
app.listen(3003,()=>{
  console.log('Server is up')
})


module.exports=app