"use client"

import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Tldraw, useEditor } from 'tldraw'
import templateOne from '../../../library-templates/templateOne.png'
import templateTwo from '../../../library-templates/templateTwo.svg'
import templateThree from '../../../library-templates/templateThree.svg'
import templateFour from '../../../library-templates/templateFour.svg'
import 'tldraw/tldraw.css'
import Image from 'next/image'

interface BoardIdProps {
  params: {
    id: string
  }
}

const BoardId = ({params} : BoardIdProps) => {

  const [isLibraryOpen, setIsLibraryOpen] = useState(false)
  const libraryList = [templateOne, templateTwo, templateThree, templateFour]

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <div className='fixed z-[999] left-0 top-[30%] bg-[#edf0f2] rounded-r-lg px-4 py-3 text-sm'>
        <button className='flex items-center justify-between w-full gap-x-2' onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
          Library
          {isLibraryOpen ? <ChevronUp className='w-5 h-5'/> : <ChevronDown className='w-5 h-5'/>}
        </button>

        {isLibraryOpen && (
          <ul className='flex flex-col gap-y-3 mt-4'>
            {libraryList.map((list: string) => (
              <li key={list}>
                <Image src={list} height={100} width={100} alt={list}/>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Tldraw persistenceKey={params.id} sessionId={params.id}/>
    </div>
  )
}

export default BoardId