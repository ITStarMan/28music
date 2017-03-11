import CommonSvc from '../services/CommonSvc'

export default {
  // 页面加载进来是生成模板列表
  ready () {
    let perUrl = 'http://www.28dagang.com/api/getIndexList.php'
    let perData = {}
    CommonSvc.get(perData, perUrl).done(function(result){
      if (result && result.status === 200) {
        console.log(result)
      }
    })
  }
}
