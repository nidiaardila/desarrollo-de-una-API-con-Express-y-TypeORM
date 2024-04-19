import cors from "cors";
import express from "express";
import morgan from "morgan";


class serverBootstrap {
    public app: express.Application = express();
    private port: number = 8000;

    constructor() {
        // Configuración de middleware
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        // Ruta
        this.app.get("/api/hola", (req, res) => {
            res.status(200).json({
                message: 'Hola mundo!!!'
            });
        });

        // Iniciar el servidor
        this.listen();
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log("Server is running on port " + this.port);
        });
    }
}

new serverBootstrap();