export default {
  /**
   * 作者：Chris
   * 方法说明：返回get请求encodeURIComponent编码结果,只用于对账小工具
   * @method getEncodeUrl
   * @param {参数类型} 对象格式 就是接口入参
   * @param {返回值类型} 字符串类型
   */
  getDataFormat(obj) {
    let str = obj.totalNum + ''
    obj.areaNumArr.forEach(q => {
      str += ` &${q}`
    })
    return str
  },
  // 两位小数取整
  twoDecimal(number) {
    return (number * 100).toFixed()
  },
  // 获取选中区域重复的数据
  duplicates(arr) {
    let newArr = []
    let targetNumArr = []
    arr.forEach(q => {
      // @ts-ignore
      if (newArr.includes(q.number)) {
        // @ts-ignore
        targetNumArr.push(q.number)
      } else {
        // @ts-ignore
        newArr.push(q.number)
      }
    })
    return targetNumArr
  }
}
