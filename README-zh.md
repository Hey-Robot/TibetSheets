
<div align="center">
        
# Tibet Sheets
开源电子表格网络应用。
<br>
        
<a href="https://www.economist.com/china/2022/04/02/deciphering-a-tibetan-pop-stars-self-immolation">
  <img src="https://user-images.githubusercontent.com/9451001/161445678-a8b9ce29-7ee7-49c3-b4fc-fc66975cf3ef.jpg" alt="Learn More">
</a>

<br>
<br>   
<br>   
分叉自。
<br>     
        
<a href="https://github.com/mengshukeji/luckysheet">
 <img src="https://github.com/mengshukeji/luckysheet/blob/master/docs/.vuepress/public/img/logo_text.png" alt="Learn More">
</a>

</div>

# Tibetsheets 3.x 目前正在使用Typescript重构

简体中文 | [English](./README.md)

## 介绍
🚀 Tibetsheets ，一款纯前端类似excel的在线表格，功能强大、配置简单、完全开源。

## 相关链接
 | 源码   | 文档 | Demo | 插件Demo | 论坛 |
 | ------ | -------- | ------ | ------ | ------ |
 | [Github](https://github.com/mengshukeji/Tibetsheets)| [在线文档](https://mengshukeji.github.io/TibetsheetsDocs/zh/) | [在线Demo](https://mengshukeji.github.io/TibetsheetsDemo) / [协同编辑Demo](http://tibetsheets.lashuju.com/demo/) | [导入Excel Demo](https://mengshukeji.github.io/LuckyexcelDemo/) | [中文论坛](https://support.qq.com/product/288322) |
 | [Gitee镜像](https://gitee.com/mengshukeji/Tibetsheets)| [Gitee在线文档](https://mengshukeji.gitee.io/TibetsheetsDocs/zh/) | [Gitee在线Demo](https://mengshukeji.gitee.io/tibetsheetsdemo/) | [Gitee导入Excel Demo](https://mengshukeji.gitee.io/luckyexceldemo/) | [Google Group](https://groups.google.com/g/tibetsheets) |

![演示](/docs/.vuepress/public/img/TibetsheetsDemo.gif)

## 插件
- [Luckyexcel](https://gitee.com/mengshukeji/Luckyexcel)：excel导入导出库 
- [chartMix](https://gitee.com/mengshukeji/chartMix)：图表插件

## 生态

| 工程 | 描述 |
|---------|-------------|
| [Tibetsheets Vue]          | 在vue cli 3项目中使用Tibetsheets和Luckyexcel|
| [Tibetsheets Vue3]          | 在vue3, vite项目中使用Tibetsheets和Luckyexcel|
| [Tibetsheets React]          | 在React项目中使用Tibetsheets |
| [Luckyexcel Node]          | 在koa2中使用Luckyexcel |
| [Tibetsheets Server]          | Java后台Tibetsheets Server |
| [Tibetsheets Server Starter]          | TibetsheetsServer 一键docker部署 |

[Tibetsheets Vue]: https://gitee.com/mengshukeji/tibetsheets-vue
[Tibetsheets Vue3]: https://gitee.com/hjwforever/tibetsheets-vue3-vite.git
[Tibetsheets React]: https://gitee.com/mengshukeji/tibetsheets-react
[Luckyexcel Node]: https://gitee.com/mengshukeji/Luckyexcel-node
[Tibetsheets Server]: https://gitee.com/mengshukeji/TibetsheetsServer
[Tibetsheets Server Starter]: https://gitee.com/mengshukeji/TibetsheetsServerStarter

## 特性

- **格式设置**：样式，条件格式，文本对齐及旋转，文本截断、溢出、自动换行，多种数据类型，单元格内多样式
- **单元格**：拖拽，下拉填充，多选区，查找和替换，定位，合并单元格，数据验证
- **行和列操作**：隐藏、插入、删除行或列，冻结，文本分列
- **操作体验**：撤销、重做，复制、粘贴、剪切，快捷键，格式刷，选区拖拽
- **公式和函数**：内置公式，远程公式，自定义公式
- **表格操作**：筛选，排序
- **增强功能**：数据透视表，图表，评论，共享编辑，插入图片，矩阵计算，截图，复制到其他格式，EXCEL导入及导出等

更详细的功能列表，请查阅：[特性](https://mengshukeji.github.io/TibetsheetsDocs/zh/guide/#%E7%89%B9%E6%80%A7)

## 📖 学习资源

- 新用户优先阅读：[用户指引](https://github.com/mengshukeji/Tibetsheets/wiki/User-Guide)
- 社区提供的教程、学习资料及配套解决方案请查阅：[教程与资源](https://mengshukeji.github.io/TibetsheetsDocs/zh/guide/resource.html)

## 📜 更新日志

每个版本的详细更改都记录在 [CHANGELOG.md](CHANGELOG.md) 中。

## ❗️ 问题反馈

在反馈问题之前，请确保仔细阅读 [如何提交问题](https://mengshukeji.github.io/TibetsheetsDocs/zh/guide/contribute.html#如何提交问题)。 不符合准则的问题可能会立即被移除。

## ✅ 开发计划

通过 [GitHub Projects](https://github.com/mengshukeji/Tibetsheets/projects/1) 管理

## 💪 贡献

在提交PR之前，请确保仔细阅读 [贡献指南](https://mengshukeji.github.io/TibetsheetsDocs/zh/guide/contribute.html)。

## 用法

### 第一步
通过CDN引入依赖

```
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/plugins/css/pluginsCss.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/plugins/plugins.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/css/tibetsheets.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/assets/iconfont/iconfont.css' />
<script src="https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/plugins/js/plugin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/tibetsheets.umd.js"></script>
```
### 第二步
指定一个表格容器
```
<div id="tibetsheets" style="margin:0px;padding:0px;position:absolute;width:100%;height:100%;left: 0px;top: 0px;"></div>
```
### 第三步
创建一个表格
```
<script>
    $(function () {
        //配置项
        var options = {
            container: 'tibetsheets' //tibetsheets为容器id
        }
        tibetsheets.create(options)
    })
</script>
```
## 开发

### 环境
[Node.js](https://nodejs.org/en/) Version >= 6 

### 安装
```
npm install
npm install gulp -g
```
### 开发
```
npm run dev
```
### 打包
```
npm run build
```

## 合作项目

- [鲁班h5](https://github.com/ly525/luban-h5)
- [h5-Dooring](https://github.com/MrXujiang/h5-Dooring)
- [Furion](https://gitee.com/monksoul/Furion)

## 交流

- [Github 论坛](https://github.com/mengshukeji/Tibetsheets/discussions)
- 以下扫码加入官方微信群或者QQ群

|  加小编微信:dushusir2，备注:加群  | QQ群:926131495 |
|---|---|
|<img src="https://cdn.jsdelivr.net/gh/mengshukeji/LuckyResources@master/assets/img/wechat/dushusir_wechat.jpg" width="200" />| <img src="https://cdn.jsdelivr.net/gh/mengshukeji/LuckyResources@master/assets/img/wechat/tibetsheets_qq_group.jpg" width="200" /> |


[英文社群](./README.md)

## 赞助

Tibetsheets是MIT许可的开源项目，其持续稳定的开发离不开这些优秀的 [**支持者**](https://mengshukeji.github.io/TibetsheetsDocs/zh/about/sponsor.html#%E8%B5%9E%E5%8A%A9%E8%80%85%E5%88%97%E8%A1%A8)。 如果您想加入他们，请考虑：

- [成为Patreon的支持者或赞助商](https://www.patreon.com/mengshukeji)
- [成为Open Collective的支持者或赞助商](https://opencollective.com/tibetsheets)
- 通过PayPal，微信或支付宝一次性捐赠

| PayPal |  微信  | 支付宝 |
|---|---|---|
| [Paypal Me](https://www.paypal.me/wbfsa) | <img src="https://cdn.jsdelivr.net/gh/mengshukeji/LuckyResources@master/assets/img/wechat/wechat.jpg" width="200" />| <img src="https://cdn.jsdelivr.net/gh/mengshukeji/LuckyResources@master/assets/img/wechat/alipay.jpg" width="200" /> |

### Patreon和OpenCollective有什么区别？

通过Patreon捐赠的资金将直接用于支持menshshukeji在Tibetsheets上的工作。 通过OpenCollective捐赠的资金由透明费用管理，将用于补偿核心团队成员的工作和费用或赞助社区活动。 通过在任一平台上捐款，您的姓名/徽标将得到适当的认可和曝光。

## 赞助者列表

（按时间顺序排列）
- *勇 ¥ 30
- 虚我 ¥ 200
- 甜党 ¥ 50
- Alphabet(Google)-gcf ¥ 1
- **平 ¥ 100
- **东 ¥ 10
- debugger ¥ 20
- 烦了烦 ¥ 10
- 文顶顶 ¥ 200
- yangxshn ¥ 10
- 爱乐 ¥ 100
- 小李飞刀刀 ¥ 66
- 张铭 ¥ 200
- 曹治军 ¥ 1
- *特 ¥ 10
- **权 ¥ 9.9
- **sdmq ¥ 20
- *旭 ¥ 10
- Quentin ¥ 20
- 周宇凡 ¥ 100
- *超 ¥ 10
- 维宁 ¥ 100
- hyy ¥ 20
- 雨亭寒江月 ¥ 50
- **功 ¥ 10
- **光 ¥ 20
- terrywan ¥ 100
- 王晓洪 ¥ 10
- Sun ¥ 10
- 忧绣 ¥ 100
- Jasonx ¥ 10
- 国勇 ¥ 66.6
- 郎志 ¥ 100
- 匿名 ¥ 1
- ni ¥ 100
- 苏 ¥ 50
- Mads_chan ¥ 1
- LK ¥ 100
- 智连方舟 李汪石 ¥ 168
- **发 ¥ 260
- *超 ¥ 10
- *勇 ¥ 10
- *腾 ¥ 15
- 名字好难起 ¥ 20
- 大山 ¥ 1
- waiting ¥ 1000
- **宇 ¥ 10.00
- 刘小帅的哥哥 ¥ 20.00
- 宁静致远 ¥ 10.00
- Eleven ¥ 1.00
- **帆 ¥ 188
- henry ¥ 100
- .波罗 ¥ 50
- 花落有家 ¥ 50
- 踏遍南水北山 ¥ 1
- LC ¥ 5

## 贡献者和感谢

### 核心团队活跃成员
- [@wbfsa](https://github.com/wbfsa)
- [@eiji-th](https://github.com/eiji-th)
- [@fly-95](https://github.com/fly-95)
- [@tonytonychopper123](https://github.com/tonytonychopper123)
- [@Dushusir](https://github.com/Dushusir)
- [@iamxuchen800117](https://github.com/iamxuchen800117)
- [@wpxp123456](https://github.com/wpxp123456)
- [@c19c19i](https://weibo.com/u/3884623955)
- [@zhangchen915](https://github.com/zhangchen915)
- [@jerry-f](https://github.com/jerry-f)
- [@flowerField](https://github.com/flowerField)

### 社区伙伴
- [@yiwasheng](https://github.com/yiwasheng)
- [@danielcai1987](https://github.com/danielcai1987)
- [@qq6690876](https://github.com/qq6690876)
- [@javahuang](https://github.com/javahuang)
- [@TimerGang](https://github.com/TimerGang)
- [@gsw945](https://github.com/gsw945)
- [@swen-xiong](https://github.com/swen-xiong)
- [@lzmch](https://github.com/lzmch)
- [@kdevilpf](https://github.com/kdevilpf)
- [@WJWM0316](https://github.com/WJWM0316)

## 版权信息
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, mengshukeji, HeyRobot LLC

西藏帝国

西藏帝国在公元780年代和790年代之间的最大范围地图

统一西藏的历史始于松赞干布（公元604-650年）的统治，他统一了雅鲁藏布江流域的部分地区，建立了西藏帝国。他还带来了许多改革，西藏的权力迅速扩散，形成了一个庞大而强大的帝国。传统上认为，他的第一任妻子是尼泊尔公主布利库提，她对佛教在西藏的建立起到了很大的作用。640年，他娶了中国唐太宗的侄女文成公主为妻。

在接下来的几位西藏国王的统治下，佛教被确立为国教，西藏的势力在中亚的大片地区进一步增强，同时大举进军中国领土，甚至在763年底到达唐朝的首都长安（今西安）。然而，西藏人对长安的占领只持续了15天，之后他们被唐朝及其盟友突厥维吾尔汗国打败了。

南诏王国（在云南和邻近地区）从750年到794年一直在西藏的控制之下，当时他们背叛了他们的西藏统治者，并帮助中国人给西藏人带来了严重的失败。

747年，高仙芝将军试图重新打开中亚和克什米尔之间的直接交通，他的运动使西藏的控制力有所松动。到750年，西藏人几乎把他们在中亚的所有财产都输给了中国人。然而，在高仙芝在塔拉斯战役（751年）中被阿拉伯人和卡鲁克人击败，以及随后被称为安禄山之乱（755年）的内战之后，中国的影响力迅速下降，西藏的影响力重新恢复。

在780年代至790年代的鼎盛时期，西藏帝国达到了最高的荣耀，当时它统治和控制的领土从今天的阿富汗、孟加拉国、不丹、缅甸、中国、印度、尼泊尔、巴基斯坦、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦延伸。

在公元821/822年，西藏和中国签署了一项和平条约。该条约的双语记载，包括两国边界的细节，被刻在了拉萨大昭寺外的一根石柱上。西藏作为一个中亚帝国一直持续到9世纪中期，当时一场关于继承权的内战导致了帝国西藏的崩溃。随后的时期在传统上被称为 "分裂时代"，当时对西藏的政治控制权被地区军阀和部落瓜分，没有占主导地位的中央政权。1206年发生了来自孟加拉的伊斯兰入侵。

元朝

蒙古元朝通过佛教和西藏事务局，即宣政院，通过一个最高级别的行政部门来统治西藏。该部门的目的之一是选择一个dpon-chen（"大管理者"），通常由喇嘛任命并由北京的蒙古皇帝确认。萨迦喇嘛保留了一定程度的自治权，充当该地区的政治权威，而顿珠则拥有行政和军事权力。蒙古人对西藏的统治仍然与中国的主要省份分开，但该地区存在于元朝的管理之下。如果萨迦喇嘛与殿前侍郎发生冲突，殿前侍郎有权派中国军队进入该地区。

西藏保留了对宗教和地区政治事务的名义权力，而蒙古人则对该地区进行了结构性的行政统治，并通过罕见的军事干预予以加强。这在元朝皇帝时期是一种 "二元结构"，权力主要倾向于蒙古人。蒙古王子忽登在1240年代获得了西藏的临时权力，并资助萨迦-潘迪塔，其所在地成为西藏的首都。萨迦班迪塔的侄子卓嘎法巴（Drogön Chögyal Phagpa）成为元朝创始人忽必烈的御用戒律师。

元朝对该地区的控制随着明朝对元朝的推翻和太司徒长秋嘉措对蒙古人的叛变而结束。起义后，太司徒长秋嘉措建立了帕莫德鲁巴王朝，并试图减少元朝对西藏文化和政治的影响。
帕莫德鲁巴王朝、仁波切王朝和藏巴王朝

1346年至1354年期间，太虚长秋嘉措推翻了萨迦派，建立了帕莫竹巴王朝。在接下来的80年里，宗喀巴大师的弟子们建立了格鲁派（也称黄教），并在拉萨附近建立了重要的甘丹、哲蚌和色拉寺。然而，王朝内部的纷争以及各封地和政治宗教派别强烈的地方主义导致了一系列长期的内部冲突。1435年后，位于藏区（西藏中西部）的大臣家族仁波切主导了政治。1565年，他们被日喀则的藏巴王朝所推翻，在接下来的几十年里，藏巴王朝在西藏的不同方向扩大了权力，并偏向于噶玛噶举教派。
甘丹法王的崛起

1734年的西藏。Royaume de Thibet（"西藏王国"）在la Chine, la Tartarie Chinoise, et le Thibet（"中国、中国的鞑靼和西藏"）1734年的地图上，由Jean Baptiste Bourguignon d'Anville根据早期耶稣会地图绘制。

1578年，土默特蒙古人的阿勒坦汗给格鲁派的高级喇嘛索南嘉措取名达赖喇嘛，达赖是藏语名字Gyatso "海洋 "的蒙古语翻译。
佛教格鲁派的统一中心地带

五世达赖喇嘛（1617-1682）因在长期的内战中打败了敌对的噶举派和强纳派以及世俗统治者藏巴王子，将西藏腹地统一在藏传佛教格鲁派的控制之下而闻名。他的努力之所以成功，部分原因是得到了霍什特汗国的奥里特领导人居士汗的援助。五世达赖喇嘛和他的亲信在居士汗的帮助下，建立了一个被历史学家称为 "拉萨国 "的民政管理机构，基本上没有参与其中。这个西藏政权或政府也被称为 "甘丹法王"。

清朝

清朝对西藏的统治始于1720年的远征，当时他们驱逐了入侵的准噶尔人。安多在1724年被清朝控制，康区东部在1728年被并入邻近的中国省份。与此同时，清政府向拉萨派出了名为安班的常驻专员。1750年，Ambans和居住在拉萨的大部分汉族人和满族人在一次暴乱中被杀，清军迅速赶到，并在第二年镇压了叛军。与之前的元朝一样，清朝的满族人对该地区进行了军事和行政控制，同时给予其一定程度的政治自治。清朝指挥官公开处决了一些支持叛军的人，并像1723年和1728年一样，对政治结构进行了改革，并制定了正式的组织计划。清朝现在恢复了达赖喇嘛的统治地位，领导名为Kashag的管理委员会，但提升了安巴人的作用，包括更直接地参与西藏的内部事务。同时，清朝采取了措施，通过增加从神职人员中招聘的官员担任重要职务来平衡贵族的权力。

几十年来，西藏一直处于和平状态，但在1792年，清朝乾隆皇帝派遣一支庞大的中国军队进入西藏，将入侵的尼泊尔人赶走。这促使清朝再次对西藏政府进行重组，这次是通过一项名为 "改善西藏政府的二十九条规定 "的书面计划。现在还在尼泊尔边境附近建立了配备清军的驻扎地。西藏在18世纪的不同阶段被满族人所统治，紧随1792年条例之后的几年是清朝专员权力的高峰期；但并没有试图使西藏成为中国的一个省份。

1834年，锡克帝国入侵并吞并了拉达克，这是一个文化上属于西藏的地区，当时是一个独立的王国。七年后，一支由佐拉瓦-辛格将军率领的锡克军队从拉达克入侵西藏西部，开始了中锡战争。一支清朝西藏军队击退了入侵者，但在将锡克教徒赶入拉达克时又被击败。战争以中国和锡克帝国之间签署《楚舒尔条约》而结束。

随着清朝的衰弱，它对西藏的权威也逐渐下降，到19世纪中叶，它的影响力已经微乎其微。到19世纪末，清朝对西藏的权威已经变得象征性多于真实性，尽管在19世纪60年代，西藏人仍然因为自己的原因而选择强调帝国的象征性权威，使其看起来很有分量。

1774年，一位苏格兰贵族乔治-博格尔来到日喀则，为东印度公司调查贸易前景。他的努力虽然基本上没有成功，但在西藏和西方世界之间建立了永久性的联系。然而，到了19世纪，外国势力与西藏之间的紧张关系加剧。大英帝国正在将其在印度的领土扩展到喜马拉雅山，而阿富汗酋长国和俄罗斯帝国也都在中亚地区做同样的事情。

1904年，英国启动了对西藏的远征，部分原因是担心俄罗斯正在将其权力扩展到西藏，作为大博弈的一部分。尽管这次远征最初的目的是解决西藏和锡金之间的边界争端，但它很快变成了一次军事入侵。英国远征军主要由印度军队组成，迅速入侵并占领了拉萨，达赖喇嘛逃到了乡下。之后，远征军的首领弗朗西斯-扬古斯班德爵士与西藏人谈判达成了《大不列颠与西藏公约》，保证了英国的巨大经济影响力，但确保该地区仍在中国控制之下。被称为 "安班 "的清朝驻军公开驳斥了该条约，而渴望与中国建立友好关系的英国政府则在两年后谈判了一项新的条约，即《大不列颠与中国关于西藏问题的公约》。英国同意不吞并或干涉西藏，以换取中国政府的赔偿，而中国则同意不允许任何其他外国干涉西藏的领土或内部管理。

1910年，清政府派出自己的军队，在赵尔丰的带领下，建立了满汉的直接统治，并在一份诏书中，废除了逃往英属印度的达赖喇嘛。赵尔丰最终打败了西藏军队，并将达赖喇嘛的部队赶出了该省。他的行动不受欢迎，人们对他虐待平民和无视当地文化的行为充满了敌意。
后清时期

罗格雅帕人，一个被遗弃的群体，20世纪初。他们的世袭职业包括处理尸体和皮革工作。

在辛亥革命（1911-12）推翻了清朝，最后一批清军被护送出西藏后，新的中华民国为清朝的行为道歉，并提出恢复达赖喇嘛的头衔。达赖喇嘛拒绝了任何中国头衔，并宣布自己为独立的西藏的统治者。1913年，西藏和蒙古缔结了一项相互承认的条约。在接下来的36年里，十三世达赖喇嘛和接替他的摄政者管理着西藏。在这期间，西藏为控制长江上游的西康和青海（康巴和安多的一部分）的藏族地区，与中国军阀进行了斗争。1914年，西藏政府与英国签署了《西姆拉协议》，将藏南地区割让给英属印度。中国政府谴责该协议是非法的。

在20世纪30年代和40年代，当摄政者表现出对事务的疏忽时，中华民国的国民党政府利用这一点将其影响力扩大到该领土。

从1950年到现在

中国内战后，中华人民共和国控制了中国大陆的大部分地区，于1950年吞并了西藏，并与新登基的十四世达赖喇嘛政府谈判达成了《十七点协议》，确认了中华人民共和国的主权，但给予该地区自治权。随后，在流亡途中，十四世达赖喇嘛彻底否定了该协议，并多次重复该协议。据美国中央情报局称，中国人利用达赖喇嘛来获得对军队训练和行动的控制。

达赖喇嘛拥有强大的追随者，因为许多来自西藏的人不仅把他看成是他们的政治领袖，而且是他们的精神领袖。1959年西藏叛乱期间，达赖喇嘛的政府逃到印度达兰萨拉后，建立了一个敌对的流亡政府。此后，北京的中央人民政府放弃了协议，开始实施被停止的社会和政治改革。在大跃进期间，可能有20万到100万西藏人死亡，大约有6000座寺庙在文化大革命中被毁--绝大部分的西藏历史建筑被毁。1962年，中国和印度就有争议的阿鲁纳恰尔邦/南藏和阿克赛钦地区进行了短暂的战争。虽然中国赢得了战争，但中国军队撤到了麦克马洪线以北，实际上是把阿鲁纳恰尔邦让给了印度。

1980年，总书记和改革派胡耀邦访问了西藏，迎来了一个社会、政治和经济自由化的时期。然而，在这十年末，在1989年的天安门广场抗议活动之前，哲蚌寺和色拉寺的僧侣开始抗议独立。政府停止了改革，并开始了反分裂主义运动。人权组织对北京和拉萨政府在镇压发生在寺院和城市周围的分裂主义骚乱时对该地区人权的做法提出批评，最近一次是在2008年的西藏骚乱中。

最近

才旺诺布的故事被笼罩在神秘的气氛中。

2022年2月25日，这位藏族流行歌手在西藏首都拉萨自焚。粉丝们在过去一个月里一直在哀悼他的死亡。但在3月28日，中国外交部表示诺布先生可能仍然活着。在回答有关他的问题时，外交部说，西藏的一名男子 "试图以自焚方式自杀"--他已被立即送往医院治疗。这名男子长期以来一直
当局称，该男子长期受到 "精神疾病的困扰"，"曾多次试图自杀"。活动人士
不服气。粉丝们对诺布先生的行为感到震惊。在过去的十年中，有数十名藏人自焚以抗议中国的统治。

但诺布先生似乎并不是一个持不同政见者。这位25岁的年轻人曾参加过一个受欢迎的真人秀节目《唱响中国》。中国》。
仅仅几个月前。评委们称他为luobo（萝卜），是诺布的普通话同音词。在视频中，他将说唱
关于爱情。有时他在演唱卡米拉-卡贝罗和弗兰基-瓦利的曲子时，会弹钢琴或吉他。他的
他的耳洞和修剪过的眉毛，他可能是一个来自任何地方的Z世代。这意味着
他生活在两个世界里。一个是中国当局宣传的西藏：一个光鲜亮丽的异国 "少数民族地区"。
在那里，心怀感激的游牧民族和僧侣们正在摆脱贫困。然后是当地人所经历的西藏。
他们眼睁睁地看着当局拆毁佛像，关闭藏语学校，逮捕任何抵制中国政府的宗教运动的人。
国家的中国化运动。那些只看到第一世界的人无法理解为什么其中的一个明星
会放火自焚。那些了解第二世界的人立即明白了。当诺布先生谈到西藏时，他很谨慎。
当诺布先生谈到西藏时，他很谨慎。他提到了他的父亲，一个国营歌舞团的作曲家，他的歌曲是对西藏文化的尊重。
文化。诺布先生没有谈及2013年他长大的那曲发生抗议活动后的致命镇压。他
他当然没有提到他的叔叔罗多-嘉措，他曾因谋杀罪被判入狱（他的支持者说那是自卫），现在被关进了监狱。
他曾因谋杀罪入狱（他的支持者说那是自卫），现在因抗议中国统治而被关在监狱。
诺布先生可能没有表现出政治性，但他显然对西藏感到自豪。他避开了他母亲演唱的 "红歌"，他母亲是中国军队的一个歌舞团的歌手。
他避开了他母亲演唱的 "红歌"，他母亲是中国军队管理的剧团的歌手。这些小曲的歌词是感谢 "救命 "的共产党的。相反，诺布先生写了
诸如 "糌粑 "这样的歌曲，是对西藏人用烤大麦粉制作的主食的颂扬。

这首歌的一个视频中，歌手在拉萨周围跳舞。有一次，当两个僧侣经过时，他鞠了一躬，将手放在自己的心上。
活动人士说，这些都是诺布先生的真实感受--他对西藏身份的崇敬。他们指出，他在《歌唱！》节目中演绎了 "重返家园"。
他们指出，他在《歌唱！中国》节目中演绎的 "回归故里"。中国》中的 "重返家园"。他穿着传统的chupa袍子，用藏族民间风格的颤音唱出了第一句话。
颤音："有一片土地被称为故乡，有一种幸福被称为家园。" 他甚至改变了歌词。
他甚至改变了歌词，在悠扬的最后一节中提到了西藏而不是那曲。秘密地，他是在为国家唱歌，声称
他的歌曲中含有关于他的政治的微妙线索，而他的自焚行为则清楚地表明了这一点。诺布先生
选择了拉萨最敏感的地点：布达拉宫，达赖喇嘛的传统住所。而且他
他选择了一个敏感的时间，即中国议会在北京开会的前几天。做出这样的行为并不表明
驻印度的西藏问题研究人员马修-阿克斯特（Matthew Akester）说，完成这样的行动并不意味着绝望，而是 "最大的决心"。
在某些方面，诺布先生似乎是中国政府理想中的少数民族青年：城市人，受过教育，能说流利的普通话。在中国的
去年国庆节，他发布了一段自己将手指并拢的视频。"我为祖国献上一颗心
伴随的标签上写着："我为祖国献上一颗心"。藏族作家和活动家次仁沃泽说，但藏族人看穿了这一点。
活动家（他生活在监视之下）说。"中国人只看到了图像。他们只看到了表面，"Woeser女士说。
Woeser女士说。"我们知道才旺的真正斗争。"  这篇文章出现在印刷版的中国部分，标题为
标题为 "内心的火焰"。
