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
<<<<<<< HEAD
            <button className={`pagination-previus ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviusPage}>Previo</button>
                
=======
                 
                 <a className={`pagination-previus ${currentPage === 1 ? 'is-disabled' : ''}`}  onClick={onPreviusPage}>Previo</a>
>>>>>>> 20e9ecd8850b39df7249da15a2f24be702295f14
                
  
                            
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
<<<<<<< HEAD
                            <button className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`} onClick={onNextPage} >Siguiente</button>
                
    
=======
                            
                <a  className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`}  onClick={onNextPage} >Siguiente</a>      
>>>>>>> 20e9ecd8850b39df7249da15a2f24be702295f14
            </div>
            </div>
            )
    
}
export default PaginationServi
