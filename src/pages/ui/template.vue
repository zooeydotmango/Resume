<template>
  <div id="ui">
    <h2>Zooey-UI</h2>
    <div class="blocks">
      <div class="box a">
        <p>
          <el-link href="https://zooeydotmango.github.io/zooey-UI/" type="warning">Zooey-UI</el-link>
          是我基于Vue.js造的一个UI框架</p>
        <p>尝试走完了从需求分析-设计-程序开发-单元测试-文档撰写-持续集成-发布的一整条开发路程</p>
        <p>使用ES6语法，配合sass的循环语法实现了响应式组件</p>
        <p>使用vuepress生成官网并部署到github Page上</p>
      </div>
      <div class="box b">
        <img src="./ui.png" alt="" class="image">
      </div>
      <div class="box c">
        <img src="./npm.png" alt="" class="image">
      </div>
      <div class="box d">
        <h5>优化：</h5>
        <p>发布到npm上：<el-link type="warning" href="https://www.npmjs.com/package/zooeyui">npm地址</el-link></p>
        <p></p>
        <p>重构代码，使用了webpack打包后部署到github page上</p>
        <p><el-link href="https://github.com/zooeydotmango/HeartMusic" type="warning">项目地址</el-link></p>
      </div></div>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/base";

  #ui{
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
      grid-template-columns: repeat(2,50%);
      grid-template-rows: repeat(2,50%);
      grid-template-areas: 'a b b b' 'c c d d';
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
        img{
          width: 100%;
        }
      }
      .d{
        grid-area: d;
        text-align: left;
        align-self: center;
      }
    }
  }
</style>
