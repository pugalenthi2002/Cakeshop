import React from 'react'

// export default function ChildPage(props) {
// export default function ChildPage({data}) {
export default function ChildPage({data , dat2}) {
  return (
    <div>
        <h1>ChildPage</h1>
        {/* <h1>{props.data}</h1> */}
        <h1>{data}</h1>
        {/* <h1>{data.name}</h1> */}
        {/* <h1>{data.name2}</h1> */}
        <h1>{dat2}</h1>
    </div>
  )
}
