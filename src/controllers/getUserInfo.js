// 用来判断用户是否登录，未登录返回false，若已登录，返回true并把用户信息放到models里，子页面即可以用
import userInfo from '../models/md_userInfo.js'
import CommonSvc from '../services/CommonSvc.js'
export default {
  getUserInfo (load) {
      // load是资料更新后强制刷新 当资料更新时，不能读缓存信息，所以强制从接口读取
      let islogin = false
      if (load == undefined) {
        if ( window.sessionStorage.userInfoNick != undefined && window.sessionStorage.userInfoNick != '' && window.sessionStorage.userInfoFace != undefined && window.sessionStorage.userInfoFace != '' && window.sessionStorage.userInfoPuid != undefined && window.sessionStorage.userInfoPuid != '' && window.sessionStorage.userInfoUid != undefined && window.sessionStorage.userInfoUid != '' ) {
          // 如果在别的页面退出没有清除本地缓存信息，则在这再加层判断
          let cookieST = document.cookie.indexOf('WG-PPC-CASTOKEN')
          if (cookieST != -1) {
            islogin = true
            userInfo.BaseUserInfo.nick = window.sessionStorage.userInfoNick
            userInfo.BaseUserInfo.face = window.sessionStorage.userInfoFace
            userInfo.BaseUserInfo.puid = window.sessionStorage.userInfoPuid
            userInfo.BaseUserInfo.uid = window.sessionStorage.userInfoUid
          }else {
            // 若检测到cookie被清除了，则同时把本地缓存清除
            window.sessionStorage.userInfoNick = ''
            window.sessionStorage.userInfoFace = ''
            window.sessionStorage.userInfoPuid = ''
            window.sessionStorage.userInfoUid = ''
            islogin = false
          }
        }else {
          // 是否登录以cookie为准
          let cookie = document.cookie.indexOf('WG-PPC-CASTOKEN')
          if (cookie != -1) {
            // 如果读不到信息，再调接口校验
            CommonSvc.post({}, 'passport/session-check.json', 2, false).done(function (result) {
              if (result.status == 200) {
                userInfo.BaseUserInfo = result.attachment
                // 把用户信息存到storage里
                window.localStorage.userInfoNick = result.attachment.nick
                window.localStorage.userInfoFace = result.attachment.face
                window.localStorage.userInfoPuid = result.attachment.puid
                window.localStorage.userInfoUid = result.attachment.uid
                window.sessionStorage.userInfoNick = result.attachment.nick
                window.sessionStorage.userInfoFace = result.attachment.face
                window.sessionStorage.userInfoPuid = result.attachment.puid
                window.sessionStorage.userInfoUid = result.attachment.uid
                userInfo.BaseUserInfo.nick = window.localStorage.userInfoNick
                userInfo.BaseUserInfo.face = window.localStorage.userInfoFace
                userInfo.BaseUserInfo.puid = window.localStorage.userInfoPuid
                userInfo.BaseUserInfo.uid = window.localStorage.userInfoUid
                islogin = true
              } else {
                islogin = false
              }
            })
          } else {
            islogin = false
          }
        }
      } else {
        CommonSvc.post({}, 'passport/session-check.json', 2, false).done(function (result) {
          if (result.status == 200) {
            userInfo.BaseUserInfo = result.attachment
            // 把用户信息存到storage里
            window.localStorage.userInfoNick = result.attachment.nick
            window.localStorage.userInfoFace = result.attachment.face
            window.localStorage.userInfoPuid = result.attachment.puid
            window.localStorage.userInfoUid = result.attachment.uid
            window.sessionStorage.userInfoNick = result.attachment.nick
            window.sessionStorage.userInfoFace = result.attachment.face
            window.sessionStorage.userInfoPuid = result.attachment.puid
            window.sessionStorage.userInfoUid = result.attachment.uid
            userInfo.BaseUserInfo.nick = window.localStorage.userInfoNick
            userInfo.BaseUserInfo.face = window.localStorage.userInfoFace
            userInfo.BaseUserInfo.puid = window.localStorage.userInfoPuid
            userInfo.BaseUserInfo.uid = window.localStorage.userInfoUid
            islogin = true
          } else {
            islogin = false
          }
        })
      }

    return islogin
  }
}
