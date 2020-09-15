"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sessions_routes_1 = __importDefault(require("./sessions.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const routes = express_1.Router();
routes.use('/session', sessions_routes_1.default);
routes.use('/user', users_routes_1.default);
exports.default = routes;
