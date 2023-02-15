<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男" >男</option>
        <option value="女" >女</option>
      </select>
    </div>
    <div>
      <button @click="edit(index)">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="remove">删除</button>
            <button @click="change(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name:'studentsVue',
  data () {
    return {
      list:[
        {id:1,name:'小芳',age:'18',gender:'女'},
        {id:2,name:'小方',age:'18',gender:'女'},
        {id:3,name:'小房',age:'18',gender:'女'},
        {id:4,name:'小放',age:'18',gender:'女'},
        {id:5,name:'小纺',age:'18',gender:'女'},
        {id:6,name:'小坊',age:'18',gender:'女'},
        {id:7,name:'小防',age:'18',gender:'女'}
      ],
      name:'',
      age:'',
      gender:'',
      index:'',
      ischange:false
    }
  },
  methods: {
    edit(){
      if(this.ischange){
        console.log(2);
        this.list.splice(this.index,1,{id:this.index,name:this.name , age:this.age,gender:this.gender})
        this.name=''
        this.age=''
        this.gender=''
        this.ischange=false
      }else{
        console.log(1);
        console.log(this.list);
      this.list.push({id:this.index,name:this.name,age:this.age,gender:this.gender})
       }
      
     
    },
    remove(){
      this.list.splice(this.index,1)
    },
    change(index){
      console.log(this.list[index]);
     this.name=this.list[index].name
     this.age=this.list[index].age
     this.gender=this.list[index].gender
     this.id=this.index
     this.ischange=true
    }
   }
}
</script>
