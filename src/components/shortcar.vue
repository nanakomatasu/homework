<template>
  <div id="app">
    <form action="#"  v-show="isShow">
  <h1>新增商品</h1>
      <div>
          <label>品牌名称:</label>
          <input type="text" v-model="brand"/>
        </div>
        <div>
          <label>创立时间:</label>
          <input type="text" v-model="time"/>
        </div>
        <div>
          <button @click="add">确定提交</button>
        </div>
    </form>
    <button class="btn" @click="onshow">新增</button>
    <table class="tb">
      <tr >
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{index}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>
          <button @click="remove(index)">删除</button>
        </td>
      </tr>
      <tr>
        <td colspan="4" v-if="this.list.length === 0">没有数据咯~</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'shortcarVue',
  data() {
       
    return {
      isShow:true,
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01" }
      ],
      brand:'',
      time:'',
      id:''
      
    };
  },
  methods:{
    onshow(){
      this.isShow = !this.isShow
    },
    add(){
      this.list.push({id:this.index,name:this.brand,time:this.time})
    },
    remove(){
      this.list.splice(this.index,1)
    }
  }
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}
.btn {
  border: 1px solid #ccc;
  margin-bottom:10px;
  margin-top:40px;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>