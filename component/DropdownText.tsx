import React from "react";
import { Space, Dropdown, Menu } from "antd";
import { DownOutlined } from '@ant-design/icons';

interface Props {
  type:string
}

function DropdownsText (props:Props){

  const menu = (
    <Menu
      items={[
        {
          label: 'test',
          key: '0',
        },
        {
          label: 'test',
          key: '1',
        },
      ]}
    />
  );

  let typesDopdawn 
  if (props.type === 'start') {
    typesDopdawn = 'Start'
  }
  if(props.type === 'sell'){
    typesDopdawn= 'Sell'
  }
  if (props.type === 'market') {
    typesDopdawn = 'Market'
  }
  if (props.type === 'manage') {
    typesDopdawn = 'Manage'
  }
  if (props.type ==='learn') {
    typesDopdawn === 'Learn'
  }
  
  return(
    <div>
      <Dropdown overlay={menu} trigger={['click']}> 
      <span className="d-flex mt-1" style={{color:'#ffffff', paddingLeft:'26px'}} onClick={e => e.preventDefault()}>
      <Space>
        {typesDopdawn}
      </Space>
      <DownOutlined style={{fontSize:'12px', marginTop:'8px', marginLeft:'5px'}} />
    </span>
      </Dropdown>
    </div>
  )
  
}

export default DropdownsText
