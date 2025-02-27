import express from 'express';
import {PORT2} from './env.js';
import path from 'path';

const app = express()
const staticAbout = path.join(import.meta.url , 'public' , 'about.html')
app.use(express.static('public'))

app.get('/contact' , (req , res)=>{
    res.send('<h1 style="font-family:cursive;">Contact page of express</h1>')
 res.redirect('/')
})
app.listen(PORT2 , ()=>{
    console.log(`server is running on port ${PORT2}`)
})