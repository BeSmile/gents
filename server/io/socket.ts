/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2021-01-04 16:20:24
 * @LastEditors: linjinzhi
 * @LastEditTime: 2021-01-04 16:46:33
 */
import * as socket from 'socket.io';

function ioEvents(io: socket.Server) {
  io.of('/stuff').on('connection', function(socket){
    //Never gets fired
    console.log('user connected');
    socket.emit('hello', 'tys');
  });

}

module.exports = ioEvents;

