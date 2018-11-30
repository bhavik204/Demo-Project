<template>
<div >

    <div class="gender-button-padding gender-button-center " style="flex-direction:row">
        <div v-for="(btn,id) in buttonData" :key="id" class="gender-button-value cursor-pointer-globle" :style="{backgroundColor:btn.color}" @click.native="tabData(id)" >
           <div class="gender-pad-lft cursor-pointer-globle">
               <image class="tab-icon   " :src="btn.icon" />
            </div> 
            <text class="gender-button-char cursor-pointer-globle" :style="{color:btn.fontColor}">{{btn.Title}}</text>
        </div>
        
    </div>
</div>
</template>


<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    
    export default {
        created() {
        if (typeof WXEnvironment === 'object') {
        this.platform = WXEnvironment.platform || unknown
        return this.platform
        }
        },

        components: {  },
        
        data: () => ({
            platform:invalid,
            isRightShow: false,
            height: 400,
            // tabinputone:true,
            // tabinputtwo:false,
            buttonData:[
                {
                Title:'Male',
                color:'#fff',
                fontColor:'#000000',
                icon:'../../web/assets/gender-male-black.png',
                activeIcon:'../../web/assets/gender-male-white.png',
                deactiveIcon: '../../web/assets/gender-male-black.png',

                },
                {
                Title:'Female',
                color:'#fff',
                fontColor:'#000000',
                icon:'../../web/assets/gender-female-black.png',
                activeIcon:'../../web/assets/gender-female-white.png',
                deactiveIcon: '../../web/assets/gender-female-black.png',
                }
            ],

        }),

        methods: {
            tabData(ind){
                var me = this;
                console.log(ind)
                switch (ind) {
                    case 0:
                        for(let i=0 ; i < this.buttonData.length; i++) {
                            if(i == 0) {
                                this.buttonData[i].color = '#3b371e';
                                this.buttonData[i].fontColor ='#fff';
                                this.buttonData[i].icon=this.buttonData[i].activeIcon;
                                // this.tabinputone = true
                            }
                            else {
                                this.buttonData[i].color = '#fff';
                                this.buttonData[i].fontColor = '#000000' 
                                 this.buttonData[i].icon=this.buttonData[i].deactiveIcon;
                                // this.tabinputtwo = false

                            }
                        }
                    break;
                    case 1:
                        for(let i=0 ; i < this.buttonData.length; i++) {
                            if(i == 1) {
                            this.buttonData[i].color = '#3b371e';
                            this.buttonData[i].fontColor = '#fff'
                           this.buttonData[i].icon=this.buttonData[i].activeIcon;

                            // this.tabinputtwo = true
                            }
                            else {
                            this.buttonData[i].color = '#fff';
                            this.buttonData[i].fontColor = '#000000';
                             this.buttonData[i].icon=this.buttonData[i].deactiveIcon;

                            // this.tabinputone = false

                            }
                        }
                    break;
                    
                    default:

                }
            }, 

            openRightPopup () {
                this.isRightShow = true;
                },
                popupOverlayRightClick () {
                this.isRightShow = false;
                },
        }
    };
</script>


<style>
@media only screen and (min-width : 320px) {

.gender-button-padding{
   
    background-color: #fff;
    padding-top: 25px;
    padding-bottom: 25px;
    margin-top: 10px
}
.gender-button-center {
     justify-content: center;
}
.gender-button-char{
    font-size: 12px;  
    font-family:robotoregular;
}
.gender-button-value {
    width: 80px;
    justify-content: center;
    height: 30px;
    font-size: 14px;
    padding:5px;
    font-family:robotoregular;
    /* border:1px solid rgb(139,139,139); */
    border-bottom: 1px solid rgb(139,139,139);
    border-top: 1px solid rgb(139,139,139);
    border-left: 0.5px solid  rgb(139,139,139);
    border-right: 0.5px solid  rgb(139,139,139);
    flex-direction: row;
    align-items: center;
}
.gender-border{

}
.tab-icon {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -8px;
    left: -10px;
}
.gender-pad-lft {
    padding-left: 10px;
}
.cursor-pointer-globle {
    cursor: pointer;
}
}
@media only screen and (min-width : 768px){

}
@media only screen and (min-width : 992px){

}
</style>