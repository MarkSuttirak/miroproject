"use client"

import { ChevronDown, ChevronRight, ChevronUp } from 'lucide-react'
import { useState } from 'react'
import { Tldraw, useEditor } from 'tldraw'
import templateOne from '../../../library-templates/templateOne.svg'
import templateTwo from '../../../library-templates/templateTwo.svg'
import templateThree from '../../../library-templates/templateThree.svg'
import 'tldraw/tldraw.css'
import Image from 'next/image'

interface BoardIdProps {
  params: {
    id: string
  }
}

const BoardId = ({params} : BoardIdProps) => {

  const [isLibraryOpen, setIsLibraryOpen] = useState(false)

  return (
    <div style={{ position: 'fixed', inset: 0 }}>
      <div className='fixed z-[999] right-0 top-[40%] bg-[#edf0f2] rounded-l-lg px-4 py-3 text-sm'>
        <button className='flex items-center justify-between w-full gap-x-2' onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
          Library
          {isLibraryOpen ? <ChevronUp className='w-5 h-5'/> : <ChevronDown className='w-5 h-5'/>}
        </button>

        {isLibraryOpen && (
          <ul className='flex flex-col gap-y-3 mt-4'>
            <ol>
              <Image src={templateOne} height={100} width={100} alt={templateOne}/>
            </ol>
            <ol>
              <Image src={templateTwo} height={100} width={100} alt="TEST"/>
            </ol>
            <ol>
              <Image src={templateThree} height={100} width={100} alt="TEST"/>
            </ol>
          </ul>
        )}
      </div>

      <Tldraw persistenceKey={params.id} sessionId={params.id}/>
    </div>
  )
}

export default BoardId