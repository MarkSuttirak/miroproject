export const Loading = () => {

  const bgGradient = {
    background:"linear-gradient(0deg, green, #FFFFFF)"
  }

  return (
    <div className="animate-spin w-10 h-10 flex justify-center items-center rounded-full" style={bgGradient}>
      <div className="bg-white w-8 h-8 rounded-full" />
    </div>
  )
}