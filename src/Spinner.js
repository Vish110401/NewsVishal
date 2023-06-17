import React from 'react'
import loading from './Loading_icon.gif'

const Spinner=()=>{
    return (
      <div class="text-center">
        <img src={loading} alt="loading"/>
      </div>
    )
}
export default Spinner

