import Axios from 'axios'

//导出自己封装的网络请求方法 ，尽量避免使用全局的axios，以免以后改用其他框架导致大幅更改代码
//也可以导出多个来使用不同的 baseURl
export function request(config){
  const axios = Axios.create({
    baseURL: '/myWebsite',
    timeout:10000
  })
  return axios(config)
}