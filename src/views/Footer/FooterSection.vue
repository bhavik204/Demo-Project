<template>
    <div class="card-footer" style="flex-direction:row">
        <div class="content-footer ">
                <text class="text-footer mouse-pointer" @click="jump('/disclaimer')">Disclaimer | </text>
                <text class="text-footer mouse-pointer"  @click="jump('/termcond')">Terms and Condition |</text>
                <text  class="text-footer mouse-pointer"  @click="jump('/privcy')"> Privacy Policy</text>
        </div>
    </div>
</template>

<style>
    .robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
    .text-footer {
        color: #fff;
        font-size: 25px;
        padding: 20px 0px 20px 0px;
        font-family:robotoregular;
    }
    
    .mouse-pointer {
        cursor: pointer;
    }
    
    .content-footer {
        justify-content: center;
        flex-direction: row;
        background-color: #3b371e;
        flex: 0.5;
        position: absolute;
        bottom: 0px;
        width: 750px;
    }
    
    @media (min-width: 320px) {
        .text-footer {
            color: #fff;
            font-size: 14px;
            padding: 30px 0px 30px 0px;
            font-family:robotoregular;
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .content-footer {
            justify-content: center;
            flex-direction: row;
            background-color: #3b371e;
            flex: 1;
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    
    @media (min-width: 768px) {
        .text-footer {
            color: #fff;
            font-size: 14px;
            padding: 30px 0px 30px 0px;
            font-family:robotoregular;
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .content-footer {
            justify-content: center;
            flex-direction: row;
            background-color: #3b371e;
            flex: 1;
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
    
    @media (min-width: 992px) {
        .text-footer {
            color: #fff;
            font-size: 14px;
            padding: 30px 0px 30px 0px;
            font-family:robotoregular;
        }
        .mouse-pointer {
            cursor: pointer;
        }
        .content-footer {
            justify-content: center;
            flex-direction: row;
            background-color: #3b371e;
            flex: 1;
            position: absolute;
            bottom: 0px;
            width: 100%;
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
</style>