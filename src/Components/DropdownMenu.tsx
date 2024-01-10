import React from 'react'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
export default function DropdownMenu({option, children,caret,styleclassName}:{option:any,children:React.ReactNode,caret?:any,styleclassName?:string}) {
  return (
    <Dropdown.Root>
        <Dropdown.Trigger className={styleclassName}>
            <span>{option}</span>
            {caret}
        </Dropdown.Trigger>
        <Dropdown.Content className='optionstyle'>
            {children}
        </Dropdown.Content>
    </Dropdown.Root>
  )
}
