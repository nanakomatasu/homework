<template>
  <div>
    <div>
      <label for="orderNo" >订单号：</label>
      <input id="orderNo" v-model="valueinfo"/>
      <button @click="oninput">查询</button>
    </div>
    <div class="logistics-info">
   <Myadress ref="myadress"></Myadress>
   <mydetials ref="mydetials"></mydetials>
    </div>
  </div>
</template>

<script>
import Myadress from './components/ListVue';
import mydetials from './components/MyDe.vue';
export default {
  components:{
    Myadress,
    mydetials
  },
data () {
  return {
    orderInfo :{
  orderNo: this.currentOrderNo,
  role: 'admin', // 角色 ==> 用于判断是否有查看用户详情的权限
  logisticsStatus: 0, // 0 未发货 1 已发货 2 已签收 3 未签收
  logisticsCompany: '顺丰速运', // 快递公司的名称
  logisticsNo: 'SF123456789', // 快件运单号
  logisticsInfo: [
    {
      time: '2023-02-01 10:00:00', // 时间
      content: '快件已发货' // 快递状态
    },
    {
      time: '2023-02-02 09:00:00',
      content: '快件到达深圳中心'
    },
    {
      time: '2023-02-03 08:00:00',
      content: '快件派送中'
    },
    {
      time: '2023-02-04 16:00:00',
      content: '已签收'
    }
  ],
  goodInfo: { // 商品信息
    goodNo: '12345678912312', // 商品id
    goodName: '三体',// 商品名称
    type: 0, // 0 代表的是文本 1代表的是 图片
    // desc 描述 ==> 可以是图片 也可以是其他的东西。数据可以随便改
    desc: '	http://registakeaway.itheima.net/common/download?name=9b978122-179a-4b0e-891b-595d0cd3d875.jpg'
  }
},
flag:false,
valueinfo:''
  }},
methods:{
  oninput(){
    this.$nextTick(setTimeout(() => {
      if (this.valueinfo !== '') {
        this.flag = true
      }
    }, 3000))
    if(this.orderInfo.logisticsStatus === 0){
      this.orderInfo.logisticsInfo=this.orderInfo.logisticsInfo.slice(0,1)
    }else if(this.orderInfo.logisticsStatus === 1){
      this.orderInfo.logisticsInfo=this.orderInfo.logisticsInfo.slice(0,2)
    }else if(this.orderInfo.logisticsStatus === 2){
      this.orderInfo.logisticsInfo=this.orderInfo.logisticsInfo.slice(0,3)
    }else{
      this.orderInfo.logisticsInfo=this.orderInfo.logisticsInfo.slice(0,4)
    }
  },
}}

</script>
<style >
  .logistics-info {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #eee;
    padding: 10px;
    font-size: 14px;
  }

  .logistics-info-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }

  .logistics-info-header-left {
    display: flex;
    align-items: center;
  }

  .logistics-status {
    font-weight: bold;
    font-size: 16px;
    color: #007bff;
  }

  .logistics-company,
  .logistics-no {
    margin-left: 10px;
    font-size: 14px;
    color: #333;
  }

  .logistics-info-list {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 230px;
    overflow-y: auto;
  }

  .logistics-info-list li {
    display: flex;
    margin-bottom: 10px;
  }

  .logistics-info-list-time {
    font-size: 12px;
    color: #999;
    width: 80px;
    text-align: right;
    margin-right: 10px;
  }

  .logistics-info-list-content {
    font-size: 14px;
    color: #333;
  }
</style>
