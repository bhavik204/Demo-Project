<template>
    <div class="">
        <!-- row -->
        <div class="app-outer-row card-shap-apply app-mstr-bx-padding shadow-x">
            <!-- <div class="app-mstr-bx-padding">
                <text class="app-sts-heading app-font-weighted-bold large-text">Login Successful</text>
                <text class="app-date-time-font-size app-label-x-font-color large-text">05:19, March 19, 2016</text>
            </div> -->
            <div class="app-mstr-bx-padding app-n-dt-tm-pos">
                <text class="app-date-time-font-size app-label-x-font-color large-text">05:19, March 19, 2016</text>              
            </div>

            <!-- mergin is added : becouse card header have date time section -->
            <div class="app-noti-crd-row app-mstr-bx-padding" style="margin-top:5px">
                <!-- <div class="app-data-bx" v-for="(cfrData, liIndex) in appDataSource" :key="liIndex">
                    <text class="app-date-time-font-size app-label-x-font-color large-text">{{ cfrData.label }}</text>
                    <text class="app-ntfs-form-label large-text">{{ cfrData.data }}</text>
                </div> -->

                <div class="app-data-bx" v-if="appDataSource.clientName !== null">
                    <text class="app-date-time-font-size app-label-x-font-color large-text">Client Name</text>
                    <text class="app-ntfs-form-label large-text">{{appDataSource.clientName}}</text>
                </div>
                <div class="app-data-bx" v-if="appDataSource.clientID !== null">
                    <text class="app-date-time-font-size app-label-x-font-color large-text">Client ID</text>
                    <text class="app-ntfs-form-label large-text">{{appDataSource.clientID | userIdShorter}}</text>
                </div>
                <div class="app-data-bx" v-if="appDataSource.planName !== null">
                    <text class="app-date-time-font-size app-label-x-font-color large-text">Plan Name</text>
                    <text class="app-ntfs-form-label large-text">{{appDataSource.planName}}</text>
                </div>
                <div class="app-data-bx" >
                    <text class="app-date-time-font-size app-label-x-font-color large-text">Premium Amount</text>
                    <text class="app-ntfs-form-label large-text">₹ {{appDataSource.premiumAmount}}</text>
                </div>
            </div>s

        </div>

    </div>
</template>

<script scoped>
    export default {
        props: {
            appDataSource: Array
        },

        created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Serveic Corner');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
            var identity = self.$store.state.agentDetails._id
            this.GET('getnotification/'+identity+'notification_type=applications', res => {
           if( !res.ok ){
               self.getJsonpResult = "request failed";
               } else{
                   console.log('get: ' + res);
                   let data =  res.data.errMsg[0];
                   console.log('Data from notification page', data);
                 
               }
           });
        },
         filters: {

        userIdShorter(id) {
            return 'L' +id.slice(16, 25).toUpperCase();
        }
    }
    }
</script>

<style>
    .app-outer-row {
        flex-direction: row;
        background-color: rgb(255, 255, 255);
        align-items: center;
    }
    
    .app-noti-crd-row {
        flex-direction: row;
        flex-flow: wrap;
        flex-wrap: wrap;
        flex: 1;
    }
    
    .app-font-weighted-bold {
        font-weight: bold;
    }
    
    .app-label-x-font-color {
        color: #9d9d9d;
    }
    
    .app-data-bx {
        width: 20%;
        padding: 10px;
    }
    .app-mstr-bx-padding {
        padding: 10px;
    }
    .master-color-bg-black {
        color: #000;
    }

    .app-ntf-visible {
        display: none;
    }

    @media (min-width: 320px) {
        .app-sts-heading {
            font-size: 14px;
        }
        .app-date-time-font-size {
            font-size: 11px;
        }
        .app-ntfs-form-label {
            font-size: 12px;
        }
        .shadow-x {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .app-data-bx {
            width: 50%;
            padding: 5px;
        }
        .app-mstr-bx-padding {
            padding: 5px;
        }

        .card-shap-apply {
            border-radius: 3px;
        }

        .app-n-dt-tm-pos {
            position: absolute;
            top: 2px;
            right: 5px;
        }
        

    }
    
    @media (min-width: 768px) {
        .app-data-bx {
            width: 25%;
        }

         .app-ntf-visible {
            display: block;
        }

    }
    
    @media (min-width: 992px) {
        .app-data-bx {
            width: 25%;
        }

        .btn-cursor {
            cursor: pointer;
        }

        
    }
</style>