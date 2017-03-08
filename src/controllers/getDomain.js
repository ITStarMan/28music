export default{
  // 获取不同环境下地址  根据window.location.origin获取到根地址，再去匹配对应环境
  getUrl (perUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('localhost:8080')
    let prod = link.indexOf('28dagang.com')
    // test 环境
    if (test != -1 ) {
      url = 'http://localhost:8080/#/' + perUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://www.28dagang.com/' + perUrl
    }
    return url
  }
}
