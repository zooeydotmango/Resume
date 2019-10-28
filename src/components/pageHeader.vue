<template>
  <el-page-header @back="goBack" :content="page"></el-page-header>
</template>

<script>
  export default {
    data(){
      return{}
    },
    methods:{
      goBack(){
        this.$route.path.push('/');
      }
    }
  }
</script>

<style lang="less" scoped>
.tabs{
  margin-top: 66px;
}
</style>
