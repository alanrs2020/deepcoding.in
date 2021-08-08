const { render } = require('ejs');
const express = require('express');
const port = process.env.port || 4455


const app = express();

app.set('view engine', 'ejs')
app.set('views', './views');
app.use(express.static('public'))

app.get('/explore', (request, response)=>{
    response.render('posts')
})
app.get('/logo', (request,response)=>{
    response.sendFile('images/logodc.png')
})
app.get('/', (request, response)=>{
    response.render('index');
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.get("/register", (req,res)=>{
    res.render('register');
})
app.get("/postid/:name/:post",(request, response)=>{
    response.render('post', { postId: request.params.post })
    
})
app.listen(port,err=>{
    console.log("Listening port "+port)
})

