export default {
  autoRun (time) {
    let index = 0
    let length = $('.banner_ul li').length
    let maxIndex = length -1
    let timer = setInterval(auto,time)
    $('.banner_btn li').on('click',function(){
      clearInterval(timer)
      $('.banner_ul li').eq(index).fadeOut(0)
      $('.banner_btn li').eq(index).removeClass('active')
      index = $(this).index()
      $('.banner_ul li').eq(index).fadeIn(1000)
      $('.banner_btn li').eq(index).addClass('active')
      timer = setInterval(auto,time)
    })
    $('.banner_left').on('click',function(){
      if(index == 0){
        clearInterval(timer)
        $('.banner_ul li').eq(0).fadeOut(800)
        $('.banner_btn li').eq(0).removeClass('active')
        index = maxIndex
        $('.banner_ul li').eq(index).fadeIn(1000)
        $('.banner_btn li').eq(index).addClass('active')
        timer = setInterval(auto,time)
      }else{
        clearInterval(timer)
        $('.banner_ul li').eq(index).fadeOut(800)
        $('.banner_btn li').eq(index).removeClass('active')
        index = index - 1
        $('.banner_ul li').eq(index).fadeIn(1000)
        $('.banner_btn li').eq(index).addClass('active')
        timer = setInterval(auto,time)
      }
    })
    $('.banner_right').on('click',function(){
      if(index == maxIndex){
        clearInterval(timer)
        $('.banner_ul li').eq(maxIndex).fadeOut(800)
        $('.banner_btn li').eq(maxIndex).removeClass('active')
        index = 0
        $('.banner_ul li').eq(index).fadeIn(1000)
        $('.banner_btn li').eq(index).addClass('active')
        timer = setInterval(auto,time)
      }else{
        clearInterval(timer)
        $('.banner_ul li').eq(index).fadeOut(800)
        $('.banner_btn li').eq(index).removeClass('active')
        index = index + 1
        $('.banner_ul li').eq(index).fadeIn(1000)
        $('.banner_btn li').eq(index).addClass('active')
        timer = setInterval(auto,time)
      }
    })
    function auto() {
      index += 1
      if(index == length){
        $('.banner_ul li').eq(index-1).fadeOut(800)
        $('.banner_btn li').eq(index-1).removeClass('active')
        index = 0
        $('.banner_ul li').eq(index).fadeIn(1000)
        $('.banner_btn li').eq(index).addClass('active')
      }else{
        $('.banner_ul li').eq(index-1).fadeOut(800)
        $('.banner_btn li').eq(index-1).removeClass('active')
        $('.banner_ul li').eq(index).fadeIn(1000)
        $('.banner_btn li').eq(index).addClass('active')
      }
    }
  }
}