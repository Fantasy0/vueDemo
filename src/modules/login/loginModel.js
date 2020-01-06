/**
 * Created by Administrator on 2018/7/11.
 * url取值
 */
import { get, post } from '../../common/utils/axios'

export function userLogin(params) {
  return post('/loginInit/userLogin', params)
}
//获取用户菜单
export function getUserPermission(params) {
  return post('/loginInit/getUserPermission', params)
}
