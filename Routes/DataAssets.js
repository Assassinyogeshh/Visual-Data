
import  express  from "express";
import D3dataModel from '../Model/Schema.js'
const router=express.Router();

router.get('/getAllData', async (req, res) => {
    try {
      const allData = await D3dataModel.find();
      res.json(allData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  
export default router;