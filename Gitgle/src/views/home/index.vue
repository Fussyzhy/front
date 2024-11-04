<template>
  <div>

    <IndexHeader></IndexHeader>

    <div class="body">

      <div class="title">
        Gitgle 是GitHub开发者社区平台。
      </div>

      <div class="under-title">
        <div>开发者指南、深入评论、图表数据分析。</div>
        <div class="tag">
          <van-icon name="fire-o" style="margin: 16px 3px 16px 0px;"/>
          全部由开发者数据驱动
        </div>
      </div>

      <div class="main_search">
        <form action="">
          <input type="text" placeholder="搜索开发者&更多">
        </form>
        <div class="line">
        </div>
        <van-icon name="search"  size="40px" class="search_btn"/>
      </div>

      <div class="main-tag">
        <ul>

          <li @click="$router.push('/developer')">
            <van-icon name="contact-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>开发者</sapn>
              <p>{{ datatotal.githubUserTotal }}</p>
            </div>
            <van-icon name="" size="20px" style="margin: 37px 10px" color="#677081"/>
            <!-- arrow -->
          </li>

          <li>
            <van-icon name="points"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>仓库</sapn>
              <p>{{ datatotal.githubRepoTotal }}</p>
            </div>
            <van-icon name="" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

          <!-- <li>
            <van-icon name="location-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>国家</sapn>
              <p>233</p>
            </div>
            <van-icon name="" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li> -->

          <li>
            <van-icon name="cluster-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>提交</sapn>
              <p>{{ datatotal.githubCommitTotal }}</p>
            </div>
            <van-icon name="" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

          <li>
            <van-icon name="desktop-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>代码</sapn>
              <p>{{ datatotal.githubCodeTotal }}</p>
            </div>
            <van-icon name="" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

        </ul>
      </div>

      <div class="tuijian">
        <span>为你推荐</span>
      </div>

      <div class="language-title">
        <p>开发者</p>
        <button @click="$router.push('/developer')">更多</button>
      </div>

      <div class="language-body">
        <div class="showcard">
          <ul>
            <li v-for="(item,index) in raDeveloper" :key="index">
              <img :src="item.avatar" alt="">
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
      </div>

      <div class="domain-title">
        <p>领域</p>
        <button @click="$router.push('/domain')">更多</button>
      </div>

      <div class="domain-body">
        <ul>

          <li  v-for="(item,index) in raDomain" :key="index">
            <div>
              <img src="@/assets/imgs/githubuser.png" alt="">
              <p>{{ item.developerTotal }}</p>
              <div>{{ item.domain }}</div>

            </div>
          </li>

        </ul>
      </div>

      <div class="language-title">
        <p>仓库</p>
        <button @click="$router.push('/project')">更多</button>
      </div>

      <div class="repo-body">
        <div class="card-grid">
          <div v-for="(item,index) in raRepo" :key="index" class="card" @click="$router.push(`/prodetail/${item.ownerLogin}/${item.repoName}/`)">
            <div class="name">
                <div class="circle"></div>
                {{ item.repoName }}
              <!-- <span>
                <van-icon name="clock-o" />
                ID: 2024-9-27
              </span> -->
            </div>

            <ul>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-2">
                    <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                </svg>
                {{item.starsCount}} stars
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-1">
                    <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                </svg>
                {{item.forksCount}} forks
              </li>
              <li>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye mr-2">
                    <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
                </svg>
                {{item.watchersCount}} watching
              </li>
            </ul>

            <hr>

            <div class="foot">
              <div style="font-size: 20px;">
                拥有者:
              </div>
              <div style="display: flex; align-items: center;">
                <img :src="item.ownerAvatarUrl" alt="">
                {{item.ownerLogin}}
              </div>

              <!-- <span>
                <van-icon name="clock-o" />
                更新于 2024-9-27
              </span> -->
            </div>

          </div>
        </div>
      </div>

      <div class="tuijian" style="margin-top: 100px;">
      </div>

      <div class="ranking">
        <div class="ranking-child" >
          <div class="ranking-title">
            <div>
              <p>高分开发者</p>
              <a @click="$router.push('/developer')">所有开发者 > </a>
            </div>
            <div>
              <span class="ranking-level">名次</span>
              <span class="ranking-user">用户</span>
              <span class="ranking-Talent">TalentRank</span>
            </div>
            <div style="height: 2px; width: 100%; background-color: #eaeaea;"></div>
          </div>

          <table>
            <tr v-for="(item,index) in userlist" :key="index">
              <td class="ranking-num">{{ index+1 }}</td>
              <td class="ranking-pic"><img :src="item.avatar || defaultimg" alt=""></td>
              <td class="ranking-name"><p class="ellipsis-single-line">{{item.login}}</p></td>
              <td class="ranking-score">{{ item.talentRank }}</td>
            </tr>
          </table>

        </div>

        <div class="ranking-mid"></div>

        <div class="ranking-child" >
          <!-- <div class="ranking-title">
            <div>
              <p>高分仓库 </p>
              <a href=""> 所有仓库 > </a>
            </div>
            <div class="ranking-prj">
              <span>名次</span>
              <span>仓库名称</span>
            </div>
            <div style="height: 2px; width: 100%; background-color: #eaeaea;"></div>
          </div>

          <table>
            <tr v-for="(item,index) in repohost" :key="index">
              <td class="ranking-num">{{ index+1 }}</td>
              <td class="ranking-pic"><img :src="item.ownerAvatarUrl || defaultimg" alt=""></td>
              <td class="ranking-name">{{ item.repoName }}</td>
            </tr>
          </table> -->
          <div class="ranking-title">
            <div>
              <p>高分仓库</p>
              <a @click="$router.push('/project')" style="padding-left: 30px;">所有仓库 > </a>
            </div>
            <div>
              <span class="ranking-level">名次</span>
              <span class="ranking-user">仓库</span>
              <span class="ranking-Talent">starsCount</span>
            </div>
            <div style="height: 2px; width: 100%; background-color: #eaeaea;"></div>
          </div>

          <table>
            <tr v-for="(item,index) in repohost" :key="index">
              <td class="ranking-num">{{ index+1 }}</td>
              <td class="ranking-pic"><img :src="item.ownerAvatarUrl || defaultimg" alt=""></td>
              <td class="ranking-name"><p>{{ item.repoName }}</p></td>
              <td class="ranking-score">{{ item.starsCount }}</td>
            </tr>
          </table>

        </div>

      </div>

    </div>

    <Indexfooter></Indexfooter>
  </div>
</template>

<script>
import { getSearch, gethomedata } from '@/api/search'
// import { gethomedata } from '@/api/search'
import { getDomain } from '@/api/domain'
import { getProject } from '@/api/project'

import defaultimg from '@/assets/imgs/githubuser.png'
import Indexfooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
export default {
  name: 'homeIndex',
  components: {
    Indexfooter,
    IndexHeader
  },
  data () {
    return {
      userlist: [],
      datatotal: {
        githubUserTotal: 0,
        githubRepoTotal: 0,
        githubCommitTotal: 0,
        githubCodeTotal: 0
      },
      raDomain: [],
      raRepo: [],
      raDeveloper: [],
      repohost: [],
      defaultimg
    }
  },
  computed: {

  },
  methods: {
    async randomDomain () {
      this.raDomain = []
      const res = await getDomain()
      while (this.raDomain.length < 5) {
        const randomIndex = Math.floor(Math.random() * res.data.hotDomainList.length)
        const randomElement = res.data.hotDomainList[randomIndex]
        if (!this.raDomain.includes(randomElement)) {
          this.raDomain.push(randomElement)
        }
      }
      // console.log(this.raDomain)
    },
    async randomDeveloper () {
      this.raDeveloper = []
      const randomNumbers = []
      while (randomNumbers.length < 5) {
        const randomNumber = Math.floor(Math.random() * 10) + 1
        if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber)
          const res = await getSearch({ page: randomNumber, size: 1 })
          this.raDeveloper.push(res.data.searchUsers[0])
        }
      }
      // console.log(this.raDeveloper)
    },
    async randomRepo () {
      this.raRepo = []
      const randomNumbers = []
      while (randomNumbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        if (!randomNumbers.includes(randomNumber)) {
          randomNumbers.push(randomNumber)
          const res = await getProject(randomNumber, 1)
          this.raRepo.push(res.data.githubReposList[0])
        }
      }
      // console.log(this.raRepo)
    }

  },
  async created () {
    const res = await getSearch({ page: 1, size: 10 })
    // console.log(res)
    this.userlist = res.data.searchUsers

    const datares = await gethomedata()
    this.datatotal = datares.data
    this.randomDomain()
    this.randomRepo()
    this.randomDeveloper()

    const repores = await getProject(1, 10)
    console.log(repores)
    this.repohost = repores.data.githubReposList
  }
}
</script>

<style lang="less" scoped>
  .ellipsis-single-line {
      white-space: nowrap;       // 禁止换行
      overflow: hidden;          // 溢出隐藏
      text-overflow: ellipsis;   // 溢出部分显示省略号
  }

  .body {
    margin: 20px auto;
    width: 1170px;
    // background-color: #f1f1f2;
  }

  .body .title {
    color: #132037;
    font-size: 50px;
    font-weight: 700;
    margin: 100px 0px 50px;
    height: 60px;
  }

  .body .under-title {
    font-size: 30px;
    line-height: 60px;
    font-weight: 700;
    color: #677081;
    display: flex;
  }

  .body .under-title .tag {
    height: 60px;
    background-color: #e5ebfb;
    color: #3460d8;
    margin: 0px 0px 50px 40px;
    width: 380px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }

  .main_search {
    height: 90px;
    width: 100%;
    background-color: #edeff2;
    border-radius: 20px;
    display: flex;
    padding: 0px 0px 0px 30px;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .main_search:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);

  }

  .main_search input{
    height: 70px;
    font-size: 20px;
    width:900px;
    border: 0px;
    background-color: #edeff2;
    margin-top: 10px;

  }

  .main_search .line {
    margin:20px 0px 0px 160px;
    height: 50px;
    width: 1px;
    background-color: #d3d5d9;

  }

  .main_search .search_btn {
    padding: 25px 0px 0px 15px;
    width:100px ;
    transition: 0.3s ease;
    cursor: pointer;
  }

  .main_search .search_btn:hover {
    background-color: #e7e9eb;
  }

  .main-tag {
    width: 100%;
    height: 150px;
    margin-top: 40px;
  }

  .main-tag ul {
    display: flex;
  }

  .main-tag ul li {
    width: 260px;
    height: 100px;
    margin: 10px auto  0;
    background-color: #f2f4f7;
    justify-content: space-between;
    border-radius: 20px;
    transition: 0.5s ease;
    cursor: pointer;
    display: flex;
    // padding: 30px 0px;
    color: #677081;
  }

  .main-tag ul li:hover {
    width: 210px;
    height: 110px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
    color: #3460d8;
  }

  .main-tag .li-tag {
    margin: 30px 0px 0px 10px;
    color: #343330;
  }

  .main-tag .li-text {
    text-align: center;
    font-size: 20px;
    font-weight: 800;
    margin: 15px 0px 0px 0px;
  }

  .main-tag .li-text p {
    margin-top: 3px;
    font-size:18px;
    font-weight: bold;
    color: #132037;
  }

  .language-title {
    display: flex;
    padding: 10px;
  }

  .language-title p {
    font-size: 25px;
    font-weight: bold;
    color: #132037;
    line-height: 40px;
  }

  .language-title button {
    margin-left:auto;
    margin-bottom: 20px;
    height: 40px;
    width: 100px;
    font-size: 20px;
    border: #cbd1db solid 3px;
    border-radius: 20px;
    background-color: #fafafa;
    color: #132037;
    transition: 0.5s ease;
    font-weight: bold;
  }

  .language-title button:hover{
    color: #3460d8;
    border: #3460d8 solid 3px;
  }

  .language-body ul {
    display: flex;
  }

  .language-body ul li {
    width: 170px;
    height: 250px;
    margin: 10px auto  0;
    transition: 0.5s ease;
  }

  .language-body ul li:hover {
    color: #3460d8;
  }

  .language-body ul li p {
    text-align: center;
    font-size: 25px;
  }

  .language-body ul li div {
    width: 150px;
    height: 200px;
    background-color: #edeff2;
    margin: auto;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .language-body ul li div:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

  .language-body ul li div img{
    width: 100px;
    height: 180px;
  }

  .domain-title {
    display: flex;
    padding: 10px;
  }

  .domain-title p {
    font-size: 25px;
    font-weight: bold;
    color: #132037;
    line-height: 40px;
  }
  .domain-body  img{
    margin-top: 20px;
    width: 80px;
    // height: 180px;
  }

  .domain-title button {
    margin-left:auto;
    margin-bottom: 20px;
    height: 40px;
    width: 100px;
    font-size: 20px;
    border: #cbd1db solid 3px;
    border-radius: 20px;
    background-color: #fafafa;
    color: #132037;
    transition: 0.5s ease;
    font-weight: bold;
  }

  .domain-title button:hover{
    color: #3460d8;
    border: #3460d8 solid 3px;
  }

  .domain-body ul {
    display: flex;
  }

  .domain-body ul li {
    width: 170px;
    height: 250px;
    margin: 10px auto  0;
    transition: 0.5s ease;
  }

  .domain-body ul li div {
    width: 150px;
    height: 200px;
    background-color: #fff;
    margin: auto;
    text-align: center;
    border-radius: 20px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: 0.5s ease;
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

  .domain-body ul li div:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.2);
  }

  .domain-body ul li div div {
    font-size: 22px;
    margin: 20px 0px;
    color: #677081;
  }

  .domain-body ul li div:hover  div {
    color: #3460d8;
  }

  .domain-body ul li div p {
    font-size: 25px;
    margin: 10px 0px 0px 0px;
  }

  // .domain-body ul li div img{
  //   width: 100px;
  //   height: 180px;
  // }

  .ranking {
    margin: 100px 0px;
    width: 100%;
    // height: 1000px;
    background-color: #fff;
    display: flex;
    border-radius: 20px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

  .ranking .ranking-child {
    // background-color: #ff0000;

    width: 40%;
    margin: 60px auto  0;
  }

  .ranking-mid {
    background-color: #eaeaea;
    width: 2px;
    margin: 40px 0px;
  }

  .ranking-title  div{
    display: flex;
  }

  .ranking-title  div p {
    margin: 0px 170px 0px 10px;
    color: #000000;
    font-size: 25px;
    font-weight: bolder;
  }

  .ranking-title  div a {
    font-size: 25px;
    font-weight: bolder;
    color: #3460d8;
    transition: 0.5s ease;
    cursor: pointer;
  }

  .ranking-title  div a:hover {
    color: #5098d8;
  }

  .ranking-title  div span {
    // margin: 20px 80px 20px 50px;
    margin: 20px 0px;
    font-size: 20px;
    color: #7a7b8c;
  }

  .ranking-title .ranking-prj span {
    margin: 20px 80px 20px 50px;
    font-size: 20px;
    color: #7a7b8c;
  }

  .ranking-title .ranking-level {
    margin-left:30px ;
  }

  .ranking-title .ranking-user {
    margin-left:40px ;
  }

  .ranking-title .ranking-Talent {
    margin-left:190px ;
  }

  .ranking-num {
    width: 100px;
    text-align: center;
  }

  .ranking-pic {
    width: 70px;
  }

  .ranking-name {
    width: 190px;
  }

  .ranking-child tr {
    height: 80px;

  }

  .ranking-child td img {
    height: 45px;
    border-radius: 50px;
    // margin: 0px 30px 0px 0px;
    transition: 0.5s ease;
  }

  .ranking-child td img:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

  .tuijian {
    width: auto;
    background-color: #7a7a7a;
    height: 1px;
    // text-align: center;
    position: relative;
    margin: 30px 0px;
  }
  .tuijian span {
    background-color: #fafafa;
    // margin: auto;
    position: absolute;
    width: 180px;
    top: -23px;
    left: 42%;
    font-size: 30px;
    text-align: center;
  }

  .circle {
    height: 8px;
    width: 8px;
    background-color: black;
    margin-right: 10px;
    border-radius: 20px;
    background-color: rgb(129, 192, 127);
  }

  .card-grid {
    padding-left: 60px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .card-grid .card {
    height: 200px;
    width: 500px;
    background-color: #ffffff;
    margin: 20px 0px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s ease;
  }

  .card-grid .card:hover {
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  .card .name {
    margin: 40px 40px 20px 40px;
    font-size: 20px;
    display: flex;
    width: 85%;
    overflow:hidden ;
    white-space: nowrap;
    align-items: center;
    // background-color: #000;
  }

  .card .name span {
    // margin: 20px 20px;
    padding-top:18px ;
    font-size: 15px;
    float: right;
    color: #9198a1;
  }

  .card ul {
    display: flex;
    justify-content: space-between;
    // margin: 20px 0px;
    color: #9198a1;
    padding: 0px 20px;
  }

  .card ul li {
    margin: 0px 0px;
  }

  .card .desc {
    padding: 40px;
    height: 300px;
    line-height: 30px;
    // background-color: #ff0000;
  }

  .card .foot {
    margin: 30px 20px 0px;
    display: flex;
    align-items: center;
  }

  .card .foot img {
    height: 30px;
    border-radius: 50px;
    margin: 0px 10px 0px 20px;
  }

  .card .foot span {
    margin: 0px 0px 0px 130px;
    font-size: 15px;
    float: right;
    color: #9198a1;
  }

  .showcard ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 60px;
  }

  .showcard li {
    height: 380px;
    width: 250px;
    background-color: #fff;
    margin: 0px;
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

</style>
