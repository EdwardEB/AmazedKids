import React ,{ CSSProperties, useMemo } from "react"

interface iEZDiv extends CSSProperties {
  children?: React.ReactNode
}

export const EZDiv = (props: iEZDiv) => {

  const styleObj = useMemo(() => ({ ...props }), [])

  return (
    <div style={styleObj}>
      {props.children}
    </div>
  )
}