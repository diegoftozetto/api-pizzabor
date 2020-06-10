if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb://admin:admin1A@ds363098.mlab.com:63098/api-store"}
}
else{    
    module.exports = {mongoURI: "mongodb://localhost/db-store"}
}