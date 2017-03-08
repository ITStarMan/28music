<template>
  <div class="subNavBox detailNav">
      <div class="subNavBoxIn">
          <ul class="">
              <li class="active"><a href="javascript:;">文档</a></li>
              <li><a href="javascript:;">帮助</a></li>
          </ul>
      </div>
  </div>

  <div class="mainBox">
      <div class="mainIn clx">
          <!--左侧菜单 开始-->
          <div class="mLeftBox detailLeft">
              <ul class="apiMenu">
                  <li v-for="tabItem in TabList">
                      <div class="groupName"><i class="iconfont icon-xialajiantou"></i> <b>{{ tabItem.groupName }}</b></div>
                      <ul class="subMenu detailLeftBtn">
                          <li class="active" v-for="routeItem in tabItem.routeList">
                              <span><b><q>{{ mdadd1.step1.Method }}</q>{{ mdadd1.step1.EndpointName }}</b></span>
                          </li>
                      </ul>
                  </li>

              </ul>

          </div>
          <!--左侧菜单 结束-->

          <!--右侧功能区域 开始-->
          <div class="mRightBox col-2">
              <div class="rightLBox issueApiBox" style="">

                <!---       这是第一个表单路径               ----------------------------------------->

                  <h2><i class="iconfont icon-xialajiantou fr"></i>路径</h2>
                  <div class="rightLBoxInfo"  v-show="isformshow == 1">
                          <div class="formBar">
                              <label>请求方式 <!--<span class="red">*</span>--></label>
                              <select class="selectS" v-model="mdadd1.step1.Method">
                                  <option selected>GET</option>
                                  <option v-for='methods in step1SlectL' value="{{ methods }}">{{ methods }}</option>
                              </select>
                          </div>

                          <div class="formBar">
                              <label>url路径</label>
                              <input type="text" v-model="mdadd1.step1.UriRoute" placeholder="/mypath" maxlength="200" class="inputS" />
                          </div>
                          <div class="formBar">
                              <label>路径名称</label>
                              <input type="text" v-model="mdadd1.step1.EndpointName" placeholder="请输入" maxlength="14" class="inputS"/>
                          </div>
                          <div class="formBar">
                              <label>分组</label>
                              <select class="selectS" v-model="mdadd1.step1.GroupID" v-on:change="groupChange()">
                                  <option v-for="groupitem in Group" value="{{ groupitem.GroupID }}" selected>{{ groupitem.GroupName }}</option>
                              </select>
                          </div>
                          <div class="formBar">
                              <label>描述</label>
                              <textarea class="inputS" v-model="mdadd1.step1.EndpointDesc" maxlength="140" placeholder="输入您的描述，最多140字"></textarea>
                          </div>
                          <div class="formBar">
                              <label></label>
                              <button class="btn btn36 btnMain" v-on:click="nextStep(2)">下一步</button>
                          </div>
                  </div>

                    <!---       这是第二个表单URL参数               ----------------------------------------->

                  <h2><i class="iconfont icon-xialajiantou fr"></i>URL参数</h2>
                  <div class="rightLBoxInfo" v-show="isformshow == 2">
                        <!--提交后的参数展示区域，所有的都不可编辑且为列表-------------------->
                        <div v-for="paranList in mdadd1.step2List" track-by="$index">
                          <div class="formBar">
                              <label>名称</label>
                              <input type="text" v-model="paranList.ParamName" placeholder="请输入" maxlength="14" class="inputS" disabled="disabled"/>
                          </div>
                          <div class="formBar">
                              <label>条件</label>
                              <select class="selectS" v-model="paranList.Condition" disabled="disabled">
                                  <option v-for="step2Cd11 in coditionList" value="{{ step2Cd11.value }}">{{ step2Cd11.name }}</option>
                              </select>
                          </div>
                          <div class="formBar">
                              <label>类型</label>
                              <select class="selectS" v-model="paranList.ParamType" disabled="disabled">
                                  <option  v-for="step2Type11 in paramTypeL" value="{{ step2Type11.value }}">{{ step2Type11.name }}</option>
                              </select>
                          </div>
                          <div class="formBar">
                              <label>描述</label>
                              <textarea v-model="paranList.Description" class="inputS" placeholder="输入您的描述，最多140字" maxlength="140" disabled="disabled"></textarea>
                          </div>
                        </div>

                        <!--编辑区域，只有一个提交成功清空数据---------------------->

                          <div v-for="editList in mdadd1.step2">
                            <div class="formBar">
                                <label>名称</label>
                                <input type="text" v-model="editList.ParamName"  v-on:change="checkModel($index)" maxlength="14" placeholder="请输入" class="inputS"/>
                            </div>
                            <div class="formBar">
                                <label>条件</label>
                                <select class="selectS" v-model="editList.Condition">
                                    <option v-for="step2Cd in coditionList" value="{{ step2Cd.value }}">{{ step2Cd.name }}</option>
                                </select>
                            </div>
                            <div class="formBar">
                                <label>类型</label>
                                <select class="selectS" v-model="editList.ParamType">
                                    <option v-for="step2Type in paramTypeL" value="{{ step2Type.value }}">{{ step2Type.name }}</option>
                                </select>
                            </div>
                            <div class="formBar">
                                <label>描述</label>
                                <textarea v-model="editList.Description" class="inputS" maxlength="140" placeholder="输入您的描述，最多140字"></textarea>
                            </div>
                          </div>


                          <div class="formBar">
                              <label></label>
                              <div class="btnGrounp2">
                                  <button class="btn btn36 btnMinor" v-on:click="nextStep(3, 0)">添加参数</button>
                                  <button class="btn btn36 btnMain" v-on:click="nextStep(3)">下一步</button>
                              </div>
                          </div>
                  </div>


                  <!---       这是第三个表单请求头               ----------------------------------------->

                  <h2><i class="iconfont icon-xialajiantou fr"></i>请求头</h2>
                  <div class="rightLBoxInfo" v-show="isformshow == 3">
                    <!--提交后的参数展示区域，所有的都不可编辑且为列表-------------------->
                    <div v-for="hdList in HeaerList" track-by="$index">
                      <div class="formBar">
                          <label>名称</label>
                          <input type="text" v-model="hdList.ParamName" placeholder="请输入" class="inputS" disabled="disabled"/>
                      </div>
                      <div class="formBar">
                          <label>条件</label>
                          <select class="selectS" v-model="hdList.Condition" disabled="disabled">
                              <option v-for="step3Cd11 in coditionList" value="{{ step3Cd11.value }}">{{ step3Cd11.name }}</option>
                          </select>
                      </div>
                      <div class="formBar">
                          <label>类型</label>
                          <select class="selectS" v-model="hdList.ParamType" disabled="disabled">
                              <option  v-for="step3Type11 in paramTypeL" value="{{ step3Type11.value }}">{{ step3Type11.name }}</option>
                          </select>
                      </div>
                      <div class="formBar">
                          <label>描述</label>
                          <textarea v-model="hdList.Description" class="inputS" placeholder="输入您的描述，最多140字" maxlength="140" disabled="disabled"></textarea>
                      </div>
                    </div>
                    <!--编辑区只负责编辑，提交后清空模型------------------->
                          <div v-for="hdList in mdadd1.step3">
                            <div class="formBar">
                                <label>名称</label>
                                <input type="text"  v-model="hdList.ParamName" placeholder="请输入" class="inputS"/>
                            </div>
                            <div class="formBar">
                                <label>条件</label>
                                <select class="selectS"  v-model="hdList.Condition">
                                    <option v-for="step3Cd in coditionList" value="{{ step3Cd.value }}">{{ step3Cd.name }}</option>
                                </select>
                            </div>
                            <div class="formBar">
                                <label>类型</label>
                                <select class="selectS"  v-model="hdList.ParamType">
                                    <option v-for="step3Type in paramTypeL" value="{{ step3Type.value }}">{{ step3Type.name }}</option>
                                </select>
                            </div>
                            <div class="formBar">
                                <label>描述</label>
                                <textarea class="inputS"  v-model="hdList.Description" placeholder="输入您的描述，最多140字" maxlength="140"></textarea>
                            </div>
                          </div>
                          <div class="formBar">
                              <label></label>
                              <div class="btnGrounp2">
                                  <button class="btn btn36 btnMinor" v-on:click="nextStep(4, 4)">添加参数</button>
                                  <button class="btn btn36 btnMain" v-on:click="nextStep(4)">保存</button>
                              </div>
                          </div>
                  </div>
              </div>

              <div class="rightLBox" style="display: none">
                  <h2>路径</h2>
                  <div class="rightLBoxInfo">
                      <div class="apiType">
                          <h3 class="clx"><span class="fr"><a href="#">编辑</a> <a href="#">删除</a></span>发送消息</h3>
                          <p class="pathInfo">URL参数</p>
                      </div>
                      <div class="formBar">
                          <label> 信息</br>String</label>
                          <input type="text" placeholder="文本" class="inputS"/>
                      </div>
                      <div class="formBar">
                          <label> 电话</br>Number</label>
                          <input type="text" placeholder="数字" class="inputS"/>
                      </div>

                      <div class="apiType">
                          <h3>请求头</h3>
                          <div class="requestHeader">
                              <span class="btn btn28 btnMinor">注册使用这个api</span> <span>应用程序要使用这个会话</span>
                          </div>
                      </div>
                      <div class="testBtn">
                          <span class="btn btn42 btnMain">测试</span>
                      </div>
                  </div>

              </div>

          </div>
          <!--右侧功能区域 结束-->

      </div>
  </div>
</template>
<script>
import mdadd1 from '../../models/md_add1.js'
import CommonSvc from '../../services/CommonSvc.js'
import getDomain from '../../controllers/getDomain.js'
export default{
  data () {
    return {
      HeaerList: [],
      getDomain,
      CommonSvc,
      TabList: [
        {
          'groupName': '默认分组',
          'routeList': [
            {
              'routeName': '默认路径',
              'type': 'GET',
              'EndpointID': ''
            }
          ]
        }
      ],
      Group: [                       // 分组，接口后端给，第一个是默认分组阳历
        {
          'GroupName': '默认分组',
          'GroupID': 1
        }
      ],
      coditionList:[                  // 条件暂时写死，值和后端已定义
        {
          'name': '必选',
          'value': 1
        },
        {
          'name': '可选',
          'value': 2
        },
        {
          'name': '常量',
          'value': 3
        }
      ],
      paramTypeL: [
        {
          'name': 'String',
          'value': 1
        },
        {
          'name': 'Number',
          'value': 2
        },
        {
          'name': 'Boolean',
          'value': 3
        }
      ],
      step1SlectL: ['POST', 'PUT', 'PATCH', 'DELETE'],    // 由于设置默认选中 所以GET直接写在option里 字符串，所以没有value
      mdadd1,
      isformshow: 1                                    // 此变量控制三个表单那个显示1代表第一个 也是改变他数字控制显示 v-show写死数字
    }
  },
  methods: {
    groupChange () {
      let _this = this
      // 根据值匹配名字
      for (let i = 0; i < _this.Group.length; i++) {
        if (_this.Group[i].GroupID == mdadd1.step1.GroupID) {
          _this.TabList[0].groupName = _this.Group[i].GroupName
        }
      }
    },
    checkModel (index) {
      let _this = this
      let reg =  /^[_a-zA-Z][_a-zA-Z0-9_-]*$/
      if (_this.isformshow == 2) {
        // 第二个表单再校验
        if (reg.test(mdadd1.step2[index].ParamName)) {

        } else {
          window.alert('参数名称需为数字字母组合且首字符为字母')
        }
      }
    },
    nextStep (code, ischange) {
      // 因为第二个表单可加多个，所以不一定先跳到第三个表单，故增加第二个参数若为0则不跳转
      let _this = this
      // code是用来控制那一步显示的， v-show已绑定好若后期显示全部可改 通过校验再下一步
      // _this.isformshow = code
      switch (code) {
        case 2:
          // 2是第一个表单点击触发的，校验第一个
          if(mdadd1.step1.UriRoute == ''){
            window.alert('url路径不能为空')
            return
          }
          let ruteR = /^[/][a-zA-Z0-9_/{}.|#$%@&*+-=:'";]*$/
          if (ruteR.test(mdadd1.step1.UriRoute)) {
            // 通过校验再发送数据
            CommonSvc.post(mdadd1.step1, 'v1/endpoint', 1).done(function(result){
              if (result.status == 200) {
                _this.isformshow = code
                // 把EndpointID放到下两个表单model里
                 mdadd1.step2[0].EndpointID = result.data.id
                 mdadd1.step3[0].EndpointID = result.data.id
                 // 把名字同步过去
                 _this.TabList[0].routeList[0].routeName = mdadd1.step1.EndpointName
                 // 把对应方式同步过去
                 _this.TabList[0].routeList[0].type = mdadd1.step1.Method
              }else {
                window.alert(result.message)
              }
            })
          } else {
            window.alert('路径需以/开头，数字字母下划线组合，不得有空格')
          }
          break
        case 3:
          // 若为点击下一步，则url参数可不填
          if (ischange == undefined) {
            // 第二个表单校验必填项
            if (mdadd1.step2[0].ParamName == '') {
              if (mdadd1.step2[0].Description != undefined && mdadd1.step2[0].Description != '') {
                window.alert('URL参数名称不能为空')
                return
              } else {
                // 如果无这个参数则跳转下一步
                _this.isformshow = code
                return
              }
            }
          }
          if (ischange != undefined && ischange == 0) {
            // 第二个表单校验必填项
            if (mdadd1.step2[0].ParamName == '') {
              window.alert('URL参数名称不能为空')
              return
            }
          }
          let testRue2 = /^[a-zA-Z][a-zA-Z0-9_-]*$/
          if (testRue2.test(mdadd1.step2[0].ParamName)) {
            CommonSvc.post(mdadd1.step2[0], 'v1/endpointParam', 1).done(function(result){
              if (result.status == 200) {
                // 添加成功后分两种情况 添加 或者下一步 通过ischange参数控制
                if (ischange == undefined) {
                  // 如果无这个参数则跳转下一步
                  _this.isformshow = code
                }
                if (ischange != undefined && ischange == 0) {
                  // 如果有这个参数并且为0，则为添加页面，则不跳转并且把结果存入
                  let tempArry = mdadd1.step2.splice(0, 1)
                  mdadd1.step2List.push(tempArry[0])
                  let newList = {}
                  // 并且把数据模型中的参数回复最初设置
                  newList.EndpointID = mdadd1.step2List[0].EndpointID
                  newList.ParamName = ''
                  newList.Condition = 2
                  newList.ParamType = 1
                  newList.Description = ''
                  newList.Mark = 1
                  mdadd1.step2.push(newList)
                }
              }else {
                window.alert(result.message)
              }
            })
          }else {
            window.alert('参数名需为数字字母下划线组合，首字符需为字母,不得有空格')
          }
          break
        case 4:
          // 第三个表单校验必填项
          if (mdadd1.step3[0].ParamName == '') {
            // 添加成功后分两种情况 添加 或者下一步 通过ischange参数控制
            if (ischange == undefined) {
              if (mdadd1.step3[0].Description != undefined && mdadd1.step3[0].Description != '') {
                window.alert('请求头参数名不能为空')
              }else {
                // 把id放到里面
                window.location.href = getDomain.getUrl('detail/' + mdadd1.step1.ApiID)
              }
            }
            if (ischange == 4) {
              window.alert('请求头参数名不能为空')
            }
          } else {
            let testRue1 = /^[a-zA-Z][a-zA-Z0-9_-]*$/
            if (testRue1.test(mdadd1.step3[0].ParamName)) {
              CommonSvc.post(mdadd1.step3[0], 'v1/endpointParam', 1).done(function(result){
                if (result.status == 200) {
                  // 添加成功后分两种情况 添加 或者下一步 通过ischange参数控制
                  if (ischange == undefined) {
                    // 把id放到里面
                    window.location.href = getDomain.getUrl('detail/' + mdadd1.step1.ApiID)
                  }
                  if (ischange == 4) {
                    // 如果有这个参数并且为0，则为添加页面，则不跳转并且把结果存入
                    let tempArry = mdadd1.step3.splice(0, 1)
                    _this.HeaerList.push(tempArry[0])
                    let newList = {}
                    // 并且把数据模型中的参数回复最初设置
                    newList.EndpointID = _this.HeaerList[0].EndpointID
                    newList.ParamName = ''
                    newList.Condition = 2
                    newList.ParamType = 1
                    newList.Description = ''
                    newList.Mark = 2
                    mdadd1.step3.push(newList)
                    window.console.log(_this.HeaerList)
                  }
                }else {
                  window.alert(result.message)
                }
              })
            }else {
              window.alert('参数名需为数字字母下划线组合，首字符需为字母，不得有空格')
            }
          }
          break;
        default:

      }
    }
  },
  ready: function () {
    let _this = this
    // 把url参数存入数据模型中
    mdadd1.step1.ApiID = _this.$route.params.ApiID
    // 页面加载先渲染分组列表
    let grtRoUrl = 'v1/endpoint_group/' + _this.$route.params.ApiID + '/all'
    CommonSvc.get({}, grtRoUrl , 1).done((result)=>{
      if (result.status == 200) {
        _this.Group = result.data
        //默认选中第一个分组
        mdadd1.step1.GroupID = result.data[0].GroupID
      } else {
        window.alert(result.message)
      }
    })
  },
  destroyed: function () {
    // 离开页面清空数据模型
    mdadd1.step1.Method = ''
    mdadd1.step1.UriRoute = ''
    mdadd1.step1.EndpointName = ''
    mdadd1.step1.GroupID = 0
    mdadd1.step1.EndpointDesc = ''
    mdadd1.step1.ApiID = null
    mdadd1.step2[0].EndpointID = null
    mdadd1.step2[0].ParamName = ''
    mdadd1.step2[0].Condition = 2
    mdadd1.step2[0].ParamType = 1
    mdadd1.step2[0].Description = ''
    mdadd1.step2[0].Mark = 1
    mdadd1.step2List = []
    mdadd1.step3[0].EndpointID = null
    mdadd1.step3[0].ParamName = ''
    mdadd1.step3[0].Condition = 2
    mdadd1.step3[0].ParamType = 1
    mdadd1.step3[0].Description = ''
    mdadd1.step3[0].Mark = 2
  }
}
</script>
<style>
</style>
