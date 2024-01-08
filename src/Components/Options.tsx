import React from 'react'
import DropdownMenu from './DropdownMenu'
import { BsThreeDotsVertical } from 'react-icons/bs'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { ActivateUser, BlacklistUser, UserDetails } from './UsersIcon'

export default function Options() {
    return (
        <DropdownMenu styleclassName='tabstyle' option={<BsThreeDotsVertical />}>
            <div className="optionsmenu ">
                <Dropdown.Item>
                    <div className="optionitem">
                        <span><UserDetails /></span>
                        <span>View Details</span>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="optionitem">
                        <span><BlacklistUser /></span>
                        <span>Blacklist User</span>
                    </div>
                </Dropdown.Item>
                <Dropdown.Item>
                    <div className="optionitem">
                        <span><ActivateUser /></span>
                        <span>Activate User</span>
                    </div>
                </Dropdown.Item>
            </div>
        </DropdownMenu>
    )
}
