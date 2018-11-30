<template>
    <div class="">
        <!-- row -->
        <div class="cfr-outer-row mstr-bx-padding shadow-x">
            <!-- <div class="mstr-bx-padding">
                <text class="cfr-sts-heading font-weighted-bold">New</text>
                <text class="date-time-font-size label-x-font-color">05:19, March 19, 2016</text>
            </div> -->
            <div class="c-f-r-n-dt-tm-pos">
                <text class="date-time-font-size label-x-font-color">05:19, March 19, 2016</text>
            </div>
            <div class="cfr-noti-crd-row mstr-bx-padding">
                <div class="cfr-data-bx" v-for="(cfrData, liIndex) in cfrDataSource.data" :key="liIndex">
                    <text class="date-time-font-size label-x-font-color">{{ cfrData.label }}</text>
                    <text class="cfr-ntfs-form-label">{{ cfrData.data }}</text>
                </div>
                <div class="cfr-data-btn">
                    <div class="master-custom-btn btn-cursor" @click.native="navigationUsingConditions">
                        <text class="date-time-font-size master-color-bg-black btn-cursor">View Details</text>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script scoped>
    export default {
        props: {
            cfrDataSource: Array
        },
        methods: {
            navigationUsingConditions() {
                var me = this;
                let arrLength = this.cfrDataSource.data.length;
                for(let i = 0; i < arrLength; i++) {
                    if(this.cfrDataSource.data[i].label === 'CFR Type' && this.cfrDataSource.data[i].data === 'BOP') {
                        me.$router.push('/extrapremium');
                        
                    } else if (this.cfrDataSource.data[i].label === 'CFR Type' && this.cfrDataSource.data[i].data === 'Medical') {
                        me.$router.push('/medicalcfr');
                    }
                }
            }
        }
    }
</script>

<style >
    .cfr-outer-row {
        flex-direction: row;
        background-color: #FFF;
        align-items: center;
    }
    
    .cfr-noti-crd-row {
        flex-direction: row;
        flex-flow: wrap;
        flex-wrap: wrap;
        flex: 1;
    }
    
    .font-weighted-bold {
        font-weight: bold;
    }
    
    .label-x-font-color {
        color: #9d9d9d;
    }
    
    /* Button width */
    .cfr-data-btn {
        width: 110px;
        padding: 5px;
    }
    .mstr-bx-padding {
        padding: 10px;
    }
    .master-color-bg-black {
        color: #000;
    }

    
    @media (min-width: 320px) {
        .cfr-sts-heading {
            font-size: 14px;
        }
        .date-time-font-size {
            font-size: 11px;
        }
        .cfr-ntfs-form-label {
            font-size: 12px;
        }
        .shadow-x {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .cfr-data-bx {
            width: 50%;
            padding: 5px;
        }
        .mstr-bx-padding {
            padding: 5px;
        }
        .master-custom-btn {
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            height: 30px;
            min-width: 88px;
            position: relative;
            cursor: pointer;
            border: 1.2px solid #000;
        }

        .cfr-ntf-visiblity {
            display: none;
        }

        /* This class is same as app-notif component - please dont change any thing */
        .c-f-r-n-dt-tm-pos {
            position: absolute;
            top: 7px;
            right: 10px;
        }
    }
    
    @media (min-width: 768px) {
        .cfr-data-bx {
            width: 20%;
            /* background-color: red; */
        }

        .cfr-ntf-visiblity {
            display: block;
        }

    }
    
    @media (min-width: 992px) {
        .cfr-data-bx {
            width: 26%;
        }

        .btn-cursor {
            cursor: pointer;
        }
    }
</style>