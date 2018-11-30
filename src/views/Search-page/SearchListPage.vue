<template>
    <div class="master-page-wrapper">
        <div class="search-list-page">

            <div class="search-list-container">
                <text class="serach-list-heading-title">Results Search for Shruti Shrivastava</text>
            </div>

            <!-- This code is not in used, now -->
            <!-- Search bar
            <div class="saerch-bar-wrapper">
                <div class="search-bar-row">
                   
                    <input type="text" class="search-inputBox" placeholder="Search" @input="activeIcons()"/>
                     close icon
                    <div class="search-page-icons-outer close-icon-position close-icon-bgcolor" v-if="searchBar.closeIcon">
                        <image src="https://www.materialui.co/materialIcons/content/clear_white_192x192.png" class="search-page-icons"/>
                    </div>
                     Search Icon
                    <div class="search-page-icons-outer search-icon-position">
                        <image src="https://www.materialui.co/materialIcons/action/search_grey_192x192.png" class="search-page-icons"/>
                    </div>
                </div>
            </div>
            Search bar end -->

            <div class="search-list-container-margin">
                <div class="search-list-container" style="flex-direction:row">
                    <div class="search-list-container">
                        <text class="serach-list-heading-title">Activity Management</text>
                    </div>
                    <div class="search-list-container">
                        <text class="serach-list-heading-title" style="color: blue; cursor:pointer" @click.native="jump('/leadMaster/all_leads')">View All</text>
                    </div>
                </div>

                <div class="srch-list-flex-direction srch-list-flex-flow-wrap">
                    <div class="card-width-search-list" v-for="(data , index) in todayLeads.leadsData" :key="index">
                        <app-lead-list-component :lead-data="data"></app-lead-list-component>
                    </div>
                    <!-- <div class="card-width-search-list">
                        <app-lead-list-component></app-lead-list-component>
                    </div> -->
                </div>
            </div>
            <!--  -->
            <!-- <div class="search-list-container-margin">
                <div class="search-list-container" style="flex-direction:row">
                    <div class="search-list-container">
                        <text class="serach-list-heading-title">Service Corner</text>
                    </div>
                    <div class="search-list-container">
                        <text class="serach-list-heading-title" style="color: blue; cursor:pointer">View All</text>
                    </div>
                </div>

                <div class="srch-list-flex-direction srch-list-flex-flow-wrap">
                    <div class="card-width-search-list">
                        <app-services-list-compo></app-services-list-compo>                      
                    </div>
                    <div class="card-width-search-list">
                        <app-services-list-compo></app-services-list-compo>
                    </div>
                </div>
            </div>
         -->
        </div>
    </div>
</template>

<script>
    import appLeadListComponent from '../../components/Lead-List-Component.vue'
    import appServicesListCompo from '../../components/My-Services-List-Compo.vue'
    export default {
         created() {
            this.$store.commit('SET_PAGE_TITLE' , 'Results');
        },
        components: {
            appLeadListComponent,
            appServicesListCompo
        },
        data: () => {
            return {
                searchBar: {
                    closeIcon: false,
                    searchText: ''
                },
                todayLeads: {
                leadsType: 'for today',
                leadsData: [
                    {
                        name: 'Rahul Soni',
                        id: 'BRSMCU022',
                        planType: 'Increasing Income (MGB)',
                        allocationDate: '10/5/2018',
                        appointmentDate: '18/5/2018',
                        address: '72, Kushal Apartments, Mansarovar Pondicherry - 308126',
                        mobileNo: '9978120993',
                        allocatedBy: 'Tony Pinto',
                        status: 'Open'
                    }, {
                        name: 'Salman Shaikh',
                        id: 'BRSMCU013',
                        planType: 'Increasing Income (MGB)',
                        allocationDate: '10/5/2018',
                        appointmentDate: '16/5/2018',
                        address: '49, Alka Heights, Bhanupriya Nagar Pune - 198010',
                        mobileNo: '9978120990',
                        allocatedBy: 'Tony Pinto',
                        status: 'Closed'
                    }]
                }
            }
        },
        methods: {
            activeIcons() {
                if(this.searchBar.searchText !== '') {
                    this.searchBar.closeIcon = true;
                }
                console.log('Working' + this.searchBar.closeIcon);
            }
        }
        
    }
</script>

<style>
    /* .search-list-page {
    } */
    .search-bar-row {
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .search-list-container {
        padding: 10px;
    }
    .serach-list-heading-title {
        font-size: 28px;
        font-family:robotoregular;
    }
    .srch-list-flex-direction {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card-width-search-list {
        width: 720px;
        margin-bottom: 10px;
    }
    .srch-list-flex-flow-wrap {
        flex-flow: wrap;
    }
    @media screen and (min-width: 320px){
        .search-list-shadow {
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
        }
        .search-inputBox {
            width: 100%;
            padding: 20px;
            padding-left: 50px;
            padding-right: 50px;
            font-size: 16px;
            background-color: #F7F7F7;
            border-radius: 5px;
        }
        .saerch-bar-wrapper {
            padding: 10px;
            margin: 15px;
        }
        .search-page-icons-outer {
            padding: 10px;
            background-color: #F7F7F7;
            /* background-color: rgb(129, 129, 129); */
            height: 25px;
            width: 25px;
            border-radius: 20px;
        }

        .close-icon-bgcolor {
            background-color: rgb(129, 129, 129);
        }
        .search-page-icons {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        /* Icons positions */
        .search-icon-position {
            position: absolute;
            left: 3%;
        }
        .close-icon-position {
            position: absolute;
            right: 3%;
        }
        .search-list-container {
            padding: 5px;
        }
        .serach-list-heading-title {
            font-size: 14px;
        }
        .card-width-search-list {
            width: 95%;
            margin-bottom: 0;
        }
    }
    @media screen and (min-width: 768px){
        .search-inputBox {
            width:  100%;
            padding-left: 80px;
            padding-right: 80px;
        }
        .srch-list-flex-direction {
            flex-direction: column;
        }
        .card-width-search-list {
            width: 95%;
            margin-bottom: 10px;
        }
        
    }
    @media screen and (min-width: 992px){
        .search-inputBox {
            width:  80%;
            padding-left: 80px;
            padding-right: 80px;
        }
        .saerch-bar-wrapper {
            padding: 10px;
            margin: 25px;
        }
        .search-icon-position {
            position: absolute;
            left: 132px;
        }
        .close-icon-position {
            position: absolute;
            right: 125px;
        }
        .search-page-icons {
            width: 20px;
            height: 20px;
        }
        .search-page-icons-outer {
            height: 30px;
            width: 30px;
        }
        .search-list-container-margin {
            margin-top: 20px;
        }
        .srch-list-flex-direction {
            flex-direction: row;
        }
        .card-width-search-list {
            width: 48%;
            /* flex: 1; */
            margin-left: 10px;
            margin-right: 10px;
            margin-bottom: 10px;
        }
    }
</style>


