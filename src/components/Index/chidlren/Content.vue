<template>
  <div class="content">
    <div class="all-order border-bottom">
      全部订单
      <div class="look">
        <span>查看全部订单</span>
        <i class="iconfont">&#xe640;</i>
      </div>
    </div>
    <div class="icon-order border-bottom">
      <div class="daifukuan">
        <i class="iconfont">&#xe610;</i>
        <p>待付款</p>
        <span v-show="fuKuan">{{fuKuan}}</span>
      </div>
      <div class="daifahuo">
        <i class="iconfont">&#xe68e;</i>
        <p>带发货</p>
        <span v-show="faHuo">{{faHuo}}</span>
      </div>
      <div class="daishouhuo">
        <i class="iconfont">&#xe607;</i>
        <p>待收货</p>
        <span v-show="shouHuo">{{shouHuo}}</span>
      </div>
      <div class="daipingjia">
        <i class="iconfont">&#xe60c;</i>
        <p>待评价</p>
        <span v-show="pingJia">{{pingJia}}</span>
      </div>
      <div class="shouhou">
        <i class="iconfont">&#xe631;</i>
        <p>售后</p>
        <span v-show="shouHou">{{shouHou}}</span>
      </div>
    </div>
    <div class="list">
      <div class="zuji border-bottom">
        <span class="left-iconf iconfont">&#xe600;</span>
        <div>
          <h3>我的足迹</h3>
          <p>今日足迹 0</p>
        </div>
      </div>
      <div class="jifen border-bottom">
        <span class="left-iconf iconfont">&#xe611;</span>
        <div>
          <h3>积分商城</h3>
          <p>立即进入</p>
        </div>
      </div>
      <div class="yijian border-bottom">
        <span class="left-iconf iconfont">&#xe797;</span>
        <div>
          <h3>意见反馈</h3>
          <p>我们会不断优化体验</p>
        </div>
      </div>
      <div class="help">
        <span class="left-iconf iconfont">&#xe652;</span>
        <div>
          <h3>帮助中心</h3>
          <p>联系客服 购物帮助</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fuKuan: 0,
      faHuo: 0,
      shouHuo: 0,
      pingJia: 2,
      shouHou: 0
    };
  }
};
</script>

<style lang='stylus' scoped>
@import '~styles/mixin.styl'
.all-order
  line-height: 90px
  font-size: 26.53px
  color: #000
  padding: 0 40px 0 60px
  & .look
    font-size: 22.74px
    color: #999
    float: right
    display: flex
  & span
    margin-right: 10px
  & i
    display: inline-block
    font-size: 30px
.icon-order
  height: 133px
  display: flex
  justify-content: space-between
  text-align: center
  &>*
    flex: 1
    display: flex
    flex-direction: column
    justify-content: center
    position: relative
    & i
      font-size: 40px
      color: #000
      margin-bottom: 14px
    & p
      font-size: 20.84px
      color: #666
    & span
      position: absolute
      top: 15px
      right: 25px
      width: 27px
      height: 27px
      background-color: #ffae00
      border-radius: 50%
      color: #fff
      text-align: center
      line-height: 27px
      font-size: 17.05px
.list>*
  height: 120px
  padding: 16px 0 0 46px
  display: flex
  align-items: center
  & span
    display: inline-block
    width: 77px
    height: 77px
    bg-image('../../../assets/images/blue')
    background-size: contain
    font-size: 45px
    text-align: center
    line-height: 77px
    color: #4db8fd
    margin-right: 20px
  & h3
    font-size: 26.53px
    color: #000
    margin-bottom: 12px
  & p
    font-size: 18.95px
    color: #ccc
.yijian>span, .help>span
  bg-image('../../../assets/images/green')
  color: #63c230
</style>
