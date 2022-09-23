import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.display_image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.title}</strong>
          </Card.Title>
        </Link>
        {/* <Card.Text as='div'>
          <div className='my-3'>{product.brand}</div>
        </Card.Text> */}
        <Card.Text as='h3'>
          <div className='my-3'>
            {product.price.value} {product.price.currency}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
