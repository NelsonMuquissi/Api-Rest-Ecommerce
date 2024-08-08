import { Router } from "express";

const router = Router()

router.get('/', (req, res, next) => {
    res.status(200).send("Hello World")
})

export default router