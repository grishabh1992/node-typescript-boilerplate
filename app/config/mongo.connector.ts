import Mongoose = require("mongoose");
import { AppConfiguration } from '../app.constant';

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    static connect(callback): Mongoose.Connection {
        Mongoose.set('debug', true);
        if (this.mongooseInstance) return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        const connectWithRetry = () => {
            this.mongooseInstance = Mongoose.connect(AppConfiguration.DB_CONNECTION_STRING, {
                useNewUrlParser: true,
                reconnectInterval: 500, // Reconnect every 500ms
                poolSize: 10, // Maintain up to 10 socket connections
                // If not connected, return errors immediately rather than waiting for reconnect
                bufferMaxEntries: 0
            });
        }
        this.mongooseConnection.on('error', err => {
            console.log(`MongoDB connection error: ${err}`)
            setTimeout(connectWithRetry, 5000)
        })

        this.mongooseConnection.on('connected', () => {
            console.log("MongoDB Connection Successful");
        });

        connectWithRetry();
    }
}
DataAccess.connect(() => { });
export = DataAccess;
