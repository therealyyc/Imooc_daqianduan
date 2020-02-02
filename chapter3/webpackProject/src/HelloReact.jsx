import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

function HelloReact(props) {
  const [count, setCount] = useState(0)
  const add = () => {
    setCount(count => count + 1)
  }
  return (
    <Fragment>
      <div>
        数量是:{count}
      </div>
      <button onClick={add}>click me</button>
    </Fragment>
  )
}


export default HelloReact;

