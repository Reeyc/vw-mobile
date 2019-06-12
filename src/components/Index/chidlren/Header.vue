<template>
  <div class="header">
    <div class="header-left">
      <div class="avatar">
        <img src="@/assets/images/avatar@2x.png">
      </div>
      <div class="info">
        <h2 class="name">ReeYc</h2>
        <h3 class="username">helloxxx@163.com</h3>
      </div>
    </div>
    <div class="header-right">
      <div class="email iconfont">&#xe63f;</div>
      <div class="setting iconfont">&#xe633;</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' scoped>
@import '~styles/variable.styl'
@import '~styles/mixin.styl'
.header
  height: 303px
  color: #fff
  display: flex
  align-items: center
  justify-content: space-between
  padding: 0 32px
  background-color: $bgColor
  .header-left, .header-right
    display: flex
    align-items: center
    & img
      margin-right: 24px
      width: 134px
      height: 134px
      border-radius: 50%
      border: 4px solid #98d2b6
    .info
      width: 250px
      .name
        font-size: 30.32px
        margin-bottom: 15px
        ellipsis()
      .username
        font-size: 22.74px
        letter-spacing: 1.5px
        ellipsis()
    .email
      font-size: 42px
      padding-right: 48px
    .setting
      font-size: 42px
</style>
