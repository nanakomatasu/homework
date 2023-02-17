<template>
   
        <tr>
          <td><input type="checkbox" v-model="check"> </td>
          <td>{{name}}</td>
          <td>{{price}}</td>
          <td> <button @click="jian">-</button>{{num}} <button @click="add">+</button></td>
          <td>{{sum}}</td>
          <td><button @click="del">删除</button></td>
        </tr>
   
</template>

<script>
export default {
    name:'listVue',
    props: {
        name:{
            type:String,
            
        },
        price:{
            type:Number
        },
        num:{
            type:Number
        },
        checked:{
            type:Boolean
        }
    },
    data() {
        return {
          check:this.checked
        };
    },
    computed: {
        sum(){
        return this.num*this.price
        }
    },
    created() {

    },
    mounted() {

    },
    watch: {
        check(new1){
         this.$emit('check',new1,this.name)
        },
        checked(new1){
            // console.log(new1);
            this.check=new1
        }
        
    },
    methods: {
        add(){
            this.$emit('add',1,this.name)
        },
        jian(){
            this.$emit('jian',this.name)
        },
        del(){
            this.$emit('del',this.name)
        }
    },
    components: {

    },
};
</script>

<style scoped lang="scss">

</style>
