import { request } from './request'

export function getHomeGoods(type,num) {
  return request({
    url: 'index/index.php',
    method: 'get',
    params: {
      [type]: num
    }
  })
}