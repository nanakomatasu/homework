<template>
  <div>
    <input placeholder="输入关键字搜索">
    <table class="my-table">
      <thead>
        <tr>
          <th>就诊日期</th>
          <th>医生姓名</th>
          <th>诊断结果</th>
          <th>处方信息</th>
          <th>操作</th>
        </tr>
      </thead>
      <listVue :list='list' :index="index"/>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.date }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.over }}</td>
          <td>{{ item.drug }}</td>
          <td  @click="openmodel(item.id)">详情</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import listVue from './components/详情.vue'
export default{
    components: {
      listVue
    },
    data(){
      return {
        list: [
          {
            id: 1,
            date: '2022-01-01',
            name: '张三',
            over: '发烧',
            drug: '感冒药',
          },
          {
            id: 2,
            date: '2022-02-01',
            name: '张4',
            over: '发烧了',
            drug: '感冒药',
          },
          {
            id: 3,
            date: '2022-03-01',
            name: '张5',
            over: '真发烧了',
            drug: '感冒药',
          },
          {
            id: 4,
            date: '2022-04-01',
            name: '张6',
            over: '真的发烧了',
            drug: '感冒药',
          },
        ],
        index:''
      }
    },
    methods:{
      openmodel(id){
    this.index =id
      }
    }
}
</script>

<style scoped>
  .my-table {
    border-collapse: collapse;
    width: 100%;
  }

  .my-table td, .my-table th {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  .my-table th {
    background-color: #f2f2f2;
  }
</style>
