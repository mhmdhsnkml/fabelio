import React from 'react'
import { Card as Cardstrap, CardBody, Row, Col } from 'reactstrap'
import NumberFormat from 'react-number-format'

const Card = ({ product }) => {
  return (
    <Cardstrap >
      <CardBody >
        <Row >
          <Col className="card-title" >{product.name}</Col>
          <Col className="d-flex justify-content-end card-price" >
            <NumberFormat
              value={product.price}
              thousandSeparator="."
              decimalSeparator=","
              decimalScale={2}
              displayType="text"
              prefix="Rp "
            />
          </Col>
        </Row>
        <Row className="mb-2" >
          <Col className="card-description" >{product.description.substring(0, 114) + "..."}</Col>
        </Row>
        <Row >
          <Col className="card-categories" >
            {product.furniture_style.map(category => (
              category + " "
            ))}
          </Col>
        </Row>
        <Row >
          <Col className="d-flex justify-content-end card-delivery" >{product.delivery_time} days</Col>
        </Row>
      </CardBody>
    </Cardstrap>
  )
}

const Cards = ({ products }) => {
  if (!products.length) {
    return (
      <Row >
        <Col className="d-flex justify-content-center" >
          NO DATA
        </Col>
      </Row>
    )
  }

  return (
    <Row >
      {products.map((product, idx) => (
        <Col className="mb-3" md={6} key={idx} >
          <Card product={product} />
        </Col>
      ))}
    </Row>
  )
}

export default Cards