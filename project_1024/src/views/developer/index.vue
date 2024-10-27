<template>
  <div>

    <IndexHeader></IndexHeader>

    <div class="body">
      <div class="title">开发者</div>

      <div class="dropdown">
        <ul>
          <li>
            国籍<van-icon name="arrow-down" />
            <div class="dropdown-child">
              <a href="">傻逼</a>
              <a href="">傻逼</a>
              <a href="">傻逼</a>
            </div>
          </li>
          <li>领域<van-icon name="arrow-down" /></li>
        </ul>
      </div>

    </div>

    <IndexFooter></IndexFooter>

  </div>
</template>

<script>
import IndexFooter from '@/components/IndexFooter.vue'
import IndexHeader from '@/components/IndexHeader.vue'
export default {
  name: 'developerIndex',
  components: {
    IndexFooter,
    IndexHeader
  }

}
</script>

<style lang="less" scoped>
  .body {
    margin: 20px auto;
    width: 1170px;
    height: 10000px;
    background-color: #f1f1f2;
  }

  .body .title {
    margin: 50px 100px 35px;
    font-size: 40px;
    font-weight: bold;
    color: #132037;
  }

  .dropdown ul {
    display:flex;
  }

  .dropdown li {
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

  .dropdown li:hover {
    border: 2px solid #dadbe8;
  }

  .dropdown-child {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    transition: 0.5s ease;
    top: 43px;
  }

  .dropdown-child a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-child a:hover {
    background-color: #f1f1f1;
  }

  .dropdown li:hover .dropdown-child {
    display: block;
  }
</style>
