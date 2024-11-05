<template>
  <div>
    <IndexHeader></IndexHeader>
    <div class="body">
      <div class="title">关于“{{ domaintxt }}”的搜索结果</div>
      <hr>

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
                <div v-for="(item,index) in item.domains.slice(0,6)" :key="index">{{ item }}</div>
                <p v-if="item.domains.length === 0">N/A</p>
              </div>
            </div>
            <span>TalentRank:{{ item.talentRank }}</span>
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
import { getSearch } from '@/api/search'
import defaultimg from '@/assets/imgs/githubuser.png'
import IndexFooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
export default {
  name: 'searchIndex',
  data () {
    return {
      userlist: [],
      page: 1,
      totalPage: 0,
      code: 500,
      defaultimg
    }
  },
  components: {
    IndexFooter,
    IndexHeader
  },
  computed: {
    domaintxt () {
      return this.$route.params.domaintxt
    }
  },
  async created () {
    this.code = 500
    const res = await getSearch({ page: 1, size: 20, domain: this.domaintxt })
    this.code = res.code
    console.log(res)
    this.userlist = res.data.searchUsers
    this.page = res.data.page
    this.totalPage = res.data.totalPage
  },
  methods: {
    async pagechange (page) {
      const res = await getSearch({ page: page, size: 20, domain: this.domaintxt })
      console.log(res)
      this.page = res.data.page
      this.userlist = res.data.searchUsers
      this.totalPage = res.data.totalPage
      window.scrollTo(0, 0)
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

  .title {
    margin: 80px 20px;
    font-size: 50px;
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
  ul .pagebtn {
    cursor: pointer;
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

  .null {
    // background-color: #db0000;
    text-align: center;
    margin-top: 220px;
    color: #949494;
  }

  .null svg {
    transform: scale(20);
  }

  .null p {
    font-size: 70px;
    margin: 190px 0px 0px 0px;
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
</style>
