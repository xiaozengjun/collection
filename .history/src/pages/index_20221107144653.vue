<!--  -->
<template>
    <el-container>
        <el-header height="100px">
            <h3>技术一部摸鱼网</h3>
            <div class="baidu">
                <img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png" alt="">
                <el-input v-model="baiduData"></el-input><el-button @click="baidu">百度一下</el-button>
            </div>
        </el-header>
        <el-container class="main_s">
            <el-aside width="160px">
                <el-menu :default-openeds="['1', '3']" :default-active="activeIndex">
                    <el-menu-item :index='item.id' v-for="(item , index) in linkData.value" :key = "index">
                        <img class="menuImg" :src="item.img" alt="">
                        <span slot="title">{{item.name}}</span>
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
        <el-footer>仅供技术一部内部参考, 特供网页</el-footer>
    </el-container>
</template>

  
<script>
import { allData } from '../utils/data.js'
export default {
    data() {
        return {
            linkData: {},
            allData,
            baiduData:'',
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
                console.log(this.heightData)
                for(let i=0; i<this.heightData.length;i++) {
                    if(stop>=this.heightData[i][0] && stop<this.heightData[i][1]) {
                        this.activeIndex = this.orderData[i]
                        break
                    }
                }
                console.log(this.activeIndex)
            }
        })
    },
    methods: {
        baidu() {
            window.open('https://www.baidu.com/s?ie=' + this.baiduData)
        }
    },
};
</script>

<style lang='less' scoped>
.el-aside {
    color: #333;
}
/deep/ .el-menu-item, .el-submenu__title {
    height: auto;
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
        background: linear-gradient(to right, red, orange, yellow, green, cyan, blue,  purple);
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
    width: 1200px;
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
</style>