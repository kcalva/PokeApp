import React from "react"
import { Types } from "./Types"
import { useOmniAural } from "omniaural"

export const Main = ({ children }) => {
  const [typeData] = useOmniAural("typeData")

  return (
    <div className="Main-container">
      {typeData
        ? Object.keys(typeData).map((typeName, index) => {
            return (
              <div className="Type-container" key={index}>
                <Types typeName={typeName} />
                {React.cloneElement(children, { typeName })}
                <hr />
              </div>
            )
          })
        : null}
    </div>
  )
}
