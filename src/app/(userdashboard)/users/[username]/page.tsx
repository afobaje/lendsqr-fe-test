'use client'
import { ArrowBack, RatedStar } from '@/Components/UsersIcon'
import React from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { useRouter } from 'next/navigation'
import dataresource from './../../../../resource/data.json'

export default function Page({params}:{params:{username:string}}) {

    const router = useRouter()
    console.log('zankue',dataresource,params.username)

    let [userInfo]=dataresource.filter(val=>val._id==params.username)

    console.log(userInfo,'gstring')


    function handleBack() {
        router.back()
    }

    return (
        <section className='userinfo'>
            <div className='nav' onClick={handleBack}><span><ArrowBack /></span><span>Back to Users</span></div>
            <div className='bottomnav'>
                <span>User Details</span>
                <div>
                    <button className='blacklist ctab'>blacklist user</button>
                    <button className='activate ctab'>activate user</button>
                </div>
            </div>
            <section>
                <div className='topheader'>
                    <div className="userdetailsheader">
                        {/* <div className='horflex'>
                            <div className='userimg'>
                                <span className="display">A</span>
                                
                            </div>
                            <div className="username verflex">
                                <span>Grace Effiom</span>
                                <span>LSQFf587g90</span>
                            </div>
                            <div className="rule"></div>
                            <div className="tie verflex">
                                <span>Users Tier</span>
                                <div className="stars horflex">
                                    <span><RatedStar /></span>
                                    <span><RatedStar /></span>
                                    <span><RatedStar /></span>
                                </div>
                            </div>
                            <div className="rule"></div>
                            <div className="balance verflex">
                                <span>#200,000.00</span>
                                <span>9912345678/Providus Bank</span>
                            </div>
                        </div> */}

                        <div className="tabs">
                            <Tabs.Root defaultValue='one'>
                                <div className="orifice verflex">
                                    <div className='firstheader horflex'>
                                        <div className='userimg'>
                                            <span className="display">A</span>
                                            {/* <img src="" alt="" /> */}
                                        </div>
                                        <div className="username verflex">
                                            <span>{userInfo?.name}</span>
                                            <span>{userInfo?.bvn}</span>
                                        </div>
                                        <div className="rule"></div>
                                        <div className="tie verflex">
                                            <span>Users Tier</span>
                                            <div className="stars horflex">
                                                <span><RatedStar /></span>
                                                <span><RatedStar /></span>
                                                <span><RatedStar /></span>
                                            </div>
                                        </div>
                                        <div className="rule"></div>
                                        <div className="balance verflex">
                                            <span>#200,000.00</span>
                                            <span>9912345678/Providus Bank</span>
                                        </div>
                                    </div>
                                    <Tabs.List className='tablist horflex'>
                                        <Tabs.Trigger className='triggerbuttons' value='one'>General Details</Tabs.Trigger>
                                        <Tabs.Trigger className='triggerbuttons' value='two'>Documents</Tabs.Trigger>
                                        <Tabs.Trigger className='triggerbuttons' value='three'>Bank Details</Tabs.Trigger>
                                        <Tabs.Trigger className='triggerbuttons' value='four'>Loans</Tabs.Trigger>
                                        <Tabs.Trigger className='triggerbuttons' value='five'>Savings</Tabs.Trigger>
                                        <Tabs.Trigger className='triggerbuttons' value='six'>App and System</Tabs.Trigger>
                                    </Tabs.List>
                                </div>
                                <Tabs.Content className='contentwrap' value='one'>
                                    <div className="wrapper">
                                        <div className="personal ">
                                            <p>Personal Information</p>
                                            <div className="info verflex">
                                                <div className="infofirstset horflex">
                                                    <div className="fname verflex">
                                                        <span>FULL NAME</span>
                                                        <span>{userInfo?.name}</span>
                                                    </div>
                                                    <div className="pnumber verflex">
                                                        <span>PHONE NUMBER</span>
                                                        <span>{userInfo?.phone}</span>
                                                    </div>
                                                    <div className="email verflex">
                                                        <span>EMAIL ADDRESS</span>
                                                        <span>{userInfo?.email}</span>
                                                    </div>
                                                    <div className="bvn verflex">
                                                        <span>BVN</span>
                                                        <span>{userInfo?.bvn}</span>
                                                    </div>
                                                    <div className="gender verflex">
                                                        <span>GENDER</span>
                                                        <span>{userInfo?.gender}</span>
                                                    </div>
                                                </div>
                                                <div className="infosecond horflex">
                                                    <div className="maritalstatus verflex">
                                                        <span>MARITAL STATUS</span>
                                                        <span>Single</span>
                                                    </div>
                                                    <div className="children verflex">
                                                        <span>CHILDREN</span>
                                                        <span>{userInfo?.friends.length}</span>
                                                    </div>
                                                    <div className="residence verflex">
                                                        <span>TYPE OF RESIDENCE</span>
                                                        <span>{userInfo?.typeofResidence}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider"></div>
                                        </div>
                                        <div className="education">
                                            <p>Education and Employment</p>
                                            <div className="eduinfo verflex">
                                                <div className="edufirstset horflex">
                                                    <div className="level verflex">
                                                        <span>LEVEL OF EDUCATION</span>
                                                        <span>{userInfo?.education}</span>
                                                    </div>
                                                    <div className="status verflex">
                                                        <span>EMPLOYMENT STATUS</span>
                                                        <span>Employed</span>
                                                    </div>
                                                    <div className="sector verflex">
                                                        <span>SECTOR OF EMPLOYMENT</span>
                                                        <span>fintech</span>
                                                    </div>
                                                    <div className="duration verflex">
                                                        <span>DURATION OF EMPLOYMENT</span>
                                                        <span>2 years</span>
                                                    </div>
                                                </div>
                                                <div className="edusecond horflex">
                                                    <div className="officemail verflex">
                                                        <span>OFFICE EMAIL</span>
                                                        <span>{userInfo?.email}</span>
                                                    </div>
                                                    <div className="income verflex">
                                                        <span>MONTHLY INCOME</span>
                                                        <span>#200,000-#400,000</span>
                                                    </div>
                                                    <div className="repayment verflex">
                                                        <span>LOAN REPAYMENT</span>
                                                        <span>#40,000</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="socials">
                                            <p>Socials</p>
                                            <div className="socialinfo horflex">
                                                <div className="twitter verflex">
                                                    <span>TWITTER</span>
                                                    <span>@graceeffiong</span>
                                                </div>
                                                <div className="facebook verflex">
                                                    <span>FACEBOOK</span>
                                                    <span>Grace Effiong</span>
                                                </div>
                                                <div className="insta verflex">
                                                    <span>INSTAGRAM</span>
                                                    <span>@graceeffiong</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                        <div className="guarantor">
                                            <p>Guarantor</p>
                                            <div className="guarantorinfo horflex">
                                                <div className="fname verflex">
                                                    <span>FULL NAME</span>
                                                    <span>{userInfo?.name}</span>
                                                </div>
                                                <div className="pnumber verflex">
                                                    <span>PHONE NUMBER</span>
                                                    <span>{userInfo?.phone}</span>
                                                </div>
                                                <div className="email verflex">
                                                    <span>EMAIL ADDRESS</span>
                                                    <span>{userInfo?.email}</span>
                                                </div>
                                                <div className="relationship verflex">
                                                    <span>RELATIONSHIP</span>
                                                    <span>Sister</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tabs.Content>
                                <Tabs.Content className='contentwrap' value='two'>Documents</Tabs.Content>
                                <Tabs.Content className='contentwrap' value='three'>Bank Details</Tabs.Content>
                                <Tabs.Content className='contentwrap' value='four'>Loans</Tabs.Content>
                                <Tabs.Content className='contentwrap' value='five'>Savings</Tabs.Content>
                                <Tabs.Content className='contentwrap' value='six'>App and System</Tabs.Content>
                            </Tabs.Root>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
