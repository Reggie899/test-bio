import express from "express";


const router = express.Router();


export const hello = (req, res) => {
  res.status(200).json("dataResult");
};

router.get("/", hello);





export default router;
