import React from 'react'

const TaskComponent = ( {handleSubmit, handleChange, isLoading, loading, loaded, formData, getValue = ""} ) => {
    return (
        <div>
            <div className='max-w-lg rounded-lg mb-5'>
                <form autoComplete='off' onSubmit={handleSubmit} className='flex flex-wrap sm:flex-nowrap w-full  items-center'>
                    <input value={formData.taskname || getValue} onChange={handleChange} className='focus:outline-none mb-3 sm:mb-0 w-full sm:w-4/6 mx-2 px-2 py-3 border-b-2 focus:border-b-grey-200' type="text" id="taskname" placeholder='Add todo' />
                    <button type='submit' disabled={isLoading} 
                    
                    
                    className=' whitespace-nowrap cursor-pointer rounded-[20px] px-5 py-2  sm:px-10 bg-transparent border-[1px] sm:py-3 w-fit sm:rounded-[30px]'>{isLoading ? loading : loaded}</button>
                </form>
            </div>
        </div>
    )
}

export default TaskComponent