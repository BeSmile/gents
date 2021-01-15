/*
 * @Description:  
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2020-12-29 11:26:01
 * @LastEditors: linjinzhi
 * @LastEditTime: 2020-12-29 11:26:11
 */
class HttpException extends Error{
  constructor(public status:number,public message:string){
      super(message);
      this.status=status;
      this.message=message
  }
}
export default HttpException;