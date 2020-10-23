<template>
  <section class="author">
    <div class="user">
      <img :src="avatar" alt="头像加载失败" />
      <p class="autograph">Lucux</p>
      <p class="autograph">邮箱： lucuxxs@gmail.com</p>
      <p class="autograph">skyclub -- 致力于技术交流与分享的平台</p>
    </div>
  </section>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import avatar from '@/assets/images/avatar.jpg'

@Component
export default class AuthorNav extends Vue {
  data() {
    return {
      avatar,
    }
  }
}
</script>
<style lang="less" scoped>
.author {
  margin-bottom: 20px;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  background-color: #7387fe;
  box-shadow: 0 0 5px #999999;
  opacity: 0.9;
  .user {
    padding-top: 20px;
    height: 70%;
    width: 100%;
    .autograph {
      text-align: left;
      margin: 0 30px;
    }
    img {
      /*padding-top: 50px;*/
      display: block;
      width: 70px;
      height: 70px;
      border-radius: 5px;
      margin-left: 30px;
    }
  }
}
</style>
