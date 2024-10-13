import React, { useContext } from 'react';
import { appContext } from '../context/AppContext';

const Pagination = () => {
    const {page,totalPages,changePage}=useContext(appContext);
    return (
        <div>
            <div>
            {
                page>1&&<button onClick={()=>changePage(page-1)}>Previous</button>
            }
            {
                page<totalPages&&<button onClick={()=>changePage(page+1)}>Next</button>
            }
            </div>

            <div>
                <p>
                    Page {page} of {totalPages}
                </p>
            </div>
            
        </div>
    );
}

export default Pagination;
