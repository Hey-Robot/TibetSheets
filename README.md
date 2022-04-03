
<div align="center">
        
# Tibet Sheets
Open source spreadsheet web application.
<br>
        
<a href="https://www.economist.com/china/2022/04/02/deciphering-a-tibetan-pop-stars-self-immolation">
  <img src="https://user-images.githubusercontent.com/9451001/161445678-a8b9ce29-7ee7-49c3-b4fc-fc66975cf3ef.jpg" alt="Learn More">
</a>
        


<br>
<br>   
<br>   
Forked from:
<br>     
        
<a href="https://github.com/mengshukeji/Tibetsheets">
 <img src="https://github.com/mengshukeji/Tibetsheets/blob/master/docs/.vuepress/public/img/logo_text.png" alt="Learn More"></a>

</div>

# Tibetsheets 3.x is currently being rewritten in Typescript

English | [简体中文](./README-zh.md)

## Introduction
🚀Tibetsheets is an online spreadsheet like excel that is powerful, simple to configure, and completely open source.


## Links
 | Source Code   | Documentation | Demo | Plugins Demo | Forum |
 | ------ | -------- | ------ | ------ | ------ |
 | [Github](https://github.com/mengshukeji/Tibetsheets)| [Online Documentation](https://mengshukeji.github.io/TibetsheetsDocs/) | [Online Demo](https://mengshukeji.github.io/TibetsheetsDemo) / [Cooperative editing demo](http://tibetsheets.lashuju.com/demo/) | [Import Excel Demo](https://mengshukeji.github.io/LuckyexcelDemo/) | [Chinese Forum](https://support.qq.com/product/288322)  |
 | [Gitee Mirror](https://gitee.com/mengshukeji/Tibetsheets)| [Gitee Online Documentation](https://mengshukeji.gitee.io/TibetsheetsDocs/) | [Gitee Online Demo](https://mengshukeji.gitee.io/tibetsheetsdemo/) | [Gitee Import Excel Demo](https://mengshukeji.gitee.io/luckyexceldemo/) | [Google Group](https://groups.google.com/g/tibetsheets) |

![Demo](/docs/.vuepress/public/img/TibetsheetsDemo.gif)

## Plugins
- [Luckyexcel](https://github.com/mengshukeji/Luckyexcel): Excel import and export library
- [chartMix](https://github.com/mengshukeji/chartMix): Chart plugin

## Ecosystem

| Project | Description |
|---------|-------------|
| [Tibetsheets Vue]          | Tibetsheets and Luckyexcel in a vue cli3 project |
| [Tibetsheets Vue3]          | Tibetsheets and Luckyexcel in a vue3 project with vite|
| [Tibetsheets React]          | Tibetsheets in a React project |
| [Luckyexcel Node]          | Use Luckyexcel in koa2 |
| [Tibetsheets Server]          | Java backend Tibetsheets Server |
| [Tibetsheets Server Starter]          | TibetsheetsServer docker deployment startup template |

[Tibetsheets Vue]: https://github.com/mengshukeji/tibetsheets-vue
[Tibetsheets Vue3]: https://github.com/hjwforever/tibetsheets-vue3-vite
[Tibetsheets React]: https://github.com/mengshukeji/tibetsheets-react
[Luckyexcel Node]: https://github.com/mengshukeji/Luckyexcel-node
[Tibetsheets Server]: https://github.com/mengshukeji/TibetsheetsServer
[Tibetsheets Server Starter]: https://github.com/mengshukeji/TibetsheetsServerStarter


## Features

- **Formatting**: style, conditional formatting, text alignment and rotation, text truncation, overflow, automatic line wrapping, multiple data types, cell segmentation style
- **Cells**: drag and drop, fill handle, multiple selection, find and replace, location, merge cells, data verification
- **Row & column**: hide, insert, delete rows or columns, freeze, and split text
- **Operation**: undo, redo, copy, paste, cut, hot key, format painter, drag and drop selection
- **Formulas & Functions**: Built-in, remote and custom formulas
- **Tables**: filter, sort
- **Enhanced functions**: Pivot tables, charts, comments, cooperative editing, insert picture, matrix calculations, screenshots, copying to other formats, EXCEL import and export, etc.

For a more detailed feature list, please refer to: [Features](https://mengshukeji.github.io/TibetsheetsDocs/guide/#features)

## 📖 Resources
- Priority reading for new users: [User Guide](https://github.com/mengshukeji/Tibetsheets/wiki/User-Guide)
- For the tutorials, learning materials and supporting solutions provided by the community, please refer to: [Tutorials and Resources](https://mengshukeji.github.io/TibetsheetsDocs/guide/resource.html)

## 📜 Changelog

Detailed changes for each release are documented in the [CHANGELOG.md](CHANGELOG.md).

## ❗️ Issues

Please make sure to read the [Issue Reporting Checklist](https://mengshukeji.github.io/TibetsheetsDocs/guide/contribute.html#how-to-submit-issues) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## ✅ TODO

Managed with [GitHub Projects](https://github.com/mengshukeji/Tibetsheets/projects/1)

## 💪Contribution

Please make sure to read the[ Contributing Guide](https://mengshukeji.github.io/TibetsheetsDocs/guide/contribute.html) before making a pull request.

## Usage

### First step
Introduce dependencies through CDN
```
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/plugins/css/pluginsCss.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/plugins/plugins.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/css/tibetsheets.css' />
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/assets/iconfont/iconfont.css' />
<script src="https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/plugins/js/plugin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/tibetsheets@latest/dist/tibetsheets.umd.js"></script>
```
### Second step
Specify a table container
```
<div id="tibetsheets" style="margin:0px;padding:0px;position:absolute;width:100%;height:100%;left: 0px;top: 0px;"></div>
```
### Third step
Create a table
```
<script>
    $(function () {
        //Configuration item
        var options = {
            container: 'tibetsheets' //tibetsheets is the container id
        }
        tibetsheets.create(options)
    })
</script>
```

## Development

### Requirements
[Node.js](https://nodejs.org/en/) Version >= 6 

### Installation
```
npm install
npm install gulp -g
```
### Development
```
npm run dev
```
### Package
```
npm run build
```

## Partner project

- [luban-h5](https://github.com/ly525/luban-h5)
- [h5-Dooring](https://github.com/MrXujiang/h5-Dooring)
- [Furion](https://gitee.com/monksoul/Furion)

## Communication
- [Github Discussions](https://github.com/mengshukeji/Tibetsheets/discussions)
- [Gitter](https://gitter.im/mengshukeji/Tibetsheets)

[Chinese community](./README-zh.md)

## Sponsor

Tibetsheets is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome [backers](https://mengshukeji.github.io/TibetsheetsDocs/about/sponsor.html#sponsors-list). If you'd like to join them, please consider:

- [Become a backer or sponsor on Patreon](https://www.patreon.com/mengshukeji).
- [Become a backer or sponsor on Open Collective](https://opencollective.com/tibetsheets).
- One-time donation via PayPal, WeChat or Alipay

| PayPal |  WeChat  | Alipay |
|---|---|---|
| [Paypal Me](https://www.paypal.me/wbfsa) | <img src="https://cdn.jsdelivr.net/gh/mengshukeji/LuckyResources@master/assets/img/wechat/wechat.jpg" width="140" />| <img src="https://cdn.jsdelivr.net/gh/mengshukeji/LuckyResources@master/assets/img/wechat/alipay.jpg" width="130" /> |

### What's the difference between Patreon and OpenCollective?

Funds donated via Patreon go directly to support mengshukeji's work on Tibetsheets. Funds donated via OpenCollective are managed with transparent expenses and will be used for compensating work and expenses for core team members or sponsoring community events. Your name/logo will receive proper recognition and exposure by donating on either platform.

## Sponsors List

(Sort by time)
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

## Authors and acknowledgment

### Active Core Team Members
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

### Community Partners
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

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, mengshukeji
