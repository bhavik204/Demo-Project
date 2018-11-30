<template>
    <image :src="showOnScreen" class="slide-image-size" />
</template>

<script>
    const images = [
                    'http://salesdrive.iorta.in/img/services/clubSlider-img1.jpg',
                    'http://salesdrive.iorta.in/img/services/clubSlider-img2.jpg',
                    'http://salesdrive.iorta.in/img/services/clubSlider-img3.jpg',
                    'http://salesdrive.iorta.in/img/services/clubSlider-img4.jpg'
                ];

    export default {
        data() {
            return {
                showOnScreen: images[0],
                index: 0,
                imageStyle: {
                    height: '200px',
                    width: '400px'
                }
            }
        },
        created() {
            console.log('Calling');
            setInterval(this.slideShow, 2000);
        },
        methods: {
            slideShow:function() {
                let imageListLength = images.length;
                if (this.index <= imageListLength) {
                    if (this.index == imageListLength) {
                        this.index = 0;
                        this.showOnScreen = images[this.index];
                        this.index++;
                    } else {
                        this.showOnScreen = images[this.index];
                        this.index++;
                    } 
                }
            
            }
        }
    }

</script>

<style>
        .slide-image-size {
            width: 660px;
            height: 400px;
        }


    @media (min-width: 320px) {
        .slide-image-size {
            width: 100%;
            height: 220px;
        }

    }
    @media (min-width: 768px) {
        
    }
    @media (min-width: 992px) {
    }
</style>
