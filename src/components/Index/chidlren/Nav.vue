<template>
  <div class="nav">
    <div class="shuocangjia border-right">
      <div class="num">298</div>
      <div class="desc">收藏夹</div>
    </div>
    <div class="jifen border-right">
      <div class="num">3472</div>
      <div class="desc">积分</div>
    </div>
    <div class="youhuijuan border-right">
      <div class="num">2</div>
      <div class="desc">优惠券</div>
    </div>
    <div class="guanzhu">
      <div class="num">20</div>
      <div class="desc">关注</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='stylus' scoped>
@import '~styles/variable.styl'
.nav
  display: flex
  height: 95px
  padding: 15px 0
  background-color: $drak-bgColor
  margin-bottom: 1px #31a56d solid
  &>*
    flex: 1
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    color: #fff
    font-size: 22.74px
    &>.num
      margin-bottom: 15px
</style>
