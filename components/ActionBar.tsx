import React from 'react'
import PlayButton from './PlayButton'
import AddToLibrary from './AddToLibrary'

const ActionBar = () => {
  return (
    <div className='flex items-center justify-between px-4 py-5'>
        <PlayButton />
        <AddToLibrary/>
    </div>
  )
}

export default ActionBar