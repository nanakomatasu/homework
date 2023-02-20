<template>
    <div v-show="this.$parent.flag">
      <h2>商品相关信息</h2>
      <div>
        <div>商品id: <strong>{{ this.$parent.orderInfo.goodInfo.goodNo}}</strong></div>
        <div>商品名称: <strong>{{ this.$parent.orderInfo.goodInfo.goodName }}</strong></div>
        <div>商品描述: <slot name="desc" v-if="this.$parent.orderInfo.goodInfo===0">这是一本好书</slot>
        <img :src="this.$parent.orderInfo.goodInfo.desc" alt="" v-else-if="this.$parent.orderInfo.goodInfo === 1"></div>
      </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
        
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

<style scoped lang="scss">

</style>
