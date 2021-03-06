const { render } = require('ejs');
const express = require('express');
const app = express();
const server = require('http').Server(app)

const port = process.env.PORT




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
server.listen(process.env.PORT || 3000)

