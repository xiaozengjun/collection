<!--  -->
<template>
    <el-container>
        <el-header height="100px">
            <h3>网站收集, 自我提升</h3>
            <div class="baidu">
                <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
                <el-input v-model="baiduData"></el-input><el-button @click="baidu">百度一下</el-button>
            </div>
        </el-header>
        <el-container class="main_s">
            <el-aside :width="collapse? '60px':'160px'">
                <el-menu :default-openeds="['1', '3']" :default-active="activeIndex" :collapse="collapse">
                    <el-menu-item :index='item.id' v-for="(item , index) in linkData.value" :key = "index" @click="jump(index)">
                        <img class="menuImg" :src="item.img" alt="">
                        <span slot="title" v-show="!collapse">{{item.name}}</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <el-card class="box-card" :ref="'card' + index" v-for="(item , index) in orderData" :key="index">
                    <div slot="header" class="clearfix" :id="index">
                        <span>{{objName[item]}}</span>
                    </div>
                    <div class="itemBox">
                        <div v-for="(items , index2) in allData[item]" :key="index2" class="text item">
                        <a :href="items.url" target="_blank" rel="noopener noreferrer">
                            <img :src="items.src" alt="">
                            <span>{{items.text}}</span>
                        </a>
                    </div>
                    </div>
                </el-card>
            </el-main>
        </el-container>
        <div class="rightBox">
            <el-card>
                <div>
                    {{title}}
                </div>
                <p>--- {{name}} 「 {{Abstract}} 」</p>
                <img src="../assets/gif/figure.gif" alt="">
            </el-card>
            <el-card>
                <div class="rankingList">
                <div class="f-s-15">工具集</div>
                <div class="main-box">
                    <a class="link bg0" href="https://www.lingdaima.com/" target="_blank">零代码</a>
                    <a class="link bg0" href="https://www.linuxcool.com/" target="_blank">Linux命令</a>
                    <a class="link bg0" href="https://www.bejson.com/" target="_blank">Json格式转换</a>
                    <a class="link bg0" href="https://tool.lu/html/" target="_blank">Html格式转换</a>
                    <a class="link bg0" href="https://tool.lu/js/" target="_blank">Js格式转换</a>
                    <a class="link bg0" href="https://tool.lu/css/" target="_blank">Css格式转换</a>
                    <a class="link bg0" href="https://tool.lu/sql/" target="_blank">Sql格式转换</a>
                    <a class="link bg0" href="https://tool.lu/xml/" target="_blank">Xml格式转换</a>
                    <a class="link bg1" href="https://www.iloveimg.com/zh-cn" target="_blank">在线图片编辑</a>
                    <a class="link bg1" href="http://www.zuohaotu.com/cut-image.aspx" target="_blank">图片合并分割</a>
                    <a class="link bg1" href="https://www.onlinedo.cn/img-shuiyin" target="_blank">图片加水印</a>
                    <a class="link bg1" href="https://www.apowersoft.cn/image-watermark-remover" target="_blank">图片去水印</a>
                    <a class="link bg1" href="https://convertio.co/zh/" target="_blank">文件格式转换</a>
                    <a class="link bg1" href="https://www.remove.bg/zh" target="_blank">图片背景消除</a>
                    <a class="link bg1" href="https://www.6k6k.cn/" target="_blank">AI抠图</a>
                    <a class="link bg1" href="https://koutu.gaoding.com/" target="_blank">在线抠图</a>
                    <a class="link bg1" href="https://tinypng.com/" target="_blank">图片无损压缩</a>
                    <a class="link bg2" href="https://www.uupoop.com/#/" target="_blank">在线PS软件</a>
                    <a class="link bg2" href="https://www.gaoding.com/s/newmedia" target="_blank">搞定设计</a>
                    <a class="link bg2" href="https://tool.lu/" target="_blank">在线工具</a>
                    <a class="link bg2" href="https://818ps.com/" target="_blank">图怪兽</a>
                    <a class="link bg2" href="https://www.tutieshi.com/" target="_blank">制作Gif图片</a>
                    <a class="link bg2" href="https://www.designevo.com/cn/logo-maker/" target="_blank">Logo设计</a>
                    <a class="link bg2" href="https://www.tutieshi.com/compose/" target="_blank">Gif之家</a>
                    <a class="link bg2" href="http://www.ico51.cn/" target="_blank">生成透明ICO</a>
                    <a class="link bg3" href="https://www.pexels.com/zh-cn/" target="_blank">Pexels</a>
                    <a class="link bg3" href="https://pixabay.com/" target="_blank">pixabay</a>
                    <a class="link bg3" href="https://unsplash.com/" target="_blank">Unsplash</a>
                    <a class="link bg3" href="https://pxhere.com/" target="_blank">Pxhere</a>
                    <a class="link bg4" href="https://www.ilovepdf.com/zh-cn" target="_blank">PDF全能工具</a>
                    <a class="link bg4" href="https://lightpdf.com/zh/" target="_blank">Light PDF</a>
                    <a class="link bg4" href="https://pdf2doc.com/zh/" target="_blank">PDF2Word</a>
                    <a class="link bg4" href="https://pdf.yozocloud.cn/p/home" target="_blank">永中PDF</a>
                    <a class="link bg5" href="http://tool.liumingye.cn/video/" target="_blank">VIP视频解析</a>
                    <a class="link bg5" href="http://data.viggo.site/" target="_blank">数据可视化</a>
                    <a class="link bg5" href="https://www.videvo.net/" target="_blank">视频素材下载</a>
                    <a class="link bg5" href="https://tool.liumingye.cn/avbv/" target="_blank">B站AV/BV互转</a>
                </div>
                </div>
            </el-card>
        </div>
        <el-footer>仅供技术一部内部参考, 特供网页</el-footer>
    </el-container>
</template>
  
<script>
import { allData } from '../utils/data.js'
import { hitokoto } from '../api/collection'
export default {
    data() {
        return {
            linkData: {},
            allData,
            baiduData:'',
            title: '当然是你最重要了，不说了，游戏开了!!',
            name: '小曾',
            Abstract: '谁重要',
            orderData: [
                'course',
                'community',
                'archive',
                'classLib',
                'uiLib',
                'frame',
                'chartFrame',
                'Design',
                'Icon',
                'algorithm',
                'language',
                'collaborativeOffice',
                'designTool',
                'buildTools',
                'svgTool',
                'cssTool',
                'tool',
                'vscode'
            ],
            objName: {
                algorithm: '算法',
                course: '教程',
                community: '社区',
                uiLib: 'UI框架',
                frame: '框架',
                archive: '文档',
                buildTools: '构建工具',
                classLib: '类库',
                tool: '工具',
                Design: '设计',
                collaborativeOffice: '协同办公',
                language: '语言',
                Icon: '图标',
                cssTool: 'css工具',
                svgTool: 'svg工具',
                designTool: '设计工具',
                chartFrame: '可视化图表库',
                vscode: 'vscode插件'
            },
            heightData: [],
            activeIndex: 'course',
            collapse: false,
        }
    },
    created() {
        this.linkData.value = this.orderData.map(item => {
            return {
                id: item,
                name: this.objName[item],
                img: require('../assets/img/'+this.objName[item]+'.png'),
            }
        })
        this.rhesis()
        this.screenWidth()
    }, 
    mounted() {
        this.$nextTick(function () {
            let index =0
            for(let i=0; i<this.orderData.length; i++) {
                let a = i? index : 0
                let b = document.getElementsByClassName("box-card")[i].clientHeight + (i+1*21) + index
                index = b
                this.heightData.push([a , b])
            }
            
            window.onscroll = (epic)=>{
                var stop = document.documentElement.scrollTop; 
                for(let i=0; i<this.heightData.length;i++) {
                    if(stop>=this.heightData[i][0] && stop<this.heightData[i][1]) {
                        this.activeIndex = this.orderData[i]
                        break
                    }
                }
            }

            window.onresize = ()=> {
                this.screenWidth()
            }
        })
    },
    methods: {
        baidu() {
            window.open('https://www.baidu.com/s?wd=' + this.baiduData)
        },
        jump(index) {
            window.scrollTo({
                top:this.heightData[index][0],
                left:0,
                behavior: "smooth"
            });
        },
        async rhesis() {
            let data =  await hitokoto()
            console.log(data)
        },
        screenWidth() {
            window.screenWidth = document.body.clientWidth;
            if(window.screenWidth < 1200) {
                this.collapse=true
            }else {
                this.collapse=false
            }
        }
    },
};
</script>

<style lang='less' scoped>
.el-aside {
    color: #333;
}
/deep/ .el-menu-item, .el-submenu__title {
    height: 38px;
    line-height: 35px;
}
.menuImg {
    width: 20px;
    height: 20px;
}
.el-header {
    border: 1px solid #f3f3f3;
    line-height: 100px;
    text-align: center;
    position: sticky;
    top: 0;
    background-color: rgb(255 255 255 / 95%);
    z-index: 1000;
    h3 {
        padding: 0;
        margin: 0;
    }
    h3 {
        background: linear-gradient(to right, rgb(121, 97, 97), rgb(104, 104, 80), rgb(105, 75, 75), rgb(95, 84, 84), rgb(170, 140, 140), rgb(75, 75, 95),  rgb(133, 111, 111));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation:  hue 3s linear infinite;
        font-size: 30px;
    }
    @keyframes hue {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
}
.el-menu {
    padding: 20px 0;
    position: fixed;
    top: 100px;
}
.baidu {
    position: absolute;
    right: 0;
    top: 0;
    width: 600px;
    /deep/.el-input {
        width: 60%;
        border-right: 0 !important;
    }
    /deep/.el-button {
        border: 0 !important;
        background-color: #4e6ef2;
        border-radius: 0px 4px 4px 0px !important;
        color: #fff;
        padding: 13px 20px;
        &:hover {
            background-color: #4662D9;
        }
    }
    img {
        width: 100px;
        margin-top: 16px;
        vertical-align: top;
    }
}
/deep/.el-input__inner {
    border-radius: 4px 0 0 4px !important;
}
.main_s {
    width: auto;
    max-width: 1200px;
    margin: auto;
}
.el-footer {
    text-align: center;
    color: #999;
    font-size: 16px;
}
.el-card {
    margin-bottom: 20px;
    .itemBox {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        img {
            width: 22px;
            height: 22px;
            vertical-align: bottom;
        }
        .text {
            display: flex;
            margin: 10px 0;
            width: 158px;
        }
    }
}
/deep/.el-card__body {
    padding: 30px 20px;
}
a {
    text-decoration: none;
    color: #333;
    font-size: 14px;
}
a:hover {
    color: #4e6ef2;
}
/deep/.el-menu-item.is-active {
    background-color: #ecf5ff;
}
.rightBox {
    position:fixed;
    top: 120px;
    right: 20px;
    width: 310px;
    font-size: 14px;
    p {
        text-align: right;
    }
    img {
        width: 100%;
    }
}
@media (max-width: 1480px) {
    .baidu {
        display: none;
    }
}
@media (max-width: 1830px) {
    .rightBox {
        display: none;
    }
}

.link {
    font-size: 12px;
    border-radius: 5px;
    color: #333;
    margin-right: 5px;
    margin: 5px;
    display: inline-block;
    padding: 5px;
  }
  .bg0 {
    background-color: #f5f7fd;
  }
  .bg1 {
    background-color: #efede8;
  }
  .bg4 {
    background-color: #beecbe;
  }
  .bg3 {
    background-color: #d6d6ec;
  }
  .bg2 {
    background-color: #f5e6e6;
  }
  .bg5 {
    background-color: #eee3e3;
  }
</style>