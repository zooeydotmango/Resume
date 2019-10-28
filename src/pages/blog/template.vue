<template>
  <div id="blog">
    <h2>共享博客</h2>
    <div class="blocks">
      <div class="box a">
      <p><el-link href="https://zooeydotmango.github.io/blog-client/" type="warning">共享博客</el-link>是一个基于Vue.js的轻博客</p>
      <p>具有用户注册、登陆功能，可以展示博客详情、个人主页和个人博客列表，也可以创建、编辑、删除博客</p>
      <p>支持markdown格式</p>
      <p>涉及vue-cli、vue-router、vuex、axios、webpack、ES6、element-ui等等</p>
    </div>
      <div class="box b">
        <img src="./blog.png" alt="" class="image">
      </div>
      <div class="box c">
        <img src="./request.png" alt="" class="image">
      </div>
      <div class="box d">
        <h4>优化：</h4>
        <p>使用axios封装底层request</p>
        <p>引入Message使得网络传输出错的情况更直观</p>
        <p>改善用户体验，也使调试更方便</p>
      </div></div>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/base";

  #blog{
    text-align: center;
    h2{
      font-size: 40px;
      font-weight: lighter;
      color: @baseColor;
    }
    .image{
      width: 100%;
      height: 100%;
    }
    .blocks{
      display: grid;
      grid-template-rows: repeat(2,1fr);
      grid-template-columns: repeat(2,50%);
      grid-template-areas: 'a b' 'c d';
      color: @baseColor;
      .a{
        grid-area: a;
        text-align: right;
        align-self: center;
      }
      .b{
        grid-area: b;
        padding: 10px;
      }
      .c{
        grid-area: c;
        padding: 10px;
      }
      .d{
        grid-area: d;
        text-align: left;
        align-self: center;
      }
    }
  }
</style>
