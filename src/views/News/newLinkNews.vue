<template>
        <!-- Contests-Completed Tab -->
<div style="background-color: #e0e2e5">
    
 
  <scroller >
      
    <div class="card ">
       <div class="row-header" >
               <text class="text-bold" style="flex:1;" >ABC Insurance Launches Increasing Income Insurance Plan</text>
               <div class="row-button" >
                    <div class="box  x-small-btn" >
                        <div class="md-custom-btn btn-color">
                                <image class="btn-icon-size" src="https://www.materialui.co/materialIcons/file/file_download_white_192x192.png"></image>
                            <text class="md-btn-label text-color-white">Download</text>
                        </div>
                    </div>
                </div>
               <!-- <div class="card-btn mouse-pointer"><text class="card-btn-text mouse-pointer">Download</text></div> -->
       </div>
       <text class="text-sml">4 April, 2015 | 02.26PM | In News</text>
       <div class="row" style="justify-content:space-between;">
            <div class="col" style="flex: 1">
                <text class="text-med" >MUMBAI, August 17, 2015: ABC Insurance Company (ABC), part of ABC Capital Limited, today launched a new plan ‘Increasing Income Insurance Plan”.</text>
                <text class="text-med"style="padding-top:5px;">Increasing Income Insurance Plan is traditional non-participating plan that secures an assured source of monthly income to meet growing expenses and support the dreams and aspirations of policyholder.</text>
            </div>
                <image class="image shadow" style="margin-top:3px;" resize="stretch" src="http://salesdrive.iorta.in/img/press_release.jpg"></image>
            </div>
        <div>
                MUMBAI, August 17, 2015: ABC Insurance Company (ABC), part of ABC Capital Limited, today launched a new plan ‘Increasing Income Insurance Plan”.
                Increasing Income Insurance Plan is traditional non-participating plan that secures an assured source of monthly income to meet growing expenses and support the dreams and aspirations of policyholder.
            listdesc:The key feature of the plan is that it offers a long term regular monthly income after the end of increases every year at 3% under the Income with Maturity Benefit option and 6% under Only Income Option.</text>
            listdesc:on and demands of a better lifestyle, there is a strong need to save up for an alternative source of income. We have carefully designed a plan that will provide a long term income that increases every year. From the protection perspective, the life insurance benefits along with the savings component make Increasing Income a very relevant proposition”, said Mr. Manoj Sahoo, Chief Agency Officer, ABC Insurance.</text>
            listdesc:The age of entry in the plan is from 14 years to 60 years with the policy term varying from 12 years to 24 years.</text>
            listdesc:The plan is divided into two phases – Saving phase and Income phase. The Saving phase, the first half of the policy term, is a phase wherein the customer would be paying regular premiums.</text>
            listdesc:The Income phase, the second half of the policy term, is the phase wherein customer would start receiving monthly income of as part of the plan.</text>
            listdesc:For a 24 year policy, under “Income with Maturity Benefit” option the policyholder starts getting 1% of sum assured every month as regular income from 13th policy year and earns 12% of the sum assured as total income during the year. The total income for the year will go up to 45% of sum assured in the 24th policy year on the back of annual increment of 3 per cent.</text>
            listdesc:Whereas under “Only Income” option the policyholder starts getting 2% of sum assured every month as regular income from 13th policy year and earns 24% of the sum assured as total income during the year. The total income for the year will go up to 90% of sum assured in the 24th policy year on the back of annual increment of 6%.</text>
            listdesc:“The Monthly Income from this product can be great way to achieve your financial goals – whether your goal is to reduce loans, save for an early retirement, acquire an asset or even provide your children with the best education facilities. An additional income stream means you can achieve these financial goals with ease.” Mr. Sahoo added.</text>
            listdesc:Apart from guaranteed money income, the policyholder can also plan to receive a lump sum benefit equal to double the Sum Assured by choosing Income with Maturity Benefit option.</text>
            listdesc:In the unfortunate event of demise of the policyholder during the policy term, provided the policy is in force, the Sum Assured on Death or 105 per cent of all the premiums will be paid, depending on the case. The nominee would receive the full death benefit, irrespective of the income benefits already paid.</text>
            listdesc:The plan allows saving of tax under section 80C on premium paid and under section 10(10D) for benefits received.</text>
        </div>
    </div>
         
</scroller> 


<!-- </div> -->
</div>
  
                                                        

</template>

<script>
const navigator = weex.requireModule('navigator');
const invalid = '- invalid -'

export default {
    created() {
        if (typeof WXEnvironment === 'object') {
        this.platform = WXEnvironment.platform || unknown
        this.deviceWidth = WXEnvironment.deviceWidth || unknown
        }
        },
  props: {
      listItems: {
          type: Array
      }

  },
  data: function() {
      return {
        headerName:'News ',
        platform: invalid,
        deviceWidth: invalid,
              }
  },
  
  methods: {
      jump(to) {
          if (this.$router) {
              this.$router.push(to)
          }
      }
      
  }
  
}


</script>

<style scoped>
.robotoregular {
font-family:robotoregular;
}
.robotobold{
font-family:robotobold;
}
.col {
    display: flex;
    flex-direction: column;
    background-color: white;
    flex-wrap:wrap;
}

.row-text {
    display: flex;
    flex-direction: column;
    background-color: #e0e2e5;
}
.row-image {
    display: flex;
    flex-direction: column;
    background-color: #e0e2e5;
}
.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    background-color: white;
}
.row-header{
    display: flex;
    flex-direction: row;
    background-color: white;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 15px 7px 10px 6px; 
}
.row-flex{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: white;
}
.image {
    width: 350px;
    height: 330px;
    background-color: #666666;
    margin-left: 7px;
    margin-right: 12px; 
    
  }
.card {
    background-color: #ffffff;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
    /* background-color: white;
    margin-top: 30px;
    margin-left: 60px;
    margin-right: 60px;
    margin-bottom: 30px; */
    max-width: 1230px;
    /* justify-content: center; */
}
.row-button {
      display: flex;
      flex-direction: row;
      background-color: white;
      margin-left:450px;
      margin-top: 18px;
    }
    .btn-color {
        background-color: #3b371e;
    }
    .box {
            padding: 10px;
          
        }
    .md-custom-btn {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        height: 70px;
        min-width: 188px;
        cursor: pointer;
        
    }
    
    .md-btn-label {
        font-size : 24px;
        font-weight: 500;
        cursor: pointer;
        color:#fff;
        font-family:robotoregular;
    }
    
    .md-custom-btn:active {
        background-color:#3b371e;
    }
    .md-btn-width {
        width: 450px;
    }
    
    .x-small-btn {
          width: 250px;
    }
    .btn-icon-size {
      height: 30px;
      width: 30px;
      margin-right: 15px;
    }
.mouse-pointer {
        cursor: pointer;
    }
.text-bold{
    font-weight: bold;
    font-size: 25px;
    margin-left: 10px;
    font-family:robotoregular;
}
.text-med{
    color: #6e6d6d;
    font-size: 24px;
    margin-right: 15px;
    margin-left: 15px;
    font-family:robotoregular;
}
.text-sml{
    font-size: 23px;
    padding-bottom: 10px;
    padding-top: 6px;
    margin-left: 15px;
    font-family:robotoregular;
}
.select
{
    border-bottom:3px solid;
    display: inline-table;
    background-color:white;
    width:100px;
    border-width: 1px;
    border-color: #f4f5f7;
    margin-left:8px;
    padding-top:19px;
    padding-bottom:10px;
    color: black;
  
}
.selectbor{
    border-bottom:3px solid;
    display: inline-table;
}
.card {
    background-color: #ffffff;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
}
.add-border {
    border-width: 1px;
    border-style: solid;
    border-top-color: #fff;
    border-right-color: #fff;
    border-left-color: #fff;
    border-bottom-color: #e7e7e7;
}
.add-border1 {
    border-width: 1px;
    border-style: solid;
    border-top-color: #6e6d6d;
    border-right-color: #6e6d6d;
    border-left-color:#6e6d6d;
    border-bottom-color: #6e6d6d;
}
.box {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    padding-right: 5px;
}
.scroller {
      display: none;
}
.shadow {
      box-shadow: 0 2px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}
  

@media (min-width: 992px) {
  .card {
    background-color: #ffffff;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
  }
.scroller {
    display: none;
}
.shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}
.text-bold{
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    font-family:robotoregular;
}
.text-med{
    color: #6e6d6d;
    font-size: 14px;
    margin-right: 15px;
    margin-left: 15px;
    font-family:robotoregular;
}
.text-sml{
    font-size: 13px;
    padding-bottom: 10px;
    padding-top: 6px;
    margin-left: 15px;
    font-family:robotoregular;
}
.md-btn-width {
    width: 10%;
}
.x-small-btn {
    width: 10%;
}
}

@media (min-width: 768px) {
  .scroller {
      display: none;
  }
  
  
  .card {
    background-color: #ffffff;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
  }
  .shadow {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
  }
  .text-bold{
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    font-family:robotoregular;
}
.text-med{
    color: #6e6d6d;
    font-size: 14px;
    margin-right: 15px;
    margin-left: 15px;
    font-family:robotoregular;
}
.text-sml{
    font-size: 13px;
    padding-bottom: 10px;
    padding-top: 6px;
    margin-left: 15px;
    font-family:robotoregular;
}
.md-btn-width {
    width: 10%;
}
.x-small-btn {
    width: 10%;
}

}





@media (min-width: 320px) {
  .scroller {
      overflow: auto;
  }
 
  .card {
    background-color: #ffffff;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 20px;
    border-radius: 4px;
}
  .shadow {
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
  }
  .text-bold{
    font-weight: bold;
    font-size: 15px;
    margin-left: 10px;
    font-family:robotoregular;
}
.text-med{
    color: #6e6d6d;
    font-size: 14px;
    margin-right: 15px;
    margin-left: 15px;
    font-family:robotoregular;
}
.text-sml{
    font-size: 13px;
    padding-bottom: 10px;
    padding-top: 6px;
    margin-left: 15px;
    font-family:robotoregular;
}
.md-btn-width {
    width: 10%;
}
.x-small-btn {
    width: 10%;
}
}


</style>