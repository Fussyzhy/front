<template>
  <div>

    <IndexHeader></IndexHeader>

    <div class="body">
      <div class="title">开发者</div>

      <div class="dropdown">
        <ul>
          <!-- -->
          <li class="category">
            <p style=" white-space:nowrap; overflow: hidden;">{{ search.nation || '国家/地区' }}<van-icon name="arrow-down" /></p>
            <div class="dropdown-child scroll-box">
              <a @click="search.nation = ''">
                全部
              </a>
              <a v-for="(item,index) in nation" :key="index" @click="search.nation = item.name">
                <img :src="item.svg" alt="" style="width: 20px;">
                {{ item.name }}
              </a>
            </div>
          </li>

          <li class="category-search">
            <input type="text" placeholder="通过领域筛选" v-model="searchdomain" @keyup.enter="search.domain = searchdomain">
            <van-icon name="search" class="search-icon" @click="search.domain = searchdomain"/>
            <!-- {{ search.domain || '热门领域' }}<van-icon name="arrow-down" />
            <div class="dropdown-child scroll-box">
              <a @click="search.domain = ''">全部</a>
              <a v-for="(item,index) in hotDomainList" :key="index" @click="search.domain = item.domain">{{ item.domain }}</a>
            </div> -->
          </li>

          <li class="search">
            <input type="text" name="" id="" placeholder="Github用户名搜索开发者" v-model="searchtext" @keyup.enter="search.login = searchtext">
            <van-icon name="search" class="search-icon" @click="search.login = searchtext"/>
          </li>

        </ul>

      </div>

      <hr>

      <div class="login_result" v-if="search.login">
        关于“{{ search.login }}”的搜索结果
      </div>

      <div class="showcard">
        <ul>
          <li v-for="(item,index) in userlist" :key="index" @click="$router.push(`/devdetail/${item.login}`)">

            <img :src="item.avatar || defaultimg" alt="">
            <div>
              <p class="showcard-name">
                {{item.login}}
              </p>
              <div class="showcard-nation">
                {{ item.nation || 'N/A' }}
              </div>
            </div>
            <div class="showcard-realms">
              <div class="domain-tag">
                <div v-for="(item,index) in item.domains.slice(0,6)" :key="index" :title="item">{{ item }}</div>
                <p v-if="item.domains.length === 0">N/A</p>
              </div>
            </div>
            <span>TR:{{ item.talentRank || 'N/A' }}</span>
          </li>
        </ul>
      </div>

      <div class="null"  v-if="userlist.length === 0 && code === 200">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 4h-9a2 2 0 0 0-2 2v5.5a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-7 0v-.5a2.5 2.5 0 1 1 5 0V4"/><path d="M5.5 7.5A1.5 1.5 0 1 1 7 9v.5m.002 2a.25.25 0 1 1 0-.5m0 .5a.25.25 0 1 0 0-.5"/></g></svg>
        <p>很抱歉，没有找到你要的内容哦</p>
      </div>

      <div class="page" v-if="userlist.length !== 0">
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
import { getDomain } from '@/api/domain'
import defaultimg from '@/assets/imgs/githubuser.png'
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
      hotDomainList: [],
      userlist: [],
      page: 1,
      totalPage: 0,
      searchtext: '',
      searchdomain: '',
      search: {
        domain: '',
        nation: '',
        login: ''
      },
      code: 500,
      defaultimg
    }
  },
  watch: {
    search: {
      async handler (newValue, oldValue) {
        this.code = 500
        const res = await getSearch({
          page: 1,
          size: 20,
          domain: this.search.domain,
          nation: this.search.nation,
          login: this.search.login
        })
        console.log(res)
        this.code = res.code
        this.userlist = res.data.searchUsers
        this.page = res.data.page
        this.totalPage = res.data.totalPage
      },
      deep: true
    }
  },
  async created () {
    this.code = 500
    const nationres = await axios.get('https://restcountries.com/v3.1/all')

    const userres = await getSearch({ page: 1, size: 20 })
    this.userlist = userres.data.searchUsers
    this.page = userres.data.page
    this.totalPage = userres.data.totalPage

    this.code = userres.code

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

    const targetId = '美国'
    const targetUser = this.nation.find(item => item.name === targetId)
    if (targetUser) {
      const index = this.nation.indexOf(targetUser)
      if (index > -1) {
        const removedUser = this.nation.splice(index, 1)[0]
        this.nation.unshift(removedUser)
      }
    }

    const china = '中国'
    const chinasvg = this.nation.find(item => item.name === china)
    if (chinasvg) {
      const index = this.nation.indexOf(chinasvg)
      if (index > -1) {
        const removedUser = this.nation.splice(index, 1)[0]
        this.nation.unshift(removedUser)
      }
    }

    const dmres = await getDomain()
    this.hotDomainList = dmres.data.hotDomainList
    // this.nation = this.nation.filter(item => !(item.translations && item.translations.zho && item.translations.zho.common))
    console.log(dmres)
  },
  methods: {
    async pagechange (page) {
      const res = await getSearch({
        page: page,
        size: 20,
        domain: this.search.domain,
        nation: this.search.nation,
        login: this.search.login
      })
      console.log(res)
      this.page = res.data.page
      this.userlist = res.data.searchUsers
      this.totalPage = res.data.totalPage
      window.scrollTo(0, 0)
    }
  },
  updated () {
    if (this.search.login) {
      this.search.domain = ''
      this.search.nation = ''
    }
  }

}
</script>

<style lang="less" scoped>
  .body {
    margin: 20px auto;
    width: 1170px;
    min-height: 900px;
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

  .category input {
    width: 100px;
    border: 0px;
    text-align: center;
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
    font-size: 18px;
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
    // align-items: center;
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
    overflow: hidden;
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
    // border-left: #eeeeee 2px solid;
    margin: 0px 90px;
    width: 280px;
    height: 90px;
    // border-radius: 20px;
    margin-top: 20px;
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

  .domain-tag {
    border-left: #eeeeee 2px solid;
    padding-left: 20px;
    height: 80px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 30px;
    width: 250px;
    // background-color: #000;

  }

  .domain-tag div {
    border: #dddee1 2px solid;
    margin: 8px;
    border-radius: 20px;
    width: 80px;
    // height: 30px;
    // background-color: #d6d9de;
    color: #202124;
    text-align: center;
    font-size: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 20px;
  }

  .domain-tag p {
    font-weight: 100;
    font-size: 20px;
    line-height: 80px;
    margin-left: 100px;
    color: #677081;
  }

  .domain-tag p:hover {
    color: #677081;
  }

  .null {
    // background-color: #db0000;
    text-align: center;
    margin-top: 190px;
    color: #949494;
  }

  .null svg {
    transform: scale(20);
  }

  .null p {
    font-size: 70px;
    margin: 190px 0px 0px 0px;
  }

  .login_result {
    margin: 80px 20px;
    font-size: 30px;
  }

  .dropdown .category-search {
    display: flex;
    background-color: #f1f1f1;
    height: 45px;
    width: 240px;
    margin: 20px 10px 0px 80px;
    border-radius: 50px;
    // justify-content: center; /* 水平居中 */
    padding-left: 20px;
    align-items: center; /* 垂直居中 */
    color: #132037;
    font-size: 20px;
    // transition: 0.5s ease;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
  }

  .category-search input {
    width: 160px;
    border: 0px;
    // text-align: center;
    background-color: #f1f1f1;
  }

  // .dropdown .category-search:hover {
  //   border: 2px solid #dadbe8;
  // }

  .category-search .search-icon {
    margin-left:10px;
    padding-left: 10px;
    transition: 0.5s ease;
    width:60px;
    height: 60px;
    line-height: 65px;

  }

  .category-search .search-icon:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
    background-color: #e5e5e6;
  }
</style>
