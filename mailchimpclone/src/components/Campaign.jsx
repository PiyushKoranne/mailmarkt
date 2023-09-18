import { PlusOutlined } from '@ant-design/icons';
import { Button, Input, Form, message, Select, Steps, Tag, Switch, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea';
import {useState} from 'react'

const Campaign = () => {
	const steps = [
		{
			title: 'Add Details',
			content: <Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			layout="horizontal"
			style={{ fontFamily: 'Montagu Slab Variable,sans-serif' }}
		>
			<Form.Item label="Campaign Title">
				<Input />
			</Form.Item>
			<Form.Item label="Campaign Type">
				<Select>
					<Select.Option value="demo">Demo</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item label="Subject Line">
				<Input />
			</Form.Item>
			<Form.Item label="Preview Text">
				<Input />
			</Form.Item>
			<Form.Item label="Sender's Name">
				<Input />
			</Form.Item>
			<Form.Item label="Reply To Email">
				<Input />
			</Form.Item>
			<Form.Item label="Choose Email Template">
				<Select>
					<Select.Option value="demo">Demo</Select.Option>
				</Select>
			</Form.Item>
			<Form.Item label="Custom Email Template">
          		<TextArea rows={4} />
        	</Form.Item>
		</Form>,
		},
		{
			title: 'Choose Recepients',
			content: 
			<div>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				style={{ fontFamily: 'Montagu Slab Variable,sans-serif' }}
			>
				<Form.Item label="Recepients">
					<Select>
						<Select.Option value="demo">Demo</Select.Option>
					</Select>
				</Form.Item>
			</Form>
			<div> Search Recepients </div>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				style={{ fontFamily: 'Montagu Slab Variable,sans-serif' }}
			>
				<Form.Item label="Recepients">
					<Input.Search
						placeholder="input search text"
						onSearch={() =>{}}
						style={{
							width: 200,
						}}
					/>
				</Form.Item>
			</Form>
			<div> Add Recipients by Tag:</div>
			<div>
				<span className='inline-block'>Popular Tags:</span>
				<span className='inline-block'>
					<Tag color="#625bf8">Tag1</Tag>
					<Tag color="#625bf8">Tag1</Tag>
					<Tag color="#625bf8">Tag1</Tag>
				</span>
			</div>
			<div> Search Tags </div>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				style={{ fontFamily: 'Montagu Slab Variable,sans-serif' }}
			>
				<Form.Item label="Tag Name">
					<Input.Search
						placeholder="input search text"
						onSearch={() =>{}}
						style={{
							width: 200,
						}}
					/>
				</Form.Item>
			</Form>
			</div>
			,
		},
		{
			title: 'Social and Tracking',
			content: 
			<div>
				<div>Social Card</div>
				<div><p>The preview for the campaign, rendered by social networks like Facebook and Twitter.</p></div>
				<Form
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 14 }}
					layout="horizontal"
					style={{ fontFamily: 'Montagu Slab Variable,sans-serif' }}
				>
					<Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={()=>{}}>
						<Upload action="/upload.do" listType="picture-card">
							<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
							</div>
						</Upload>
					</Form.Item>
					<Form.Item label="Title">
						<Input />
					</Form.Item>
					<Form.Item label="Description">
						<Input />
					</Form.Item>
					<Form.Item label="Campaign Type">
						<Select>
							<Select.Option value="demo">Demo</Select.Option>
						</Select>
					</Form.Item>
					<Form.Item label="Recepients">
						<Select>
							<Select.Option value="demo">Demo</Select.Option>
						</Select>
					</Form.Item>
				</Form>
				<div>Tracking Options:</div>
				<Form
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 14 }}
					layout="horizontal"
					style={{ fontFamily: 'Montagu Slab Variable,sans-serif' }}
				>
					<Form.Item label="Html Clicks" valuePropName="checked">
          				<Switch />
        			</Form.Item>
					<Form.Item label="Text Clicks" valuePropName="checked">
          				<Switch />
        			</Form.Item>
					<Form.Item label="Google Analytics Slug">
						<Input />
					</Form.Item>
				</Form>
			</div>
			,
		},
	];
	const [current, setCurrent] = useState(0);
	const next = () => {
		setCurrent(current + 1);
	};
	const prev = () => {
		setCurrent(current - 1);
	};
	const items = steps.map((item) => ({
		key: item.title,
		title: item.title,
	}));
	return (
		<div className='min-h-screen'>
			<div className='flex items-center justify-between p-[20px] border-b-[1px] border-b-yellow-main'>
				<div><h3>Create a New Campaign</h3></div>
			</div>
			<div className='p-[20px]'>
				<Steps className='bg-pink' current={current} items={items} />
				<div className='mt-[25px]'>{steps[current].content}</div>
				<div
					className='mt-[25px] flex gap-[15px]'
				>
					{current < steps.length - 1 && (
						<button className='common-button bg-yellow-main common-button-yellow rounded-full' onClick={() => next()}>
							Next
						</button>
					)}
					{current === steps.length - 1 && (
						<button className='common-button common-button-green rounded-full bg-dark-green text-yellow-main' onClick={() => message.success('Processing complete!')}>
							Done
						</button>
					)}
					{current > 0 && (
						<button
							className='common-button rounded-full'
							onClick={() => prev()}
						>
							Previous
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default Campaign