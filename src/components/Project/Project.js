import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Col
} from 'reactstrap';
import './Project.css'

const Project = ({ image, title, desc, alt, link }) => {
  return (
    <Col>
      <Card>
        <CardImg top width="100%" src={image} alt={alt} />
        <CardBody>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>{desc}</CardText>
          <a href={link} target="_blank" rel="noreferrer" class="btn btn-primary">Open Website</a>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Project