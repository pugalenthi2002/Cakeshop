import React, { Children } from 'react'
import ChildPage from './ChildPage'

export default function ParentPage() {
    const name = "Sharavanan Hari PuGal"
    const name2 = "Dhanush Suriya Vijay"
    const arr = [""]
    return (
        <div>
            <h1>ParentPage</h1>
            <h1>{name}</h1>

            {/* <ChildPage data = {{name2, name}}  /> */}
            <ChildPage data={name} dat2={name2} />

            {
// arr.map(())
            }

        </div>
    )
}

