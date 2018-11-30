<template>
<div>
    <Header></Header>

  <div class="wxc-demo">
    <scroller class="scroller">
      <wxc-checkbox title="default"></wxc-checkbox>
      <wxc-checkbox title="default checked"
                    :checked="true"></wxc-checkbox>
      <wxc-checkbox title="unchecked and disabled"
                    :disabled="true"></wxc-checkbox>
      <wxc-checkbox title="checked and disabled"
                    :disabled="true"
                    :checked="true"></wxc-checkbox>
      <div class="margin">
        <wxc-checkbox-list :list="list"
                           @wxcCheckBoxListChecked="wxcCheckBoxListChecked"></wxc-checkbox-list>
        <text class="checked-text">checked list {{checkedList.toString()}}</text>
      </div>
    </scroller>
  </div>
  </div>
</template>

<script>
  import Header from '../components/header.vue'

  import { WxcCheckbox,WxcCheckboxList } from 'weex-ui'
  export default {
    components: { WxcCheckbox, WxcCheckboxList , Header},
    data: () => ({
      list: [
        { title: 'option1', value: 1 },
        { title: 'option2', value: 2, checked: true },
        { title: 'option3', value: 3 },
        { title: 'option4', value: 4 }
      ],
      checkedList: [2]
    }),
    methods: {
      wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
      }
    }
  }
</script>