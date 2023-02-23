<template>
<div>
  <div v-for="(item,index) in arr" :key="index">
      <div>{{ item.desc }}</div>
      <div>{{ item.title }}</div>
      <div>{{ item.tags[0] }}</div>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name:'ZiXun',
    props: {

    },
    data() {
        return {
            arr:[]
        };
    },
    computed: {

    },
    created() {
      this.getHouse()
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        async getHouse(){
             const { data }  =await axios({
              method:'get',
              url:'http://liufusong.top:8080/houses?cityId=AREA%7Cdbf46d32-7e76-1196&stat=1&end=10'
             })
            this.arr=data.body.list
            console.log(this.arr);
        }
    },
    components: {

    },
};
</script>

<style lang="less" scoped>

</style>
