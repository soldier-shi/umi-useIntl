import { message } from 'antd'
export default {
  // excel 选取数据验证
  verifyFormData (formData) {
    if (!formData.totalNum) {
      message.error('请双击选择要计算的目标和！')
      return false
    } else if (!formData.areaNumArr.length) {
      message.error('请拖拽选择要筛选的区域！')
      return false
    }  else {
      return true
    }
  }
}
