// .vuepress/config.js
module.exports = {
  plugins: [
    [
      "vuepress-plugin-yuque",
      {
        title: "Songlairui 的小说阅读记录",
        repoUrl: "https://www.yuque.com/songlairui/novel",
        home: {
          actionText: "Getting Started →",
          actionLink: "/readme/",
          footer: `Copyright © Songlairui`,
          heroImage:
            "https://songlairui-asset.oss-cn-shenzhen.aliyuncs.com/hero-reading.jpg",
          features: [
            {
              title: "hero image 来源",
              details: "https://dribbble.com/shots/6645128-Reading"
            }
          ]
        },
        html: true
      }
    ]
  ]
};
