import $ from '../../static/js/jquery-1.11.3.min.js'
window.$ = $
window.jQuery = $
import getDomain from '../controllers/getDomain'

export default {
  post (perData, perUrl, asy) {
    return $.ajax({
      url: perUrl,
      traditional: true,
      type: 'post',
      dataType: 'json',
      data: perData,
      async: asy == undefined ? true : asy
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
      dataType: 'json',
      data: perData,
      async: Async
    })
  }
}
