import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap'

import '../../styles.css'

import Header from './components/Header'
import Cards from './components/Cards'

const onChangeHandler = ({ setSearchText, setSelectedCategories, setSelectedDeliveryTime }) => e => {
  if (setSearchText) {
    setSearchText(e.target.value)
  } else if (setSelectedCategories) {
    setSelectedCategories(e.target.value)
  } else if (setSelectedDeliveryTime) {
    setSelectedDeliveryTime(e.target.value)
  }
}

const Index = () => {
  const [defaultProducts, setDefaultProducts] = useState([])
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [searchText, setSearchText] = useState("")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState([])
  const filters = {
    searchText,
    selectedCategories,
    selectedDeliveryTime,
    setSearchText,
    setSelectedCategories,
    setSelectedDeliveryTime,
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://www.mocky.io/v2/5c9105cb330000112b649af8')
      const { data } = response

      setProducts(data.products)
      setDefaultProducts(data.products)
      setCategories(data.furniture_styles)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const filteredProducts = defaultProducts.filter(product => {
      const { name, furniture_style } = product
      let productFiltered = false
      let categoriesFiltered = selectedCategories.length > 0 ? false : true
      let deliveryTimeFiltered = selectedDeliveryTime.length > 0 ? false : true

      if (name.toLowerCase().includes(searchText.toLowerCase())) {
        productFiltered = true
      }

      if (selectedCategories.length) {
        selectedCategories.forEach(val => {
          if (furniture_style.includes(val)) {
            categoriesFiltered = true
          }
        })
      }

      if (selectedDeliveryTime.length) {
        
      }

      return productFiltered && categoriesFiltered
    })

    setProducts(filteredProducts)
  }, [searchText, selectedCategories, selectedDeliveryTime])

  return (
    <Container >
      <Row className="pt-4 pb-4 header" >
        <Col >
          <Header
            onChangeHandler={onChangeHandler}
            filters={filters}
            categories={categories}
          />
        </Col>
      </Row>
      <Row className="mt-4" >
        <Col >
          <Cards products={products} />
        </Col>
      </Row>
    </Container>
  )
}

export default Index