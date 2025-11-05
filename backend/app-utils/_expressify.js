import router from "../src/routes/authRoutes.js";
import errorHandler from "../src/modules/errorHandler/errorHandler.js";
import responseHandler from "../src/modules/responseHandler/index.js";

export const expressify = (app, callback) => {
    try {
        app.use(router);
        app.use(responseHandler);
        app.use(errorHandler);
        callback(null);
    } catch (e) {
        console.log(`expressify: ${e}`);
        callback(e);
    }
};
