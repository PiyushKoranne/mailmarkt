import { Table } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Campaigns = () => {
	const columns =[
		{
			title: 'Created',
			dataIndex: 'campaign_created_time',
			key: 'campaign_created_time',
		},
		{
			title: 'Campaign Name',
			dataIndex: 'campaign_name',
			key: 'campaign_name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Campaign Status',
			dataIndex: 'campaign_status',
			key: 'campaign_status',
		},
		{
			title: 'Total Recepients',
			dataIndex: 'total_recepients',
			key: 'total_recepients',
		},
		{
			title: 'Mails Sent',
			dataIndex: 'mails_sent',
			key: 'mails_sent',
		},
	]
	const [allCampaigns, setAllCampaigns] = useState([])
  return (
	<div className='min-h-screen'>
		<div className='flex items-center justify-between p-[20px] border-b-[1px] border-b-yellow-main'>
			<div><h3>Campaigns</h3></div>
			<Link to={"../campaign"}><button className='common-button common-button-yellow rounded-full'>Start a New Campaign</button></Link>
		</div>
		<section className='w-full'>
			<Table columns={columns} dataSource={allCampaigns} />
		</section>
	</div>
  )
}

export default Campaigns