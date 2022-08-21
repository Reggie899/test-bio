import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors()); 

server.use(express.json()); 
import test from "./testroute.js"


server.use('/', test);


// const PORT = 5557;

// server.listen(PORT, () => console.log(`Server is listening to port ${PORT} and running`));