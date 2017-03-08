import endpoint from '../models/md_endPoint'
import CommonSvc from '../services/CommonSvc'

export default {
  // 页面加载进来是生成模板列表
  getEndpoint (id) {
    let perUrl = 'v1/endpoint/' + id
    let perData = {}
    CommonSvc.get(perData, perUrl, 1, 2).done(function (result) {
      if (result && result.status === 200) {
        endpoint.result = result.data
      }
    })
  }
}
