<template>
<div class="subNavBox detailNav">
  <div class="subNavBoxIn">
      <ul class="">
          <li class="active"><a>文档</a></li>
          <li v-on:click="toHelp()"><a>帮助</a></li>
          <li v-on:click="toSet()" v-bind:class="{'hide': info.result.IsOwner == 0}"><a>设置</a></li>
          <li v-on:click="toData()" v-bind:class="{'hide': info.result.Status == 1}"><a>数据</a></li>
      </ul>
  </div>
</div>

<div class="mainBox">
    <div class="mainIn clx">
        <!--左侧菜单 开始-->
        <div class="mLeftBox detailLeft">
        	<div class="createApi" v-on:click="addGroup()" v-bind:class="{'hide': info.result.IsEdit !== 1}"><i class="iconfont icon-create"></i> 添加分组</div>
            <div class="createApi" v-on:click="addRoute()" v-bind:class="{'hide': info.result.IsEdit !== 1}"><i class="iconfont icon-create"></i> 添加路径</div>
            <div class="" v-for="GroupItems in info.result.Groups">
              <div class="groupBox GroupList">
                <i class="iconfont" v-bind:class="{'icon-xialajiantou' :  GroupItems.tabFlage , 'icon-iconup' : !GroupItems.tabFlage }" v-on:click="GroupsTab($index)" style="cursor: pointer;"></i><b>{{ GroupItems.GroupName }}</b>
                <i class="EndpointList"><i class="iconfont icon-turnoff" v-bind:class="{'hide': GroupItems.GroupID == 0 || info.result.IsEdit != 1}" v-on:click="DelGroupGroup(GroupItems.GroupID)" style="cursor: pointer;"></i></i>
                <i class="EndpointList"><i class="iconfont icon-edit" v-bind:class="{'hide': GroupItems.GroupID == 0 || info.result.IsEdit != 1}" v-on:click="EditGroupName(GroupItems.GroupName, GroupItems.GroupID)" style="cursor: pointer;"></i></i>
              </div>
              <ul class="detailLeftBtn" v-show="GroupItems.tabFlage">
                  <li class="" v-for="GpItem in GroupItems.GroupArr" v-bind:class="{'active': clickstu == GpItem.EndpointID}" v-on:click="tap(GpItem.EndpointID)">
                  <span><b><q>{{GpItem.Method}}</q>-{{GpItem.EndpointName}}<span v-bind:class="{'hide': GpItem.EndpointName !== '' }" class="routeShow">{{GpItem.UriRoute}}</span></b></span>
                  </li>
              </ul>
            </div>
        </div>
        <!--左侧菜单 结束-->

        <!--右侧功能区域 开始-->
        <div class="mRightBox col-2">
            <div class="rightLBox detailInfo">
                <h2>路径</h2>
                <div class="rightLBoxInfo paramShow">
                    <p class="pathInfo" v-bind:class="{'hide': endpoint.result.UriRoute == undefined }">URL路径：<span>{{endpoint.result.UriRoute}}</span><i class="iconfont icon-edit" v-on:click="changeModel()" v-bind:class="{'hide': info.result.IsEdit == 0}"></i><i class="iconfont icon-tishi" v-bind:class="{'hide': info.result.IsEdit == 1}"><span class="desc">描述：{{endpoint.result.EndpointDesc}}<i class="sanjiao"></i></span></i></p>
                    <p class="pathInfo" v-bind:class="{'hide': endpoint.result.UriRoute == undefined }">请求方式：<span>{{endpoint.result.Method}}</span>
                </div>
                <h2>URL参数<span v-on:click="this.show(5)" class="createParam" v-bind:class="{'hide': endpoint.result.EndpointID == undefined || info.result.IsEdit == 0}"><i class="iconfont icon-create"></i></span></h2>
                <div class="rightLBoxInfo paramShow">
                    <p class="pathInfo paramInfo" v-for="item in endpoint.result.FormParam">
	                    名称：<span>{{item.ParamName}}</span><i class="iconfont icon-edit" v-on:click="editUrl($index)" v-bind:class="{'hide': info.result.IsEdit == 0}"></i> <i class="iconfont icon-tishi" v-bind:class="{'hide': info.result.IsEdit == 1}"><span class="desc">描述：{{item.Description}}<i class="sanjiao"></i></span></i><br>
	                    条件：<span v-bind:class="{'hide': item.Condition !== 1}">必选</span><span v-bind:class="{'hide': item.Condition !== 2}">可选</span><span v-bind:class="{'hide': item.Condition !== 3}">常量</span><br>
	                    类型：<span v-bind:class="{'hide': item.ParamType !== 1}">String</span><span v-bind:class="{'hide': item.ParamType !== 2}">Number</span><span v-bind:class="{'hide': item.ParamType !== 3}">Boolean</span>
                    </p>
                </div>
                <h2>请求头<span v-on:click="this.show(6)" class="createParam" v-bind:class="{'hide': endpoint.result.EndpointID == undefined || info.result.IsEdit == 0}"><i class="iconfont icon-create"></i></span></h2>
                <div class="rightLBoxInfo paramShow">
                    <p class="pathInfo paramInfo" v-for="item in endpoint.result.HeaderParam">
	                    名称：<span>{{item.ParamName}}</span><i class="iconfont icon-edit" v-on:click="editHead($index)" v-bind:class="{'hide': info.result.IsEdit == 0}"></i> <i class="iconfont icon-tishi" v-bind:class="{'hide': info.result.IsEdit == 1}"><span class="desc">描述：{{item.Description}}<i class="sanjiao"></i></span></i><br>
	                    条件：<span v-bind:class="{'hide': item.Condition !== 1}">必选</span><span v-bind:class="{'hide': item.Condition !== 2}">可选</span><span v-bind:class="{'hide': item.Condition !== 3}">常量</span><br>
	                    类型：<span v-bind:class="{'hide': item.ParamType !== 1}">String</span><span v-bind:class="{'hide': item.ParamType !== 2}">Number</span><span v-bind:class="{'hide': item.ParamType !== 3}">Boolean</span>
                    </p>
                </div>
                <h2 v-bind:class="{'hide': info.result.Status == 1}">订阅</h2>
                <div class="rightLBoxInfo paramShow" v-bind:class="{'hide': info.result.Status == 1}" >
                    <div class="selectAPP" v-show="login">
                        <label>应用</label>
                        <select v-model="appid">
                            <option v-for="item in app.Apps" value="{{item.AppID}}" >{{item.AppName}}</option>
                        </select>
                        <p class="appTex" v-show="!login">请登录后选择应用</p>
                    </div>
                    <div class="formBar subBtn">
                        <label></label>
                        <button class="btn btn36 btnOrange" v-on:click="sub()">订阅</button>
                    </div>
                </div>
            </div>
            <div class="rightRBox detailInfo detailInfoRight">
                <ul class="tapLanguage">
                    <li v-on:click="checkTest(1)" v-bind:class="{'active': test == 1}">curl</li>
                    <li v-on:click="checkTest(2)" v-bind:class="{'active': test == 2}">java</li>
                    <li v-on:click="checkTest(3)" v-bind:class="{'active': test == 3}">php</li>
                </ul>
                <div class="btn btn42 btnMain downBtn" v-on:click="toDownload()"><i class="iconfont icon-xiazai"></i> 下载SDK</div>
                <div class="rightRBoxInfo testInfoBox">
                    <div class="apiType">
                        <div class="pathBox clx">
                            <div>{{endpoint.result.Method}}</div>
                            <div>http://{{info.result.AgentPublicDNS}}{{endpoint.result.UriRoute}}</div>
                        </div>
                    </div>
                    <div class="apiType">
                        <h3>请求示例</h3>
                        <div class="requestExample break" v-bind:class="{'hide': test !== 1}">
                            <div class="hide"><i class="iconfont icon-niantie"></i></div>
                            curl --{{endpoint.result.Method}}
                            --include '{{testUrl}}<span v-bind:class="{'hide': endpoint.result.Method !== 'GET'}">?<span v-for="item in endpoint.result.FormParam" v-bind:class="{'hide': endpoint.result.FormParam[$index].Status == 2}">{{item.ParamName}}={{urlvalue[$index]}}<span v-bind:class="{'hide': $index == endpoint.result.FormParam.length - 1}">&</span></span></span>' \ -H 'X-Api-Key: {{key}}' <span v-for="item in endpoint.result.HeaderParam">'{{item.ParamName}}: {{headvalue[$index]}}'</span>
                        </div>
                        <div class="requestExample break" v-bind:class="{'hide': test !== 2}">
                            <div class="hide"><i class="iconfont icon-niantie"></i></div>
                            // These code snippets use an open-source library. <br>
                            http://unirest.io/java<br>
                            HttpResponse<JsonNode> response = Unirest.{{endpoint.result.Method}}("{{testUrl}}<span v-bind:class="{'hide': endpoint.result.Method !== 'GET'}">?<span v-for="item in endpoint.result.FormParam" v-bind:class="{'hide': endpoint.result.FormParam[$index].Status == 2}">{{item.ParamName}}={{urlvalue[$index]}}<span v-bind:class="{'hide': $index == endpoint.result.FormParam.length - 1}">&</span></span></span>")<br>
                            .header('X-Api-Key', '{{key}}';<span v-for="item in endpoint.result.HeaderParam">'{{item.ParamName}}', '{{headvalue[$index]}}'<span v-bind:class="{'hide': $index == endpoint.result.HeaderParam.length - 1}">;</span></span>).asJson();
                        </div>
                        <div class="requestExample break" v-bind:class="{'hide': test !== 3}">
                            <div class="hide"><i class="iconfont icon-niantie"></i></div>
                            // These code snippets use an open-source library. <br>
                            http://unirest.io/php<br>
                            $response = Unirest\Request::{{endpoint.result.Method}}("{{testUrl}}<span v-bind:class="{'hide': endpoint.result.Method !== 'GET'}">?<span v-for="item in endpoint.result.FormParam" v-bind:class="{'hide': endpoint.result.FormParam[$index].Status == 2}">{{item.ParamName}}={{urlvalue[$index]}}<span v-bind:class="{'hide': $index == endpoint.result.FormParam.length - 1}">&</span></span></span>",<br>
                            array('X-Api-Key' => '{{key}}' ;<span v-for="item in endpoint.result.HeaderParam">'{{item.ParamName}}' => '{{headvalue[$index]}}'<span v-bind:class="{'hide': $index == endpoint.result.HeaderParam.length - 1}">;</span></span>));
                        </div>
                    </div>
                    <div class="ParamBox" v-bind:class="{'hide':endpoint.result.FormParam == null}">
                        <h3>URL参数：</h3>
                        <div v-for="item in endpoint.result.FormParam">
                            <label>{{item.ParamName}}</label>
                            <input type="text" v-model="urlvalue[$index]" placeholder="请输入参数" v-on:change="pathRoute()"><span v-bind:class="{'hide': item.Condition !== 1}">*</span>
                        </div>
                    </div>
                    <div class="ParamBox" v-bind:class="{'hide':endpoint.result.HeaderParam == null}">
                        <h3>请求头参数：</h3>
                        <div v-for="item in endpoint.result.HeaderParam">
                            <label>{{item.ParamName}}</label>
                            <input type="text" v-model="headvalue[$index]" placeholder="请输入参数"><span v-bind:class="{'hide': item.Condition !== 1}">*</span>
                        </div>
                    </div>
                    <p v-bind:class="{'hide': endpoint.result.FormParam == null && endpoint.result.HeaderParam == null}">*为必填参数</p>
                    <div class="testBtn" v-on:click="sendTest()">
                        <span class="btn btn42 btnMain">测试</span>
                    </div>
                    <pre class="requestExample break testBox">{{text.header}}
                    	{{text.test}}
                    </pre>
                </div>
            </div>

        </div>
        <!--右侧功能区域 结束-->
    </div>
</div>

 <!--弹层 开始-->
    <div class="tipBox" v-bind:class="{ 'hide': tip == 0}" id="tipBox">
        <div class="mask"></div>

        <div class="tipBoxIn groupTip" v-bind:class="{ 'hide': group == 0}">
        	<div class="tipHeader">
        		<h2>{{ edGroupNm }}</h2>
                <div class="closeTip" id="" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <div class="rightLBoxInfo">
	                <form>
	                    <div class="formBar">
	                        <label>分组名：</label>
	                        <input type="text" class="inputS" maxlength="6" v-model="GroupName" />
	                    </div>
	                </form>
	            </div>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMinor" v-on:click="hide()">取消</button>
                <button class="btn btn36 btnMain" v-on:click="sendGroup()">确定</button>
            </div>

        </div>

        <!--订阅-->
        <div class="tipBoxIn subscribeTip" v-bind:class="{ 'hide': subscribe == 0}">
            <div class="tipHeader">
                <div class="closeTip" id="" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <p>订阅成功！</p>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMinor" v-on:click="toDownload()"><i class="iconfont icon-xiazai"></i> 下载SDK</button>
                <button class="btn btn36 btnMain" v-on:click="toMyApp()">查看</button>
            </div>
        </div>

        <!--编辑路径-->
        <div class="tipBoxIn editPathTip" v-bind:class="{ 'hide': route == 0}">
            <div class="tipHeader">
                <h2>路径</h2>
                <div class="closeTip" id="" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <div class="rightLBoxInfo">
                    <form>
                        <div class="formBar">
                            <label>请求方式</label>
                            <select class="selectS" v-model='routeparm.method'>
                                <option value="GET">GET</option>
                                <option value="PUT">PUT</option>
                                <option value="PATCH">PATCH</option>
                                <option value="DELETE">DELETE</option>
                                <option value="POST">POST</option>
                            </select>
                        </div>

                        <div class="formBar">
                            <label>url路径</label>
                            <input type="text" v-model='routeparm.uriroute' class="inputS"/>
                        </div>
                        <div class="formBar">
                            <label>路径别名</label>
                            <input type="text" v-model="routeparm.endpointname" class="inputS" maxlength="14" />
                        </div>
                        <div class="formBar">
                            <label>分组</label>
                            <select class="selectS" v-model='routeparm.group'>
                                <option v-for="GropOpt in info.result.Groups" value="{{ GropOpt.GroupID }}">{{ GropOpt.GroupName }}</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>描述</label>
                            <textarea class="inputS" v-model="routeparm.endpointdesc" maxlength="140">{{routeparm.endpointdesc}}</textarea>
                        </div>

                    </form>
                </div>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMinor" v-on:click="hide()">取消</button>
                <button class="btn btn36 btnMain" v-on:click="sendMes()">确定</button>
            </div>
        </div>

        <!--编辑URL参数-->
        <div class="tipBoxIn editPathTip delBox" v-bind:class="{ 'hide': url == 0}">
            <div class="tipHeader">
                <h2>URL参数</h2>
                <div class="closeTip" id="close" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <div class="rightLBoxInfo">
                    <form>
                        <div class="formBar">
                            <label>名称</label>
                            <input type="text" maxlength="14" v-model="urlparm.paramname" class="inputS"/>
                        </div>
                        <div class="formBar">
                            <label>条件</label>
                            <select class="selectS" v-model="urlparm.condition">
                                <option value="1">必选</option>
                                <option value="3">常量</option>
                                <option value="2">可选</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>类型</label>
                            <select class="selectS" v-model="urlparm.paramtype">
                                <option value="2">Number</option>
                                <option value="3">Boolean</option>
                                <option value="1">String</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>描述</label>
                            <textarea class="inputS" maxlength="140" v-model="urlparm.description"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMain del" v-on:click="delUrl()">删除</button>
                <button class="btn btn36 btnMinor" v-on:click="hide()">取消</button>
                <button class="btn btn36 btnMain" v-on:click="sendUrl()">确定</button>
            </div>
        </div>

        <!--编辑请求头-->
        <div class="tipBoxIn editPathTip delBox" v-bind:class="{ 'hide': request == 0}">
            <div class="tipHeader">
                <h2>请求头</h2>
                <div class="closeTip" id="close" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <div class="rightLBoxInfo">
                    <form>
                        <div class="formBar">
                            <label>名称</label>
                            <input type="text" maxlength="14" v-model="headparm.paramname" class="inputS"/>
                        </div>
                        <div class="formBar">
                            <label>条件</label>
                            <select class="selectS" v-model="headparm.condition">
                                <option value="2">可选</option>
                                <option value="1">必选</option>
                                <option value="3">常量</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>类型</label>
                            <select class="selectS" v-model="headparm.paramtype">
                                <option value="2">Number</option>
                                <option value="3">Boolean</option>
                                <option value="1">String</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>描述</label>
                            <textarea class="inputS" maxlength="140" v-model="headparm.description"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMain del" v-on:click="delHead()">删除</button>
                <button class="btn btn36 btnMinor" v-on:click="hide()">取消</button>
                <button class="btn btn36 btnMain" v-on:click="sendHead()">确定</button>
            </div>
        </div>

        <!--添加url参数-->
        <div class="tipBoxIn editPathTip" v-bind:class="{ 'hide': createurl == 0}">
            <div class="tipHeader">
                <h2>添加URL参数</h2>
                <div class="closeTip" id="close" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <div class="rightLBoxInfo">
                    <form>
                        <div class="formBar">
                            <label>名称</label>
                            <input type="text" maxlength="14" v-model="addurl.paramname" class="inputS"/>
                        </div>
                        <div class="formBar">
                            <label>条件</label>
                            <select class="selectS" v-model="addurl.condition">
                                <option value="1">必选</option>
                                <option value="3">常量</option>
                                <option value="2">可选</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>类型</label>
                            <select class="selectS" v-model="addurl.paramtype">
                                <option value="2">Number</option>
                                <option value="3">Boolean</option>
                                <option value="1">String</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>描述</label>
                            <textarea class="inputS" maxlength="140" v-model="addurl.description"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMinor" v-on:click="hide()">取消</button>
                <button class="btn btn36 btnMain" v-on:click="addUrl()">确定</button>
            </div>
        </div>

        <!--添加请求头-->
        <div class="tipBoxIn editPathTip" v-bind:class="{ 'hide': createhead == 0}">
            <div class="tipHeader">
                <h2>添加请求头</h2>
                <div class="closeTip" id="close" v-on:click="hide()">×</div>
            </div>
            <div class="tipMain">
                <div class="rightLBoxInfo">
                    <form>
                        <div class="formBar">
                            <label>名称</label>
                            <input type="text" maxlength="14" v-model="addhead.paramname" class="inputS"/>
                        </div>
                        <div class="formBar">
                            <label>条件</label>
                            <select class="selectS" v-model="addhead.condition">
                                <option value="2">可选</option>
                                <option value="1">必选</option>
                                <option value="3">常量</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>类型</label>
                            <select class="selectS" v-model="addhead.paramtype">
                                <option value="2">Number</option>
                                <option value="3">Boolean</option>
                                <option value="1">String</option>
                            </select>
                        </div>
                        <div class="formBar">
                            <label>描述</label>
                            <textarea class="inputS" maxlength="140" v-model="addhead.description"></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <div class="tipFooter">
                <button class="btn btn36 btnMinor" v-on:click="hide()">取消</button>
                <button class="btn btn36 btnMain" v-on:click="addHeader()">确定</button>
            </div>
        </div>
    </div>
<!--弹层 结束-->
</template>
<script>
import getinfo from '../../controllers/apiInfo'
import info from '../../models/md_apiInfo'
import app from '../../models/md_app'
import endpoint from '../../models/md_endPoint'
import helplist from '../../models/md_help'
import getpoint from '../../controllers/getEndpoint'
import CommonSvc from '../../services/CommonSvc'
import islogin from '../../controllers/getUserInfo'
import toTest from '../../controllers/toTest'
import tolocation from '../../controllers/changeLoc'
import getDomain from '../../controllers/getDomain.js'
export default{
  data () {
    return {
    	info,
        endpoint,            //当前点击endpoint数据
        clickstu: 0,         //左边栏点击状态
        routeparm: {         //路径参数载体
            'method': '',
            'uriroute': '',
            'endpointname': '',
            'endpointdesc': '',
            'endpointid': '',
            'group': ''
        },
        IsEdit: 1,              //用户在详情页的操作权限 1:可编辑 0:不可编辑
        login: false,
        appid: null,            //app id
        app,                    //app列表
        text: '',               //测试框返回数据
        desc: '默认描述',
        urlvalue: [],           //url测试参数value
        headvalue: [],          //请求头测试参数value
        key: '7Jn0Za0Gl5Rx3Aw1Md4Br7Ac9Zw2Ui1D',    //测试key
        test: 1,                //请求示例方式 1：curl 2：java 3: php
        testUrl: '',            //示例中的测试地址
        urlparm: {              //编辑URL参数
            'paramid': '',
            'endpointid': '',
            'paramname': '',
            'condition': '',
            'paramtype': '',
            'paramvalue': '',
            'description': ''
        },
        headparm: {             //编辑请求头参数
            'paramid': '',
            'endpointid': '',
            'paramname': '',
            'condition': '',
            'paramtype': '',
            'paramvalue': '',
            'description': ''
        },
        addurl: {               //添加URL参数
            'endpointid': '',
            'paramname': '',
            'condition': '1',
            'paramtype': '1',
            'paramvalue': '',
            'description': ''
        },
        addhead: {              //添加请求头参数
            'endpointid': '',
            'paramname': '',
            'condition': '1',
            'paramtype': '1',
            'paramvalue': '',
            'description': ''
        },
    	tip: 0,               //弹层box    0：隐藏  1：显示
    	subscribe: 0,         //订阅弹层
    	route: 0,             //路径弹层
    	url: 0,               //url参数弹层
    	request: 0,           //请求头弹层
        showdesc: 0,          //展示描述弹层
        createurl: 0,         //展示添加url参数弹层
        createhead: 0,         //展示添加head参数弹层
        group: 0,
        GroupName: '',   // 分组名称
        edGroupNm: '添加分组',  // 分组名弹层标题，保存时用于判断是修改还是添加
        edGroupID: 0,     // 修改名字时分组id
    }
  },
  methods: {
  	show (index) {
  		this.tip = 1
  		switch (index) {
          case 0:
            this.subscribe = 1
            break
          case 1:
            this.route = 1
            break
          case 2:
            this.url = 1
            break
          case 3:
            this.request = 1
            break
          case 4:
            this.showdesc = 1
            break
          case 5:
            this.createurl = 1
            break
          case 6:
            this.createhead = 1
            break
          default:
        }
  	},
  	hide () {
  		this.tip =0
  		this.subscribe = 0
  		this.route = 0
  		this.url = 0
  		this.request = 0
        this.createurl = 0
        this.createhead = 0
        this.group = 0
        this.addurl = {
            'endpointid': '',
            'paramname': '',
            'condition': '1',
            'paramtype': '1',
            'paramvalue': '1',
            'description': ''
        }
        this.addhead = {
            'endpointid': '',
            'paramname': '',
            'condition': '1',
            'paramtype': '1',
            'paramvalue': '1',
            'description': ''
        }
  	},

    pathRoute () {
        if(this.endpoint.result.UriRoute.indexOf("{") > 0 ){
            this.testUrl = 'http://' + this.info.result.AgentPublicDNS + this.endpoint.result.UriRoute
            if(this.endpoint.result.FormParam !== null && this.endpoint.result.FormParam.length > 0){
                for(let i = 0;i<this.endpoint.result.FormParam.length;i++){
                    let n = "{" + this.endpoint.result.FormParam[i].ParamName + "}"
                    if(this.testUrl.indexOf(n) > 0){
                        this.testUrl = this.testUrl.replace(n,this.urlvalue[i])
                    }
                }
            }
        }
    },

    //切换endpoint
    tap (EndpointID) {
        this.clickstu = EndpointID
        this.urlvalue = []
        this.headvalue = []
        this.text = ''
        if(this.info.result.Endpoint !== null){
            getpoint.getEndpoint(EndpointID)
            if(this.endpoint.result.UriRoute.indexOf("{") > 0 ){
                this.testUrl = 'http://' + this.info.result.AgentPublicDNS + this.endpoint.result.UriRoute
                if(this.endpoint.result.FormParam !== null && this.endpoint.result.FormParam.length > 0){
                    for(let i = 0;i<this.endpoint.result.FormParam.length;i++){
                        let n = "{" + this.endpoint.result.FormParam[i].ParamName + "}"
                        if(this.testUrl.indexOf(n) > 0){
                            this.endpoint.result.FormParam[i].Status = 2
                        }
                    }
                }
            }else{
                this.testUrl = 'http://' + this.info.result.AgentPublicDNS + this.endpoint.result.UriRoute
            }
            if(this.endpoint.result.FormParam !== null && this.endpoint.result.FormParam.length > 0){
                for(let i = 0;i<this.endpoint.result.FormParam.length;i++){
                    this.urlvalue.push(this.endpoint.result.FormParam[i].ParamValue)
                }
            }
            if(this.endpoint.result.HeaderParam !== null && this.endpoint.result.HeaderParam.length > 0){
                for(let i = 0;i<this.endpoint.result.HeaderParam.length;i++){
                    this.headvalue.push(this.endpoint.result.HeaderParam[i].ParamValue)
                }
            }
        }else{
            this.endpoint.result = {}
        }
    },

    //展示路径数据
    changeModel () {
        this.show(1)
        this.routeparm.uriroute = this.endpoint.result.UriRoute
        this.routeparm.method = this.endpoint.result.Method
        this.routeparm.endpointname = this.endpoint.result.EndpointName
        this.routeparm.endpointdesc = this.endpoint.result.EndpointDesc
        this.routeparm.endpointid = this.endpoint.result.EndpointID
        this.routeparm.group = this.endpoint.result.GroupID
    },

    //编辑路径数据
    sendMes () {
        let dataparm = {
            'Method': this.routeparm.method,
            'ApiID': this.info.result.ApiID,
            'UriRoute': this.routeparm.uriroute,
            'EndpointName': this.routeparm.endpointname,
            'EndpointDesc': this.routeparm.endpointdesc,
            'GroupID': this.routeparm.group,
        }
        let reg = /^[/][a-zA-Z0-9_/{}.|#$%@&*+-=:'";]*$/
        if(dataparm.UriRoute == ''){
            alert('路径不能为空')
            return false
        }else if(reg.test(dataparm.UriRoute) !== true){
            alert("路径仅支持英文字母 数字 _ / { } . | # $ % @ & * = + : ; - ' \"，且必须以'/'开头")
            return false
        }
        let EndpointID = this.routeparm.endpointid
        let _this = this
        CommonSvc.put(dataparm, 'v1/endpoint/' + EndpointID,1).done(function(result){
            if (result.status == 200) {
              window.alert('修改成功!')
              getpoint.getEndpoint(EndpointID)
              getinfo.ready(_this.$route.params.ApiID)
              _this.tap(_this.clickstu)
              _this.hide()
            }else {
              if(result.message == "ID isn't exist or Current params are as same as origin data, So needn't to update."){
                alert('您未做任何修改！')
              }else{
                window.alert(result.message)
              }
            }
        })
    },

    //编辑url参数
    sendUrl () {
        let urldata = {
            'EndpointID': this.urlparm.endpointid,
            'ParamName': this.urlparm.paramname,
            'Condition': this.urlparm.condition,
            'ParamType': this.urlparm.paramtype,
            'ParamValue': 1,
            'Description': this.urlparm.description
        }
        let reg = /^[_a-zA-Z][a-zA-Z0-9_-]*$/
        if(urldata.ParamName == ''){
            alert('参数名不能为空')
            return false
        }else if(reg.test(urldata.ParamName) !== true){
            alert('参数名称仅支持英文字母、数字、中横线、下划线，且必须为英文字母开头')
            return false
        }
        let ParamID = this.urlparm.paramid
        let _this = this
        CommonSvc.put(urldata, 'v1/endpointParam/' + ParamID, 1).done(function(result){
            if (result.status == 200) {
              window.alert('修改成功!')
              getpoint.getEndpoint(urldata.EndpointID)
              _this.tap(_this.clickstu)
              _this.hide()
            }else {
              if(result.message == "ID isn't exist or Current params are as same as origin data, So needn't to update."){
                alert('您未做任何修改！')
              }else{
                window.alert(result.message)
              }
            }
        })
    },

    //展示url参数
    editUrl (index) {
        this.show(2)
        this.urlparm.paramname = this.endpoint.result.FormParam[index].ParamName
        this.urlparm.condition = this.endpoint.result.FormParam[index].Condition
        this.urlparm.paramtype = this.endpoint.result.FormParam[index].ParamType
        this.urlparm.paramvalue = this.endpoint.result.FormParam[index].ParamValue
        this.urlparm.paramid = this.endpoint.result.FormParam[index].ParamID
        this.urlparm.endpointid = this.endpoint.result.FormParam[index].EndpointID
        this.urlparm.description = this.endpoint.result.FormParam[index].Description
    },

    //展示请求头参数
    editHead (index) {
        this.show(3)
        this.headparm.paramname = this.endpoint.result.HeaderParam[index].ParamName
        this.headparm.condition = this.endpoint.result.HeaderParam[index].Condition
        this.headparm.paramtype = this.endpoint.result.HeaderParam[index].ParamType
        this.headparm.paramvalue = this.endpoint.result.HeaderParam[index].ParamValue
        this.headparm.paramid = this.endpoint.result.HeaderParam[index].ParamID
        this.headparm.endpointid = this.endpoint.result.HeaderParam[index].EndpointID
        this.headparm.description = this.endpoint.result.HeaderParam[index].Description
    },

    //编辑请求头参数
    sendHead () {
        let headata = {
            'EndpointID': this.headparm.endpointid,
            'ParamName': this.headparm.paramname,
            'Condition': this.headparm.condition,
            'ParamType': this.headparm.paramtype,
            'ParamValue': 1,
            'Description': this.headparm.description
        }
        let reg = /^[_a-zA-Z][a-zA-Z0-9_-]*$/
        if(headata.ParamName == ''){
            alert('参数名不能为空')
            return false
        }else if(reg.test(headata.ParamName) !== true){
            alert('参数名称仅支持英文字母、数字、中横线、下划线，且必须为英文字母开头')
            return false
        }
        let ParamID = this.headparm.paramid
        let _this = this
        CommonSvc.put(headata, 'v1/endpointParam/' + ParamID, 1 ).done(function(result){
            if (result.status == 200) {
              window.alert('修改成功!')
              getpoint.getEndpoint(headata.EndpointID)
              _this.hide()
            }else {
              if(result.message == "ID isn't exist or Current params are as same as origin data, So needn't to update."){
                alert('您未做任何修改！')
              }else{
                window.alert(result.message)
              }
            }
        })
    },

    //加载我的应用
    isLogin () {
        this.login = islogin.getUserInfo()
        let _this = this
        let data = {}
        if(this.login){
            CommonSvc.get(data, 'v1/user_app/my',1).done(function(result){
                if (result.status == 200) {
                  _this.app = result.data
                  _this.appid = result.data.Apps[0].AppID
                }else{
                  window.console.log(result.message)
                }
            })
        }
    },

    //订阅
    sub () {
        if(this.login){
            let _this = this
            let data = {
                'ApiID': this.info.result.ApiID,
                'AppID': this.appid
            }
            CommonSvc.post(data, 'v1/sub/',1).done(function(result){
                if (result.status == 200) {
                  _this.show(0)
                }else{
                  window.alert(result.message)
                }
            })
        }else{
            if(confirm("您还未登录,是否跳转到登录页面？")){
              window.location.href = getDomain.getUrl('login?callbackurl=' +  getDomain.getUrl('detail/' + this.info.result.ApiID))
            }
        }

    },

    //切换请求示例语言
    checkTest (index) {
        this.test = index
    },

    //发送测试请求
    sendTest () {
        let _this = this
        this.text = ''
        setTimeout(function(){
            let url = 'http://' + _this.info.result.AgentPublicDNS + _this.endpoint.result.UriRoute
            let data = {}
            let header = {'X-Api-Key': _this.key}
            if(_this.endpoint.result.FormParam !== null && _this.endpoint.result.FormParam.length > 0){
                for(let i = 0;i<_this.endpoint.result.FormParam.length;i++){
                    let n = "{" + _this.endpoint.result.FormParam[i].ParamName + "}"
                    if(url.indexOf(n) > 0){
                        url = url.replace(n,_this.urlvalue[i])
                    }else{
                        data[_this.endpoint.result.FormParam[i].ParamName] = _this.urlvalue[i]
                    }
                    if(_this.endpoint.result.FormParam[i].Condition == 1){
                        if(_this.urlvalue[i] == undefined || _this.urlvalue[i] == ''){
                            alert('必选项不能为空')
                            return false
                        }
                    }
                }
            }
            if(_this.endpoint.result.HeaderParam !== null && _this.endpoint.result.HeaderParam.length > 0){
                for(let i = 0;i<_this.endpoint.result.HeaderParam.length;i++){
                    header[_this.endpoint.result.HeaderParam[i].ParamName] = _this.headvalue[i]
                    if(_this.endpoint.result.HeaderParam[i].Condition == 1){
                        if(_this.headvalue[i] == undefined || _this.headvalue[i] == ''){
                            alert('必选项不能为空')
                            return false
                        }
                    }
                }
            }
            let method = _this.endpoint.result.Method
            _this.text = toTest.testGet(url,data,header,method)
        },200)
    },

    //去下载SDK
    toDownload () {
        if(this.login){
            window.location.href = getDomain.getUrl('center/5')
        }else{
            if(confirm("您还未登录,是否跳转到登录页面？")){
              window.location.href = getDomain.getUrl('login?callbackurl=' +  getDomain.getUrl('detail/' + this.info.result.ApiID))
            }
        }
    },

    //添加路径
    addRoute () {
        tolocation.toAdd1(this.info.result.ApiID)
    },

    //去我的APP
    toMyApp () {
        window.location.href = getDomain.getUrl('center/3')
    },

    addUrl () {
        let data = {
            'EndpointID': this.endpoint.result.EndpointID,
            'ParamName': this.addurl.paramname,
            'Condition': this.addurl.condition,
            'ParamType': this.addurl.paramtype,
            'ParamValue': this.addurl.paramvalue,
            'Description': this.addurl.description,
            'Mark': 1
        }
        let reg = /^[_a-zA-Z][a-zA-Z0-9_-]*$/
        if(data.ParamName == ''){
            alert('参数名不能为空')
            return false
        }else if(reg.test(data.ParamName) !== true){
            alert('参数名称仅支持英文字母、数字、中横线、下划线，且必须为英文字母开头')
            return false
        }
        let _this = this
        CommonSvc.post(data, 'v1/endpointParam/', 1 ).done(function(result){
            if (result.status == 200) {
              window.alert('添加成功!')
              getpoint.getEndpoint(data.EndpointID)
              _this.tap(_this.clickstu)
              _this.hide()
            }else {
              window.alert(result.message)
            }
        })
    },

    addHeader () {
        let data = {
            'EndpointID': this.endpoint.result.EndpointID,
            'ParamName': this.addhead.paramname,
            'Condition': this.addhead.condition,
            'ParamType': this.addhead.paramtype,
            'ParamValue': this.addhead.paramvalue,
            'Description': this.addhead.description,
            'Mark': 2
        }
        let reg = /^[_a-zA-Z][a-zA-Z0-9_-]*$/
        if(data.ParamName == ''){
            alert('参数名不能为空')
            return false
        }else if(reg.test(data.ParamName) !== true){
            alert('参数名称仅支持英文字母、数字、中横线、下划线，且必须为英文字母开头')
            return false
        }
        let _this = this
        CommonSvc.post(data, 'v1/endpointParam/', 1 ).done(function(result){
            if (result.status == 200) {
              window.alert('添加成功!')
              getpoint.getEndpoint(data.EndpointID)
              _this.hide()
            }else {
              window.alert(result.message)
            }
        })
    },

    delUrl () {
        let ParamID = this.urlparm.paramid
        let EndpointID = this.endpoint.result.EndpointID
        let data = {}
        let _this = this
        CommonSvc.det(data, 'v1/endpointParam/' + ParamID + '?EndpointID=' + EndpointID, 1 ).done(function(result){
            if (result.status == 200) {
              window.alert('删除成功!')
              getpoint.getEndpoint(EndpointID)
              _this.tap(_this.clickstu)
              _this.hide()
            }else {
              window.alert(result.message)
            }
        })
    },

    delHead () {
        let ParamID = this.headparm.paramid
        let EndpointID = this.endpoint.result.EndpointID
        let data = {}
        let _this = this
        CommonSvc.det(data, 'v1/endpointParam/' + ParamID + '?EndpointID=' + EndpointID, 1 ).done(function(result){
            if (result.status == 200) {
              window.alert('删除成功!')
              getpoint.getEndpoint(EndpointID)
              _this.hide()
            }else {
              window.alert(result.message)
            }
        })
    },

    addGroup () {
    	this.tip = 1
    	this.group = 1
      // 清空数据模型
      this.GroupName = ''
      this.edGroupNm = '添加分组'
    },

    sendGroup () {
      let _this = this
      if (_this.GroupName != '') {
        // 修改和新增分组公用一个弹窗，所以根据弹窗标题变量GroupName的内容判断是新增还是修改
        if (_this.edGroupNm == '添加分组') {
          CommonSvc.post({'GroupName': _this.GroupName}, 'v1/endpoint_group/' + _this.$route.params.ApiID , 1).done((result)=>{
            if (result.status == 200) {
              window.alert('添加成功')
              this.hide()
              // 清空输入框内容
              _this.GroupName = ''
              // 添加成功后刷新下数据
              getinfo.ready(this.$route.params.ApiID)
            } else {
              window.alert(result.message)
              this.hide()
              // 清空输入框内容
              _this.GroupName = ''
            }
          })
        }
        if (_this.edGroupNm == '修改分组名称') {
          CommonSvc.put({'GroupName': _this.GroupName}, 'v1/endpoint_group/' + _this.edGroupID , 1).done((result)=>{
            if (result.status == 200) {
              window.alert('修改成功')
              this.hide()
              // 清空输入框内容
              _this.GroupName = ''
              // 添加成功后刷新下数据
              getinfo.ready(this.$route.params.ApiID)
            }else {
              window.alert(result.message)
              this.hide()
              // 清空输入框内容
              _this.GroupName = ''
            }
          })
        }
      } else {
        window.alert('分组名不能为空')
      }
    },

    EditGroupName (GroupName, GroupID) {
      // 编辑分组名
      let _this = this
      _this.tip = 1
    	_this.group = 1
      _this.GroupName = GroupName
      // 把弹层标题名称改掉
      _this.edGroupNm = '修改分组名称'
      // 把要修改的id名放到变量中
      _this.edGroupID = GroupID
    },

    DelGroupGroup (GroupID) {
      let _this = this
      // 删除分组
      let delUrl = 'v1/endpoint_group/' + GroupID
      CommonSvc.det({}, delUrl, 1).done((result)=>{
        if (result.status == 200) {
          // 更新下数据
          getinfo.ready(this.$route.params.ApiID)
          window.alert('删除成功')
        }else {
          window.alert(result.message)
        }
      })
    },

    GroupsTab (index) {
      info.result.Groups[index].tabFlage = !info.result.Groups[index].tabFlage
      // 生拷贝一份，引起视图刷新，否则视图不刷新
      let temp = JSON.parse(JSON.stringify(info.result))
      info.result = temp
    },

    toData () {
        window.location.href = getDomain.getUrl('data/' + this.$route.params.ApiID)
    },

    toHelp () {
        window.location.href = getDomain.getUrl('help/' + this.$route.params.ApiID)
    },

    toSet () {
        window.location.href = getDomain.getUrl('setup/' + this.$route.params.ApiID)
    }
  },

  ready: function () {
    let _this = this
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    //this.helpScroll()
    // 页面加载自动生成模板列表
    getinfo.ready(this.$route.params.ApiID)
    // 默认第一个不为空的组第一个EndpointID，遍历一下，找到
    for (let i = 0; i < info.result.Groups.length; i++) {
      if (info.result.Groups[i].GroupArr.length != 0) {
        _this.clickstu = info.result.Groups[i].GroupArr[0].EndpointID
        this.tap(_this.clickstu)
        // 找到第一个就跳出循环
        break
      }else{
        this.endpoint.result = {}
      }
    }
    this.isLogin()
    //未发布的API除了开发者 进入跳转到主页
    if(info.result.Status == 1){
        if(info.result.IsOwner == 0){
            alert('无权限访问！')
            window.location.href = getDomain.getUrl('')
        }
    }
  }
}
</script>
<style scoped>
.EndpointList{
  visibility: hidden;
}
.GroupList:hover .EndpointList{
  visibility: visible;
}
</style>
