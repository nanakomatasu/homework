<template>
    <div v-show="this.$parent.flag">
      <h2>物流相关信息</h2>
      <div class="logistics-info-header">
        <div class="logistics-info-header-left">
          <div class="logistics-status blue">{{ this.$parent.orderInfo.logisticsStatus }}</div>
          <div class="logistics-company">{{ this.$parent.orderInfo.logisticsCompany }}</div>
          <div class="logistics-no">{{this.$parent.orderInfo.logisticsNo}}</div>
        </div>
      </div>
      <ul class="logistics-info-list">
        <li v-for="(item,index) in this.$parent.orderInfo.logisticsInfo" :key="index">
          <div class="logistics-info-list-time">{{item.time}}</div>
          <div class="logistics-info-list-content">{{item.content}}</div>
        </li>
      </ul>
      <button>查看物流详情</button>
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
