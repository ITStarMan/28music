import apilist from '../models/md_apiList'
import CommonSvc from '../services/CommonSvc'
import getDomain from './getDomain'

export default {
  // 页面加载进来是生成模板列表
  ready (id) {
    let perUrl = 'v1/uapi/public?CategoryID=' + id
    let perData = {}
    CommonSvc.get(perData, perUrl, 1, 2).done(function(result){
      if (result && result.status === 200) {
        apilist.result = result.data
      }
    })
  }
}
