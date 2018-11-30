<template>
    <div class="brocher-row-flow">
        <div class="list-card-wrapper" v-for="(broch, br) in brouchers" :key="br">
            <div>

            <image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KEWz-c1ffAwObyQ1J6hIB-HPKDoRESEHHy0X9Epjg9SPhguTGQ" 
            class="brouchers-image-size"/>

            <div class="brouchers-title-wrper">
                <text class="brouchers-title" style="color:blue; cursor:pointer;">{{broch.language}}</text>
            </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
           
        ],
        data() {
            return {
                brouchers: [
                    {
                    No:'1',
                    language:'English'
                },
                    {
                    No:'2',
                    language:'Hindi'
                },
                    {
                    No:'3',
                    language:'Marathi'
                },
                    {
                    No:'4',
                    language:'Gujarati'
                },
                    {
                    No:'5',
                    language:'Tamil'
                },
                    {
                    No:'6',
                    language:'Malyalam'
                },
                    {
                    No:'7',
                    language:'Kannada'
                },
                    {
                    No:'8',
                    language:'Telugu'
                }
                ]
            }
        }
    }
  
</script>

<style>

    .brocher-row-flow {
        flex-direction: column;
        flex-flow: wrap;
    }
  .list-card-wrapper {
    background-color: #FFF;
    flex-direction: row;
    justify-content: center;
    border-radius: 5px;
  }

  .brouchers-image-size {
    width: 210px;
    height: 300px;
  }
  .brouchers-title-wrper {
    padding: 10px;
    margin-top: 10px;
  }
  .brouchers-title {
    font-size: 24px;
    text-align: center;
  }
  
  .brouchers:active {
    border-width: 1px;
    border-style: solid;
    border-color: blue;
  }

    @media screen and (min-width: 320px){
        .list-card-wrapper {
            margin: 10px;
        }
        .brouchers-image-size {
            width: 100px;
            height: 132px;
        }
        .brouchers-title-wrper {
            padding: 5px;
            margin-top: 5px;
        }
          .brocher-row-flow {
        flex-direction: row;
        flex-flow: wrap;
    }
    }
    @media screen and (min-width: 768px){
        .brouchers-title {
            font-size: 14px;
            text-align: center;
        }
         .brocher-row-flow {
        flex-direction: row;
        flex-flow: wrap;
    }
    }

    @media screen and (min-width: 992px){
         .brocher-row-flow {
        flex-direction: row;
        flex-flow: wrap;
    }
    }


</style>
