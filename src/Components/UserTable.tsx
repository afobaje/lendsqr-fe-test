'use client'
import React from 'react'
import Filter from './Filter';
import Options from './Options';
import dataresource from './../resource/data.json'
import { useRouter } from 'next/navigation';


export default function UserTable() {
    let router = useRouter()


   
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th><Filter style='tabstyle' filter='ORGANIZATION' /></th>
                    <th><Filter style='tabstyle' filter='USERNAME' /></th>
                    <th><Filter style='tabstyle' filter='EMAIL' /></th>
                    <th><Filter style='tabstyle' filter='PHONE NUMBER' /></th>
                    <th><Filter style='tabstyle' filter='DATE JOINED' /></th>
                    <th><Filter style='tabstyle' filter='STATUS' /></th>
                </tr>
            </thead>
            <tbody>
                {
                    dataresource.map((val: any, i: any) => {
                        return (
                            <tr onClick={() => {
                                router.push(`/users/${val._id}`)
                            }} key={i}>
                                <td>{val.organization}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.phone}</td>
                                <td>{new Date(val.datejoined).toDateString()}</td>
                                <td><span className={val.status}>{val.status}</span></td>
                                <td><Options /></td>
                            </tr>
                        )
                    })
                }




            </tbody>
        </table>
    )
}