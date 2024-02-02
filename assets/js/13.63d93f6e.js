(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{426:function(t,a,s){"use strict";s.r(a);var n=s(62),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"正则表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),s("blockquote",[s("p",[t._v("正则表达式用于校验格式,拆分和替换,查找")])]),t._v(" "),s("h3",{attrs:{id:"_1-表示-字符集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-表示-字符集"}},[t._v("#")]),t._v(" 1. 表示 字符集")]),t._v(" "),s("ul",[s("li",[t._v("[abc]=>表示"),s("code",[t._v("abc")]),t._v("三个字符中的一个")]),t._v(" "),s("li",[t._v("[^abc]=>表示不是"),s("code",[t._v("abc")]),t._v("三个字符中的")]),t._v(" "),s("li",[s("code",[t._v("/d")]),t._v(" === [0-9]")]),t._v(" "),s("li",[s("code",[t._v("/w")]),t._v("===[0-9A-Za-z]")])]),t._v(" "),s("h3",{attrs:{id:"_2-表示-出现次数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-表示-出现次数"}},[t._v("#")]),t._v(" 2. 表示 出现次数")]),t._v(" "),s("ul",[s("li",[t._v("?  出现0-1次")]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v(" 出现0-n次")]),t._v(" "),s("li",[s("code",[t._v("+")]),t._v(" 出现1-n次")]),t._v(" "),s("li",[s("code",[t._v("{n}")]),t._v(" 指定出现n次")]),t._v(" "),s("li",[s("code",[t._v("{n,}")]),t._v(" 至少n次包含n次以上")]),t._v(" "),s("li",[s("code",[t._v("{n,m}")]),t._v(" 出现次数在[n-m]的区间内")])]),t._v(" "),s("h3",{attrs:{id:"_3-通配符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-通配符"}},[t._v("#")]),t._v(" 3. 通配符")]),t._v(" "),s("ul",[s("li",[s("code",[t._v(".")]),t._v(" 表示某个字符")])]),t._v(" "),s("h3",{attrs:{id:"_4-条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-条件"}},[t._v("#")]),t._v(" 4. 条件")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("&&")])]),t._v(" "),s("li",[s("code",[t._v("|")])])]),t._v(" "),s("h3",{attrs:{id:"_5-java中查找"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-java中查找"}},[t._v("#")]),t._v(" 5. Java中查找")]),t._v(" "),s("ol",[s("li",[t._v("利用"),s("code",[t._v("Pattern")]),t._v("创建正则规则")]),t._v(" "),s("li",[t._v("利用"),s("code",[t._v("Matcher")]),t._v("对象进行匹配")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" pattern "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[gp][eo][ts][t]?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" methods "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"getsdlfjpostsklfj;lgetasdfjl;postsdl;kfjl;get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" matcher "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("matcher"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);