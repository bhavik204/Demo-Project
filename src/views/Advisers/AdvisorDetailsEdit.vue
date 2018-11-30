<template>
    <div style="background-color: #F7F7F7">
        <div class="ad-edit-frm-m-p">
            <div class="ad-edit-frm-flx-d">
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Branch" vx-placeholder="Kolhapur One, Kolhapur, Maharashtra" @valueReading="ValueDisp" :vx-model="name"></vx-input-box>
                </div>
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Branch Manager" vx-placeholder="Ravindra Tomar (BM444354)" :field-disabled="false"></vx-input-box>
                </div>
            </div>
            <div class="ad-edit-frm-flx-d">
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Sales Manager" vx-placeholder="Amit Malapurkar (SM88843)" :field-disabled="false"></vx-input-box>
                </div>
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-type="date" vx-label="Date of Birth" vx-placeholder="New Date of Birth" ></vx-input-box>
                </div>
            </div>
            <div class="ad-edit-frm-flx-d">
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Address 1" vx-placeholder="New Address 1"></vx-input-box>
                </div>
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Address 2" vx-placeholder="New Address 2" ></vx-input-box>
                </div>
            </div>
            <div class="ad-edit-frm-flx-d">
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Address 3" vx-placeholder="New Address 3"></vx-input-box>
                </div>
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="PAN No" vx-placeholder="New Pan No." ></vx-input-box>
                </div>
            </div>
            <div class="ad-edit-frm-flx-d">
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Mobile No" vx-placeholder="New Mobile No."></vx-input-box>
                </div>
                <div class="ad-edit-frm-cont">
                    <vx-input-box vx-label="Email" vx-placeholder="New Email" ></vx-input-box>
                </div>
            </div>

            <div style="flex-direction:row;justify-content:space-between" v-if="platform !== 'Web'">
                <div class="ad-edit-frm-cont">
                    <s-button btn-name="Back" btn-width="300px" @click="jump('/advisory_details')" btn-icon="https://www.materialui.co/materialIcons/navigation/arrow_back_black_192x192.png"></s-button>
                </div>
                <div class="ad-edit-frm-cont">
                    <p-button btn-name="Save" btn-width="300px" btn-icon="https://www.materialui.co/materialIcons/content/save_white_192x192.png"></p-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import vxInputBox from '../../components/vx-input-box/vx-input-box'
    import PButton from '../../components/vx-primary-button/vx-primary-button'
    import SButton from '../../components/vx-primary-button/vx-scondary-button'
    import dropDown from '../CFR/cfr-dropDown-apk'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'
    export default {
        props: {
           
        },
        components: {
            vxInputBox,
            PButton,
            SButton,
            dropDown
        },
        created() {
            this.$store.commit('SET_PAGE_TITLE' , 'Advisors');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data() {
            return {
                platform: invalid,
                name: 'Khan Usama'
            }
        },
        methods: {
            jump(to) {
                if (this.$router) {
                    this.$router.push(to)
                }
            },

            ValueDisp(e) {
                this.name = e.value;
                console.log(this.name);
            }
        }
    }
</script>

<style>
    /* This class is used for direction */
    .ad-edit-frm-flx-d {
        flex-direction: column;
    }
    /* Margin and padding */
    .ad-edit-frm-m-p {
        margin: 20px;
        border-radius: 5px;
        padding: 20px;
        background-color: #FFFFFF;
        border-width: 1px;
        border-style: solid;
        border-color: rgb(185, 185, 185);
    }

    /* Container for fields */
    .ad-edit-frm-cont {
        margin-bottom: 20px;
    }

    @media screen and (min-width:320px){
        
    }
    @media screen and (min-width:768px){
        .ad-edit-frm-flx-d {
            flex-direction: row;
        }
        .ad-edit-frm-m-p {
            margin:0;
            border-radius: 0;
            padding: 5px;
            border-width: 0;
            border-style: none;
            border-color: #FFFFFF;
        }
        /* Container for fields */
        .ad-edit-frm-cont {
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 20px;
            flex: 1;
        }

    }
    @media screen and (min-width:992px){

        
    }
</style>
