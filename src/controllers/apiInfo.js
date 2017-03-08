import apifo from '../models/md_apiInfo'
import CommonSvc from '../services/CommonSvc'
import getDomain from './getDomain'
import $ from '../../static/js/jquery-1.11.3.min.js'

export default {
  // 页面加载进来是生成模板列表
  ready (id) {
    let perUrl = 'v1/uapi/info/' + id
    let perData = {}
    CommonSvc.get(perData, perUrl, 1, 2).done(function(result){
      if (result && result.status === 200) {
        apifo.result = result.data
        // 遍历组装下数据，把路径放到对应的分组下面
        apifo.result.Groups = []
        for(let temp in result.data.Group){
          // window.console.log(result.data.Group[temp])
          let tempJson = {}
          tempJson.GroupArr = []
          tempJson.GroupName = result.data.Group[temp]
          tempJson.GroupID = temp
          // 加一个tabFlage
          tempJson.tabFlage = true
          // 若无路径会显示为null，防止报错
          if (result.data.Endpoint != null) {
            result.data.Endpoint.forEach((e)=>{
              // window.console.log(e.GroupID)
              if (temp == e.GroupID) {
                e.GroupName = result.data.Group[temp]
                tempJson.GroupArr.push(e)
              }
            })
          }
          apifo.result.Groups.push(tempJson)
        }
      }
    })
  }
}
