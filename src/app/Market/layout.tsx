import React, { ReactNode } from 'react'
interface ChildrenProps {
    children: ReactNode
}
const layout = ({ children }: ChildrenProps) => {
    return (
        <div>
            <h1>header Market</h1>
            {children}
            <h1>footer Market</h1>
        </div>
    )
}

export default layout
