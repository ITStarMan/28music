import CommonSvc from './CommonSvc.js'
export default{
  upload (files) {
    CommonSvc.upload(files, 'http://tfs.intra.ffan.com').error(function(rest){
      return rest.responseText
    })
  }
}
