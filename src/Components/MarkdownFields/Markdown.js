import React, { useState } from 'react'
import './Markdown.css'
import ReactMarkdown from 'react-markdown'

const Markdown = () => {
    const [data, setData]= useState("")
  return (
    <div className='markdowSection'>
      <div className='LeftSide'>
        <div className='internarltitle'>
        <h3 className='title'>Markdown</h3>
        </div>
        <textarea value={data} onChange={(e)=>{setData(e.target.value)}}/>
      </div>
      <div className='rightSide'>
        <div className='internarltitle'>
            <h3 className='title'>Preview</h3>
            <i class="fa-regular fa-eye"></i>
        </div>
        <ReactMarkdown className='markDownData'>{data}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Markdown
