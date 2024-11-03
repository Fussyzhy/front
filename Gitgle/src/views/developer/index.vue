<template>
  <div>

    <IndexHeader></IndexHeader>

    <div class="body">
      <div class="title">开发者</div>

      <div class="dropdown">
        <ul>

          <li class="category">
            国家/地区<van-icon name="arrow-down" />
            <div class="dropdown-child scroll-box">
              <a v-for="(item,index) in nation" :key="index">
                <img :src="item.svg" alt="" style="width: 20px;">
                {{ item.name }}
              </a>
            </div>
          </li>

          <li class="category">
            领域<van-icon name="arrow-down" />
            <div class="dropdown-child scroll-box">
              <a v-for="(item,index) in 10" :key="index">领域</a>
            </div>
          </li>

          <li class="search">
            <input type="text" name="" id="" placeholder="搜索开发者">
            <van-icon name="search" class="search-icon"/>
          </li>

        </ul>

      </div>

      <hr>

      <div class="showcard">
        <ul>
          <li v-for="(item,index) in userlist" :key="index" @click="$router.push(`/devdetail/${item.login}`)">
            <img :src="item.avatar" alt="">
            <div>
              <p class="showcard-name">
                {{item.login}}
              </p>
              <div class="showcard-nation">
                {{ item.nation }}
              </div>
            </div>
            <div class="showcard-realms">
              领域标签展示框
            </div>
            <span>TalentRank:{{ item.talentRank }}</span>
          </li>
        </ul>
      </div>

      <div class="page">
        <ul>
          <li class="pagebtn" @click="pagechange(page-1)" style="background-color: #edeff2; color: #132037;" v-if="page > 1">&lt;</li>
          <li class="pagebtn" @click="pagechange(1)" style="background-color: #edeff2; color: #132037;" v-if="page > 2">1</li>
          <li v-if="page > 3">...</li>
          <li class="pagebtn" @click="pagechange(page-1)" style="background-color: #edeff2; color: #132037;" v-if="page > 1">{{ page-1 }}</li>
          <li class="pagebtn" style="background-color: #3460d8; color: white;">{{ page }}</li>
          <li class="pagebtn" @click="pagechange(page+1)" style="background-color: #edeff2; color: #132037;" v-if="page < totalPage">{{ page+1 }}</li>
          <li v-if="page < totalPage-2">...</li>
          <li class="pagebtn" @click="pagechange(totalPage)" style="background-color: #edeff2; color: #132037;" v-if="page < totalPage-1">{{totalPage}}</li>
          <li class="pagebtn" @click="pagechange(page+1)" style="background-color: #edeff2; color: #132037;" v-if="page < totalPage">></li>
        </ul>
      </div>

    </div>

    <IndexFooter></IndexFooter>

  </div>
</template>

<script>
import IndexFooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
import { getSearch } from '@/api/search'
import axios from 'axios'
export default {
  name: 'developerIndex',
  components: {
    IndexFooter,
    IndexHeader
  },
  data () {
    return {
      nation: [],
      userlist: [],
      page: 1,
      totalPage: 0
    }
  },
  async created () {
    const nationres = await axios.get('https://restcountries.com/v3.1/all')

    const userres = await getSearch({ page: 1 })
    this.userlist = userres.data.searchUsers
    this.page = userres.data.page
    this.totalPage = userres.data.totalPage

    for (const item of nationres.data) {
      if (item.translations && item.translations.zho && item.translations.zho.common) {
        this.nation.push({
          svg: item.flags.svg,
          name: item.translations.zho.common
        })
      } else {
        this.nation.push({
          svg: item.flags.svg,
          name: item.name.nativeName.zho.common
        })
      }
    }

    // this.nation = this.nation.filter(item => !(item.translations && item.translations.zho && item.translations.zho.common))
    console.log(userres)
  },
  methods: {
    async pagechange (page) {
      const res = await getSearch({ page: page })
      console.log(res)
      this.page = res.data.page
      this.userlist = res.data.searchUsers
      this.totalPage = res.data.totalPage
    }
  }

}
</script>

<style lang="less" scoped>
  .body {
    margin: 20px auto;
    width: 1170px;
    // background-color: #f1f1f2;
  }

  .body .title {
    margin: 50px 100px 35px;
    font-size: 40px;
    font-weight: bold;
    color: #132037;
  }

  .body hr {
    margin: 60px 0px;
    border: none;
    border-top: 2px solid #edeff2;
  }

  .dropdown ul {
    display:flex;
  }

  .dropdown .category {
    display: flex;
    background-color: #fff;
    height: 45px;
    width: 140px;
    margin: 20px 10px 0px 80px;
    border-radius: 50px;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    color: #132037;
    font-size: 20px;
    // transition: 0.5s ease;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    position: relative;
  }

  .dropdown .category:hover {
    border: 2px solid #dadbe8;
  }

  .dropdown-child {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 180px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: 0.5s ease;
    top: 43px;
    border-radius: 7px;
  }

  .dropdown-child a {
    color: black;
    padding: 12px 0px 12px 16px;
    text-decoration: none;
    display: block;
    font-size: 15px;
  }

  .dropdown-child a:hover {
    background-color: #f1f1f1;
  }

  .scroll-box {
    width: 290px;        /* 设置宽度 */
    height: 200px;      /* 设置高度 */
    overflow-y: auto;   /* 仅在垂直方向显示滚动条 */
    border: 1px solid #ccc; /* 设置边框 */
    // padding: 10px;      /* 内边距 */
  }

  .scroll-box::-webkit-scrollbar {
    width: 12px;  /* 滚动条的宽度 */
  }

  /* 滚动条的轨道 */
  .scroll-box::-webkit-scrollbar-track {
    background: #f1f1f1; /* 轨道的背景颜色 */
    border-radius: 200px; /* 圆角效果 */
  }

  /* 滚动条的滑块 */
  .scroll-box::-webkit-scrollbar-thumb {
    background: #888; /* 滑块的颜色 */
    border-radius: 20px; /* 圆角效果 */
  }

  .dropdown li:hover .dropdown-child {
    display: block;
  }

  .dropdown .search {
    display: flex;
    background-color: #f1f1f1;
    height: 45px;
    width: 300px;
    margin: 20px 10px 0px 280px;
    border-radius: 50px;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    color: #132037;
    font-size: 20px;
    // transition: 0.5s ease;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }

  .search input {
    border: 0px;
    width: 210px;
    background-color: #f1f1f1;
    margin-left:20px;
  }

  .search .search-icon {
    margin-left:20px;
    padding-left: 10px;
    transition: 0.5s ease;
    width:60px;
    height: 60px;
    line-height: 60px;

  }

  .search .search-icon:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    background-color: #e5e5e6;
  }

  .showcard ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
  }

  .showcard li {
    height: 180px;
    width: 950px;
    background-color: #fff;
    margin: 20px;
    display: flex;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    transition: 0.5s ease;
    cursor: pointer;
    color: #677081;
    align-items: center;
  }

  .showcard p {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #132037;
    transition: 0.5s ease;
  }

  .showcard img {
    margin: 20px 30px;
    width: 100px;
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

  .showcard-name {
    width: 120px;
    white-space: nowrap;
  }

  .showcard-realms {
    // background-color: #97ffa5;
    border-left: #eeeeee 2px solid;
    margin: 0px 90px;
    width: 280px;
    height: 90px;
    // border-radius: 20px;
    text-align: center;
  }

  .page ul {
    display: flex;
    justify-content: center;        /* 水平居中 */
    align-items: center;
    margin: 70px;

  }

  ul .pagebtn:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
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
    transition: 0.5s ease;
  }
</style>
