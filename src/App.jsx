import React from 'react'
import { Col, Row } from 'antd';
import './App.css'
const App = () => {
  return (
    <>
      <Row>
        <Col span={12}>
          <div className="left-side">
            <h6>March 17, 2021 12:00</h6>
            <h2 style={{paddingTop: '10px'}}>The help of Augmented Reality and Holograms.</h2>
            <p>
            Use Augmented Reality to keep students engaged and provide detailed explanations of models and course material. 
In a 3D, AR Lab, students can pinch, zoom, and rotate equipment related to the course, for a fully immersive learning experience
            </p>
          </div>
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </>
  )
}

export default App
