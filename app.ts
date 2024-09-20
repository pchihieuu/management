import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/index';
import { appConfig } from "./src/config/app.config";
import { AppDataSource } from './src/config/ormconfig';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api', router);

// Connect to the database
AppDataSource.initialize()
    .then(() => {
        console.log('Database connected successfully.');

        // Start the server
        app.listen(appConfig.port, () => {
            console.log(`Server running on port ${appConfig.port}`);
        });
    })
    .catch((error) => {
        console.error('Error during database connection:', error);
    });

export default app;
