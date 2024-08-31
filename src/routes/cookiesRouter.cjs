const { Router } = require("express");

const cookiesRouter = Router();

cookiesRouter.get("/", (req, res) => res.status(200).send("Cookies"));
cookiesRouter.get("/:cookie", (req, res) => res.status(200).send(`You've chosen a ${req.params.cookie} cookie`));

module.exports = cookiesRouter;