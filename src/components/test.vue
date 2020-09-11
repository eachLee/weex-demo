<template>
  <div>
    <wxc-minibar
      title="标题"
      background-color="#009ff0"
      text-color="#FFFFFF"
      right-text="更多"
      @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
      @wxcMinibarRightButtonClicked="minibarRightButtonClick"
    ></wxc-minibar>
    <div>
      <input
        @input="checkValue"
        type="text"
        value=""
      >
      <text
        v-if="isError"
        class="error-msg mb0"
      >此项为必填项</text>
    </div>
    <text @click="jump">每日任务</text>
    <router-link to='/daily'><text>每日任务</text></router-link>
    <text class="message">Now, Is in Test.</text>
  </div>
</template>

<script>
import { WxcMinibar } from 'weex-ui'
const modal = weex.requireModule('modal')
const navigator = weex.requireModule('navigator')
export default {
  name: 'TEST',
  components: {
    WxcMinibar
  },
  data() {
    return {
      a: 'xxxx',
      isError: false
    }
  },
  created() {
    console.log(this.a)
  },
  methods: {
    submit() {
      console.log('submit')
    },
    async checkValue(val) {
      if (!val.value) {
        this.isError = true
      } else {
        this.isError = false
      }
    },
    minibarLeftButtonClick() {
      console.log(navigator)
    },
    minibarRightButtonClick() {
      modal.toast({ 'message': 'click rightButton!', 'duration': 1 })
    },
    jump() {
      let hostUrl = window.location.host
      navigator.push({
        url: `//${hostUrl}/dist/index.js`,
        animated: 'true'
      }, event => {
        console.log('callback: ', event)
      })
    }
  }
}
</script>

<style>
</style>
