import styles from './index.less'
import React from 'react'
import SClassCom from '@/components/s-class-com/index'
import SFunctionCom from '@/components/s-function-com/index'
import { Divider } from 'antd'

export default () => {
  return (
    <div className={styles.loginBox}>
      <div>
        <SClassCom/>
        <Divider></Divider>
        <SFunctionCom/>
      </div>
    </div>
  )
}
