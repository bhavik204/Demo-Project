<template>
<div >

    <div style="flex-direction:row"> 
        <div v-for="(btn,id) in buttonData" :key="id" class="gender-button-value cursor-pointer-globle" :style="{backgroundColor:btn.color}"  @click.native="tabData(id)">
           <div class="gender-pad-lft cursor-pointer-globle" v-if="hasIcons === true">
               <image class="tab-icon " :src="btn.icon" />
            </div> 
            <text class="gender-button-char cursor-pointer-globle" :style="{color:btn.fontColor}" >{{btn.Title}}</text>
        </div>
        
    </div>
</div>
</template>


<script>
    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    
    export default {
        props: {
            option1: {
                type: String,
                default: 'Male'
            },
            option2: {
                type: String,
                default: 'Female'
            },
            hasIcons: {
                type: Boolean,
                default: true
            },
            value: String
        },
        created() {
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }

        },
        mounted() {
            // Toggle Active when value called from store
            console.log('Value of gender: ' + this.value);
            if(this.value === 'Male' || this.value === 'Yes') {
                this.tabData(0);
            } else if(this.value === 'Female' || this.value === 'No') {
                this.tabData(1);
            } else {
                for(let i = 0 ; i < this.buttonData.length; i++) {
                    this.buttonData[i].color = '#fff';
                    this.buttonData[i].fontColor = '#000000' 
                    this.buttonData[i].icon=this.buttonData[i].deactiveIcon;
                }

            }

        },

        components: {  },
        
        data() {
            return {

           
            platform:invalid,
            isRightShow: false,
            height: 400,
            // tabinputone:true,
            // tabinputtwo:false,
            buttonData:[
                {
                Title: this.option1,
                color:'#fff',
                fontColor:'#000000',
                icon:'http://159.89.161.64:8081/web/assets/Boy-black.png',
                activeIcon:'http://159.89.161.64:8081/web/assets/Boy-white.png',
                deactiveIcon: 'http://159.89.161.64:8081/web/assets/Boy-black.png',

                },
                {
                Title: this.option2,
                color:'#fff',
                fontColor:'#000000',
                icon:'http://159.89.161.64:8081/web/assets/Girl-black.png',
                activeIcon:'http://159.89.161.64:8081/web/assets/Girl-white.png',
                deactiveIcon: 'http://159.89.161.64:8081/web/assets/Girl-black.png',
                }
            ],

            }
        },

        methods: {
            tabData(ind){
                var me = this;
                // console.log(ind)
                switch (ind) {
                    case 0:
                        for(let i = 0 ; i < this.buttonData.length; i++) {
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

                                let val = this.option1;
                                // this.$emit('selectedGender', {value: this.buttonData[i].Title});
                                this.$emit('selectedGender', {value: val});
                                
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

                            let val = this.option2;
                            this.$emit('selectedGender', {value: val});

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


<style scoped>
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
   width: 28px;
    height: 28px;
    position: absolute;
    top: -15px;
    left: -15px;
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