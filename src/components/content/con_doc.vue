<template>
  <div class="mLeftBox listLeft">
    <div class="createApi" v-on:click="toAddApi()"><i class="iconfont icon-create"></i> 创建API</div>
    <ul class="menuBox menuTop">
      <li v-on:click="toMyApi()">
        <span><i class="iconfont icon-application"></i> 我的API</span>
      </li>
      <li>
        <span><i class="iconfont icon-file"></i> 开发者文档</span>
      </li>
    </ul>
  </div>
  <div class="mRightBox listRight">

    <div class="docBox">
      <!--welcome-->
      <div class="docInfo">
        <h2>从此开始</h2>
        <div class="questionAll">
          <div><img src="../../images/docImgs/welcome/w1.jpg" alt="" title=""/> </div>
          <div>
            <h2>API Store是什么？</h2>
            <p>概述整个平台的功能和特性，告诉你为什么要使用飞凡的apiStore.</p>
          </div>
          <div>查看全部</div>
        </div>
        <div class="questionAll">
          <div><img src="../../images/docImgs/welcome/w2.jpg" alt="" title=""/> </div>
          <div>
            <h2>添加一个API</h2>
            <p>如何在apiStpre中添加自己的API. </p>
          </div>
          <div>查看全部</div>
        </div>
        <div class="questionAll">
          <div><img src="../../images/docImgs/welcome/w3.jpg" alt="" title=""/> </div>
          <div>
            <h2>建立自己的applications</h2>
            <p>一分钟之内建立自己的Application</p>
          </div>
          <div>查看全部</div>
        </div>
        <div class="questionAll">
          <div><img src="../../images/docImgs/welcome/w4.jpg" alt="" title=""/> </div>
          <div>
            <h2>获取帮助</h2>
            <p>请与我们联系<address>support@apistore.net</address></p>
          </div>
          <div>查看全部</div>
        </div>
      </div>

      <!--概述-->
      <div class="docInfo">
        <h2>从此开始</h2>
        <p>飞凡API市场为API开发人员和API消费者提供了功能丰富的、标准的、稳定的RESTful API接口服务；API开发人员可以很容易的将API提供的功能集成到飞凡API市场，可以迅速为全球用户提供标准的API服务,实现API的快速市场化；</p>
        <p>API的消费者可以方便的获得各种API服务，运用到自己的APP和应用中，快速获得功能强大的接口功能支持；目前在该平台上提供的接口，已经提供了飞凡商业联盟的用户和商家的基本数据，并在飞凡商业联盟有的合作伙伴和第三方公司得到应用；</p>
        <p>在飞凡商业联盟现有的数据基础上，不断添加收集，实体商业，酒店业，影视业，旅游业等相关行业的API接口，为全球的相关企业和组织提供便利</p>
      </div>
      <div class="docInfo">
        <h2>对于消费者</h2>
        <p>很容易从API市场中订阅自己中意的API，并通过application机制更容易应用到项目中。整个http服务使用nginx构建,支持PHP、Ruby、Python、Java、Objective-C等主流语言。</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/d2/s1.png" title="" alt=""/></div>
        </div>
      </div>
      <div class="docInfo">
        <h2>对于开发者</h2>
        <p>如果您在平台上创建一个API，通过本平台可快速的发布并获利，并完全控制源代码，服务器和服务价格，我们只是一个中间平台，不会截取API的任何信息。</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/d2/s2.png" title="" alt=""/></div>
        </div></div>
      <div class="docInfo">
        <h2>案例回顾</h2>
        <p>飞凡科技公司作为进驻平台的第一批API提供者，提供了大量高质量的API接口，为飞凡APP软件，快钱，万达影视提供了服务。</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/d2/s3.png" title="" alt=""/></div>
        </div>
        <p>用户只需在API详情中点击订阅，即可获得使用资格。</p>
      </div>
      <!--2. 注册和登录-->
      <div class="docInfo">
        <h2>用户注册</h2>
        <p>在未登录的情况下，点击网站中导航栏中的注册按钮，即可进入注册页面，根据提示即可完成注册。</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/loginReg/l1.png" title="" alt=""/></div>
        </div>
      </div>
      <div class="docInfo">
        <h2>用户登录</h2>
        <p>在未登录的情况下，点击网站中导航栏中的登录按钮，即可进入登录页面。</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/loginReg/l2.png" title="" alt=""/></div>
        </div>
      </div>
      <!--3. 身份验证设定-->
      <div class="docInfo">
        <h2>身份验证设置</h2>
        <p>平台支持多种身份验证类型以匹配您的API的协议，在API详情中可修改已选择的验证类型</p>
      </div>
      <div class="docInfo">
        <h2>类型</h2>
        <ol class="olInfos">
          <li>1.Query Parameters</li>
          <li>2.HTTP Headers</li>
          <li>3.HTTP Basic</li>
          <li>4.OAuth 1.0a</li>
        </ol>
      </div>
      <div class="docInfo">
        <h2>Query Parameters</h2>
        <p>查询参数类型允许您以参数的形式添加app-key</p>
        <dl>
          <dt>https://api.yourapi.com/v1/{endpoint}?QueryParameter=Authentication</dt>
          <dd>您可以通过任何APIKey API作为查询字符串参数。参数名称是“app-key“的小写<br/>
            例子：<br/>
            https://myapi.p.apistore.net/endpoint?app-key=YourSecretkey
          </dd>
        </dl>
      </div>
      <div class="docInfo">
        <h2>HTTP Headers</h2>
        <p>在Http headers中为您的api添加参数</p>
        <dl>
            <dd>例子：<br/>
              Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==
            </dd>
        </dl>
      </div>
      <div class="docInfo">
        <h2>OAuth 1.0a</h2>
        <p>OAuth 1.0设置允许您设置授权URL、访问令牌URL,URL请求令牌和范围。</p>
      </div>
      <!--4. Heads设定-->
      <div class="docInfo">
        <h2>Headers设置</h2>
        <p>Header会添加到请求和响应中 。这个对消费者和API提供者来讲都是很重要的。意识到这些细节,将会节省您很多时间在使用过程中。</p>
      </div>
      <div class="docInfo">
        <h2>应答中的设定</h2>
        <p>当消费者使用一个已订阅的API时，在response的Heads中会有下面的设定：</p>
        <p class="remark">X-appstore-Version</p>
        <p>目前Appstore的版本</p>
        <p class="remark">X-appstore-Proxy-Response</p>
        <p>如果您看到这个参数，说明现在此API无法正常工作或者您的用户验证已经过</p>
      </div>
      <div class="docInfo">
        <h2>请求中的设定</h2>
        <p>如果您是API的提供者，那么在收到的request中的Heads会有如下的设定：</p>
        <p class="remark">X-appstore-Proxy-Secret</p>
        <p>这是一个唯一键对每个API所的代理请求。出于安全的考虑,您可以验证这个唯一键</p>
        <p class="remark">X-appstore-User</p>
        <p>请求的发起者（API的订阅者）</p>
        <p class="remark">X-aoostore-Subscription</p>
        <p>订阅类型</p>
        <ul class="ulInfo">
          <li>FREE</li>
          <li>BASIC</li>
          <li>CUSTOM<span>(个人定制项目)</span></li>
        </ul>
        <p class="remark">X-appstore-Version</p>
        <p>目前Appstore的版本</p>
      </div>
      <!--5. 权限控制-->
      <div class="docInfo">
        <h2>权限控制</h2>
        <p>敬请期待</p>
      </div>
      <!--6. 安全机制-->
      <div class="docInfo">
        <h2>权限控制</h2>
        <p>敬请期待</p>
      </div>
      <!--7. API规范-->
      <div class="docInfo">
        <h2>API规范</h2>
        <p>WandaBO OpenAPI规范用于RESTful API接口的定义，规范适合用于人机交互或应用API消费端和API接口网关以及API提供服务端之间的机器于机器之间的交互；接口规范定义可用于生成API接口文档的，也可用于生成接口代码SDK，以及自动测试工具的生成。</p>
        <h3>License许可：</h3>
        <p>Wanda BO API规范是一个开放标准，遵循The Apache License, Version 2.0。</p>
        <h3>主要框架：</h3>
        <table class="tableRule">
          <thead>
          <th>字段</th>
          <th>类型</th>
          <th>描述</th>
          </thead>
          <tbody>
          <tr>
            <td>WandaBO</td>
            <td>string</td>
            <td>必须的；当前值为: “1.0”</td>
          </tr>
          <tr>
            <td>swagger</td>
            <td>string</td>
            <td>可选的；兼容swagger接口规范，当该字段存在时，值必须为：“2.0”</td>
          </tr>
          <tr>
            <td>info</td>
            <td>Info Object</td>
            <td>必须的；定义 API的名称，版本，简介，作者等信息</td>
          </tr>
          <tr>
            <td>host</td>
            <td>string</td>
            <td>可选的；定义API的服务主机名和端口</td>
          </tr>
          <tr>
            <td>basepath</td>
            <td>string</td>
            <td>可选的；定义相对于host的paths的基础路径</td>
          </tr>
          <tr>
            <td>schemes</td>
            <td>enum[string]</td>
            <td>可选的；定义传输协议：http,https,ws,wss，缺省为http</td>
          </tr>
          <tr>
            <td>consumes</td>
            <td>[string]</td>
            <td>可选的；API消费端的MIME type</td>
          </tr>
          <tr>
            <td>produces</td>
            <td>[string]</td>
            <td>可选的；API服务端的MIME type</td>
          </tr>
          <tr>
            <td>paths</td>
            <td>Paths Object</td>
            <td>必须的；定义API路径，方法，参数，返回值，安全策略等</td>
          </tr>
          <tr>
            <td>definitions</td>
            <td>Definitions</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>可选的；</td>
            <td>各种object对象定义</td>
          </tr>
          <tr>
            <td>parameters</td>
            <td>Parameters</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Definitions</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>可选的；</td>
            <td>参数object对象定义</td>
          </tr>
          <tr>
            <td>responses</td>
            <td>Responses</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Definitions</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>可选的；</td>
            <td>返回object对象定义</td>
          </tr>
          <tr>
            <td>securityDefinitions</td>
            <td>Security</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Definitions</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>可选的；</td>
            <td>安全策略定义</td>
          </tr>
          <tr>
            <td>security [Security]</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Definitions</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Object]</td>
            <td>可选的；</td>
            <td>返回object对象定义</td>
          </tr>
          <tr>
            <td>tags</td>
            <td>[Tag Object]</td>
            <td>标记对象定义</td>
          </tr>
          <tr>
            <td>externalDocs</td>
            <td>External</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Documentation</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>Object</td>
            <td>可选的；</td>
            <td>外部文档定义</td>
          </tr>
          </tbody>
        </table>

        <h3>详细规范：</h3>
        <p>http://apistore.wanda.cn/apisec.html （待更新）</p>
        <h3>规范遵循：</h3>
        <p>RFC 2119，RFC 6838, RFC 7231, RFC3339,  JSON standards, IANA Status Code Registry API 规范示例json文件:</p>
        <pre>
          {
            "WandaBO": "1.0",
            "info": {
              "version": "1.0.0",
              "title": "Echo",
              "description": "API 规范示例echo 接口"
            },
            "schemes": [ "http" ],
            "host": "mazimi-prod.apigee.net",
            "basePath": "/echo",
            "paths": {
              "/": {
                "get": {
                  "responses": {
                    "200": {
                      "description": "Echo GET"
                    } }
                },
                "post": {
                  "responses": {
                    "200": {
                      "description": "Echo POST"
                    }
                  },
                  "parameters": [ {
                    "name": "name",
                    "in": "formData",
                    "description": "name",
                    "type": "string"
                  }, {
                    "name": "year",
                    "in": "formData",
                    "description": "year",
                    "type": "string"
                  } ] }
              },
              "/test-path/{id}": {
                "parameters": [ {
                  "name": "id",
                  "in": "path",
                  "description": "ID",
                  "type": "string",
                  "required": true   }  ],
                "get": {
                  "responses": {
                    "200": {
                        "description": "Echo test-path"
                    }
                  }
                }
              }
            }
          }
        </pre>








      </div>
      <!--如何添加api-->
      <div class="docInfo">
        <h2>如何新建一个API</h2>
        <p>飞凡ApiStore做让您的API被全世界共享！</p>
      </div>
      <div class="docInfo">
        <h2>开始添加</h2>
        <ul class="ulOlstyle">
          <li>
            让我们来看看如何快速便捷的添加一个API ，并融入到强大的飞凡开放系统中。如果您还没有注册，请先注册后再点击在首页上的创建按钮：
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a1-1.jpg" title="" alt=""/></div>
            </div>
            或者从个人中心中的我的API中开始添加新建：
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a1-2.png" title="" alt=""/></div>
            </div>
          </li>
          <li>
            新建API页面出现了,要求您提供一个“API名称”。它具有唯一性，请谨慎填写。
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a2-1.png" title="" alt=""/></div>
            </div>
          </li>
          <li>
            按规则填写完毕，即可进入下一个具体的参数设置页面：

            <p>路径的设定：</p>
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a3-1.png" title="" alt=""/></div>
            </div>
            <p>参数的设定：</p>
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a3-2.png" title="" alt=""/></div>
            </div>
            <p>请求头(heads)设定：</p>
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a3-3.png" title="" alt=""/></div>
            </div>
          </li>
          <li>
            点击保持后，既可进入测试页面，对提交的路径进行测试：
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a4-1.png" title="" alt=""/></div>
            </div>
          </li>
          <li>
            点击SDK下载按钮，既可进入其对应SDK的下载页面：
            <div class="imgCol">
              <div><img src="../../images/docImgs/addAPI/a5-1.png" title="" alt=""/></div>
            </div>
          </li>
        </ul>
      </div>

      <!--订阅-->
      <div class="docInfo">
        <h2>订阅</h2>
        <p>在市场中搜索，点击您中意的API:</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/subscribe/s1.png" title="" alt=""/></div>
        </div>
        <p>进入API详情页面，点击测试，测试该API在您的网络环境下是否可用，点击订阅，既可在默认应用中订阅该API：</p>
        <p class="remark">(补充说明，在本平台中您可以建立若干的应用，而每个应用囊括若API，这样的设计方便用户进行项目的管理，还有APPKEY区分，默认应用是系统默认为每个用户建立的应用，用户可以修改名称)</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/subscribe/s2.png" title="" alt=""/></div>
        </div>
        <p>订阅过的API，都会出现在对应的应用之中：</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/subscribe/s3.png" title="" alt=""/></div>
        </div>
        <p>点击，默认应用这个板块，就可以进入应用详情，在最上端，就可以看到该应用所有的key，来联通该应用下所有的API：</p>
        <div class="imgCol">
          <div><img src="../../images/docImgs/subscribe/s4.png" title="" alt=""/></div>
        </div>
      </div>
      <!--SDK的下载-->
      <div class="docInfo">
        <h2>订阅</h2>
        <p>SDK的下载，现在提供java和php两个版本供大家选择，进入下载页面的方式有三种：</p>

        <ul class="ulOlstyle">
          <li>
            登录系统后，点击最上端导航右侧的用户头像，进入用户中心：
            <div class="imgCol">
              <div><img src="../../images/docImgs/sdkDown/d1.png" title="" alt=""/></div>
            </div>
            再次点击左侧的下载SDK按钮，即可进入下载页面：
            <div class="imgCol">
              <div><img src="../../images/docImgs/sdkDown/d2.png" title="" alt=""/></div>
            </div>

          </li>
          <li>
            进入每个市场中的API详情,或者用户自己上传的API，点击下载SDK,即可进入下载页面：
            <div class="imgCol">
              <div><img src="../../images/docImgs/sdkDown/d3.png" title="" alt=""/></div>
            </div>
          </li>
          <li>
            进入我的应用中，每个应用中都会有SDK下载的按钮：
            <div class="imgCol imgCol3">
              <div><img src="../../images/docImgs/sdkDown/d4.png" title="" alt=""/></div>
            </div>
          </li>

        </ul>
      </div>
      <!--Application,API监控-->
      <div class="docInfo">
        <h2>Application,API监控</h2>
        <p>敬请期待</p>
      </div>
    </div>
  </div>
</template>
<script>
import tolocation from '../../controllers/changeLoc'
import getDomain from '../../controllers/getDomain.js'
import islogin from '../../controllers/getUserInfo'

export default{
  data () {
    return {
      login: false
    }
  },
  methods: {
    toMyApi () {
      if(this.login){
        window.localStorage.centerPgFlag = 5
        window.location.href = getDomain.getUrl('center/5')
      }else{
        if(confirm("您还未登录！")){
          window.location.href = getDomain.getUrl('login')
          window.localStorage.loginCBurl = getDomain.getUrl('')
        }
      }

    },

    toAddApi () {
      if(this.login){
        window.localStorage.centerPgFlag = 5
        tolocation.toAdd()
      }else{
        if(confirm("您还未登录！")){
          window.location.href = getDomain.getUrl('login')
          window.localStorage.loginCBurl = getDomain.getUrl('')
        }
      }
    }
  },
  ready: function () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    this.login = islogin.getUserInfo()
  }
}
</script>
<style>
</style>
