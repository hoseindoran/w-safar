import { memo } from "react"

const Pagination = ({ paginate, handlePaginate}) => {

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><button onClick={() => handlePaginate(1)} className={paginate.currentPage === 1 ? `page-link pointer-event-none` : `page-link`}>{"<<"}</button></li>
                {
                    paginate.currentPage !== 1 && <li className="page-item"><button onClick={() => handlePaginate(paginate.currentPage - 1)} className="page-link">{paginate.currentPage - 1}</button></li>
                }
                
                <li className="page-item active"><button onClick={() => handlePaginate(paginate.currentPage)} className="page-link">{paginate.currentPage}</button></li>
                {
                    paginate.currentPage !== paginate.pageCount && <li className="page-item"><button onClick={() => handlePaginate(paginate.currentPage + 1)} className="page-link">{paginate.currentPage + 1}</button></li> 
                }
                <li className="page-item"><button onClick={() => handlePaginate(paginate.pageCount)} className={paginate.currentPage === paginate.pageCount ? `page-link pointer-event-none` : `page-link`}>{">>"}</button></li>
            </ul>
        </nav>
    )
}

export default memo(Pagination);