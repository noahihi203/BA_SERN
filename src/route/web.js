import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.getDeleteCRUD);

    return app.use("/", router);
}

module.exports = initWebRouters;    