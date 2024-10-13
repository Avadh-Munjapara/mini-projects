import React, { useContext } from 'react';
import { appContext } from '../context/AppContext';

const Pagination = () => {
    const {page,totalPages,changePage}=useContext(appContext);
    return (
        <div className='w-1/2 mx-auto flex justify-between items-center'>
            <div className='flex gap-3'>
            {
                page>1&&<button className='border-2 py-1 px-4 rounded-md' onClick={()=>changePage(page-1)}>Previous</button>
            }
            {
                page<totalPages&&<button className='border-2 py-1 px-4 rounded-md' onClick={()=>changePage(page+1)}>Next</button>
            }
            </div>

            <div>
                <p className='font-semibold '>
                    Page {page} of {totalPages}
                </p>
            </div>
            
        </div>
    );
}

export default Pagination;
