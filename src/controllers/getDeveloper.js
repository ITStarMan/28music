import developer from '../models/md_developer'
import CommonSvc from '../services/CommonSvc'
import getDomain from './getDomain'

export default {
  // 页面加载进来是生成模板列表
  ready (id) {
    let perUrl = 'v1/uapi/user/' + id + '?Status=2'
    let perData = {}
    CommonSvc.get(perData, perUrl, 1, 2).done(function(result){
      if (result && result.status === 200) {
        developer.result = result.data
        developer.num = result.data.Uapis.length
        developer.apis = ''
        for(let i = 0;i < result.data.Uapis.length;i++){
          developer.apis = developer.apis + result.data.Uapis[i].ApiID + ','   
        }
        developer.apis = developer.apis.substring(0,developer.apis.length-1)
      }
    })
  }
}
