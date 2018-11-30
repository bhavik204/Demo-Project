<template>
    <div>
        <!-- row -->
        <div class="impt-outer-row impt-alert-news-crd shadow-x">
            <div class="mstr-bx-padding" style="flex:4">
                <text class="cfr-ntfs-form-label large-text">{{news}}</text>
                <text class="date-time-font-size label-x-font-color">05:19, March 19, 2016</text>
            </div>
            <div class="impt-noti-crd-row mstr-bx-padding">
                <div class="impt-crd-btn-width"  v-if="platform !== 'Web'">
                    <s-button btn-name="View Details" :icon="icon" btn-width="200px"></s-button>
                </div>

                <div class="impt-crd-btn-width" v-if="platform === 'Web'">
                    <s-button btn-name="View Details" :icon="icon" ></s-button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import SButton from '../vx-primary-button/vx-scondary-button'

    const env = weex.config.env || WXEnvironment
    const invalid = '- invalid -'

    export default {
        props: {
            news: String
        },
        created() {
        // this.$store.commit('SET_PAGE_TITLE' , 'Serveic Corner');
            if (typeof WXEnvironment === 'object') {
                this.platform = WXEnvironment.platform || unknown
                return this.platform
            }
        },
        data() {
            return {
                icon: false,
                platform: invalid
            }
        },
        methods: {
            jump(navigationLink) {
                if (this.$router) {
                    this.$router.push(navigationLink)
                }
            }
        }, components: {
            SButton
        }
    }
</script>

<style >
    .impt-outer-row {
        flex-direction: column;
        background-color: #FFF;
    }
    
    .impt-noti-crd-row {
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
    
    .cfr-data-bx-impt {
        width: 200px;
        padding: 10px;
    }
    .mstr-bx-padding {
        padding: 10px;
    }
    .master-color-bg-black {
        color: #000;
    }
    .impt-alert-news-crd {
        padding: 20px;
    }

    .cfr-ntfs-form-label {
        font-size: 24px;
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
        .cfr-data-bx-impt {
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

        .impt-crd-btn-width {
            width: 40%;
        }

    }
    
    @media (min-width: 768px) {
        .cfr-data-bx-impt {
            width: 10%;
            /* background-color: red; */
        }

        .impt-crd-btn-width {
            width: 80%;
        }

         .impt-outer-row {
            flex-direction: row;
            background-color: #FFF;
            align-items: center;
        }
    }
    
    @media (min-width: 992px) {
        .cfr-data-bx-impt {
            width: 28%;
        }

        .btn-cursor {
            cursor: pointer;
        }
        
        .impt-crd-btn-width {
            width: 90%;
        }
    }
</style>