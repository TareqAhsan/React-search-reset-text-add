import React from 'react'
import SearchPanel from './search-panel'
import PropTypes from 'prop-types'
import { Row,Col } from 'reactstrap'
import FilterController from './FilterController'
import ViewController from './ViewController'
import BulkController from './BulkController'
const Controller = ({ term, handleSearch, toggleForm,handleFilter,view,changeView ,clearSelected,clearCompleted,reset}) => {
    return (
        <div>
            <SearchPanel
                term={term}
                handleSearch={handleSearch}
                toggleForm={toggleForm}
            />
            <Row className="my-4">
                <Col md={{size:4}}>
                    <FilterController handleFilter={handleFilter }/>
                </Col>
                <Col md={{ size: 4 }}>
                    <ViewController view={view} changeView={ changeView }/>
                </Col>
                <Col md={{ size: 4 }} className='d-flex'>
                    <div className='ml-auto'>
                        <BulkController clearCompleted={clearCompleted} clearSelected={clearSelected} reset={reset} />
                    </div>
                </Col>
                
            </Row>
        </div>
    )
}
Controller.propTypes = {
    term: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleSearch: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    view: PropTypes.string.isRequired,
    changeView: PropTypes.func.isRequired,
    clearCompleted: PropTypes.func.isRequired,
    clearSelected: PropTypes.func.isRequired,
    reset:PropTypes.func.isRequired,
}

export default Controller
