<template>
    <div class="liebiao">
        <div class="xifen" v-for="item in goods.result.label">
            <div class="xiaobiaoti" >
                <img v-bind:src="item.labelLogo" alt="">
                <h1>
                    {{item.labelName}}
                </h1>
                <p>
                    {{item.labelDesc}}
                </p>
            </div>
            <div class="silie">
                <div class="contn" v-for="li in item.goodsList">
                    <div class="contn-nei" v-on:click="toInfo(li.goodsID)">
                        <a href="javascript: void(0)"><img v-bind:src="li.goodsLogo" alt=""></a>                        
                    </div>
                    <div class="w-name">
                        <h3><a href="">{{li.goodsName}}</a> </h3>
                    </div>
                    <div class="w-price">
                        <span>
                            ￥
                        </span>
                        <p>
                            {{li.goodsPrice}}.00
                        </p>
                    </div>
                    <div class="w-intur">
                        <p>
                            {{li.goodsDesc}}
                        </p>
                    </div>
                </div>
             </div>
     </div>
    </div>
</template>
<script>
import goods from '../../models/md_goodsList'
import getDomain from '../../controllers/getDomain'

export default{
  data () {
    return {
      goods
    }
    },
    ready: function () {
        this.getListSecond()
    },
    watch:{
        '$route':'getListSecond'
    },
    methods: {
        getListSecond () {
            $('body').animate( {scrollTop: 636}, 200)
            let _this = this
            $.ajax({
                url:'http://www.28dagang.com/api/getAllGoods.php',
                data:{
                    'CegID': this.$route.params.CegID
                },
                DataType:'JSON',
                type:'GET',
                success:function(data){
                    console.log(data)
                    _this.goods.result.label = data.label
                }
            })
         },
         toInfo (id) {
            window.location.href = getDomain.getUrl('deta/' + id)
         }
      },

}
</script>
<style scoped>
        body{background:#eeeeee;}
        app{background:#eeeeee;}
        .liebiao{height: auto;background:#eeeeee;}
        .xifen{width: 1090px;margin: 0 auto;background:#ffffff;}
        .xiaobiaoti{width: 200px;height: 88px;margin: 0px auto;padding-top: 16px;background: #ffffff;}
        .xiaobiaoti img{width:50px;height:50px;display:inline-block;margin-top: -21px;
    margin-left: 36px;}
        .xiaobiaoti h1{line-height: 50px;font-size: 36px;text-align: center;display:inline-block;}
        .xiaobiaoti p{text-align:center;colco:#eeeeee;display:block;width:200px;line-height:50px;marign-bottom:30px;}
        .silie{width:1090px;overflow:hidden;background:#ffffff;}
        .contn{width:250px;height:390px;float:left;margin-left:18px;margin-top: 40px;}
        .contn-nei{width:250px;height:250px;background:#eeeeee;overflow:hidden;}
        .contn-nei img:hover{-webkit-transform: scale(1.1);-ms-transform: scale(1.1);transform: scale(1.1);transition-duration: 1s;}
        .w-name{width: 250px;height: 50px;text-align: center;margin: 0 auto;}
        .w-name h3{color:#000000;line-height:50px;cursor: pointer;}
        .w-name>h3:hover{color:#b4a078;}
        .w-price{width: 100px;border-bottom: 1px solid #eeeeee;color: red;margin: 0 auto;text-align: center;}
        .w-price>p{display: inline-block;color:red;}
        .w-intur{width: 250px;height: 50px;line-height: 50px;text-align: center;}
</style>