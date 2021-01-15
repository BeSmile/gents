/*
 * @Description: 
 * @Version: 
 * @Author: linjinzhi
 * @Date: 2021-01-15 15:28:02
 * @LastEditors: BeSmile
 * @LastEditTime: 2021-01-15 15:56:43
 */

export interface breadcrumb {
  name: string,
  url: string,
}

export type BreadcrumbList = Array<breadcrumb>;

export interface GlobalState{
  breadcrumbs: BreadcrumbList;
}
