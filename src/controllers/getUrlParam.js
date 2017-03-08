//获取url后面的参数

export default {
  GetRequest () {
    let url = location.search; //获取url中"?"符后的字串   
    let theRequest = new Object();   
    if (url.indexOf("?") != -1) {   
      let str = url.substr(1);   
      strs = str.split("&");   
      for(let i = 0; i < strs.length; i ++) {   
        theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);   
      }   
    }  
    return theRequest;
  }
}
