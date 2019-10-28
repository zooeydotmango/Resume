<template>
  <div id="index">
    <el-row class="introduction">
      <el-col :span="24">
        <p>hi!我是Zooey</p>
        <p>一名前端工程师，爱好Coding，撸猫，热爱尝试让工作更省力的方法</p>
      </el-col>
    </el-row>

    <el-row class="down">
      <router-link to="/blog">
        <el-col :span="8">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-down"></use>
          </svg>
        </el-col>
      </router-link>
    </el-row>

    <el-row :gutter="20" class="files">
      <el-col :span="6" v-for="item in files" :key="item.name">
        <el-card :body-style="{padding:'10px'}" shadow="always" class="card">
          <img :src="item.png" :alt="`${item.fileName}`" class="image">
          <div>
            <el-button type="text"><router-link :to="`/${item.name}`">{{item.fileName}}</router-link></el-button>
          </div>
          <div style="padding: 5px;">
              <el-tag v-for="value in item.label"
                      :key="value"
                      effect="plain">
                {{ value }}
              </el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import svg from './svg'
  import blog from '../blog/blog.png'
  import ui from '../ui/ui.png'
  import fm from '../fm/fm.png'

  export default {
    data() {
      return {
        files:[
          {fileName:'共享博客',name:'blog',label:['vue.js','ES6'],png:blog},
          {fileName:'随心FM',name:'fm',label:['jQuery','CSS3'],png:fm},
          {fileName:'Zooe-UI',name:'ui',label:['造轮子','Vue.js'],png:ui}
        ]
      }
    }
  }
</script>
<style lang="less" scoped>
  #index {
    height: calc(100vh - 80px);
    padding: 66px 12% 22px 12%;
    background: no-repeat url("../../assets/images/bg1.jpg") center/cover;
    display: flex;
    flex-flow: column nowrap;
    .introduction {
      p {
        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
        &:first-child {
          margin-top: 18px;
          font-size: 80px;
          color: #433127;
        }
        &:last-child {
          margin-top: 30px;
          font-size: 20px;
          color: #433127;
        }
      }
    }
    .down {
      margin-top: 100px;
      .icon {
        width: 10vh;
        height: 10vh;
        fill: #433127;
        cursor: pointer;
        margin-left: 300px;
        svg {
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        }
        &:visited {
          fill: rgba(67, 49, 39, .3);
        }
        &:hover {
          fill: rgba(67, 49, 39, .3);
        }
      }

    }
    .files{
      .card{
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
        height: 100%;
        .image {
          height: 100%;
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>
