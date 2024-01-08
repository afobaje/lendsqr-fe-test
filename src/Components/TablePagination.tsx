'use client'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { FaChevronLeft,FaChevronRight } from "react-icons/fa";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27]



export default function TablePagination({ itemsPerpage }: { itemsPerpage: number }) {
  const [itemOffset, setItemoffset] = useState(0)
  const endOffset = itemOffset + itemsPerpage;
  const pageCount = Math.ceil(items.length / itemsPerpage)

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerpage) % items.length;
    setItemoffset(newOffset);
  }
  return (

    <ReactPaginate
      breakLabel="..."
      nextLabel={<FaChevronRight/>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={<FaChevronLeft/>}
      activeClassName='activepage'
      className='nonactive'
      renderOnZeroPageCount={null}

    />

  )
}
