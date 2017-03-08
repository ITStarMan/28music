export default{
  'step1': {
    'Method': '',                 // 请求方式字符大写类似 GET    必填
    'UriRoute': '',                // url路径名               必填
    'EndpointName': '',             // 路径别名
    'GroupID': 0,                 // 分组id int
    'EndpointDesc': '',            // 描述
    'ApiID': null                    // apiid会在第一步提交成功后放到里面
  },
  'step2': [
    {
      'EndpointID': null,                     // 这个参数会在第一步保存完接口返回
      'ParamName': '',                        //  名称 必填
      'Condition': 2,                         // 条件 必填 默认optional
      'ParamType': 1,                           // 类型 必填  默认 string
      'Description': '',                           //  描述 选填  string
      'Mark': 1                                   // 和请求头参数字段一样，只是mark不一样，1代表url参数
    }
  ],
  'step2List': [],                              // 用来存放展示已提交的url参数
  'step3': [
    {
      'EndpointID': null,                      // 这个参数会在第一步保存完接口返回
      'ParamName': '',                        //  名称 必填
      'Condition': 2,                         // 条件 必填 默认optional
      'ParamType': 1,                           // 类型 必填  默认 string
      'Description': '',                           //  描述 选填  string
      'Mark': 2                                   // 和Url参数字段一样，只是mark不一样，2代表请求头的参数
    }
  ]
}
