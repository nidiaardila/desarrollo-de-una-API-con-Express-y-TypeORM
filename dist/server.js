"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
class serverBootstrap {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 8000;
        // Configuración de middleware
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
        // Ruta
        this.app.get("/api/hola", (req, res) => {
            res.status(200).json({
                message: 'Hola mundo!!!'
            });
        });
        // Iniciar el servidor
        this.listen();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server is running on port " + this.port);
        });
    }
}
new serverBootstrap();
