import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDatabase } from "./db/db.js";
import dotenv from "dotenv";
import Featureroute from "./routes/Feature.Route.js";
import helmet from "helmet";
import { limiter } from "./rateLimiter/limit.js";
import EmailRouter from "./routes/Email.Route.js";
import ProjectRouter from "./routes/Project.Route.js";
import RoadMapRouter from "./routes/RoadMap.Route.js";
import HealthRoute from "./routes/Health.Route.js";
import { mail } from "./utils/email.js";
import susbcribeRoute from "./routes/Subscribe.Route.js";



dotenv.config({ path: '.env' });

// if (cluster.isMaster) {
//     const cpuCount = os.cpus().length;
//     console.log(`Master cluster setting up ${cpuCount} workers...`);

//     for (let i = 0; i < cpuCount; i++) {
//         cluster.fork();
//     }

//     cluster.on('exit', (worker) => {
//         console.log(`Worker ${worker.id} exited. Starting a new worker...`);
//         cluster.fork();
//     });
// } else {
    const app = express();

    app.use(cors({
        origin: ['http://localhost:3000', 'https://letsresource.in']
    }));

    app.use(limiter);
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ limit: "100kb" }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '100kb' }));
    app.use(helmet());

    app.set('trust proxy', 'loopback, 13.228.225.19');

    // Routes 
    app.use(Featureroute);
    app.use(EmailRouter);
    app.use(ProjectRouter);
    app.use(RoadMapRouter);
    app.use(HealthRoute);
    app.use(susbcribeRoute);








    connectDatabase().then(() => {
        const port = process.env.PORT || 3000;
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }).catch(async (error) => {
        console.error("Database connection error:", error);

        try {
            await mail();
            console.log("Error email sent successfully.");
        } catch (emailError) {
            console.error("Failed to send error email:", emailError);
        }
    });
// }
