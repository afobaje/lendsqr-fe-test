import React from 'react'
import styles from './../styles/sidebar.module.scss'
import DropDownCaret from './DropDownCaret'
import { AuditLogs, Dashboard, Decision, Fees, FeesandPricing, Guarantors, Karma, LoanRequests, Loans, Organization, Preference, Reports, Savings, SavingsProduct, ServiceAccount, Services, Settlement, SystemMessages, Transactions, Users, Whitelist } from './SidebarIcons'
import Link from 'next/link'
export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.over}>
                <div className={styles.org}><span><Organization /></span><span>Switch Organization</span><span><DropDownCaret /></span></div>
                <div className='list'><span className={styles.dash}><Dashboard /></span><span>Dashboard</span></div>
                <div className='list'>
                    <span className='headtopic'>CUSTOMERS</span>
                    <ul>
                        <li><Link href='/users' className='checklink'><span><Users /></span><span>Users</span></Link></li>
                        <li><span><Guarantors /></span><span>Guarantors</span></li>
                        <li><span><Loans /></span><span>Loans</span></li>
                        <li><span><Decision /></span><span>Decision Models</span></li>
                        <li><span><Savings /></span><span>Savings</span></li>
                        <li><span><LoanRequests /></span><span>Loan Requests</span></li>
                        <li><span><Whitelist /></span><span>Whitelist</span></li>
                        <li><span><Karma /></span><span>Karma</span></li>
                    </ul>
                </div>

                <div className='list'>
                    <span className='headtopic'>BUSINESSES</span>
                    <ul>
                        <li><span><Organization /></span><span>Organization</span></li>
                        <li><span><LoanRequests /></span><span>Loan Products</span></li>
                        <li><span><SavingsProduct /></span><span>Savings Products</span></li>
                        <li><span><Fees /></span><span>Fees and Charges</span></li>
                        <li><span><Transactions /></span><span>Transactions</span></li>
                        <li><span><Services /></span><span>Services</span></li>
                        <li><span><ServiceAccount /></span><span>Service Account</span></li>
                        <li><span><Settlement /></span><span>Settlements</span></li>
                        <li><span><Reports /></span><span>Reports</span></li>
                    </ul>
                </div>
                <div className='list'>
                    <span className='headtopic'>SETTINGS</span>
                    <ul>
                        <li><span><Preference /></span><span>Preferences</span></li>
                        <li><span><FeesandPricing /></span><span>Fees and Pricing</span></li>
                        <li><span><AuditLogs /></span><span>Audit Logs</span></li>
                        <li><span><SystemMessages/></span><span>Systems Messages</span></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}
