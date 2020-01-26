import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap'

import TextField from '../../../components/TextField'
import MultipleSelection from '../../../components/MultipleSelection'

const Header = (props) => {
  const {
    filters: {
      searchText,
      setSearchText,
      selectedCategories,
      setSelectedCategories,
      selectedDeliveryTime,
      setSelectedDeliveryTime
    }, 
    onChangeHandler,
    categories
  } = props

  return (
    <Fragment >
      <Row >
        <Col md={6} className="mb-3" >
          <TextField value={searchText} onChange={onChangeHandler({ setSearchText })} label="Search Furniture" />
        </Col>
      </Row>
      <Row >
        <Col md={6} >
          <MultipleSelection
            value={selectedCategories}
            onChange={onChangeHandler({ setSelectedCategories })}
            label="Furniture Style"
            suggestions={categories}
          />
        </Col>
        <Col md={6} >
          <MultipleSelection
            value={selectedDeliveryTime}
            onChange={onChangeHandler({ setSelectedDeliveryTime })}
            label="Delivery Time"
            suggestions={[
              "1_week",
              "2_weeks",
              "1_month",
              "more"
            ]}
          />
        </Col>
      </Row>
    </Fragment>
  )
}

export default Header