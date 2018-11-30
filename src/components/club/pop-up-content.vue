<template>
    <div>
        <div>
            <text class="join-club-sub-title-fnt">Confirmation will be sent through Email</text>
        </div>

        <div class="pop-up-content-flx-row">
            <div class="join-club-content-wraper">
                <image src="https://www.materialui.co/materialIcons/action/receipt_grey_192x192.png" class="pop-up-content-image-size"/>
            </div>
            <div class="join-club-content-wraper">
                <div class="join-club-content-wraper">
                    <text class="join-club-sub-title-fnt" style="font-weight:bold">EMDRT Club</text>
                </div>
                <div class="join-club-content-wraper">
                    <text class="join-club-sub-title-fnt">Power to Empower</text>
                </div>
            </div>
        </div>
        <div>
            <text class="pop-up-content-nrml-font">Apply to this club to avail Benefits?</text>
        </div>
    </div>
</template>



<style>


    .pop-up-content-flx-row {
        flex-direction: row;
        align-items: center;
    }
    .join-club-sub-title-fnt {
        font-size: 28px;
        font-family: robotoregular;
        color: #565656;
    }
    .join-club-content-wraper {
        padding: 10px;
    }
    .pop-up-content-nrml-font {
        font-family: robotoregular;
        font-size: 24px;
        color: #565656;
    }
    
    @media screen and (min-width: 320px){
        .join-club-content-wraper {
            padding: 5px;
        }
        .join-club-sub-title-fnt {
            font-size: 16px;
        }
        .pop-up-content-nrml-font {
            font-family: robotoregular;
            font-size: 14px;
        }
        .pop-up-content-image-size {
            width: 80px;
            height: 80px;
        }


    }
    @media screen and (min-width: 768px){
        
    }
    @media screen and (min-width: 992px){
        
    }
</style>
