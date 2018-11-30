<template>
    
    <div class="notification-body">
        <div class="container-height">
            <div class="notification-image-align">
                <image class="notification-width" src="https://www.materialui.co/materialIcons/social/notifications_grey_192x192.png" alt="">
                </image>
            </div>
            <div class="notification-image-align">
                <div class=" notification-padding">
                    <text class="notification-font-size">All caught up!</text>
                </div>
            
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.notification-body{
     flex-direction: row;
     align-items: center;
     justify-content: center;
}
.notification-width{
    width: 75px;
    height: 75px;
}
.notification-image-align{
    justify-content: center;
    align-items: center;
    
}

.notification-font-size{
    font-size: 24px;
}
.notification-padding{
    padding: 10px;
}
.container-height{
min-height: 300px;
flex-direction: column;
justify-content: center;
align-items: center

}

@media screen and (min-width: 320px){
    .notification-font-size{
    font-size: 14px;
}
.notification-padding{
    padding: 5px;
}
}
</style>


