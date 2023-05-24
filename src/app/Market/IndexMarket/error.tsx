'use client'
const ErrorPage = ({ error }: any) => {
    return (
        <div>{error.message}</div>
    )
}

export default ErrorPage