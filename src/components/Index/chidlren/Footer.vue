<template>
  <div class="footer">
    <router-link :to="{path:'/index'}" class="item">
      <div class="home">
        <span class="iconfont">&#xe628;</span>
        <p>首页</p>
      </div>
    </router-link>
    <router-link :to="{path:'/category'}" class="item">
      <div class="category">
        <span class="iconfont">&#xe616;</span>
        <p>分类</p>
      </div>
    </router-link>
    <router-link :to="{path:'/cart'}" class="item">
      <div class="cart">
        <span class="iconfont">&#xe61b;</span>
        <p>购物车</p>
      </div>
    </router-link>
    <router-link :to="{path:'/self'}" class="item">
      <div class="self">
        <span class="iconfont">&#xe60b;</span>
        <p>个人中心</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' scoped>
@import '~styles/variable.styl'
.footer
  height: 112px
  display: flex
  background-color: $bgColor
  font-size: 23.16px
  color: #fff
  margin-top: 15px
  &>*
    flex: 1
    display: flex
    flex-direction: column
    justify-content: center
    // align-items: center
    text-align: center
    color: #fff
    & span
      display: inline-block
      font-size: 40px
      margin-bottom: 12px
  .item.router-link-active // 路由匹配时添加的类
    div
      color: #ffae01
</style>
