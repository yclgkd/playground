import { useEffect, useRef } from "react"

/**
 * 在严格模式中 useEffect 会
 */

export default () => {
  const ref = useRef(false);


  // 模拟 DidMount
  useEffect(() => {
    console.log("useEffect")

    if (!ref.current) {
      ref.current = true
    } else {
      console.log('useEffect 更新')
    }
    // 模拟 DidUnmount
    return () => {
      console.log("useEffect cleanup")
    }
  })


  return <div>练习 useEffect</div>
}
