export const Toolbar = () => {
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-3 bg-white rounded-lg shadow-md">
      <div className="py-1.5 px-3 text-sm font-medium flex flex-col gap-y-2">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Ellipsis</div>
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  )
}