import { Avatar, Button, Dropdown, Input, Space } from 'antd'
import { Link, SearchNormal1 } from 'iconsax-react'
import React from 'react'

const HeaderComponent = () => {
  return (
    <div className='row'>
        <div className='col' style={{padding: '0 15px'}}>
          <Link to='/profile'>
            <Button>
            <Space>
            <Avatar size={18}>IM</Avatar>
            IMei Wallet
            </Space>
            </Button>
            </Link>
        </div>
        <div className='col-3 p-3' style={{width:'60%'}}>
            <Input style={{width:'60%'}} prefix={<SearchNormal1 size={18} color='#676767'/>}
            placeholder='Search...'
            bordered={false}/>
        </div>
    </div>
  )
}

export default HeaderComponent