import express from "express";


const router = express.Router();


export const test = (req, res) => {
  res.status(200).json("dataResult");
};

router.get("/", test);





export default router;
