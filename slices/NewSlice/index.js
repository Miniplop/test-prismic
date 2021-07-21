import React from 'react'
import { RichText } from 'prismic-reactjs'

const NewSlice = ({ slice }) => (
  <section>
    <span className="title">
      {
        slice.primary.title ?
        <RichText render={slice.primary.title}/>
        : <h2>Template slice, update me!</h2>
      }
    </span>
    {
      slice.primary.description ?
      <RichText render={slice.primary.description}/>
      : <p>start by editing this slice from inside Prismic builder!</p>
    }
    <img src={slice.primary.mainImage.url} alt={slice.primary.mainImage.alt} />
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
          background-color: ${slice.primary.backgroundColor};
          padding: 16px;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default NewSlice