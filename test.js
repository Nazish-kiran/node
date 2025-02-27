import express from 'express';
import {PORT2} from './env.js';
import path from 'path';

const app = express()
const staticAbout = path.join(import.meta.dirname , 'public')
app.use(express.static(staticAbout))
app.use(express.urlencoded({extended:true}))

// app.get('/contact' , (req , res)=>{
//     console.log(req.query);
//  res.redirect('/')
// })

app.post('/contact' , (req , res)=>{
    console.log(req.body);
 res.redirect('/')
})


app.listen(PORT2 , ()=>{
    console.log(`server is running on port ${PORT2}`)
})