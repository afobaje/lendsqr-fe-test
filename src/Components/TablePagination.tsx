import React from 'react'
import ReactPaginate from 'react-paginate'

export default function TablePagination() {
  return (
    <ReactPaginate
    pageCount={4}
    breakLabel="..."
    nextLabel={null}
    
    />
  )
}
