<template>
  <header>
    <el-row>
      <el-col :span="16">
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">
            <router-link to="/">首页</router-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">作品</template>
            <el-menu-item index="2-1">
              <router-link to="/blog">共享博客</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link to="/fm">随心FM</router-link>
            </el-menu-item>
            <el-menu-item index="3-3">
              <router-link to="/ui">Zooey-UI</router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="3">PDF简历</el-menu-item>
          <el-menu-item index="4"><a href="https://github.com/zooeydotmango" target="_blank">Github</a></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8" class="logo"><img src="../assets/images/Zooey.png" alt="logo"></el-col>
    </el-row>


  </header>
</template>

<script>

  export default {
    data() {
      return {
        activeIndex: '2',
      }
    },
    created() {
      this.isInner();
    },
    methods: {handleSelect(key, keyPath) {
        this.activeIndex = keyPath[0];
      },
      isInner() {
        console.log(this.$route.path);
        if (this.$route.path !== '/') {
          this.$nextTick(()=>{
            this.activeIndex = '2';
          })
          console.log(1);
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  header{
    margin-bottom: -60px;
  }
  .logo {
    height: 61px;
    background: #fff;
    border-bottom: solid 1px #e6e6e6;
    img{
      height: 61px;
    }
  }

  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

</style>
