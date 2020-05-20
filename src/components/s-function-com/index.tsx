import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'antd'

export default () => {
  const [count, setCount] = useState(0)
  // const countRef = useRef(0)
  // const currentCount = useCurrentValue(count)

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1)
  //     console.log(count)
  //   }, 1000)
  //   return () => clearInterval(id)
  // },[count])

  // function useCurrentValue(value) {
  //   const ref = useRef(0)
  //   useEffect(() => {
  //     ref.current = value
  //   },[value])
  //   return ref
  // }

  // const log = () => {
  //
  // }

  // 函数回调赋值
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(c => c + 1);
  //   }, 1000);
  //   return () => clearInterval(id);
  // }, []);

  return (
    <div>
      <h3>function component</h3>
      <p>点击了 {count} 次</p>
      {/*<Button onClick={log}>点击</Button>*/}
    </div>
  )
}
