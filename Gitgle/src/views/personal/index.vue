<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="personal-card">
      <div class="personal-mid">
        <img :src="personData.githubUserInfo.githubUser.avatar_url" alt="">
        <div class="information">
          <p class="name">{{ personData.login }}</p>
          <div>
            <p>关注:<span>{{ personData.githubUserInfo.githubUser.followers }}</span></p>
            <p>粉丝:<span>{{ personData.githubUserInfo.githubUser.following }}</span></p>
          </div>
          <div class="information-footer">
            <span>邮箱：{{ personData.email }}</span>
            <span>talentRank：{{ personData.talentRank }}</span>
            <span>位置：{{ personData.githubUserInfo.githubUser.location }}</span>
          </div>
        </div>
      </div>

    </div>
    <div class="tag">
      <div>
        <ul>

          <router-link  to="/perhome"><li @click="changerouter('/perhome')"  :class="{ active: selActive === '/perhome' }">个人主页</li></router-link>
          <router-link  to="/like"><li @click="changerouter('/like')"  :class="{ active: selActive === '/like' }">我的关注</li></router-link>
          <router-link  to="/fans"><li @click="changerouter('/fans')"  :class="{ active: selActive === '/fans' }">我的粉丝</li></router-link>
          <router-link  to="/editinfo"><li @click="changerouter('/editinfo')"  :class="{ active: selActive === '/editinfo' }">设置</li></router-link>

        </ul>
      </div>
    </div>

    <div class="body">
      <router-view/>
    </div>
    <Indexfooter></Indexfooter>
  </div>
</template>

<script>
import { getUserinfomation } from '@/api/login'
import Indexfooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
export default {
  name: 'personalIndex',
  components: {
    Indexfooter,
    IndexHeader
  },
  data () {
    return {
      selActive: '/perhome',
      personData: {}
    }
  },
  methods: {
    changerouter (key) {
      this.selActive = key
      console.log(this.selActive)
    }
  },
  async created () {
    this.selActive = this.$route.fullPath
    const res = await getUserinfomation()
    console.log(res)
    this.personData = res.data
  }
}
</script>

<style lang="less" scoped>
  .body {
    margin: 20px auto;
    width: 1170px;
    // height: 1000px;
    // background-color: #f1f1f2;
  }

  .personal-card {
    // margin: 80px 80px;
    padding:30px 0px;
    background-color: #f2f4f7;
    // width: 1000px;

  }

  .personal-mid {
    margin: 0px auto;
    display: flex;
    justify-content: center;    /* 水平居中 */
    align-items: center; /* 垂直居中 */
    background-color: #f2f4f7;
    width: 1050px;
  }

  .personal-card img {
    width: 150px;
    border-radius: 150px;
    // float: left;
  }

  .personal-card button {
    height: 50px;
    width: 100px;
    border: 2px solid #6084e7;
    border-radius: 20px;
    color: #fff;
    background-color: #6084e7;
    transition: 0.5s ease;
  }

  .personal-card button:hover {
    box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
  }

  .information {
    padding: 30px;
    margin: 0 auto;
    width: 700px;
  }

  .information .name {
    font-size: 40px;
    color: #132037;
  }

  .information div {
    display: flex;
  }

  .information div p {
    font-size: 20px;
    margin: 10px 40px 0px 0px;
    color: #9d9ea3;
  }

  .information div p span{
    margin-left: 20px;
    color: black;
    font-size: 25px;
  }

  .information .information-footer span {
    color: #9d9ea3;
    margin-right:40px ;
    width: auto;
  }

  .tag {
    display: flex;
    background-color: #f2f4f7;
  }

  .tag div {
    margin: auto;
    // background-color: #fff;

    width: 1050px;
  }

  .tag ul{
    display: flex;
    // margin: 10px 0px 0px 450px ;

  }

  .tag ul li {
    display: flex;
    height: 50px;
    width: 140px;
    align-items: center; /* 垂直居中 */
    justify-content: center;    /* 水平居中 */
    font-size: 20px;

    font-weight: bold;
    cursor: pointer;
  }

  .tag ul a li {
    color: #7a7b8c;
  }

  .tag ul .active {
    background-color: #fafafa;
    color: #3460d8;
  }

  .tag ul .active a{
    color: #3460d8;
  }

  .tag ul .active:hover{
    color: #3460d8;
  }

  .tag ul li:hover  {
    color: #132037;
  }
</style>
