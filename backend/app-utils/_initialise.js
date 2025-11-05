import createConfig from '../config/index.js';
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

let config = null;

export default async function initialize (app, callback) {
    createConfig((err) => {
        if (err) {
            callback(err);
        } else {
            config = Object.assign({}, global.gConfig);

            app.use(bodyParser.json({ limit: "50mb" }));
            app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

            app.use(cookieParser(""));

            app.use(cors({ origin: true, credentials: true }));
            app.use((req, res, next) => {
                req.response = {};
                next();
            });
            app.use(function (req, res, next) {
                res.header("Access-Control-Allow-Credentials", true);
                res.header("Access-Control-Allow-Origin", req.headers.origin);
                if (req.method === "OPTIONS") {
                    return res.status(200).end();
                } else {
                    next();
                }
            });
            app.use("/pingMe", (req, res, next) => {
                res.send(
                    ` Server is alive and uptime is : ${process.uptime()}`
                );
            });

            callback(null);
        }
    });
};
