"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../models/User"));
const entities = [User_1.default];
typeorm_1.createConnection({
    type: 'postgres',
    host: 'devopsfiap.postgres.database.azure.com',
    port: 5432,
    username: 'postgres@devopsfiap',
    password: 'nac@1234',
    database: 'postgres',
    entities,
});
