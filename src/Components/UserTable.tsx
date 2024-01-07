import { Table } from '@radix-ui/themes'
import React from 'react'
import { UserFilter } from './UsersIcon'
import { BsThreeDotsVertical } from "react-icons/bs";


export default function UserTable() {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th><span>ORGANIZATION</span><span><UserFilter /></span></th>
                    <th><span>USERNAME</span> <span><UserFilter /></span></th>
                    <th><span>EMAIL</span><span><UserFilter /></span></th>
                    <th><span>PHONE NUMBER</span><span><UserFilter /></span></th>
                    <th><span>DATE JOINED</span><span><UserFilter /></span></th>
                    <th><span>STATUS</span><span><UserFilter /></span></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td>Active</td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td><span className='active'>Active</span></td>
                    <td><BsThreeDotsVertical /></td>
                </tr>
                <tr>
                    <td>Lendsqr</td>
                    <td>Adedeji</td>
                    <td>adedeji@lendsqr.com</td>
                    <td>08132735880</td>
                    <td>May 15,2020 10:00am</td>
                    <td><span className='active'>Active</span></td>
                    <td><BsThreeDotsVertical /></td>
                </tr>

                
            </tbody>
        </table>
    )
}