<template>
  <div id="fm">
    <h2>随心FM</h2>
    <div class="blocks">
      <div class="box a">
        <p>
          <el-link href="https://zooeydotmango.github.io/HeartMusic/index.html" type="warning">随心FM</el-link>
          是一个基于jQuery的网页音乐播放器</p>
        <p>可选多种流派，具备音乐播放器功能</p>
        <p>涉及vue-cli、vue-router、vuex、axios、webpack、ES6、element-ui等等</p>
      </div>
      <div class="box b">
        <img src="./fm.png" alt="" class="image">
      </div>
      <div class="box c">
        <img src="./logic.png" alt="" class="image">
      </div>
      <div class="box d">
        <h5>优化：</h5>
        <p>使用发布订阅模式实现代码解耦，模块化</p>
        <p>将实现歌词特效的代码封装起来，形成一个插件</p>
        <p>重构代码，使用了webpack打包后部署到github page上</p>
        <p><el-link href="https://github.com/zooeydotmango/HeartMusic" type="warning">项目地址</el-link></p>
      </div></div>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/base";

  #fm{
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
      grid-template-columns: repeat(4,25%);
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
