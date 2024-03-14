interface BoardIdProps {
  params: {
    id: string
  }
}

const BoardId = ({params} : BoardIdProps) => {
  return (
    <div className="p-20">
      <h1 className="dashboard-title">This page is still in development. Coming soon...</h1>
    </div>
  )
}

export default BoardId