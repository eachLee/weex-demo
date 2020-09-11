<template>
  <div>
    <wxc-grid-select
      :single="true"
      :cols="5"
      :customStyles="customStyles"
      :list="testData1"
      @select="params => onSelect('res3', params)"
    >
    </wxc-grid-select>

    <wxc-grid-select
      :limit="5"
      :list="testData2"
      @overLimit="onOverLimit"
      @select="params => onSelect('res3', params)"
    >
    </wxc-grid-select>
  </div>
</template>
<script>
import { WxcGridSelect } from 'weex-ui'
export default {
  components: { WxcGridSelect },
  data: () => ({
    customStyles: {
      lineSpacing: '14px',
      width: '120px',
      height: '50px',
      icon: '',
      color: '#333333',
      checkedColor: '#ffffff',
      disabledColor: '#eeeeee',
      borderColor: '#666666',
      checkedBorderColor: '#ffb200',
      backgroundColor: '#ffffff',
      checkedBackgroundColor: '#ffb200'
    },
    testData1: [
      {
        'title': '上海'
      },
      {
        'title': '杭州',
        'checked': true
      },
      {
        'title': '北京'
      },
      {
        'title': '广州'
      },
      {
        'title': '深圳'
      },
      {
        'title': '南京'
      }
    ],
    testData2: [
      {
        'title': '上海'
      },
      {
        'title': '杭州',
        'checked': true
      },
      {
        'title': '北京',
        'checked': true
      },
      {
        'title': '广州'
      },
      {
        'title': '深圳'
      },
      {
        'title': '南京'
      }
    ]
  }),
  methods: {
    onSelect (res, { selectIndex, checked, checkedList }) {
      Vue.set(this, res, `本次选择的index：${selectIndex}\n是否选中：${checked ? '是' : '否'}\n选中列表：${checkedList.map(item => item.title).join(',')}`)
    },
    onOverLimit (limit) {
      modal.toast({
        message: `最多选择${limit}个`,
        duration: 0.8
      })
    }
  }
}
</script>
