const NotFound = () => {
    return (
        <div className="h-screen w-full flex flex-col gap-y-2 items-center justify-center px-6 text-center">
            <h1 className="text-red-400 text-3xl font-bold">404 NOT FOUND</h1>
            <p className="text-red-400">Sorry, the page you are looking for is not found.</p>
        </div>
    )
}

export default NotFound