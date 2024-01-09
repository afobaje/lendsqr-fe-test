import React from 'react'
import * as PopOver from '@radix-ui/react-popover'
import { UserFilter } from './UsersIcon'

export default function Filter({ filter ,style}: { filter: string,style?:string }) {
   return (
      <PopOver.Root>
         <PopOver.Trigger className={style}>
            <span>
               {filter}
            </span>
            <UserFilter />
         </PopOver.Trigger>
         <PopOver.Content>
<div className="filterdropdown">
            <div className='verflex filopt'>
               <span>Organization</span>
               <select name="" id="">
                  <option value="Select">Select</option>
               </select>
            </div>


            <div className="verflex filopt">
               <span>Username</span>
               <input type="text" placeholder='User' name="" id="" />
            </div>


            <div className="verflex filopt">
               <span>Email</span>
               <input type="text" placeholder='Email' name="" id="" />
            </div>


            <div className="verflex filopt">
               <span>Date</span>
               <input type="date" name="" id="" />
            </div>


            <div className='verflex filopt'>
               <span>Phone Number</span>
               <input type="text" placeholder='Phone Number' name="" id="" />
            </div>

            <div className="verflex filopt">
               <span>Status</span>
               <select name="" id="">
                  <option value="select">Select</option>
               </select>
            </div>
            <div className="horflex">
               <button className='reset filterbutton'>Reset</button>
               <button className='filter filterbutton'>Filter</button>
            </div>
            </div>
         </PopOver.Content>
      </PopOver.Root>
   )
}
