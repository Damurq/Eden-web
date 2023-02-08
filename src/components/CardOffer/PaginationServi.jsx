import React from 'react';
import './PaginationServi.css';

const PaginationServi = ({ servicePerPage, totalService, currentPage, setCurrentPage}) => {

    const pageNumbers = []
   
    for(let i = 1; i <= Math.ceil(totalService/servicePerPage); i++){
        pageNumbers.push(i)
    }
    
    const onPreviusPage = ()=> {
        setCurrentPage(currentPage -1)
    }
    const onNextPage = ()=> {
        setCurrentPage(currentPage +1)
        
    }
    const onSpecifiPage = (n)=> {
        setCurrentPage(n)
        
    }
  
    

    return(
        <div className='conteiner-pag'> 
            <div className="pagination" >
            <button className={`pagination-previus ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Previo</button>
                
                
  
                            
                                {
                                    pageNumbers.map(noPage => (
                                        <a key={noPage}>
                                            <button className='buttoninterno'
                                            onClick = { ()  => onSpecifiPage(noPage)}>
                                            {noPage}
                                            </button>
                                        </a>
                                    )

                                    )
                                }
                            <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage} >Siguiente</button>
                
    
            </div>
            </div>
            )
    
}
export default PaginationServi
