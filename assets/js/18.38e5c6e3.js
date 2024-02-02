(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{432:function(s,a,e){"use strict";e.r(a);var t=e(62),l=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis数据库"}},[s._v("#")]),s._v(" Redis数据库")]),s._v(" "),e("blockquote",[e("p",[s._v("NoSQL 非关系型的数据库(关系型数据库：数据结构是一种有行有列的数据库)")]),s._v(" "),e("p",[s._v("NoSQL 数据库可以解决高并发，高可用，高可扩展，大数据存储")]),s._v(" "),e("p",[s._v("NoSQL 与关系型数据库相辅相成，并非替代品")])]),s._v(" "),e("h2",{attrs:{id:"_1-基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础"}},[s._v("#")]),s._v(" 1. 基础")]),s._v(" "),e("h3",{attrs:{id:"_1-类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-类型"}},[s._v("#")]),s._v(" 1. 类型")]),s._v(" "),e("ol",[e("li",[s._v("健值存储数据库(key-value): Redis、Voldmort")]),s._v(" "),e("li",[s._v("列存储数据库：HBase、Rjak")]),s._v(" "),e("li",[s._v("文档型数据库: MongoDB、CouchDB")])]),s._v(" "),e("h3",{attrs:{id:"_2-数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据类型"}},[s._v("#")]),s._v(" 2. 数据类型")]),s._v(" "),e("ol",[e("li",[s._v("string")]),s._v(" "),e("li",[s._v("hash")]),s._v(" "),e("li",[s._v("list")]),s._v(" "),e("li",[s._v("set")]),s._v(" "),e("li",[s._v("zset")])]),s._v(" "),e("h3",{attrs:{id:"_3-常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-常用命令"}},[s._v("#")]),s._v(" 3. 常用命令")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("获取所有key")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("keys pattern\n")])])])]),s._v(" "),e("li",[e("p",[s._v("删除")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("del key\n")])])])]),s._v(" "),e("li",[e("p",[s._v("判断是否存在")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("exists key\n")])])])]),s._v(" "),e("li",[e("p",[s._v("设置过期时间")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("expire key seconds\nTTL key "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查剩余时间")]),s._v("\nPERSIST key "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 永久存在")]),s._v("\npexpire key milliseconds "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置毫秒")]),s._v("\n")])])])]),s._v(" "),e("li",[e("p",[s._v("重命名")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rename")]),s._v(" oldkey newkey\n")])])])])]),s._v(" "),e("h3",{attrs:{id:"_4-发布订阅模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-发布订阅模式"}},[s._v("#")]),s._v(" 4. 发布订阅模式")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("订阅消息")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("subscribe key\n")])])])]),s._v(" "),e("li",[e("p",[s._v("发布消息")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("publish kkb "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxx"')]),s._v("\n")])])])])]),s._v(" "),e("h3",{attrs:{id:"_5-事务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-事务"}},[s._v("#")]),s._v(" 5. 事务")]),s._v(" "),e("ol",[e("li",[s._v("通过MULTI（开启事务队列）、EXEC（执行事务）、DISCARD(清楚事务队列)、WATCH(乐观锁)、UNWATCH(取消)命令实现")])]),s._v(" "),e("h2",{attrs:{id:"_2-内存模型与内存优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-内存模型与内存优化"}},[s._v("#")]),s._v(" 2. 内存模型与内存优化")]),s._v(" "),e("h3",{attrs:{id:"应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),e("ol",[e("li",[s._v("内存数据库")]),s._v(" "),e("li",[s._v("缓存服务器")]),s._v(" "),e("li",[s._v("解决分布式集群架构中session分离问题(session共享)")]),s._v(" "),e("li",[s._v("任务队列")]),s._v(" "),e("li",[s._v("分布式锁")]),s._v(" "),e("li",[s._v("发布订阅")]),s._v(" "),e("li",[s._v("应用排行榜")]),s._v(" "),e("li",[s._v("网站访问统计")]),s._v(" "),e("li",[s._v("数据过期处理")])])])}),[],!1,null,null,null);a.default=l.exports}}]);