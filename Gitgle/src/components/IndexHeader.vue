<template>
  <div class="header">

    <div class="icon"><img src="@/assets/imgs/logo.png" alt=""></div>

    <div class="nav">
      <ul>
        <li @click="$router.push('/home')"><a>首页</a></li>
        <li><a>领域</a></li>
        <li @click="$router.push('/developer')"><a>开发者</a></li>
        <li><a>项目</a></li>
        <li><a>推荐</a></li>
        <li><a>社区</a></li>

      </ul>
    </div>

    <div class="nav-right">
      <div class="search">
        <div class="searchBtn">
          <van-icon name="search" size="30px"/>
        </div>
        <div class="searchTxt">
          <form action="">
            <input type="text">
          </form>
        </div>
      </div>
      <button style="border: #cbd1db solid 2px; background-color: #fff; color:#2b292a;" @click="$router.push('/login/1')" ref="login">登录</button>
      <button style="background-color: #3460d8; color:#fff" @click="$router.push('/login/2')" ref="reg">注册</button>
      <button style="border: #cbd1db solid 2px; background-color: #fff; color:#2b292a;" @click="$router.push('/perhome')" ref="person">个人中心</button>
    </div>

  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.getters.token) {
      this.$refs.reg.style.display = 'none'
      this.$refs.login.style.display = 'none'
      this.$refs.person.style.display = 'block'
    } else {
      this.$refs.reg.style.display = 'block'
      this.$refs.login.style.display = 'block'
      this.$refs.person.style.display = 'none'
    }
  }
}
</script>

<style lang="less" scoped>
  .icon {
    // line-height: 170px;
    padding: 5px 30px;
    font-size: 40px;
  }

  .icon img {
    width: 170px;

  }

  .nav {
    display: flex;
    height: 70px;
  }

  .nav ul {
    display: flex;

  }

  .nav ul li {
    width: 100px;
    padding: 10px;
    margin: 0px;
    list-style: none;
    height: 40px;
    line-height: 20px;
    margin: 10px 30px;
    background-color: #ffffff;
    border-radius: 10px;
    transition: 0.5s ease;
    text-align: center;
    cursor: pointer;
  }

  .nav ul li:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
    background-color: #f0effb;
  }

  .nav ul li a {
    font-size: 20px;
    color: #2b292a;
    font-weight: bold;
  }

  .header {
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    border-bottom:2px solid #eeeeee ;
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
    transition: 0.5s ease;
  }

  .header:hover {
    box-shadow: 0px 20px 20px rgba(0, 0, 0,0.1);
  }

  .nav-right {
    padding: 10px 0px 0px 0px;
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
  }

  .nav-right  button{
    // line-height: 70px;
    display: block;
    height: 50px;
    width: 120px;
    margin: 0px 20px;
    border: 0px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.5s ease;
  }

  .nav-right  button:hover{
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

  .search {
    height: 50px;
    background-color: #f1f1f2;
    border-radius: 20px;
    width: 300px;
    overflow: hidden;
    display: flex;
    line-height: 50px;
  }

  .search .searchBtn {
    background-color: #f1f1f2;
    margin: 0px;
    padding: 8px;
    height: 200px;
    transition: 0.5s ease;
    cursor: pointer;
  }

  .search .searchBtn:hover {
    background-color: #e5e5e6;
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
  }

  .search .searchTxt input {
    height: 45px;
    margin-left: 5px;
    background-color: #f1f1f2;
    width: 220px;
    border: 0px;
    font-size: 25px;
    color:#2b292a;
  }
</style>
