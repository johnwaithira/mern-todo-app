import React from 'react'

const TaskComponent = ( {handleSubmit, handleChange, isLoading, loading, loaded, formData} ) => {
    return (
        <div>
            <div className='max-w-lg rounded-lg mb-5'>
                <form autoComplete='off' onSubmit={handleSubmit} className='flex w-full  items-center'>
                    <input value={formData.taskname || ''} onChange={handleChange} className='focus:outline-none w-3/6 mx-2 px-2 py-3 border-b-2 focus:border-b-grey-200' type="text" id="taskname" placeholder='Add todo' />
                    <button type='submit' disabled={isLoading} className='cursor-pointer px-10 bg-transparent border-[1px] py-3 w-fit rounded-[30px]'>{isLoading ? loading : loaded}</button>
                </form>
            </div>
        </div>
    )
}

export default TaskComponent