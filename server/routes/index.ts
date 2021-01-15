/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-12-29 11:26:56
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-12-29 11:33:52
 */
import express, { Request, Response } from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response) {
  // res.render('index', { title: 'Express' });
  console.log('ddd');
  
  res.send('home');
});

module.exports = router;
