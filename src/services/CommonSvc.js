import $ from '../../static/js/jquery-1.11.3.min.js'
window.$ = $
window.jQuery = $
import getDomain from '../controllers/getDomain'

export default {
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
  get (perData, perUrl, async) {
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
      url: perUrl,
      type: 'get',
      dataType: 'jsonp',
      data: perData,
      async: Async
    })
  }
}
