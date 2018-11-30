<template>
    <div class="">
        <!-- row -->
        <div class="renwls-outer-row card-shap-apply renwls-mstr-bx-padding shadow-x">
            <!-- <div class="renwls-mstr-bx-padding">
                <text class="renwls-sts-heading renwls-font-weighted-bold large-text">Renewal - Due Tomorrow</text>
                <text class="renwls-date-time-font-size renwls-label-x-font-color large-text">05:19, March 19, 2016</text>
            </div> -->
            <div class="ren-crd-date-pos">
                <text class="renwls-date-time-font-size renwls-label-x-font-color large-text">05:19, March 19, 2016</text>
            </div>
            <div class="renwls-noti-crd-row renwls-mstr-bx-padding">
                <div class="renwls-data-bx" v-for="(renData, liIndex) in renwalsDataSource" :key="liIndex">
                    <text class="renwls-date-time-font-size renwls-label-x-font-color large-text">{{ renData.label }}</text>
                    <text class="renwls-ntfs-form-label large-text">{{ renData.data }}</text>
                </div>
            </div>
            <div class="action-round-button renwls-mstr-bx-padding">
                <image class="ren-notifi-action-button" src="https://www.materialui.co/materialIcons/communication/email_black_48x48.png"/>            
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            renwalsDataSource: Array
        }
    }
</script>

<style>
    .renwls-outer-row {
        flex-direction: row;
        background-color: rgb(255, 255, 255);
        align-items: center;
    }
    
    .renwls-noti-crd-row {
        flex-direction: row;
        flex-flow: wrap;
        flex-wrap: wrap;
        flex: 1;
    }
    
    .renwls-font-weighted-bold {
        font-weight: bold;
    }
    
    .renwls-label-x-font-color {
        color: #9d9d9d;
    }
    
    /* .renwls-data-bx {
        width: 50%;
        padding: 10px;
    } */
    .renwls-mstr-bx-padding {
        padding: 10px;
    }
    .master-color-bg-black {
        color: #000;
    }
    .ren-notifi-action-button {
        height: 80px;
        width: 80px;
        padding: 10px;
    }

    @media (min-width: 320px) {
        .renwls-sts-heading {
            font-size: 14px;
        }
        .renwls-date-time-font-size {
            font-size: 11px;
        }
        .renwls-ntfs-form-label {
            font-size: 12px;
        }
        .shadow-x {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .renwls-data-bx {
            width: 50%;
            padding: 5px;
        }
        .renwls-mstr-bx-padding {
            padding: 5px;
        }
        .card-shap-apply {
            border-radius: 3px;
        }
        .action-round-button {
            border-radius: 50%;
        }
        .ren-notifi-action-button {
            height: 25px;
            width: 25px;
            padding: 10px;
        }

        /* position is used for date  */
        .ren-crd-date-pos {
            position: absolute;
            top: 6px;
            right: 10px;
        }
    }
    
    @media (min-width: 768px) {
        .renwls-data-bx {
            width: 23%;
        }
    }
    
    @media (min-width: 992px) {
        .renwls-data-bx {
            width: 30%;
        }
        .btn-cursor {
            cursor: pointer;
        }
    }
</style>