<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <listVue
          v-for="item in goodList"
          :key="item.id"
          :name="item.name"
          :price="item.price"
          :num="item.num"
          :checked="item.checked"
          @add="add"
          @jian="jian"
          @check="check"
          @del="del"
        />
      </tbody>
      <sum :sum="sum"/>
    </table>
  </div>
</template>

<script>
import sum from './components/sum.vue'
import listVue from "./components/shopcarlist.vue";
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  components: {
    listVue
    ,sum
  },
  computed: {
    sum(){
     return this.goodList.reduce((i,sum)=>{
        return i=i+ sum.num*sum.price
      },0)
    },
    isAll: {
      get() {
        return this.goodList.every((i) => {
          return i.checked == true;
        });
      },
      set(v) {
        // console.log(v);
       this.goodList.forEach((i) => {
          i.checked = v;
        });
      },
    },
  },
  methods:{
    add(v,name){
        this.goodList.forEach(i=>{
           if(i.name==name){
            i.num=i.num+v

           }
        })
    },
    del(){
  this.goodList.splice(this.inex,1)
    },
    jian(name){
      this.goodList.forEach(i=>{
           if(i.name==name){
          i.num==0 ? i.num=0 : i.num=i.num-1
           }}
      )},
      check(v,name){
       
        this.goodList.forEach(i=>{
           if(i.name==name){
         i.checked= v
         
           }}
         
      )
     
      }
  }
};
</script>

<style>
tr {
  text-align: center;
}
</style>
