import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast';
import DeveloperList from './Components/DeveloperList.jsx';
import DeveloperForm from './Components/DeveloperForm.jsx';

const App = () => {
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const triggerRefresh = () => {
    setShouldRefresh(prev => !prev);
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-4xl font-bold text-center my-6'> 
        Developer Directory
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className = 'md:col-span-1'>
          <DeveloperForm onAddDeveloper={triggerRefresh} />
        </div>
        <div className = 'md:col-span-2'>
          <DeveloperList shouldRefresh={shouldRefresh} />
          
        </div>
      </div>
      <Toaster position="bottom-right" />
      
    </div>
  )
}

export default App
