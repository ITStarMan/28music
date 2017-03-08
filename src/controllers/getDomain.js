export default{
  // 获取不同环境下地址  根据window.location.origin获取到根地址，再去匹配对应环境
  getUrl (perUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('test.ffan.net:8080')
    let sit = link.indexOf('intra.sit.ffan.net')
    let prod = link.indexOf('ffan.net')
    // test 环境
    if (test != -1 ) {
      url = 'http://apistore.test.ffan.net:8080/#/' + perUrl
    }
    // sit 环境
    if (test == -1 && sit != -1) {
      url = 'http://apistore.intra.sit.ffan.net/#/' + perUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://apistore.ffan.net/#/' + perUrl
    }
    return url
  },
  getPassport (passpotrUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('test.ffan.net:8080')
    let sit= link.indexOf('intra.sit.ffan.net')
    let prod = link.indexOf('ffan.net')
    // test 环境
    if (test != -1 ) {
      url = 'http://passport.intra.test.ffan.net/' + passpotrUrl
    }
    // sit 环境
    if (test == -1 && sit != -1) {
      url = 'http://passport.intra.sit.ffan.net/' + passpotrUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://passport.ffan.net/' + passpotrUrl
    }
    return url
  },
  getApi (apiUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('test.ffan.net:8080')
    let sit = link.indexOf('intra.sit.ffan.net')
    let prod= link.indexOf('ffan.net')
    // test 环境
    if (test != -1 ) {
      url = 'http://api.apistore.intra.test.ffan.net/' + apiUrl
    }
    // sit 环境
    if (test == -1 && sit != -1) {
      url = 'http://api.apistore.intra.sit.ffan.net/' + apiUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://api.apistore.ffan.net/' + apiUrl
    }
    return url
  },
  getOtherStore (storeUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('test.ffan.net:8080')
    let sit = link.indexOf('intra.sit.ffan.net')
    let prod= link.indexOf('ffan.net')
    // test 环境
    if (test != -1 ) {
      url = 'http://open.test.ffan.net' + storeUrl
    }
    // sit 环境
    if (test == -1 && sit != -1) {
      url = 'http://open.sit.ffan.net' + storeUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://open.ffan.net' + storeUrl
    }
    return url
  },
  getDashborad (dashboardUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('test.ffan.net:8080')
    let sit = link.indexOf('intra.sit.ffan.net')
    let prod= link.indexOf('ffan.net')
    // test 环境
    if (test != -1 ) {
      url = 'http://10.213.128.163:10112/' + dashboardUrl
    }
    // sit 环境
    if (test == -1 && sit != -1) {
      url = 'http://10.213.44.102:10112/' + dashboardUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://10.209.214.72:10112/' + dashboardUrl
    }
    return url
  },

  getSDKdownload (downloadUrl) {
    let url = ''
    let link = window.location.origin
    let test = link.indexOf('test.ffan.net:8080')
    let sit = link.indexOf('intra.sit.ffan.net')
    let prod= link.indexOf('ffan.net')
    // test 环境  sit test公用一套
    if (test != -1 ) {
      url = 'http://10.213.42.215/' + downloadUrl
    }
    // sit 环境
    if (test == -1 && sit != -1) {
      url = 'http://10.213.42.215/' + downloadUrl
    }
    // 正式环境
    if (test == -1 && sit == -1 && prod != -1) {
      url = 'http://10.213.152.68/' + downloadUrl
    }
    return url
  }

}
