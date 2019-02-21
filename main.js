var express=require("express")
var app=new express();//una nueva forma de poner express preguntar
var http=require("http").Server(app)
var io=require("socket.io")(http)
var log=require("log")
log=new log('debug')
var port=process.env.PORT || 3000
app.use(express.static(__dirname+"/public"))//esto es para que lea lo que esta en public los html
app.get("/",function(res,req){//esto pone en el main 
    res.redirect('index.html')
})
io.on('connection',function(socket){//esto conecta 
    socket.on('stream',function(imagen){
        socket.broadcast.emit('stream',imagen)
    })
})
http.listen(3000)//puerto :v

console.log("Servidor Activo")