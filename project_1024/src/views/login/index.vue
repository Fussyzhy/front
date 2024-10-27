<template>
  <div class="body">

    <div class="window window-front">
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
        <div class="bottom">没有账号？<a @click="changeLogin">注册</a></div>
        <div class="bottom">先不登录<a @click="$router.push('/home')">再去逛逛</a></div>

      </div>
      <!-- <div class="bgc-left"></div> -->

    </div>

    <div class="window window-back">
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
        <p style="font-size: 60px; margin: 120px 0px 80px; color: #5a6373;">欢迎加入</p>
        <form action="">
          <div class="username">
            <van-icon name="user-circle-o"  size="35px" style="position:absolute; left: 10px; top: 10px;"/>
            <input type="text" placeholder="请输入邮箱" autocomplete="username" v-model="regdata.email">
          </div><br>
          <div class="username">
            <van-icon :name="showPass"  size="35px" style="position:absolute; left: 10px; top: 10px; cursor: pointer;" @click="changePass"/>
            <input v-model="regdata.firpass" :type="type" placeholder="请输入密码" autocomplete="current-password">
          </div><br>
          <div class="username">
            <van-icon :name="showPass"  size="35px" style="position:absolute; left: 10px; top: 10px; cursor: pointer;" @click="changePass"/>
            <input v-model="regdata.secpass" :type="type" placeholder="请再次输入密码" autocomplete="current-password">
          </div><br>
          <div class="username reg-code">
            <input v-model="regdata.code" :type="type" placeholder="请输入验证码" autocomplete="current-code" class="code-input">
            <button @click="sendcode">发送验证码</button>
          </div>
          <br>

          <div style="margin-top: 40px;"></div>
          <van-button type="primary" color="linear-gradient(315deg,#5098d5 0%,#3460d8 90%)" :round="true" class="login-button" @click="handlereg">注 册</van-button>
        </form>
        <div style="margin-top: 10px;"></div><br>
        <div class="bottom">已有账号？<a @click="changeLogin">登录</a></div>
      </div>

    </div>

  </div>
</template>

<script>
import { getReg, sendEmail } from '@/api/login'
export default {
  name: 'loginIndex',
  data () {
    return {
      showPass: 'closed-eye',
      type: 'password',
      mode: '',
      regdata: {
        email: '',
        firpass: '',
        secpass: '',
        code: ''
      }
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
    },
    changeLogin () {
      if (this.mode === 'login') {
        document.querySelector('.window-front').style.transform = 'rotateY(180deg)'
        document.querySelector('.window-back').style.transform = 'rotateY(360deg)'
        this.mode = 'register'
      } else {
        if (this.mode === 'register') {
          document.querySelector('.window-front').style.transform = 'rotateY(0deg)'
          document.querySelector('.window-back').style.transform = 'rotateY(180deg)'
          this.mode = 'login'
        }
      }
    },
    async handlereg () {
      if (this.regdata.firpass === this.regdata.secpass) {
        await getReg({
          email: this.regdata.email,
          password: this.regdata.firpass,
          code: this.regdata.code
        })
      } else {
        alert('两次输入的密码不一致')
        this.regdata.firpass = ''
        this.regdata.secpass = ''
      }
    },
    async sendcode () {
      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.regdata.email)) {
        await sendEmail(this.regdata.email)
      } else {
        alert('请输入正确的邮箱格式')
      }
    }
  },
  mounted () {
    this.mode = this.LoginId === 2 ? 'login' : 'register'
    console.log(this.mode)
    this.changeLogin()
  },
  computed: {
    LoginId () {
      return +this.$route.params.id
    }
  }
}
</script>

<style lang="less" scoped>

  .body {
    width: 100%;
    min-height: 100vh;
    background-color: #9c9c9c;
    padding: 70px;
  }

  .window {
    position: absolute;
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
    transition: 2s ease;
    backface-visibility: hidden;
    top: 0; left: 0; right: 0; bottom: 0;
  }
  // .window:hover {
  //   transform: rotateY(180deg);
  // }

  .window-front {

  }

  .window-back{
    transform: rotateY(180deg);
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

  .reg-code {
    width: 300px;
    height: 50px;
    display: flex;
    background-color: #ffffff;
    justify-content: center; /* 水平居中 */
    align-items: center;
    overflow: hidden;
    margin-bottom: 0px;
  }

  .reg-code input {
    width: 100px;
    height: 50px;
    font-size: 15px;
    border:100px;
    margin: 0px 65px 0px 0px;
  }

  .reg-code button {
    border: 0px;
    height: 30px;
    background-color: #ffffff;
    border-left:1px solid #9c9c9c ;
    padding: 0px 10px;
  }

  .username:hover{
    box-shadow: 0px 10px 60px rgba(0, 0, 0,0.5);
  }

  input {
    width: 380px;
    height: 50px;
    font-size: 25px;
    border:0px;

    outline: none;
  }
  .bottom {
    font-weight: bolder;
    font-size: 20px;
    margin-bottom: 20px;
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
