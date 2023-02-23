<template>
    <div class="main">
        <header>
          <div class="left">首页</div>
          <input type="text" placeholder="请输入房源信息">
          <div class="right">退出</div>
        </header>
        <router-view ></router-view>
        <footer>
        
          <router-link to="/shouye" >首页</router-link> 
          <router-link to="/zixun" >资讯</router-link> 
          <router-link to="/zhaofang">找房</router-link>
          <router-link to="/wode" >我的</router-link>
         
        </footer>
    </div>
</template>

<script>
export default {
  name:'BuyHouse',
    props: {

    },
    data() {
        return {
            curritem:'true'
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
    
    },
    components: {

    },
};
</script>

<style scoped lang="less">
   .main {
    width: 300px;
    height: 500px;
    margin: 0 auto;
    border: 1px solid #333;
    position: relative;
    header {
    width: 100%;
    height: 40px;
    background-color: #67C23A;
    color: #fff;
    display: flex;
    text-align: center;
     .left {
      width: 40px;
      height: 40px;
      line-height: 40px;
     }

     input {
      flex: 1;
      height: 20px;
      margin-top: 8px;
     }

     .right {
      width: 40px;
      height: 20px;
      line-height: 40px;
     }
   }

   footer {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
   

      a {
        display: block;
        width: 100%;
        text-decoration: none;
        color: #333;
        text-align: center;
      }
    }
    }
 

   .router-link-active {
    background-color: #67C23A;
    color: #fff;
   }
  
</style>
