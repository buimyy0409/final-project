import React from 'react'
import HeaderComponent from '../components/HeaderComponent'

const Dashboard = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
        <div className='col-6' style={{backgroundColor:'#fafafa'}}>
            <HeaderComponent/>
        </div>
        <div className='col bg-white'>calendar</div>
        </div>
    </div>
  )
}

export default Dashboard