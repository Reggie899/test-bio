import express from 'express';
import cors from 'cors';

const server = express();
server.use(cors()); 

server.use(express.json()); 
import test from "./testroute.js"


server.use('/', test);

