import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <div>
      <Header
        title="Little bit about me!"
        description="I am into to tECH."
      />

      <div className="container sm:w-3/4 ">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum obcaecati accusantium voluptatibus temporibus est corporis id quos culpa alias ad! Dolorem dignissimos modi neque, consequuntur inventore odio dolores ratione odit!</p>
      </div>
    </div>
  )
}

export default About