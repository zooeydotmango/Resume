<template>
  <footer>
    Copyright Ⓒ 2019 <a href="https://github.com/zooeydotmango">Zooey's Resume</a>
  </footer>
</template>
<style lang="less" scoped>
  @import "../assets/base.less";
  footer{
    margin-top: -22px;
    background-color: @baseColor;
    color: @textHasBackColor;
    text-align: center;
    a{
      text-decoration: none;
      color: inherit;
      cursor: pointer;
      &:hover{
        color: @textLighterColor;
      }
    }
  }
</style>
