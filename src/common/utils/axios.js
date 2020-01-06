import axios from 'axios'

import qs from 'qs'

import Vue from 'vue'
import router from '@/router'

// axios 配置表单提交
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.withCredentials = true
// axios.defaults.headers.common['Authorization'] = sessionStorage.getItem("tokens");
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + sessionStorage.getItem("tokens");
//form参数取值
//axios.post(BASE + url, qs.stringify(Object.assign({route:router.history.current.name},params),{depth:10}))
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(BASE + url, qs.stringify(Object.assign({
      route: router.history.current.name
    }, params), {
      depth: 10
    }))
      .then(response => {
        if (response.data.resultCode == 302) {
          //  setTimeout(Vue.prototype.$message.error('长时间未操作，请重新登录'),1000)
          router.push({
            name: 'login',
            query: {
              change: 'session'
            }
          })
        }
        if (response.data.resultCode == 303) {
          // setTimeout(Vue.prototype.$message.error('帐号在其他地方登录，请重新登录'),1000)
          router.push({
            name: 'login',
            query: {
              change: 'other'
            }
          })
        }
        if (response.data.resultCode == 304) {
          // setTimeout(Vue.prototype.$message.error('账号权限变更，请重新登录'),1000)
          router.push({
            name: 'login',
            query: {
              change: 'pers'
            }
          })
        }
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function get(url, params) {
  return new Promise((resolve, reject) => {
    // axios.get(BASE + url, {
    //     params: params
    //   })
    axios.get(BASE + url, {
        params: Object.assign({
          route: router.history.current.name
        }, params)
      }
    )
      .then(response => {
        // if (response.data.resultCode == 302) {
        //   setTimeout(Vue.prototype.$message.error('长时间未操作，请重新登录'), 1000)
        //   router.push({
        //     name: 'login'
        //   })
        // }
        // if (response.data.resultCode == 303) {
        //   setTimeout(Vue.prototype.$message.error('您的帐号在其他地方登录，请重新登录'), 1000)
        //   router.push({
        //     name: 'login'
        //   })
        // }
        if (response.data.resultCode == 302) {
          router.push({
            name: 'login',
            query: {
              change: 'session'
            }
          })
        }
        if (response.data.resultCode == 303) {
          router.push({
            name: 'login',
            query: {
              change: 'other'
            }
          })
        }
        if (response.data.resultCode == 304) {
          router.push({
            name: 'login',
            query: {
              change: 'pers'
            }
          })
        }
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        if (error.data.resultCode == 302) {
          window.location.href = "/wlxyWeb/login"
        }
        reject(error)
      })
  })
}

export function deletes(url, params) {
  return new Promise((resolve, reject) => {
    axios.delete(BASE + url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(BASE + url, qs.stringify(params, {
      depth: 10
    }))
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}
