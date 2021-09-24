const http= require ("http")
http.createServer(function(req,res){
const {url, method}= req

res.writeHead(200, {"Content-Type": "text/html"})
if(url == "/"){
    res.write("Welcome Home")
}
else if (url == "/about"){
    res.write(JSON.stringify({Name:"Evan", Attribute: "Confused"}))
}
else if(url == "/echo"){
    res.write("Echo!!!!")
}
        else{
            res.write("404 not found")
    }

    res.end()

} )
.listen(8080,function(){
    console.log("Its working stupid")
})