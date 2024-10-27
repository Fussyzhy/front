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
              <p>100</p>
            </div>
            <van-icon name="arrow" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

          <li>
            <van-icon name="friends-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>团队</sapn>
              <p>100</p>
            </div>
            <van-icon name="arrow" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

          <li>
            <van-icon name="location-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>国家</sapn>
              <p>100</p>
            </div>
            <van-icon name="arrow" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

          <li>
            <van-icon name="points"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>数据</sapn>
              <p>100</p>
            </div>
            <van-icon name="arrow" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

          <li>
            <van-icon name="desktop-o"  class="li-tag" size="40px"/>
            <div class="li-text">
              <sapn>项目</sapn>
              <p>100</p>
            </div>
            <van-icon name="arrow" size="20px" style="margin: 37px 10px" color="#677081"/>
          </li>

        </ul>
      </div>

      <div class="language-title">
        <p>All Languages</p>
        <button>更多</button>
      </div>

      <div class="language-body">
        <ul>

          <li>
            <div>
              <img src="@/assets/imgs/java_logo.png" alt="">
            </div>
            <p>Java</p>
          </li>

          <li>
            <div>
              <img src="@/assets/imgs/java_logo.png" alt="">
            </div>
            <p>Java</p>
          </li>

          <li>
            <div>
              <img src="@/assets/imgs/java_logo.png" alt="">
            </div>
            <p>Java</p>
          </li>

          <li>
            <div>
              <img src="@/assets/imgs/java_logo.png" alt="">
            </div>
            <p>Java</p>
          </li>

          <li>
            <div>
              <img src="@/assets/imgs/java_logo.png" alt="">
            </div>
            <p>Java</p>
          </li>

        </ul>
      </div>

      <div class="ranking">
        <div class="ranking-child" >
          <div class="ranking-title">
            <div>
              <p>高分开发者</p>
              <a @click="$router.push('/developer')">所有开发者 > </a>
            </div>
            <div>
              <span>名次</span>
              <span>用户</span>
            </div>
            <div style="height: 2px; width: 100%; background-color: #eaeaea;"></div>
          </div>

          <table>
            <tr v-for="(item,index) in 10" :key="index">
              <td class="ranking-num">{{ index+1 }}</td>
              <td class="ranking-pic"><img src="@/assets/imgs/user.png" alt=""></td>
              <td class="ranking-name">用户</td>
            </tr>
          </table>

        </div>

        <div class="ranking-mid"></div>

        <div class="ranking-child" >
          <div class="ranking-title">
            <div>
              <p>高分项目 </p>
              <a href=""> 所有项目 > </a>
            </div>
            <div>
              <span>名次</span>
              <span>项目</span>
            </div>
            <div style="height: 2px; width: 100%; background-color: #eaeaea;"></div>
          </div>

          <table>
            <tr v-for="(item,index) in 10" :key="index">
              <td class="ranking-num">{{ index+1 }}</td>
              <td class="ranking-pic"><img src="@/assets/imgs/user.png" alt=""></td>
              <td class="ranking-name">项目</td>
            </tr>
          </table>

        </div>

      </div>

    </div>

    <Indexfooter></Indexfooter>
  </div>
</template>

<script>
import Indexfooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
export default {
  name: 'homeIndex',
  components: {
    Indexfooter,
    IndexHeader
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
    width: 200px;
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
    font-size: 30px;
    font-weight: bold;
    color: #132037;
  }

  .language-title {
    display: flex;
    padding: 10px;
  }

  .language-title p {
    font-size: 30px;
    font-weight: bold;
    color: #132037;
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
    margin: 20px 80px 20px 50px;
    font-size: 20px;
    color: #7a7b8c;
  }

  .ranking table {
    // border: #000000 solid 2px;
    width: 100%;
  }

  .ranking td {
    // border: #f00000 solid 2px;
    // align-items: center;
    padding: 0px 0px 0px 0px;
  }

  .ranking-num {
    width: 140px;
    text-align: center;
  }

  .ranking-pic {
    width: 70px;
  }

  .ranking-child td {
    height: 80px;

  }

  .ranking-child td img {
    height: 45px;
    border-radius: 50px;
    margin: 0px 30px 0px 70px;
    transition: 0.5s ease;
  }

  .ranking-child td img:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

</style>
