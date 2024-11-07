<template>
  <div>

    <div class="changelogin">
      <p>换绑Github用户</p>
      <input placeholder="请输入换绑的Github用户名" type="text" v-model="changegit"><br>
      <button @click="handlelogin">确认换绑</button>
    </div>

    <div class="changepass">
      <p>修改密码</p>
      <input placeholder="输入旧密码" type="text" v-model="oldpass" @blur="handleBlur('oldpass')"><br>
      <span class="erro">密码应包含大写字母，小写字母，和数字</span><br>
      <input placeholder="输入新密码" type="text" v-model="newpass" @blur="handleBlur('newpass')"><br>
      <span class="erro">密码应包含大写字母，小写字母，和数字</span><br>
      <input placeholder="确认新密码" type="text" v-model="newrepass" @blur="handleBlur('repass')"><br>
      <span class="erro">两次密码输入不一致</span><br>
      <button @click="handlepass">确认修改</button>
    </div>

    <br>

    <div class="exit">
      <button @click="handleExit">退出登录</button>
    </div>

  </div>
</template>

<script>
import { changePassword, getUserinfomation, userexit } from '@/api/login'
import { changegitlogin } from '@/api/user'

export default {
  name: 'EditInfo',
  data () {
    return {
      changegit: '',
      oldpass: '',
      newpass: '',
      newrepass: '',
      reg: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/,
      personData: []
    }
  },
  methods: {
    handleBlur (key) {
      const erro = document.querySelectorAll('.erro')
      if (key === 'oldpass') {
        if (!this.reg.test(this.oldpass) && this.oldpass !== '') {
          erro[0].style.opacity = 1
        } else {
          erro[0].style.opacity = 0
        }
      }
      if (key === 'newpass') {
        if (!this.reg.test(this.newpass) && this.newpass !== '') {
          erro[1].style.opacity = 1
        } else {
          erro[1].style.opacity = 0
        }
      }
      if (key === 'repass') {
        if (this.newrepass !== this.newpass && this.newrepass !== '' && this.newpass !== '') {
          erro[2].style.opacity = 1
        } else {
          erro[2].style.opacity = 0
        }
      }
    },
    async handlelogin () {
      if (this.changegit !== '') {
        const res = await changegitlogin(this.changegit, this.personData.email, this.personData.email)
        console.log(res)
        if (res.code === 200) {
          this.$router.push('/perhome')
          location.reload()
        }
      }
    },
    async handlepass () {
      if (this.newpass === this.newrepass && this.reg.test(this.newpass) && this.reg.test(this.oldpass)) {
        if (this.oldpass !== '' && this.newpass !== '' && this.newrepass !== '') {
          const res = await changePassword(this.oldpass, this.newpass)
          console.log(res)
          if (res.code === 200) {
            this.handleExit()
            await localStorage.removeItem('Gitgle_UserInfo')
            this.$router.push('/')
            location.reload()
          }
        }
      }
    },
    async handleExit () {
      await userexit()
      await localStorage.removeItem('Gitgle_UserInfo')

      this.$router.push('/home')
      location.reload()
    }
  },
  async created () {
    const res = await getUserinfomation()
    console.log(res)
    this.personData = res.data
  }
}
</script>

<style lang="less" scoped>

  .changelogin {
    padding-top: 1px;
    background-color: #fff;
    text-align: center;
    width: 800px;
    margin: 80px auto;
    height: 350px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  }

  .changelogin p {
    margin: 50px;
    font-size: 40px;
    color: #7a7b8c;
  }

  .changelogin input {
    height: 40px;
    width: 300px;
    margin: 0px 0px 50px;
    padding: 0px 20px;
    border-radius: 20px;
  }

  .changelogin button {
    height: 40px;
    width: 200px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    color: #fff;
    transition: 0.5s ease;
  }

  .changelogin button:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .changepass {
    padding-top: 1px;
    background-color: #fff;
    text-align: center;
    width: 800px;
    margin: auto;
    height: 550px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .changepass span{
    color: red;
  }

  .changepass p {
    margin: 50px 0px 0px;
    font-size: 40px;
    color: #7a7b8c;
  }

  .changepass input {
    height: 40px;
    width: 300px;
    margin: 40px 0px 0px;
    padding: 0px 20px;
    border-radius: 20px;
  }

  .changepass button {
    margin: 40px 0px 0px;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    color: #fff;
    transition: 0.5s ease;
  }

  .changepass button:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .exit {
    padding-top: 1px;
    // background-color: #fff;
    text-align: center;
    width: 800px;
    margin: 80px auto;
    border-radius: 30px;
  }

  .exit button {
    height: 60px;
    width: 400px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    transition: 0.5s ease;
  }

  .exit button:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .erro {
    opacity: 0;
  }

</style>
