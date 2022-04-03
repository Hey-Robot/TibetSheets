
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
        
<a href="https://github.com/mengshukeji/luckysheet">
 <img src="https://github.com/mengshukeji/luckysheet/blob/master/docs/.vuepress/public/img/logo_text.png" alt="Learn More">
</a>

</div>

# Tibetsheets 3.x is currently being rewritten in Typescript

English | [简体中文](./README-zh.md)

## Introduction
🚀 Tibetsheets is an online spreadsheet like excel that is powerful, simple to configure, and completely open source.


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

Copyright (c) 2020-present, mengshukeji, HeyRobot LLC

# History of Tibet

Tibetan Empire

Map of the Tibetan Empire at its greatest extent between the 780s and the 790s CE

The history of a unified Tibet begins with the rule of Songtsen Gampo (604–650 CE), who united parts of the Yarlung River Valley and founded the Tibetan Empire. He also brought in many reforms, and Tibetan power spread rapidly, creating a large and powerful empire. It is traditionally considered that his first wife was the Princess of Nepal, Bhrikuti, and that she played a great role in the establishment of Buddhism in Tibet. In 640, he married Princess Wencheng, the niece of the Chinese emperor Taizong of Tang China.

Under the next few Tibetan kings, Buddhism became established as the state religion and Tibetan power increased even further over large areas of Central Asia, while major inroads were made into Chinese territory, even reaching the Tang's capital Chang'an (modern Xi'an) in late 763. However, the Tibetan occupation of Chang'an only lasted for fifteen days, after which they were defeated by Tang and its ally, the Turkic Uyghur Khaganate.

The Kingdom of Nanzhao (in Yunnan and neighbouring regions) remained under Tibetan control from 750 to 794, when they turned on their Tibetan overlords and helped the Chinese inflict a serious defeat on the Tibetans.

In 747, the hold of Tibet was loosened by the campaign of general Gao Xianzhi, who tried to re-open the direct communications between Central Asia and Kashmir. By 750, the Tibetans had lost almost all of their central Asian possessions to the Chinese. However, after Gao Xianzhi's defeat by the Arabs and Qarluqs at the Battle of Talas (751) and the subsequent civil war known as the An Lushan Rebellion (755), Chinese influence decreased rapidly and Tibetan influence resumed.

At its height in the 780s to 790s, the Tibetan Empire reached its highest glory when it ruled and controlled a territory stretching from modern day Afghanistan, Bangladesh, Bhutan, Burma, China, India, Nepal, Pakistan, Kazakhstan, Kyrgyzstan, Tajikistan.

In 821/822 CE, Tibet and China signed a peace treaty. A bilingual account of this treaty, including details of the borders between the two countries, is inscribed on a stone pillar which stands outside the Jokhang temple in Lhasa. Tibet continued as a Central Asian empire until the mid-9th century, when a civil war over succession led to the collapse of imperial Tibet. The period that followed is known traditionally as the Era of Fragmentation, when political control over Tibet became divided between regional warlords and tribes with no dominant centralized authority. An Islamic invasion from Bengal took place in 1206.
Yuan dynasty

The Mongol Yuan dynasty, through the Bureau of Buddhist and Tibetan Affairs, or Xuanzheng Yuan, ruled Tibet through a top-level administrative department. One of the department's purposes was to select a dpon-chen ("great administrator"), usually appointed by the lama and confirmed by the Mongol emperor in Beijing. The Sakya lama retained a degree of autonomy, acting as the political authority of the region, while the dpon-chen held administrative and military power. Mongol rule of Tibet remained separate from the main provinces of China, but the region existed under the administration of the Yuan dynasty. If the Sakya lama ever came into conflict with the dpon-chen, the dpon-chen had the authority to send Chinese troops into the region.

Tibet retained nominal power over religious and regional political affairs, while the Mongols managed a structural and administrative rule over the region, reinforced by the rare military intervention. This existed as a "diarchic structure" under the Yuan emperor, with power primarily in favor of the Mongols. Mongolian prince Khuden gained temporal power in Tibet in the 1240s and sponsored Sakya Pandita, whose seat became the capital of Tibet. Drogön Chögyal Phagpa, Sakya Pandita's nephew became Imperial Preceptor of Kublai Khan, founder of the Yuan dynasty.

Yuan control over the region ended with the Ming overthrow of the Yuan and Tai Situ Changchub Gyaltsen's revolt against the Mongols. Following the uprising, Tai Situ Changchub Gyaltsen founded the Phagmodrupa Dynasty, and sought to reduce Yuan influences over Tibetan culture and politics.
Phagmodrupa, Rinpungpa and Tsangpa Dynasties

Between 1346 and 1354, Tai Situ Changchub Gyaltsen toppled the Sakya and founded the Phagmodrupa Dynasty. The following 80 years saw the founding of the Gelug school (also known as Yellow Hats) by the disciples of Je Tsongkhapa, and the founding of the important Ganden, Drepung and Sera monasteries near Lhasa. However, internal strife within the dynasty and the strong localism of the various fiefs and political-religious factions led to a long series of internal conflicts. The minister family Rinpungpa, based in Tsang (West Central Tibet), dominated politics after 1435. In 1565 they were overthrown by the Tsangpa Dynasty of Shigatse which expanded its power in different directions of Tibet in the following decades and favoured the Karma Kagyu sect.
Rise of Ganden Phodrang

Tibet in 1734. Royaume de Thibet ("Kingdom of Tibet") in la Chine, la Tartarie Chinoise, et le Thibet ("China, Chinese Tartary, and Tibet") on a 1734 map by Jean Baptiste Bourguignon d'Anville, based on earlier Jesuit maps.

In 1578, Altan Khan of the Tümed Mongols gave Sonam Gyatso, a high lama of the Gelugpa school, the name Dalai Lama, Dalai being the Mongolian translation of the Tibetan name Gyatso "Ocean".
Unified heartland under Buddhist Gelug school

The 5th Dalai Lama (1617-1682) is known for unifying the Tibetan heartland under the control of the Gelug school of Tibetan Buddhism, after defeating the rival Kagyu and Jonang sects and the secular ruler, the Tsangpa prince, in a prolonged civil war. His efforts were successful in part because of aid from Güshi Khan, the Oirat leader of the Khoshut Khanate. With Güshi Khan as a largely uninvolved overlord, the 5th Dalai Lama and his intimates established a civil administration which is referred to by historians as the Lhasa state. This Tibetan regime or government is also referred to as the Ganden Phodrang.
Qing dynasty

Qing dynasty rule in Tibet began with their 1720 expedition to the country when they expelled the invading Dzungars. Amdo came under Qing control in 1724, and eastern Kham was incorporated into neighbouring Chinese provinces in 1728. Meanwhile, the Qing government sent resident commissioners called Ambans to Lhasa. In 1750, the Ambans and the majority of the Han Chinese and Manchus living in Lhasa were killed in a riot, and Qing troops arrived quickly and suppressed the rebels in the next year. Like the preceding Yuan dynasty, the Manchus of the Qing dynasty exerted military and administrative control of the region, while granting it a degree of political autonomy. The Qing commander publicly executed a number of supporters of the rebels and, as in 1723 and 1728, made changes in the political structure and drew up a formal organization plan. The Qing now restored the Dalai Lama as ruler, leading the governing council called Kashag, but elevated the role of Ambans to include more direct involvement in Tibetan internal affairs. At the same time, the Qing took steps to counterbalance the power of the aristocracy by adding officials recruited from the clergy to key posts.

For several decades, peace reigned in Tibet, but in 1792, the Qing Qianlong Emperor sent a large Chinese army into Tibet to push the invading Nepalese out. This prompted yet another Qing reorganization of the Tibetan government, this time through a written plan called the "Twenty-Nine Regulations for Better Government in Tibet". Qing military garrisons staffed with Qing troops were now also established near the Nepalese border. Tibet was dominated by the Manchus in various stages in the 18th century, and the years immediately following the 1792 regulations were the peak of the Qing imperial commissioners' authority; but there was no attempt to make Tibet a Chinese province.

In 1834, the Sikh Empire invaded and annexed Ladakh, a culturally Tibetan region that was an independent kingdom at the time. Seven years later, a Sikh army led by General Zorawar Singh invaded western Tibet from Ladakh, starting the Sino-Sikh War. A Qing-Tibetan army repelled the invaders but was in turn defeated when it chased the Sikhs into Ladakh. The war ended with the signing of the Treaty of Chushul between the Chinese and Sikh empires.

As the Qing dynasty weakened, its authority over Tibet also gradually declined, and by the mid-19th century, its influence was minuscule. Qing authority over Tibet had become more symbolic than real by the late 19th century, although in the 1860s, the Tibetans still chose for reasons of their own to emphasize the empire's symbolic authority and make it seem substantial.

In 1774, a Scottish nobleman, George Bogle, travelled to Shigatse to investigate prospects of trade for the East India Company. His efforts, while largely unsuccessful, established permanent contact between Tibet and the Western world. However, in the 19th century, tensions between foreign powers and Tibet increased. The British Empire was expanding its territories in India into the Himalayas, while the Emirate of Afghanistan and the Russian Empire were both doing likewise in Central Asia.

In 1904, a British expedition to Tibet, spurred in part by a fear that Russia was extending its power into Tibet as part of the Great Game, was launched. Although the expedition initially set out with the stated purpose of resolving border disputes between Tibet and Sikkim, it quickly turned into a military invasion. The British expeditionary force, consisting of mostly Indian troops, quickly invaded and captured Lhasa, with the Dalai Lama fleeing to the countryside. Afterwards, the leader of the expedition, Sir Francis Younghusband, negotiated the Convention Between Great Britain and Tibet with the Tibetans, which guaranteed the British great economic influence but ensured the region remained under Chinese control. The Qing imperial resident, known as the Amban, publicly repudiated the treaty, while the British government, eager for friendly relations with China, negotiated a new treaty two years later known as the Convention Between Great Britain and China Respecting Tibet. The British agreed not to annex or interfere in Tibet in return for an indemnity from the Chinese government, while China agreed not to permit any other foreign state to interfere with the territory or internal administration of Tibet.

In 1910, the Qing government sent a military expedition of its own under Zhao Erfeng to establish direct Manchu-Chinese rule and, in an imperial edict, deposed the Dalai Lama, who fled to British India. Zhao Erfeng defeated the Tibetan military conclusively and expelled the Dalai Lama's forces from the province. His actions were unpopular, and there was much animosity against him for his mistreatment of civilians and disregard for local culture.
Post-Qing period

Rogyapas, an outcast group, early 20th century. Their hereditary occupation included disposal of corpses and leather work.

After the Xinhai Revolution (1911–12) toppled the Qing dynasty and the last Qing troops were escorted out of Tibet, the new Republic of China apologized for the actions of the Qing and offered to restore the Dalai Lama's title. The Dalai Lama refused any Chinese title and declared himself ruler of an independent Tibet. In 1913, Tibet and Mongolia concluded a treaty of mutual recognition. For the next 36 years, the 13th Dalai Lama and the regents who succeeded him governed Tibet. During this time, Tibet fought Chinese warlords for control of the ethnically Tibetan areas in Xikang and Qinghai (parts of Kham and Amdo) along the upper reaches of the Yangtze River. In 1914, the Tibetan government signed the Simla Accord with Britain, ceding the South Tibet region to British India. The Chinese government denounced the agreement as illegal.

When in the 1930s and 1940s the regents displayed negligence in affairs, the Kuomintang Government of the Republic of China took advantage of this to expand its reach into the territory.
From 1950 to present

Thank you India. 50 Years in Exile. Manali. 2010

Emerging with control over most of mainland China after the Chinese Civil War, the People's Republic of China annexed Tibet in 1950 and negotiated the Seventeen Point Agreement with the newly enthroned 14th Dalai Lama's government, affirming the People's Republic of China's sovereignty but granting the area autonomy. Subsequently, on his journey into exile, the 14th Dalai Lama completely repudiated the agreement, which he has repeated on many occasions. According to the CIA, the Chinese used the Dalai Lama to gain control of the military's training and actions.

The Dalai Lama had a strong following as many people from Tibet looked at him not just as their political leader, but as their spiritual leader. After the Dalai Lama's government fled to Dharamsala, India, during the 1959 Tibetan Rebellion, it established a rival government-in-exile. Afterwards, the Central People's Government in Beijing renounced the agreement and began implementation of the halted social and political reforms. During the Great Leap Forward, between 200,000 and 1,000,000 Tibetans may have died and approximately 6,000 monasteries were destroyed during the Cultural Revolution—destroying the vast majority of historic Tibetan architecture. In 1962, China and India fought a brief war over the disputed Arunachal Pradesh/South Tibet and Aksai Chin regions. Although China won the war, Chinese troops withdrew north of the McMahon Line, effectively ceding Arunachal Pradesh to India.

In 1980, General Secretary and reformist Hu Yaobang visited Tibet and ushered in a period of social, political, and economic liberalization. At the end of the decade, however, before the Tiananmen Square protests of 1989, monks in the Drepung and Sera monasteries started protesting for independence. The government halted reforms and started an anti-separatist campaign. Human rights organisations have been critical of the Beijing and Lhasa governments' approach to human rights in the region when cracking down on separatist convulsions that have occurred around monasteries and cities, most recently in the 2008 Tibetan unrest. 
