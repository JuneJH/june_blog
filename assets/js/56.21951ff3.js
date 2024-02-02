(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{470:function(_,v,t){"use strict";t.r(v);var a=t(62),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"nginx配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置"}},[_._v("#")]),_._v(" Nginx配置")]),_._v(" "),t("blockquote",[t("p",[_._v("高并发: 单核处理器,同时存在多个进程处于就绪态只有一个处于运行态,"),t("code",[_._v("Nginx")]),_._v("利用多进程,多线程,异步处理并发")]),_._v(" "),t("p",[_._v("低消耗:")]),_._v(" "),t("p",[_._v("热部署: 平滑重启")]),_._v(" "),t("p",[_._v("高可用: 一个主进程,多个worker进程")]),_._v(" "),t("p",[_._v("高扩展: C语言扩展，LUA脚本扩展")])]),_._v(" "),t("h2",{attrs:{id:"_1-反向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-反向代理"}},[_._v("#")]),_._v(" 1. 反向代理")]),_._v(" "),t("blockquote",[t("p",[_._v("针对服务器")])]),_._v(" "),t("ul",[t("li",[_._v("分布式路由")]),_._v(" "),t("li",[_._v("负载均衡")]),_._v(" "),t("li",[_._v("动态分离")]),_._v(" "),t("li",[_._v("缓存")])]),_._v(" "),t("h2",{attrs:{id:"_2-正向代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-正向代理"}},[_._v("#")]),_._v(" 2. 正向代理")]),_._v(" "),t("blockquote",[t("p",[_._v("针对客户端")])]),_._v(" "),t("ul",[t("li",[_._v("隐藏服务端")]),_._v(" "),t("li",[_._v("提速和科学上网")]),_._v(" "),t("li",[_._v("缓存管理")]),_._v(" "),t("li",[_._v("授权 (防火墙)")])]),_._v(" "),t("h2",{attrs:{id:"_3-零拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-零拷贝"}},[_._v("#")]),_._v(" 3. 零拷贝")]),_._v(" "),t("ul",[t("li",[_._v("传统零拷贝")]),_._v(" "),t("li",[_._v("DMA")]),_._v(" "),t("li",[_._v("MMAP")])]),_._v(" "),t("h2",{attrs:{id:"_4-多路复用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-多路复用"}},[_._v("#")]),_._v(" 4. 多路复用")]),_._v(" "),t("ol",[t("li",[t("p",[_._v("select")]),_._v(" "),t("ul",[t("li",[_._v("轮询")]),_._v(" "),t("li",[_._v("数组队列")]),_._v(" "),t("li",[_._v("复制")])])]),_._v(" "),t("li",[t("p",[_._v("poll")]),_._v(" "),t("ul",[t("li",[_._v("轮询")]),_._v(" "),t("li",[_._v("链表队列")]),_._v(" "),t("li",[_._v("复制")])])]),_._v(" "),t("li",[t("p",[_._v("epoll")]),_._v(" "),t("ul",[t("li",[_._v("回调")]),_._v(" "),t("li",[_._v("链表队列")]),_._v(" "),t("li",[_._v("mmap零拷贝")])])])]),_._v(" "),t("h2",{attrs:{id:"_5-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用命令"}},[_._v("#")]),_._v(" 5. 常用命令")]),_._v(" "),t("blockquote",[t("p",[t("code",[_._v("nginx")])])]),_._v(" "),t("ol",[t("li",[_._v("参数\n"),t("ul",[t("li",[t("code",[_._v("-V")]),_._v(": 详细版本")]),_._v(" "),t("li",[t("code",[_._v("-v")]),_._v(": 版本")]),_._v(" "),t("li",[t("code",[_._v("-t")]),_._v(": 测试配置文件")]),_._v(" "),t("li",[t("code",[_._v("-T")]),_._v(": 测试详细")]),_._v(" "),t("li",[t("code",[_._v("-q")]),_._v(": 显示错误信息,可搭配"),t("code",[_._v("-t")])]),_._v(" "),t("li",[t("code",[_._v("-s")]),_._v(": 向主进程发生消息"),t("code",[_._v("reload")]),_._v("(热部署),"),t("code",[_._v("stop")]),_._v(","),t("code",[_._v("quit")]),_._v(",`reopen``")]),_._v(" "),t("li",[t("code",[_._v("-p")]),_._v(": 设置配置路径")]),_._v(" "),t("li",[t("code",[_._v("-c")]),_._v(": 设置配置文件名字")]),_._v(" "),t("li",[t("code",[_._v("-g")]),_._v(": 设置一个全局命令")])])])]),_._v(" "),t("h2",{attrs:{id:"_6-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-配置"}},[_._v("#")]),_._v(" 6. 配置")]),_._v(" "),t("h3",{attrs:{id:"_1-全局模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局模块"}},[_._v("#")]),_._v(" 1. 全局模块")]),_._v(" "),t("blockquote",[t("p",[_._v("配置进程相关")])]),_._v(" "),t("ol",[t("li",[t("p",[_._v("配置多个"),t("code",[_._v("worker")]),_._v("进程")]),_._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[_._v("worker-processes:2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(";")]),_._v(" // 一般设置为cpu内核数量或者内核数量的整数倍,可以取auto\n")])])])])]),_._v(" "),t("h3",{attrs:{id:"_2-event模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-event模块"}},[_._v("#")]),_._v(" 2. Event模块")]),_._v(" "),t("blockquote",[t("p",[_._v("配置线程相关")])]),_._v(" "),t("h3",{attrs:{id:"_3-http模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-http模块"}},[_._v("#")]),_._v(" 3. Http模块")]),_._v(" "),t("blockquote",[t("p",[_._v("配置处理Http请求")])]),_._v(" "),t("ol",[t("li",[_._v("全局配置")]),_._v(" "),t("li",[t("code",[_._v("Server")]),_._v("下配置虚拟主机")])]),_._v(" "),t("h3",{attrs:{id:"_4-https-模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-https-模块"}},[_._v("#")]),_._v(" 4. HTTPS 模块")])])}),[],!1,null,null,null);v.default=e.exports}}]);