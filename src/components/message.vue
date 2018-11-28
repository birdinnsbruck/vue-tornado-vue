<template>
  <div class="main">
    <div class="top">
      <router-link to="/"><div class="top-left">在线的人</div></router-link>
      <router-link to="/group"><div class="top-middle">群组</div></router-link>
      <div class="top-right">消息</div>
    </div>
  <messageview></messageview>
  </div>
</template>

<script>
import Messageview from './messageview'
export default {
  name: 'message',
  components: {Messageview},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
    height: 70px;
    width: 357px;
    background-color: #70ddff;
    padding-top: 44px;
  }
  .top-left{
    width: 119px;
    float: left;
  }
  .top-middle{
    width: 119px;
    float: left;
  }
  .top-right{
    width: 119px;
    float: right;
  }
</style>
