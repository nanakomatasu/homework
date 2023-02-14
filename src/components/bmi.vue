<template>
  <div>
    <form>
      <label>姓名：</label>
      <input type="text" v-model="uname"><br><br>

        <label>年龄：</label>
        <input type="number" v-model="age"><br><br>

          <label>身高：</label>
          <input type="number" v-model="hight">(米)<br><br>

            <label>体重：</label>
            <input type="number" v-model="weight">(公斤)<br><br>

              <label>病史：</label>
              <input type="text" v-model="history"><br><br>

                <button @click.prevent="dFn">诊断</button>
              </form>

    <p>患者 {{uname}} 的诊断结果{{+bmi>18.5&&+bmi<24?"健康":"不健康"}}</p >
  </div>
</template>

<script>
  export default {
    name:'bmiVue',
    data () {
      return {
        uname:"",
        age:"",
        hight:"",
        weight:"",
        history:"",
        bmi:""

      }
    },
    methods: {
        dFn(){
         this.bmi = (+this.weight/+this.high*+this.high)
         console.log(this.bmi);
        }

    }
  }
</script>