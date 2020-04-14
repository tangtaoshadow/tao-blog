/*
 * @Author: TangTao 杭州电子科技大学 管理学院(2016级) 工商管理
 * @OfficialWebsite: https://www.promiselee.cn/tao
 * @Email: tangtao2099@outlook.com
 * @GitHub: https://github.com/tangtaoshadow
 * @Gitee: https://gitee.com/tangtao_2099
 * @知乎: https://www.zhihu.com/people/tang-tao-24-36/activities
 * @Filename:
 * @Archive:
 * @Statement:
 * @Date: 2020-04-14 14:46:59
 * @Last Modified by: TangTao © 2019 www.promiselee.cn/tao
 * @Last Modified time: 2020-04-14 14:59:57
 */
module.exports = {
    // web 标题
    title: "TangTao ",
    // web
    description: "2020-4-14 14:03:08",
    // 配置web 的log小图标
    head: [
        [
            "link",
            { rel: "icon", href: "/assets/img/tao-design-logo.d3d934e2.png" },
        ],
    ],
    themeConfig: {
        logo: "/assets/img/tao-design-logo.d3d934e2.png",
        nav: [{
                text: "External",
                link: "https://google.com",
                target: "_self",
                rel: "",
            },
            {
                text: "TangTao",
                link: "/tangtao/2020",
                target: "_blank",
                rel: "",
            },
            { text: "Guide", link: "/guide/", target: "_blank" },
        ],
        // 显示所有页面的标题链接
        displayAllHeaders: true, // 默认值：false
        sidebar: [{
            title: "TangTao", // 必要的
            path: "/tangtao/2020", // 可选的, 应该是一个绝对路径
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1, // 可选的, 默认值是 1
            children: ["/"],
        }, ],
    },
};