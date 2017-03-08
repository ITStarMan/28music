import $ from '../../static/js/jquery-1.11.3.min.js'
window.$ = $
window.jQuery = $
import getDomain from '../controllers/getDomain'

export default {
  upload (perData) {
    let tempURL = getDomain.getApi('v1/common/uploadPicture')
    // 上传图片专用
    return $.ajax({
      url: tempURL,
      traditional: true,
      type: 'post',
      dataType: 'json',
      contentType: false,
      processData: false,
      data: perData,
      xhrFields: {
        withCredentials: true
      }
    })
  },
  post (perData, perUrl, code, asy) {
    let Url = ''
    if (code != undefined) {
      switch (code) {
        case 1:
          Url = getDomain.getApi(perUrl)
          break
        case 2:
          Url = getDomain.getPassport(perUrl)
          break
        case 3:
          Url = getDomain.getSDKdownload(perUrl)
          break
        default:

      }
    } else {
      Url = perUrl
    }
    return $.ajax({
      url: Url,
      traditional: true,
      type: 'post',
      dataType: 'json',
      data: perData,
      async: asy == undefined ? true : asy,
      xhrFields: {
        withCredentials: true
      }
    })
  },
  get (perData, perUrl, code, async) {
    let Url = ''
    if (code != undefined) {
      switch (code) {
        case 1:
          Url = getDomain.getApi(perUrl)
          break
        case 2:
          Url = getDomain.getPassport(perUrl)
          break
        case 3:
          Url = getDomain.getSDKdownload(perUrl)
          break
        default:

      }
    } else {
      Url = perUrl
    }

    let Async = true
    if (async != undefined) {
      switch (async) {
        case 1:
          Async = true
          break
        case 2:
          Async = false
          break
        default:

      }
    }
    return $.ajax({
      url: Url,
      traditional: true,
      type: 'get',
      dataType: 'json',
      data: perData,
      async: Async,
      xhrFields: {
        withCredentials: true
      }
    })
  },
  put (perData, perUrl, code) {
    let Url = ''
    if (code != undefined) {
      switch (code) {
        case 1:
          Url = getDomain.getApi(perUrl)
          break
        case 2:
          Url = getDomain.getPassport(perUrl)
          break
        default:

      }
    } else {
      Url = perUrl
    }
    return $.ajax({
      url: Url,
      traditional: true,
      type: 'put',
      dataType: 'json',
      data: perData,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true
    })
  },
  det (perData, perUrl, code) {
    let Url = ''
    if (code != undefined) {
      switch (code) {
        case 1:
          Url = getDomain.getApi(perUrl)
          break
        case 2:
          Url = Url = getDomain.getPassport(perUrl)
          break
        default:

      }
    } else {
      Url = perUrl
    }
    return $.ajax({
      url: Url,
      traditional: true,
      type: 'delete',
      dataType: 'json',
      data: perData,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true
    })
  }
}
