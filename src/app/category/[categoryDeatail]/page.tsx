import React from 'react'

function page(props:any) {
const a =props.params.categoryDeatail
  return (
    <div>
      Exercise Detail page
      <h1>{a}</h1>
    </div>
  )
}

export default page
