import getDomain from './getDomain.js'
export default{
  toDetail () {
    window.location.href = getDomain.getUrl('detail')
  },
  toAdd1 (apiID) {
    if (apiID != undefined) {
      window.location.href = getDomain.getUrl('add1/' + apiID)
    } else {
      window.location.href = getDomain.getUrl('add1')
    }
  },
  toAdd () {
    window.location.href = getDomain.getUrl('add')
  },
  toRegister (callbackurl) {
    // 支持跳转登录页面callbackurl
    if (callbackurl != undefined && callbackurl != '') {
      window.localStorage.registerCBurl = callbackurl
    }
    window.location.href = getDomain.getUrl('register')
  },
  toLogin (callbackurl) {
    // 支持跳转登录页面callbackurl
    if (callbackurl != undefined && callbackurl != '') {
      window.localStorage.loginCBurl = callbackurl
    }
    window.location.href = getDomain.getUrl('login')
  },
  toIndex () {
    window.location.href = getDomain.getUrl('')
  },
  toDeveloper () {
    window.location.href =  getDomain.getUrl('developer')
  },
  toCenter (code) {
    // 跳转个人中心指定页面，若不传参数默认为资料设置页面
    if (code != undefined && code != '') {
      window.location.href =  getDomain.getUrl('center/' + code)
    } else {
      window.location.href =  getDomain.getUrl('center/1')
    }
  }
}
