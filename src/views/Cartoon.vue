<template>
  <div class="cart-list-container">

    <a-row type="flex" justify="center">
      <a-col :span="24" :lg="12" :md="12" :xl="12">
        <a-input-search placeholder="input search text" @search="onSearch" />
      </a-col>
    </a-row>
    <br>
    <a-row type="flex" justify="center">
      <a-col :span="24" :lg="22" :md="22" :xl="22">
        <a-list item-layout="vertical" size="large" :pagination="pagination" :data-source="listData">
          <div slot="footer"><b>ant design vue</b> footer part</div>
          <a-list-item slot="renderItem" key="item.title" slot-scope="item, index">
            <template v-for="{ type, text } in actions" slot="actions">
              <span :key="type">
                <a-icon :type="type" style="margin-right: 8px" />
                {{ text }}
              </span>
            </template>
            <img
                    slot="extra"
                    width="200"
                    alt="logo"
                    :src="item.url"
            />
            <a-list-item-meta>
              <a slot="title" :href="item.href">{{ item.title }}</a>
              <a-avatar slot="avatar" :src="item.avatar" />
            </a-list-item-meta>
            {{ item.desc }}
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="scss">
  .cart-list-container {
    background: #fff;
    padding: 50px 20px;
  }
</style>

<script>
  /*const listData = [];
  for (let i = 0; i < 23; i++) {
    listData.push({
      href: 'https://www.antdv.com/',
      title: `ant design vue part ${i}`,
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
  }*/
  export default {
    name: 'Home',
    components: {

    },
    data() {
      return {
        listData: [
          {
            url: require('../assets/home/home-1.jpeg'),
            title: '宫崎骏龙猫',
            desc: '《龙猫》是由宫崎骏执导，日高法子、坂本千夏、糸井重里配音的动画电影，于1988年4月16日在日本上映。高清重制版于2018年12月14日在中国公映。该片讲述了草壁达郎的妻子草壁靖子生病住院后，他带着草壁皋月与四岁的妹妹草壁梅回到乡间居住的故事。',
            httpUrl: 'https://www.iqiyi.com/v_217s19i6bxw.html',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          },
          {
            url: require('../assets/home/home-2.jpeg'),
            title: '大耳朵图图',
            desc: '该剧讲述了胡图图和小伙伴的成长故事',
            httpUrl: 'http://www.le.com/comic/94154.html',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          },
          {
            url: require('../assets/home/home-3.jpeg'),
            title: '小黄人',
            desc: '《小黄人大眼萌》是一部2015年的美国喜剧动画电影，该影片由凯尔·巴尔达、皮艾尔·柯芬执导，桑德拉·布洛克、皮艾尔·柯芬、史蒂夫·卡瑞尔配音，由照明娱乐公司和环球影业联合出品。该影片讲述了小黄人的历史以及他们要找到强大的新主人，并辅佐他完成作恶事业的故事，背景涉及到伦敦、纽约等几个大城市，该片于2015年9月13日以3D及IMAX 3D格式在中国上映。',
            httpUrl: 'https://www.iqiyi.com/v_19rrkczbec.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          },
          {
            url: require('../assets/home/home-4.jpeg'),
            title: '三只松鼠之松鼠小镇',
            desc: '该部动画片是国产童话题材，由安徽松鼠娱乐有限公司进行制作与发行。动画片以“正义、团结、和平”为主题，讲述三只可爱的小松鼠与人类一起努力收集手环碎片，不怕与恶势力做斗争，建设松鼠小镇的故事。',
            httpUrl: 'https://www.mgtv.com/b/335140/7236375.html?cxid=95kqkw8n6',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          },
          {
            url: require('../assets/home/home-5.jpeg'),
            title: '女巫的扫把',
            desc: '《女巫的扫帚》改编自同名儿童画本《女巫的扫帚》，由著名动画片导演Jan Lachauer执导，西蒙·佩吉，吉莲·安德森等配音，讲述了一个关于友情与亲情的魔幻 [1]  故事',
            httpUrl: 'https://v.qq.com/x/cover/mzc00200k549l9q/x30002bf4co.html',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          },
          {
            url: require('../assets/home/home-6.jpeg'),
            title: '喜洋洋与灰太狼',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            desc: '《喜羊羊与灰太狼》动画以羊和狼两大族群间妙趣横生的故事为主线，讲述了羊狼凭借友谊和热爱，共同保卫家园、完成梦想的励志故事。',
            httpUrl: 'https://www.bilibili.com/bangumi/play/ss32544?bsource=pc_sem_baidu_dm_35387990&keywordid=324569253443&userid=35387990&planid=169441587&unitid=6240653082&creative=53286364484'
          },
          {
            url: require('../assets/home/home-7.jpeg'),
            title: '小熊维尼',
            desc: '维尼是美国迪士尼卡通《小熊维尼》中的角色。',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            httpUrl: 'https://www.baidu.com/link?url=nNbrwKi4nDjndlc9ajAdFt6_hqnLyQDhAWg2uQBynWQFYvKSJCOdqb1ZTkXRhQBFYw7X6_BPIlRN8RR7NDM11y0Exx50LHdmm594EZqxqKLMtgCkraVWJnYzIXk_vD3_&wd=&eqid=c215c7ef000b4bcf0000000261d6afbc'
          },
          {
            url: require('../assets/home/home-9.jpeg'),
            title: '超能陆战队',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            desc: '《超能陆战队》（Big Hero 6）是迪士尼与漫威联合出品的第一部动画电影，取材于由Steven T. Seagle和Duncan Rouleau在1998年开始连载的以日本为背景的动作科幻类漫画。',
            httpUrl: 'https://www.baidu.com/link?url=QYFjJiLnT7WoheR-dOnpP1HBecfb_P9yArU5WGsK6XQREdTIFJNqTJp9Ltjg_MhxjKlLmIhV2hrvrkZ4CCmGA_&wd=&eqid=cbdfb4a200030eb50000000261d6afcc'
          }
        ],
        pagination: {
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        },
        actions: [
          { type: 'star-o', text: '156' },
          { type: 'like-o', text: '156' },
          { type: 'message', text: '2' },
        ],
      }
    },
    methods: {
      onSearch() {

      }
    },
    mounted() {

    }
  }
</script>
