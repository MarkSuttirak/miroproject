"use client"

import { Tldraw, useEditor } from 'tldraw'
import 'tldraw/tldraw.css'

interface BoardIdProps {
  params: {
    id: string
  }
}

const BoardId = ({params} : BoardIdProps) => {



  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <Tldraw persistenceKey={params.id} sessionId={params.id}/>
    </div>
  )
}

export default BoardId