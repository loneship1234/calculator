import React from 'react'

function BUtton(props) {
  return (
    <React.Fragment>
<button value={props.value} onClick={props.onClick} className={'rounded-lg font-semibold text-3xl flex justify-center items-center shadow-xl inner-shadow'+props.className}>{props.children}</button>
    </React.Fragment>
  )
}


export default BUtton