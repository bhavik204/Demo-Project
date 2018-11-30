<template>
<div class="sales-body">
    <div class="main-wrapper">
        <div class="leads">
                <div class="list-container">
                                <div class="list-header row">
                                    <ul class="col-xs-10">                        	
                                        <li class="applicantName">Shahu Patil</li>
                                        <li>BRSMCU155</li>
                                        <li> Increasing Income (MGB) <i class="disableflag"></i></li>
                                        <li class="status inforce visible-xs">In Force</li>
                                    </ul>
                                    <!-- Single button -->
                                    <div class="status inforce hidden-xs">In Force</div> 
                                    <div class="hidden-xs contact-opn"><a href="mailto:vivektaunk88@gmail.com"><i class="fa fa-envelope"></i></a></div>                            
                                    <div class="dropdown contact-opn visible-xs">
                                        <a class="dropdown-toggle" type="button" data-toggle="dropdown">
                                            <i class="fa fa-ellipsis-v"></i>
                                        </a>
                                        <ul class="dropdown-menu dropdown-menu-right">                                    
                                            <li><a href="mailto:vivektaunk88@gmail.com"><i class="fa fa-envelope"></i> Email</a></li>
                                            <li class="visible-xs"><a href="tel:+918106312801"><i class="fa fa-phone"></i> Call</a></li>
                                            <li class="visible-xs"><a href="tel:+918106312801"><i class="fa fa-comments"></i> SMS</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-body row">
                                    <ul class="clearfix">
                                        <li class="col-xs-6 col-md-6">
                                            <label>Due Amount</label>
                                            ₹ 18,004 <span class="viewBreakup"> View Break-up</span>
                                        </li>                            
                                        <li class="col-xs-6 col-md-4">
                                            <label>Due Date</label>
                                            12/03/2016
                                        </li>
                                    </ul>
                                    <ul class="clearfix hide duedetails">
                                        <li><label>Installment Premium</label>₹ 6,400</li>
                                        <li>×</li>                      
                                        <li><label>No. of Installments</label>3</li>
                                        <li>+</li>
                                        <li><label>Interest</label>₹ 320</li>
                                        <li>-</li>
                                        <li><label>Suspense Amount</label>₹ 22</li>
                                        <li>=</li>
                                        <li><label>Net Premium Payable</label>₹ 6,400</li>                   
                                    </ul>
                                </div>
                            </div>
        </div>
        <div class="Profile">
            <div class="r-user-details">
                            <!--User top details section-->
                            <ul class="r-user-top-section">
                            	<li><img src="img/user/testi4.png" class="r-user-pic" alt="person-XYX"></li>
                                <li>
                                	<div class="r-u-name">Vivek Taunk</div>
                                    <div class="propensity">Propensity to Pay</div>
                                    <div class="p-high">High</div>
                                </li>
                            </ul>
                            <ul class="r-user-details-section">
                            	<li><label>ID:</label> BRDMC0024</li>
                                <li><label>DOB:</label> 15/09/1989</li>
                                <li><label>City:</label> Hyderabad</li>
                                <li><label>State:</label> Telangana</li>
                                <li><label>Mobile:</label> +91 8106312874 <a href="tel:+918106312801" class="visible-xs"><i class="fa fa-phone"></i></a></li>
                                <li><label>Email:</label> vivektaunk88@gmail.com <a href="mailto:vivektaunk88@gmail.com"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                            
                            <ul class="r-user-details-section">
                            	<div class="form-heading2">Policy Details</div>
                            	<li><label>Policy No.:</label> 0012TRA871</li>
                                <li><label>Issued on:</label> 12/12/2015</li>
                                <li><label>Policy Term:</label> 10 Years</li>
                                <li><label>Premium Paying Term:</label> 7 Years</li>
                                <li><label>Add Frequency:</label> Annual</li> 
                                <li><label>Premium Type:</label> Regular</li>  
                                <li><label>ECS Active:</label> Yes</li>  
                                <li><label>Last Premium Paid On:</label> 16/02/2016</li>  
                                <li><label>Mode of Payment:</label> Cheque</li>  
                                <li><label>Next Premium Date:</label> 17/02/2016</li>  
                                <li><label>Grace End Date:</label> 17/03/2016</li>                        
                            </ul>
                            <ul class="r-user-details-section">
                            	<div class="form-heading2">Advisor Details</div>
                            	<li><label>Amrita Sariya</label></li> 
                                <li><label>Advisor Code:</label> HYD8125</li>  
                                <li><label>Mobile:</label> +91 9126445127 <a href="tel:+918106312801" class="visible-xs"><i class="fa fa-phone"></i></a></li>  
                                <li><label>Email:</label> amritasariya@gmail.com <a href="mailto:vivektaunk88@gmail.com"><i class="fa fa-envelope"></i></a></li>
                            </ul>
                        </div>
        </div>
    </div>
    </div> 
</template>
<style scoped>
.sales-body {
    flex-flow: row;

    justify-content: center;
    /* max-width: 1000px; */
    
}
    .main-wrapper {
        flex-direction: row;
        background-color:cadetblue;
        /* max-width: 1000px; */
        justify-content: center
    }
    .leads{
        flex-direction: row;
        flex: 2;
        background-color: aliceblue;
    }
    .Profile{
        flex-direction: column;
        flex: 1;
        background-color: blanchedalmond
    }

</style>