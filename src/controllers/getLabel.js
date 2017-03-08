import label from '../models/md_label'
import CommonSvc from '../services/CommonSvc'

export default {
  // 页面加载进来是生成模板列表
  ready () {
    let perUrl = 'v1/category/'
    let perData = {}
    CommonSvc.get(perData, perUrl,1).done(function (result) {
      if (result && result.status === 200) {
        label.result = result.data
      }
    })
  }
}
