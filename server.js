const http = require("http");
const app = require("./app");
const mongodb = require("mongodb")

let db;
const connectionString = "mongodb+srv://iamhalimov:ocflNMfeTtS6Hwek@cluster0.blk75.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, (err, client) => {
        if(err) console.log("Error on connection MongoDB");
        else {
            console.log('MongoDB connection succeed');
            module.exports = client;

            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port ${PORT}, http://localhost:${PORT}`
                );

            });
        }
    }
);

