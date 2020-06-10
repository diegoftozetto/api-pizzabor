if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb://admin:admin1A@ds141168.mlab.com:41168/api-pizzabor"}
}
else{
    module.exports = {mongoURI: "mongodb://localhost/db-store"}
}