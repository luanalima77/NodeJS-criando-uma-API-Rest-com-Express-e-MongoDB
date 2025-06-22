import express from "express";
import livroRoutes from "./livroRoutes.js";
import autorRoutes from "./autoresRoutes.js";

const routes = (app) =>{
    app.route('/').get((req, res) => {
        res.status(200).send("Curso de Node.js");
    });
    app.use('/', livroRoutes);
    app.use('/', autorRoutes);
};

export default routes;