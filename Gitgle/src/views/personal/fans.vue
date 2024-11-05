<template>
  <div>
    <div class="showcard">
      <ul>
        <li v-for="(item,index) in fansData" :key="index" @click="$router.push(`/devdetail/${item.login}`)">
          <img :src="item.avatar_url || defaultimg" alt="">
          <p style="margin-top: 20px;">
          {{ item.login }}
          </p>
          <!-- <div>
            中国
          </div> -->
          <span style="margin-top: 20px;">ID:{{ item.id }}</span>
        </li>
      </ul>
    </div>

      <!-- <div class="page">
        <ul>
          <li style="background-color: #3460d8; color: white;">1</li>
          <li style="background-color: #edeff2; color: #132037;">2</li>
          <li>...</li>
          <li style="background-color: #edeff2; color: #132037;">100</li>
          <li style="background-color: #edeff2; color: #132037;">></li>
        </ul>
      </div> -->
  </div>
</template>

<script>
import defaultimg from '@/assets/imgs/githubuser.png'
import { getUserinfomation } from '@/api/login'
export default {
  name: 'fansIndex',
  data () {
    return {
      fansData: [],
      defaultimg
    }
  },
  async created () {
    this.selActive = this.$route.fullPath
    const res = await getUserinfomation()
    console.log(res)
    this.fansData = res.data.githubUserInfo.githubFollowers.githubFollowersList
  }
}
</script>

<style lang="less" scoped>
  .showcard ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .showcard li {
    height: 380px;
    width: 250px;
    background-color: #fff;
    margin: 20px;
    display: block;
    text-align: center;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease;
    cursor: pointer;
    color: #677081;

  }

  .showcard p {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #132037;
    transition: 0.5s ease;
  }

  .showcard img {
    margin: 20px 0px;
    width: 200px;
    border-radius: 200px;
  }

  .showcard span {
    // margin-top: 20px;
    font-size: 15px;
  }
  .showcard li:hover{
    transform: rotateX(-15deg) rotateY(15deg);
  }
  .showcard li:hover p{
    color: #5098d5;
  }

  .page ul {
    display: flex;
    justify-content: center;        /* 水平居中 */
    align-items: center;
    margin: 70px;
  }

  .page ul li {
    display: flex;
    justify-content: center;        /* 水平居中 */
    align-items: center;
    width: 50px;
    height: 50px;
    margin: 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 20px;
  }
</style>
