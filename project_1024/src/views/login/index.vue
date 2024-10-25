<template>
  <div class="body">
    <div class="window">
      <div class="left-content">

        <p style="font-size: 40px; margin: 10px 10px 0px; color: #3460d8;">使用Gitgle</p>
        <p style="font-size: 40px; margin: 0px 10px 80px; color: #3460d8;">查看开发者信息</p>
        <div class="intro">
          <p>
            <van-icon name="user-circle-o"  color="#3460d8"/>
            注册您的昵称并设置您的个人资料
          </p>
          <p>
            <van-icon name="search"  color="#3460d8"/>
            精准查找你所需要了解的开发者
          </p>
          <p>
            <van-icon name="like-o"  color="#3460d8"/>
            关注您最喜欢的开发者信息
          </p>
          <p>
            <van-icon name="chart-trending-o"  color="#3460d8"/>
            图表数据分析更加详细
          </p>
        </div>

      </div>
      <div class="right-content">
        <p style="font-size: 60px; margin: 120px 0px 80px; color: #5a6373;">欢迎回来</p>
        <form action="">
          <div class="username">
            <van-icon name="user-circle-o"  size="35px" style="position:absolute; left: 10px; top: 10px;"/>
            <input type="text" placeholder="请输入用户名或邮箱" autocomplete="username">
          </div><br>
          <div class="username">
            <van-icon :name="showPass"  size="35px" style="position:absolute; left: 10px; top: 10px; cursor: pointer;" @click="changePass"/>
            <input :type="type" placeholder="请输入密码" autocomplete="current-password">
          </div><br>
          <div style="margin-top: 90px;"></div>
          <van-button type="primary" color="linear-gradient(315deg,#5098d5 0%,#3460d8 90%)" :round="true" class="login-button">登 录</van-button>
        </form>
        <div style="margin-top: 10px;"></div><br>
        <div class="bottom">没有账号？<a @click="$router.push('/register')">注册</a></div>
      </div>
      <!-- <div class="bgc-left"></div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'loginIndex',
  data () {
    return {
      showPass: 'closed-eye',
      type: 'password',
      mode: 'login'
    }
  },
  methods: {
    changePass () {
      if (this.showPass === 'eye-o') {
        this.showPass = 'closed-eye'
        this.type = 'password'
      } else {
        this.showPass = 'eye-o'
        this.type = 'text'
      }
    }
  }
}
</script>

<style lang="less" scoped>

  .body {
    width: 100%;
    min-height: 100vh;
    background-color: #9c9c9c;
    padding: 170px;
  }

  .window {
    width: 1500px;
    height: 800px;
    background-color: #f5f5f5;
    margin: auto;
    border-radius: 40px;
    text-align: center;
    padding: 1px;
    box-shadow: 100px 100px 100px rgba(0, 0, 0,0.1);
    overflow: hidden;
    display: flex;

  }

  .left-content {
    padding: 100px 30px 100px 80px;
    display: inline-block;
    flex: 1;
    background-color: #fff;
    // position: absolute;
    // left: 550px;
    // top: 280px;
  }

  .intro {
    text-align: left;
  }
  .intro p {
    font-size: 30px;
    margin: 0px 10px 60px;
    color: #5a6373;
  }

  .right-content {
    padding: 0px 60px;
    padding-bottom: 100px;
    display: inline-block;
    flex: 1;
    // position: absolute;
    // right: 600px;
    // top: 180px;
  }

  .username{
    width: 490px;
    height: 50px;
    margin: 10px auto;
    border: 0px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
    position:relative;
    transition: 0.5s ease;
  }

  .username:hover{
    box-shadow: 0px 10px 60px rgba(0, 0, 0,0.5);
  }

  .window input {
    width: 380px;
    height: 50px;
    font-size: 25px;
    border:0px;

    outline: none;
  }
  .bottom {
    font-weight: bolder;
    font-size: 20px;
  }

  .body a{
    color: #3460d8;
    cursor: pointer;
    transition: 0.5s ease;
  }

  .body a:hover{
    color: #5098d5;
    text-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);

  }

  .login-button {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
    width: 100px;
    font-size: 25px;
    height: 50px;
    transition: 0.5s ease;
  }

  .login-button:hover {
    width: 400px;
    box-shadow: 0px 10px 60px rgba(0, 0, 0,0.5);
    letter-spacing: 20px;
  }

  .bgc-left{

    width: 700px;
    height: 800px;
    background-color: #fff;
  }

</style>
