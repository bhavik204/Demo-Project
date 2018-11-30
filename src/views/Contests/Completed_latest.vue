<template>
<div style="background-color:#f7f7f7;">
    <div class="compl-cont-row-col">

        <div class="comp-cont-card-setter comp-cont-card-matter shadow ">
            <div class="comp-cont-pad-top-bot-10"><text class="comp-cont-char-large comp-cont-bor-set-bot " style="padding-bottom:6px">All Completed Contests</text></div>
            
            <div class="compl-cont-row-setter  comp-cont-spce-bet"  > 
                <div class="comp-cont-pad-lft-10">
                    <div class="comp-cont-pad-top-bot-5"><text class="comp-cont-char-chota">Contest Number 2 ( 20th May to 20th June )</text></div>
                    <div class="comp-cont-pad-top-bot-5"><text class="comp-cont-char-chota">Results announced: 25/06/2016</text></div>
                </div>
                <div >
                    <div class="compl-cont-btn-wid-seter ">
                        <div class="" style="margin-top: 1px;">
                            <div v-if="platform === 'Web'" class="box  x-small-btn" @click.native="jump('/mastercontests/joinclub')" >
                                <div class="md-custom-btn btn-color">
                                    <text class="md-btn-label text-color-white">View Results</text>
                                </div>
                            </div>

                            <div  v-if="platform !== 'Web'" @click="jump('/mastercontests/joinclub')" class="box  x-small-btn" >
                                <div class="md-custom-btn btn-color">
                                    <text class="md-btn-label text-color-white">View Results</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   <div class="comp-cont-card-setter comp-cont-card-matter shadow ">
            <div class="comp-cont-pad-top-bot-10"><text class="comp-cont-char-large comp-cont-bor-set-bot" style="padding-bottom:6px">All Completed Contests</text></div>
            
            <div class="compl-cont-row-setter  comp-cont-spce-bet"  > 
                <div class="comp-cont-pad-lft-10">
                    <div class="comp-cont-pad-top-bot-5"><text class="comp-cont-char-chota">Contest Number 3 ( 20th May to 20th June )</text></div>
                    <div class="comp-cont-pad-top-bot-5"><text class="comp-cont-char-chota">Results announced: 25/06/2016</text></div>
                </div>
                <div >
                    <div class="compl-cont-btn-wid-seter ">
                        <div class="" style="margin-top: 1px;">
                            <div v-if="platform === 'Web'" class="box  x-small-btn" @click.native="jump('/mastercontests/joinclub')" >
                                <div class="md-custom-btn btn-color">
                                    <text class="md-btn-label text-color-white">View Results</text>
                                </div>
                            </div>

                            <div  v-if="platform !== 'Web'" @click="jump('/mastercontests/joinclub')" class="box  x-small-btn" >
                                <div class="md-custom-btn btn-color">
                                    <text class="md-btn-label text-color-white">View Results</text>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
      
        
    </div>
</div>
</template>
<script>

</script>
<style>
.compl-cont-row-col {
    flex-direction: column;

}
.compl-cont-row-setter {
    flex-direction: row;
}
.comp-cont-card-setter {
    width: 750px;
    margin: 10px;
    padding: 20px;
}
.comp-cont-card-matter {
    background-color: #fff;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(139, 139, 139);
}
.comp-cont-char-large {
    font-size: 25px;
    font-weight: bold;
    font-family: robotoregular;
}
.comp-cont-char-chota {
    font-size: 24px;
    font-family: robotoregular;

}
.comp-cont-pad-top-bot-10 {
    padding-bottom: 10px;
    padding-top: 10px;
}
.comp-cont-pad-top-bot-5 {
    padding-bottom: 5px;
    padding-top: 5px;
}
.comp-cont-pad-lft-10 {
    padding-left: 10px;
}
.comp-cont-bor-set-bot{
    border-width: 1px;
    border-style: solid;
    border-top-color: #ffffff;
    border-left-color: #ffffff;
    border-right-color: #ffffff;
    border-bottom-color: #dfdfdf;
}
.shadow {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .2), 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12);
}
.md-custom-btn {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    height: 80px;
    min-width: 88px;
    position: relative;
    cursor: pointer;
}
    .btn-color {
    background-color: #3b371e;
}
    .md-btn-label {
    font-size: 31px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
    font-family:robotoregular;
}
.comp-cont-spce-bet {
    flex-direction: column;
    align-items: unset;
    min-width: 90px;
}
.compl-cont-btn-wid-seter {
    width: 90px;
}

@media only screen and (min-width: 320px){
.compl-cont-row-col {
    flex-direction: column;
}
.comp-cont-card-setter {
    width: 95%;
    
}
.comp-cont-char-large {
    font-size: 15px;
    font-weight: bold;
    font-family: robotoregular;
}
.comp-cont-char-chota {
    font-size: 14px;
    font-family: robotoregular;

}
.comp-cont-card-matter {
    border:none;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 3px;
    border: none;
}
.md-custom-btn {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    height: 36px;
    min-width: 88px;
    position: relative;
    cursor: pointer;
}
.md-btn-label {
    color: #fff;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
    cursor: pointer;
    font-family:robotoregular;
}
.comp-cont-spce-bet {
    flex-direction: column;
    align-items: unset;
    min-width: 90px;
}
.compl-cont-btn-wid-seter {
    width: 14%;
}
}
@media only screen and (min-width: 768px){
    .comp-cont-spce-bet {
    justify-content: space-between;
    align-items:center;
    flex-direction: row;
}
}

@media only screen and (min-width: 992px){
    .compl-cont-row-col {
    flex-direction: row;

}
.comp-cont-card-setter {
    width: 48%;
    
}
.comp-cont-spce-bet {
    justify-content: space-between;
    align-items:center;
}
}
</style>