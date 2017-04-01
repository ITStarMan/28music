<template>
<div class="tuijian">
       <div class="tuia">
          <span class="tuia1">大家都在看</span>
       </div>

       <div class="tuib">
           <div class="tuib_left">
               <span class="namele"><</span>
           </div>
        <div class="tuibul"> 
           <ul>
             <li class="tuibli">
               <a href=""><img src="../../images/kan1.png" alt=""></a>
               <h4><a href="">精密氧化锆陶瓷菜刀</a></h4>
               <span class="price">¥79.00</span>
             </li>
             <li class="tuibli">
               <a href=""><img src="../../images/kan2.png" alt=""></a>
               <h4><a href="">进口榉木厨具系列</a></h4>
               <span class="price">¥18.00</span>
             </li>
             <li class="tuibli">
               <a href=""><img src="../../images/kan3.png" alt=""></a>
               <h4><a href="">白色斜磨陶瓷刀</a></h4>
               <span class="price">¥89.00</span>
             </li>
             <li class="tuibli">
               <a href=""><img src="../../images/kan4.png" alt=""></a>
               <h4><a href="">德式六件套不锈钢刀</a></h4>
               <span class="price">¥398.00</span>
             </li>
           </ul>
        </div>  
           <div class="tuib_right">
               <span class="namer">></span>
           </div>
       </div>
    </div>
</template>
<script>
</script>
<style>
          .tuijian{
            width: 1090px;
            height: 334px;
            border: 1px solid #e8e8e8;
            margin-top:500px;
            margin-left:270px;
          }
          .tuia{
            width: 1090px;
            height: 44px;
            background-color: #f5f5f5;
          }
          .tuia1{
            font-size: 18px;
            line-height: 44px;
            padding-left: 10px;
          }
          .tuib{
            height: 288px;
          }
          .tuib_left{
            position:absolute;
            top: 980px;
            left: 300px;
            width: 30px;
            height: 30px;
            border-radius: 50px;
            background: #D0C4AF;
            border: none;
            opacity: .6;
            cursor: pointer;
            line-height: 30px;
          }
           .tuib_right{
            float: left;
            position: absolute;
            left: 1290px;
            top: 975px;
            width: 30px;
            height: 30px;
            border-radius: 50px;
            background: #D0C4AF;
            border: none;
            opacity: .6;
            cursor: pointer;
            line-height: 30px;
          }
          .namele{
            padding-left: 6px;
            font-size: 20px;
            color: white;
          }
          .namer{
            padding-left: 6px;
            font-size: 20px;
            color: white;
          }
          .tuibul{
            width: 920px;
            height: 255px;
            position: relative;
            left: 60px;
            
          }
          .tuibli{
            width: 210px;
            height: 255px;
            border: none;
            float: left;
            position: relative;
            left: 15px;
            text-align: center;
            margin-left: 20px;
          }
          .tuibli h4{
            font-weight: 700;
          }
          .tuibli .price{
            line-height: 40px;
            font-size: 14px;
            color: #d4282d;
          }
</style>
