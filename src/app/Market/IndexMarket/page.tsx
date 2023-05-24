

import React from 'react'
function wait() {
    return new Promise((resolve: any, rejects: any) => {
        setTimeout(() => resolve(), 3000)
    })
}
const IndexMarket = async () => {
    await wait()
    return (
        <div>IndexMarket</div>
    )
}

export default IndexMarket