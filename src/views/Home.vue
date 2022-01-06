<template>
  <div class="dashboard">
    <div>
      <a-carousel arrows autoplay>
        <div
            slot="prevArrow"
            class="custom-slick-arrow"
            style="left: 10px;zIndex: 1"
        >
          <a-icon type="left-circle" />
        </div>
        <div slot="nextArrow" class="custom-slick-arrow" style="right: 10px">
          <a-icon type="right-circle" />
        </div>
        <router-link to="/cartoonDetail?url=https://www.iqiyi.com/v_1lk1jg118x4.html?vfm=2008_aldbd&fv=p_02_01"><div class="slider-back slider-one"></div></router-link>
        <router-link to="/cartoonDetail?url=https://www.dixidixi.com/p/72893-1-1.html">
          <div class="slider-back slider-two"></div>
        </router-link>
        <router-link to="/cartoonDetail?url=https://www.baidu.com/link?url=QYFjJiLnT7WoheR-dOnpP1HBecfb_P9yArU5WGsK6XQREdTIFJNqTJp9Ltjg_MhxjKlLmIhV2hrvrkZ4CCmGA_&wd=&eqid=cbdfb4a200030eb50000000261d6afcc">
          <div class="slider-back slider-three"></div>
        </router-link>
        <router-link to="/cartoonDetail?url=https://www.iqiyi.com/v_19rro5rids.html">
          <div class="slider-back slider-four"></div>
        </router-link>
        <router-link to="/cartoonDetail?url=https://tv.cctv.com/2019/12/02/VIDE4KI9MekamDd8op6qrPh8191202.shtml">
          <div class="slider-back slider-five"></div>
        </router-link>
      </a-carousel>
    </div>

    <div class="content">
      <div class="counter-content">
        <a-row :gutter="24" type="flex" justify="center">
          <a-col :span="24" :lg="12" :md="12" :xl="5" class="mb-24" v-for="(item,index) in stats" :key="index">
            <a-card :bordered="false" class="widget-1">
              <a-statistic
                      :title="item.title"
                      :value="item.value"
                      :prefix="item.prefix"
                      :suffix="item.suffix"
                      :precision="0"
                      class="text-success"
                      :class="'text-' + item.status"
              >
              </a-statistic>
              <div class="icon" v-html="item.icon"></div>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>

    <div class="cartoon-list-content">
      <a-row :gutter="24" type="flex" justify="center">
        <a-col :span="24" :lg="12" :xl="5" class="mb-24" v-for="(item,index) in cartoonList" :key="index" @click="jumpToDetail(item.httpUrl)">
          <a-card hoverable>
            <img
                    slot="cover"
                    alt="example"
                    :src="item.url"
                    style="max-width: 100%;height:300px"
            />
            <!-- <template slot="actions" class="ant-card-actions">
               <a-icon key="setting" type="setting" />
               <a-icon key="edit" type="edit" />
               <a-icon key="ellipsis" type="ellipsis" />
             </template>-->
            <a-card-meta :title="item.title">
              <div slot="description" class="desc-intro">
                {{item.desc}}
              </div>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>

    <div class="content">
      <div class="table-list-content">
        <a-card hoverable>
          <a-table :columns="tableColumns" :data-source="tableData" bordered :pagination="pagination" @change="tableChange">
            <template slot="company" slot-scope="company">
              <h6 class="m-0">
                <img :src="company.logo" width="25" class="mr-10">
                {{ company.name }}
              </h6>
            </template>
            <template slot="completion" slot-scope="completion">
              <span class="font-bold text-muted text-sm">{{ completion.label ? completion.label : completion }}</span>
              <a-progress :percent="completion.value ? completion.value : completion" :show-info="false" size="small" :status="completion.status ? completion.status : 'normal'" />
            </template>
          </a-table>
        </a-card>
      </div>
    </div>
    <br>

    <div class="content">
      <div class="chart-content">
        <a-row :gutter="24" type="flex" justify="center">
          <a-col :span="24" :lg="12" :xl="10" class="mb-24">
            <a-card hoverable>
              <barChart :data="barData" :height="400"></barChart>
            </a-card>
          </a-col>
          <a-col :span="24" :lg="12" :xl="10" class="mb-24">
            <a-card hoverable>
              <lineChart :data="lineData" :height="400"></lineChart>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /*深度作用选择器*/
  .ant-carousel >>> .slick-slide {
    text-align: center;
    overflow: hidden;
  }
  .slider-one {
    background: url(../assets/slider/s-1.jpeg) no-repeat 50% 50%;
  }
  .slider-two {
    background: url(../assets/slider/s-2.jpeg) no-repeat 50% 50%;
  }
  .slider-three {
    background: url(../assets/slider/s-3.jpeg) no-repeat 50% 50%;
  }
  .slider-four {
    background: url(../assets/slider/s-4.jpeg) no-repeat 50% 50%;
  }
  .slider-five {
    background: url(../assets/slider/s-5.jpeg) no-repeat 50% 50%;
  }
  .slider-back {
    background-size: cover;
    height: 430px;
  }
  .ant-carousel >>> .custom-slick-arrow {
    width: 25px;
    height: 25px;
    font-size: 25px;
    color: #fff;
    opacity: 0.3;
  }
  .ant-carousel >>> .custom-slick-arrow:before {
    display: none;
  }
  .ant-carousel >>> .custom-slick-arrow:hover {
    opacity: 0.5;
  }
  .ant-carousel >>> .slick-slide h3 {
    color: #fff;
  }
</style>
<style scoped lang="scss">
  .content {
    padding: 20px;
    .counter-content {
      margin-top: 15px;
    }
  }
  .cartoon-list-content {
    background: url(../assets/home/background.jpeg) no-repeat;
    padding: 20px 20px 0;
    .desc-intro {
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      line-clamp: 1;
      white-space: nowrap;
    }
  }
</style>

<script>
  // "Projects" table list of columns and their properties.
  const tableColumns = [
    {
      title: 'Cartoon Name',
      dataIndex: 'company',
      scopedSlots: { customRender: 'company' },
      width: 300,
    },
    {
      title: 'BUDGET',
      dataIndex: 'budget',
      class: 'font-bold text-muted text-sm',
    },
    {
      title: 'COMPLETION',
      scopedSlots: { customRender: 'completion' },
      dataIndex: 'completion',
    },
  ];

  // "Projects" table list of rows and their properties.
  const tableData = [
    {
      key: '1',
      company: {
        name: 'Soft UI Shopify Version',
        logo: require('../assets/home/home-1.jpeg'),
      },
      budget: '$14,000',
      completion: 60,
    },
    {
      key: '2',
      company: {
        name: 'Progress Track',
        logo: require('../assets/home/home-2.jpeg'),
      },
      budget: '$3,000',
      completion: 10,
    },
    {
      key: '3',
      company: {
        name: 'Fix Platform Errors',
        logo: require('../assets/home/home-3.jpeg'),
      },
      budget: 'Not Set',
      completion: {
        label: '100',
        status: 'success',
        value: 100,
      },
    },
    {
      key: '4',
      company: {
        name: 'Launch new Mobile App',
        logo: require('../assets/home/home-4.jpeg'),
      },
      budget: '$20,600',
      completion: {
        label: '100',
        status: 'success',
        value: 100,
      },
    },
    {
      key: '5',
      company: {
        name: 'Add the New Landing Page',
        logo: require('../assets/home/home-5.jpeg'),
      },
      budget: '$4,000',
      completion: 80,
    },
    {
      key: '6',
      company: {
        name: 'Redesign Online Store',
        logo: require('../assets/home/home-6.jpeg'),
      },
      budget: '$2,000',
      completion: {
        label: 'Cancelled',
        status: 'exception',
        value: 100,
      },
    },
    {
      key: '7',
      company: {
        name: 'Redesign Online Store',
        logo: require('../assets/home/home-7.jpeg'),
      },
      budget: '$2,000',
      completion: {
        label: 'Cancelled',
        status: 'exception',
        value: 100,
      },
    },
    {
      key: '8',
      company: {
        name: 'Redesign Online Store',
        logo: require('../assets/home/home-8.jpeg'),
      },
      budget: '$2,000',
      completion: {
        label: 'Cancelled',
        status: 'exception',
        value: 100,
      },
    },
    {
      key: '9',
      company: {
        name: 'Redesign Online Store',
        logo: require('../assets/home/home-9.jpeg'),
      },
      budget: '$2,000',
      completion: {
        label: 'Cancelled',
        status: 'exception',
        value: 100,
      },
    },
    {
      key: '10',
      company: {
        name: 'Redesign Online Store',
        logo: require('../assets/slider/s-1.jpeg'),
      },
      budget: '$2,000',
      completion: {
        label: 'Cancelled',
        status: 'exception',
        value: 100,
      },
    },
    {
      key: '11',
      company: {
        name: 'Redesign Online Store',
        logo: require('../assets/slider/s-2.jpeg'),
      },
      budget: '$2,000',
      completion: {
        label: 'Cancelled',
        status: 'exception',
        value: 100,
      },
    },
  ];

  import lineChart from "../components/chart/lineChart";
  import barChart from "../components/chart/barChart";

  export default {
    name: '',
    data() {
      return {
        stats: [
          {
            title: "Today's Cartoon",
            value: 10,
            prefix: "",
            suffix: "+30%",
            icon: `
						<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.43338 7.41784C8.58818 7.31464 8.77939 7.2224 9 7.15101L9.00001 8.84899C8.77939 8.7776 8.58818 8.68536 8.43338 8.58216C8.06927 8.33942 8 8.1139 8 8C8 7.8861 8.06927 7.66058 8.43338 7.41784Z" fill="#111827"/>
							<path d="M11 12.849L11 11.151C11.2206 11.2224 11.4118 11.3146 11.5666 11.4178C11.9308 11.6606 12 11.8861 12 12C12 12.1139 11.9308 12.3394 11.5666 12.5822C11.4118 12.6854 11.2206 12.7776 11 12.849Z" fill="#111827"/>
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM11 5C11 4.44772 10.5523 4 10 4C9.44772 4 9 4.44772 9 5V5.09199C8.3784 5.20873 7.80348 5.43407 7.32398 5.75374C6.6023 6.23485 6 7.00933 6 8C6 8.99067 6.6023 9.76515 7.32398 10.2463C7.80348 10.5659 8.37841 10.7913 9.00001 10.908L9.00002 12.8492C8.60902 12.7223 8.31917 12.5319 8.15667 12.3446C7.79471 11.9275 7.16313 11.8827 6.74599 12.2447C6.32885 12.6067 6.28411 13.2382 6.64607 13.6554C7.20855 14.3036 8.05956 14.7308 9 14.9076L9 15C8.99999 15.5523 9.44769 16 9.99998 16C10.5523 16 11 15.5523 11 15L11 14.908C11.6216 14.7913 12.1965 14.5659 12.676 14.2463C13.3977 13.7651 14 12.9907 14 12C14 11.0093 13.3977 10.2348 12.676 9.75373C12.1965 9.43407 11.6216 9.20873 11 9.09199L11 7.15075C11.391 7.27771 11.6808 7.4681 11.8434 7.65538C12.2053 8.07252 12.8369 8.11726 13.254 7.7553C13.6712 7.39335 13.7159 6.76176 13.354 6.34462C12.7915 5.69637 11.9405 5.26915 11 5.09236V5Z" fill="#111827"/>
						</svg>`,
          },
          {
            title: "A week Cartoon",
            value: 20,
            suffix: "+20%",
            icon: `
						<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 6C9 7.65685 7.65685 9 6 9C4.34315 9 3 7.65685 3 6C3 4.34315 4.34315 3 6 3C7.65685 3 9 4.34315 9 6Z" fill="#111827"/>
							<path d="M17 6C17 7.65685 15.6569 9 14 9C12.3431 9 11 7.65685 11 6C11 4.34315 12.3431 3 14 3C15.6569 3 17 4.34315 17 6Z" fill="#111827"/>
							<path d="M12.9291 17C12.9758 16.6734 13 16.3395 13 16C13 14.3648 12.4393 12.8606 11.4998 11.6691C12.2352 11.2435 13.0892 11 14 11C16.7614 11 19 13.2386 19 16V17H12.9291Z" fill="#111827"/>
							<path d="M6 11C8.76142 11 11 13.2386 11 16V17H1V16C1 13.2386 3.23858 11 6 11Z" fill="#111827"/>
						</svg>`,
          },
          {
            title: "One Month Cartoon",
            value: 15,
            prefix: "-",
            status: "danger",
            suffix: "-20%",
            icon: `
						<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17157 5.17157C4.73367 3.60948 7.26633 3.60948 8.82843 5.17157L10 6.34315L11.1716 5.17157C12.7337 3.60948 15.2663 3.60948 16.8284 5.17157C18.3905 6.73367 18.3905 9.26633 16.8284 10.8284L10 17.6569L3.17157 10.8284C1.60948 9.26633 1.60948 6.73367 3.17157 5.17157Z" fill="#111827"/>
						</svg>`,
          },
          {
            title: "Half a year Cartoon",
            value: 30,
            prefix: "",
            suffix: "+10%",
            icon: `
						<svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C7.79086 2 6 3.79086 6 6V7H5C4.49046 7 4.06239 7.38314 4.00612 7.88957L3.00612 16.8896C2.97471 17.1723 3.06518 17.455 3.25488 17.6669C3.44458 17.8789 3.71556 18 4 18H16C16.2844 18 16.5554 17.8789 16.7451 17.6669C16.9348 17.455 17.0253 17.1723 16.9939 16.8896L15.9939 7.88957C15.9376 7.38314 15.5096 7 15 7H14V6C14 3.79086 12.2091 2 10 2ZM12 7V6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6V7H12ZM6 10C6 9.44772 6.44772 9 7 9C7.55228 9 8 9.44772 8 10C8 10.5523 7.55228 11 7 11C6.44772 11 6 10.5523 6 10ZM13 9C12.4477 9 12 9.44772 12 10C12 10.5523 12.4477 11 13 11C13.5523 11 14 10.5523 14 10C14 9.44772 13.5523 9 13 9Z" fill="#111827"/>
						</svg>`,
          },
        ],
        cartoonList: [
          {
            url: require('../assets/home/home-1.jpeg'),
            title: '宫崎骏龙猫',
            desc: '《龙猫》是由宫崎骏执导，日高法子、坂本千夏、糸井重里配音的动画电影，于1988年4月16日在日本上映。高清重制版于2018年12月14日在中国公映。该片讲述了草壁达郎的妻子草壁靖子生病住院后，他带着草壁皋月与四岁的妹妹草壁梅回到乡间居住的故事。',
            httpUrl: 'https://www.iqiyi.com/v_217s19i6bxw.html'
          },
          {
            url: require('../assets/home/home-2.jpeg'),
            title: '大耳朵图图',
            desc: '该剧讲述了胡图图和小伙伴的成长故事',
            httpUrl: 'http://www.le.com/comic/94154.html'
          },
          {
            url: require('../assets/home/home-3.jpeg'),
            title: '小黄人',
            desc: '《小黄人大眼萌》是一部2015年的美国喜剧动画电影，该影片由凯尔·巴尔达、皮艾尔·柯芬执导，桑德拉·布洛克、皮艾尔·柯芬、史蒂夫·卡瑞尔配音，由照明娱乐公司和环球影业联合出品。该影片讲述了小黄人的历史以及他们要找到强大的新主人，并辅佐他完成作恶事业的故事，背景涉及到伦敦、纽约等几个大城市，该片于2015年9月13日以3D及IMAX 3D格式在中国上映。',
            httpUrl: 'https://www.iqiyi.com/v_19rrkczbec.html?vfm=2008_aldbd&fc=828fb30b722f3164&fv=p_02_01'
          },
          {
            url: require('../assets/home/home-4.jpeg'),
            title: '三只松鼠之松鼠小镇',
            desc: '该部动画片是国产童话题材，由安徽松鼠娱乐有限公司进行制作与发行。动画片以“正义、团结、和平”为主题，讲述三只可爱的小松鼠与人类一起努力收集手环碎片，不怕与恶势力做斗争，建设松鼠小镇的故事。',
            httpUrl: 'https://www.mgtv.com/b/335140/7236375.html?cxid=95kqkw8n6'
          },
          {
            url: require('../assets/home/home-5.jpeg'),
            title: '女巫的扫把',
            desc: '《女巫的扫帚》改编自同名儿童画本《女巫的扫帚》，由著名动画片导演Jan Lachauer执导，西蒙·佩吉，吉莲·安德森等配音，讲述了一个关于友情与亲情的魔幻 [1]  故事',
            httpUrl: 'https://v.qq.com/x/cover/mzc00200k549l9q/x30002bf4co.html'
          },
          {
            url: require('../assets/home/home-6.jpeg'),
            title: '喜洋洋与灰太狼',
            desc: '《喜羊羊与灰太狼》动画以羊和狼两大族群间妙趣横生的故事为主线，讲述了羊狼凭借友谊和热爱，共同保卫家园、完成梦想的励志故事。',
            httpUrl: 'https://www.bilibili.com/bangumi/play/ss32544?bsource=pc_sem_baidu_dm_35387990&keywordid=324569253443&userid=35387990&planid=169441587&unitid=6240653082&creative=53286364484'
          },
          {
            url: require('../assets/home/home-7.jpeg'),
            title: '小熊维尼',
            desc: '维尼是美国迪士尼卡通《小熊维尼》中的角色。',
            httpUrl: 'https://www.baidu.com/link?url=nNbrwKi4nDjndlc9ajAdFt6_hqnLyQDhAWg2uQBynWQFYvKSJCOdqb1ZTkXRhQBFYw7X6_BPIlRN8RR7NDM11y0Exx50LHdmm594EZqxqKLMtgCkraVWJnYzIXk_vD3_&wd=&eqid=c215c7ef000b4bcf0000000261d6afbc'
          },
          {
            url: require('../assets/home/home-9.jpeg'),
            title: '超能陆战队',
            desc: '《超能陆战队》（Big Hero 6）是迪士尼与漫威联合出品的第一部动画电影，取材于由Steven T. Seagle和Duncan Rouleau在1998年开始连载的以日本为背景的动作科幻类漫画。',
            httpUrl: 'https://www.baidu.com/link?url=QYFjJiLnT7WoheR-dOnpP1HBecfb_P9yArU5WGsK6XQREdTIFJNqTJp9Ltjg_MhxjKlLmIhV2hrvrkZ4CCmGA_&wd=&eqid=cbdfb4a200030eb50000000261d6afcc'
          }
        ],
        tableData,
        tableColumns,
        pagination:{
          total:0,
          defaultPageSize:10,
          showTotal: total => `共 ${total} 条数据`,
          showSizeChanger:true,
          pageSizeOptions: ['10', '15', '20', '50'],
          onShowSizeChange:(current, pageSize) => this.pageSize = pageSize
        },
        queryData: "",
        barData: {
          labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
          datasets: [
              {
                label: "Dataset 1",
                backgroundColor: '#FF6384',
                data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
                maxBarThickness: 20,
                //borderWidth: 2,
                //borderRadius: 6,
                borderSkipped: false,
                borderColor: '#000',
              },
            {
              label: "Dataset 2",
              backgroundColor: '#36A2EB',
              data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
              maxBarThickness: 20,
              //borderWidth: 2,
              //borderRadius: 6,
              borderSkipped: false,
              borderColor: '#000',
            },
            {
              label: "Dataset 3",
              backgroundColor: '#FFCE56',
              data: [850, 600, 500, 620, 900, 500, 900, 630, 900],
              maxBarThickness: 20,
              //borderWidth: 2,
              //borderRadius: 6,
              borderSkipped: false,
              borderColor: '#000',
            },
          ],
        },
        lineData: {
          labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
            label: "Mobile apps",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#1890FF",
            backgroundColor: "#36A2EB",
            borderWidth: 3,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6
          },
          {
            label: "Websites",
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#B37FEB",
            backgroundColor: '#EB99E0',
            borderWidth: 3,
            data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
            maxBarThickness: 6
          }],
        },
      }
    },
    components: {
      lineChart,
      barChart
    },
    methods: {
      tableChange(e){
        let queryData = {
          current_page:e.current,//当前页数
          per_page:e.pageSize//每页显示条数
        };
        // 合并原有的筛选条件，这样才能在原有的基础上进行分页
        Object.assign(queryData, this.queryData)
        this.getTableInfo(queryData)
      },
      getTableInfo(queryData) {
        console.log(queryData)
      },
      jumpToDetail(url) {
        this.$router.push({
          path: '/cartoonDetail',
          query: {
            url: url
          }
        })
      }
    },
    mounted() {

    }
  }
</script>
