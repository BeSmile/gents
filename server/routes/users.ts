/*
 * @Description: var express = require('express');

 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-12-29 11:27:50
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-12-29 11:35:44
 */
import express, { Request, Response } from 'express';
var router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response) {
  console.log('users');
  
  res.send('respond with1 a resou1rce');
});

module.exports = router;
