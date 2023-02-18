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
      <tbody>
        <tr >
          <td>2020-12-12</td>
          <td>章三</td>
          <td>李四</td>
          <td>健康</td>
          <td>详情</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
