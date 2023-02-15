<template>
  <div>
    <div>
        <span>姓:</span>
        <input type="text" v-model="fName">
    </div>
    <div>
        <span>名:</span>
        <input type="text" v-model="sName">
    </div>
    <div>
        <span>姓名:</span>
        <input type="text" v-model="full">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MytestHelloWorld',

  data() {
    return {
      fName: '',
      sName: ''
    };
  },
  computed: {
    // full() { // 只读，只可以取值
    //   return this.fName + '.'+ this.sName
    // }
    full: {// 即可以取值，又可以设置值
      get(){
        return this.fName + '.'+ this.sName
      },
      set(val){ 
        this.fName = val && val.split('.')[0] || []
        this.sName = val && val.split('.')[1] || []
      }
    }
  }
};
</script>
<style scoped>
input{
  border: 1px solid #ccc;
}
</style>