import React from 'react'
import DropdownMenu from './DropdownMenu'
import { UserFilter } from './UsersIcon'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export default function Filter({filter,style}:{filter:any,style?:string}) {
  return (
    <DropdownMenu styleclassName={style} caret={<UserFilter/>} option={filter}>
        <div className="filterdropdown">

     <Dropdown.Item>
        <div className='verflex filopt'>
            <span>Organization</span>
            <select name="" id=""></select>
        </div>
     </Dropdown.Item>
     <Dropdown.Item>
        <div className="verflex filopt">
            <span>Username</span>
            <input type="text" placeholder='User' name="" id="" />
        </div>
     </Dropdown.Item>
     <Dropdown.Item>
        <div className="verflex filopt">
            <span>Email</span>
            <input type="text" placeholder='Email' name="" id="" />
        </div>
     </Dropdown.Item>
     <Dropdown.Item>
        <div className="verflex filopt">
            <span>Date</span>
            <input type="date" name="" id="" />
        </div>
     </Dropdown.Item>
     <Dropdown.Item>
        <div className='verflex filopt'>
            <span>Phone Number</span>
            <input type="text" placeholder='Phone Number' name="" id="" />
        </div>
     </Dropdown.Item>
     <Dropdown.Item>
        <div className="verflex filopt">
        <span>Status</span>
        <select name="" id=""></select>
        </div>
     </Dropdown.Item>
     <Dropdown.Item>
        <div className="horflex">
            <button>Reset</button>
            <button>Filter</button>
        </div>
     </Dropdown.Item>
        </div>
    </DropdownMenu>
  )
}
