import React from 'react'
import { Label, CustomInput, Table } from 'reactstrap'
import PropTypes from 'prop-types'
 const ViewController = ({view,changeView}) => {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='mr-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    id='list-view'
                    value='list'
                    onChange={changeView}
                    className='d-inline-block'
                    checked= {view === 'list'}
                />
                 list View
            </Label>
            <Label for='table-view' className='mr-4'>
                <CustomInput
                    type='radio'
                    name='view'
                    value='table'
                    id='table-view'
                    onChange={changeView}
                    className='d-inline-block'
                    checked={view === 'table'}
                />
                Table View
            </Label>
            
        </div>
    )
}
ViewController.propTypes = {
    view: PropTypes.string.isRequired,
    changeView:PropTypes.func.isRequired,
}
export default ViewController
