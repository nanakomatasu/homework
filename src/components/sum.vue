<template>
  <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">{{ sum }}</td>
        </tr>
      </tfoot>
</template>

<script>
export default {
  name:'sumVue',
    props: {
        sum:{
            type:Number
        }
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
