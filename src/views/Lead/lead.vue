<template>
<div>
    
    <lead-header></lead-header>
  
     <app-header></app-header>

</div>
</template>
<script>
  import leadHeader from '../../components/lead-header.vue'
  import appHeader from '../../components/header.vue'

//   import { WxcLightbox } from 'weex-ui';
  export default {
    components: {
    //   WxcLightbox,
    appHeader,
      leadHeader
    },
  }
</script>