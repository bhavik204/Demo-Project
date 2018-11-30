<template>
    <div class="todo-overlay">
        <div class="todo-whole-container todo-popup-container-width">
            <slot></slot>
        </div>
    </div>
</template>

<script>
// import vxInputBox from '../../components/vx-input-box/vx-input-box'

export default {
    
}
    
</script>

<style>
    .to-do-flx-row {
        flex-direction: row;
    }

    .to-do-direction-switching {
        flex-direction: column;
    }

    .to-do-flx-row-rvrs {
        flex-direction: row-reverse;
    }
    .todo-overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        /* opacity: 0.1; */
        z-index: 10;
    }
    .todo-whole-container {
        position: absolute;
        top: 50%;
        left: 50%;
        min-height: 200px;
        width: 400px;
        border-radius: 3px;
        background-color: white;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        box-shadow: 0 5px 45px rgba(0, 0, 0, .5);
    }
    .to-do-task-title {
        background-color: #3b371e;   
        padding: 15px;
    }
    .to-do-title-font {
        font-size: 14px;
        font-weight: bold;
        color: #FFF;
    }
    .todo-body {
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 15px;
    }
    .todo-footer {
        background-color: #EBEBEB;
        padding: 15px;
    }
    .todo-margin-left {
        margin-left: 10px;
    }

    .todo-lft-margin-btn {
        margin-left: 15px;
    }
    .vx-option-box-label-color {
        color: #999999;
    }
    @media screen and (min-width: 320px) {
        .vx-option-box {
            padding: 5px;
            font-size: 14px;
            width: 100%;
            border-width: 1px;
            border-style: solid;
            border-top-color: #FFF;
            border-left-color: #FFF;
            border-right-color: #FFF;
            border-bottom-color: #999999;
            outline: none;
        }
        .vx-option-box:focus {
            border-width: 2px;
            border-bottom-color: #3a3a3a;
        }
        .vx-option-box-label {
            font-size: 14px;
        }
        .vx-option-box-width {
            width: 100%;
            margin-top: 10px;
        }
        .todo-popup-container-width {
            width: 90%;
        }
        .todo-margin-left {
            margin-left: 0;
        }
    }
    @media screen and (min-width: 768px) {
        .todo-popup-container-width {
            width: 50%;
        }
        .vx-option-box-width {
            width: 160px;
            margin-top: 0;
        }
        .to-do-direction-switching {
            flex-direction: row;
        }
    }
    @media screen and (min-width: 992px) {
        .todo-popup-container-width {
            width: 50%;
        }

        .to-do-direction-switching {
            flex-direction: row;
        }

    }

</style>

