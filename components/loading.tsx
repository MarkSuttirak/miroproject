export const Loading = () => {

  const bgGradient = {
    background:"linear-gradient(0deg, #2563EB, #FFFFFF)"
  }

  return (
    <div className="h-full w-full flex items-center justify-center flex-col gap-y-6">
      <div className="animate-spin w-12 h-12 flex justify-center items-center rounded-full" style={bgGradient}>
        <div className="bg-white w-10 h-10 rounded-full" />
      </div>

      <h1 className="text-blue-600 text-lg font-medium">Loading...</h1>
    </div>
  )
}