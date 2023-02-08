import React from 'react';
import './Pagination.css';

const Pagination = ({ actividadesPerPage, totalActividades, currentPage, setCurrentPage}) => {

    const pageNumbers = []
   
    for(let i = 1; i <= Math.ceil(totalActividades/actividadesPerPage); i++){
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
            <div className="pagination is-centered mb-6" role='navigation' aria-label='pagination' >
                 
                 <a className={`pagination-previus ${currentPage === 1 ? 'is-disabled' : ''}`}  onClick={onPreviusPage}>Previo</a>
                
  
                            
                                {
                                    pageNumbers.map(noPage => (
                                        <a key={noPage}>
                                            <a className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`} onClick = { ()  => onSpecifiPage(noPage)}>
                                            {noPage}
                                            </a>
                                        </a>
                                    )

                                    )
                                }
                            
                <a  className={`pagination-next ${currentPage >= pageNumbers.length ? 'is-disabled' : ''}`}  onClick={onNextPage} >Siguiente</a>      
            </div>
            </div>
            )
    
}
export default Pagination