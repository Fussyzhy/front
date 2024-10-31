<template>
  <div class="footer">

    <div class="footer-child left">
      <p><img src="@/assets/imgs/logo.png" alt=""></p>
      <p>Gitgle 是一款创新的开发者评估平台，旨在帮助用户全面了解全球开发者的技术能力和项目影响力。 通过分析 GitHub 上的开源项目数据，Gitgle 为每位开发者提供基于贡献度和项目重要性的 TalentRank 评分，用于衡量他们的技术实力。 同时，Gitgle 还能根据开发者的领域、技术栈和地理位置进行分类，让企业和团队更轻松地找到合适的技术人才。 Gitgle 的目标是建立一个透明、公正的开发者技能展示平台，为全球开发者创造更多机会，为企业提供可信赖的人才参考。</p>
    </div>

    <div class="footer-child mid">
      <span>指南</span>
      <ul>
        <li>首页</li>
        <li>领域</li>
        <li @click="$router.push('/developer')">开发者</li>
        <li>推荐</li>
        <li>项目</li>
        <li>社区</li>
      </ul>
    </div>

    <div class="footer-child right">
      <p>Gitgle<br><span>关于我们</span></p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .footer {
    margin: 100px 0px 0px 0px;
    width: 100%;
    // height: 350px;
    background-color: #fff;
    display: flex;
  }

  .footer .footer-child {
    // background-color: #ffffff;
    margin: 20px auto  40px;
    width: 25%;
    font-size: 15px;
    // text-align: center;
    line-height: 30px;
    color: #132037;
  }

  .footer .footer-child ul {
    margin-top:10px ;
    display: grid;
    grid-template-columns: 1fr 1fr; /* 创建三列，每列占1份宽度 */
    grid-template-rows: auto; /* 行高自动适应内容 */
    gap: 10px;
    justify-items: center; /* 水平居中对齐 */
  }

  .footer .footer-child ul li {
    width: 50%;
    font-size: 20px;
    background-color: #f0effb;
    text-align: center;
    margin: 0px 0px;
    padding: 5px 0px;
    border-radius: 10px;
    transition: 1s ease;
    cursor: pointer;
  }

  .footer .footer-child ul li:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0,0.1);
    transform: rotateX(10deg) rotateY(10deg);
    color: #3460d8;
  }

  .footer-child p img {
    width: 160px;
    margin: 20px;
  }

  .footer .mid {
    text-align: center;
    margin-top: 60px;
  }

  .footer .mid span {
    font-size: 30px;
    margin: 30px 0px;
  }

  .footer .right {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    flex-wrap: wrap; /* 允许换行 */
  }

  .footer .right p {
    flex: 1 1 100px; /* 每个项目至少 100px 宽，允许扩展 */
    margin: 10px; /* 设置每个项目的外边距 */
    // background-color: #3498db; /* 背景颜色 */
    color: #132037; /* 文字颜色 */
    padding: 20px; /* 内边距 */
    text-align: center; /* 文本居中 */
    font-size: 20px;
    line-height: 80px;

  }

  .footer .right p span {
    transition: 1s ease;
    cursor: pointer;
  }

  .footer .right p span:hover {
    color: #3460d8;
  }
</style>
