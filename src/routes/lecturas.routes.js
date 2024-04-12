import { Router } from "express";
import { getAll, insertOne} from "../controllers/lecturas.controler.js";

const router = Router();

router.get("/", getAll);
router.post("/", insertOne);


export default router;
