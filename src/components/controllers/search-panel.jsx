import React from 'react'
import { Input,Button } from 'reactstrap'
import PropTypes from 'prop-types'

const SearchPanel = ({ term, handleSearch, toggleForm }) => {
    return (
        <div className='d-flex'>
            <Input
                className="mr-3"
                placeholder="enter search here"
                value={term}
                onChange= {e => handleSearch(e.target.value)}
            />
            <Button color='success' onClick={toggleForm} >
                New
            </Button>
        </div>
    )
}
SearchPanel.propTypes = {
    term: PropTypes.string.isRequired,
    toggleForm: PropTypes.func.isRequired,
    handleSearch:PropTypes.func.isRequired
}

export default SearchPanel
