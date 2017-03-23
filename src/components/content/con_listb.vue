<template>
    <div class="liebiao">
        <div class="xifen" v-for="item in labellist.label">
            <div class="xiaobiaoti">
                <img src="../../images/zht.png" alt="">
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
                        <a href="javascript: void(0)"><img src="../../images/bei_1.png" alt=""></a>
                        <div class="w-name">
                            <h3><a href="">{{li.goodsName}}</a> </h3>
                        </div>
                        <div class="w-price">
                            <span>
                                ￥
                            </span>
                            <p>
                                {{li.goodsPrice}}
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
    </div>
</template>
<script>
export default{
  data () {
    return {
     labellist: {
        'cegName': '',
        'label': []
     }
    }
    },
    ready: function () {
        this.getListSecond()
    },
    methods: {
        getListSecond () {
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
                    _this.labellist = data
                    console.log(_this.labellist)

                }

            })
               
               
                 


          
         },
         toInfo (id) {
            alert(id)
            window.location.href = 'www.baidu.com/' + id
         }
      }
}
</script>
<style scoped>
        .liebiao{height: auto;background:#eeeeee;}
        .xifen{width: 1090px;margin: 0 auto;background:#ffffff;}
        .xiaobiaoti{width: 200px;height: 50px;margin: 0 auto;background:#ffffff;}
        .xiaobiaoti img{width:70px;height:50px;display:inline-block;margin-top: -21px;
    margin-left: 20px;}
        .xiaobiaoti h1{line-height: 50px;font-size: 36px;text-align: center;display:inline-block;}
        .xiaobiaoti p{text-align:center;colco:#eeeeee;display:block;width:200px;height:150px;line-height:50px;marign-bottom:30px;}
        .silie{width:1090px;height:450px;background:#ffffff;}
        .contn{width:250px;height:390px;float:left;margin-left:18px;margin-top: 40px;}
        .contn-nei{width:250px;height:250px;background:#eeeeee;}
        .contn-nei img:hover{-webkit-transform: scale(1.1);-ms-transform: scale(1.1);transform: scale(1.1);transition-duration: 1s;}
        .w-name{width: 250px;height: 50px;text-align: center;margin: 0 auto;}
        .w-name h3{color:#000000;line-height:50px;cursor: pointer;}
        .w-name>h3:hover{color:#b4a078;}
        .w-price{width: 100px;border-bottom: 1px solid #eeeeee;color: red;margin: 0 auto;text-align: center;}
        .w-price>p{display: inline-block;color:red;}
        .w-intur{width: 250px;height: 50px;line-height: 50px;text-align: center;}
</style>