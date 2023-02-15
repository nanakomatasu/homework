<template slot-scope="scope">
  <div id="app">
    <form action="#"  v-show="isShow">
 
    </form>
   
    <button class="btn" @click="onshow">新增</button>
    <table class="tb">
      <tr >
        <th>编号</th>
        <th>品牌名称</th>
        <th>创立时间</th>
        <th>操作</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index" >
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>
          <button @click="remove(index)">删除</button>
        </td>
        <td>
          <button @click="change(index)">修改</button>
        </td>
      </tr>
      <tr>
        <td colspan="5" v-if="this.list.length === 0">没有数据咯~</td>
      </tr>
    </table>
    <div>
    <h1>新增商品</h1>
      <label>品牌名称:</label>
          <input type="text" v-model="brand"/>
        </div>
        <div>
          <label>创立时间:</label>
          <input type="text" v-model="time"/>
        </div>
        <div>
          <button @click.prevent="add">确定提交</button>
          <button @click.prevent="succesee(index)">确定修改</button>

        </div>
  </div>
</template>

<script>
export default {
  name:'shortcarVue',
  data() {
       
    return {
      isShow:true,
      list: [],
      brand:'',
      time:'',
      id:'',
      index:''
    };
  },
  methods:{
    onshow(){
      this.isShow = !this.isShow
    },
    add(){
      this.list.push({id:this.list.length+1,name:this.brand,time:this.time})
    },
    remove(){
      this.list.splice(this.index,1)
    },
    change(index){
     console.log(this.list[index]);
     this.brand=this.list[index].name
     this.time=this.list[index].time
     this.id= index
    },
    succesee(){
      this.list.splice(this.id,1,{id:this.id,name:this.brand , time:this.time})
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