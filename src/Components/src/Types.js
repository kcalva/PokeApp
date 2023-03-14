import React from "react"

export const Types = ({ typeName }) => {
  return (
    <div
      id={typeName.charAt(0).toUpperCase() + typeName.slice(1)}
      className="Type-name"
    >
      {typeName.toUpperCase()}
    </div>
  )
}
