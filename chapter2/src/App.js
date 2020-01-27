import React, { useState, useEffect } from 'react';
import { fetchData } from './service/action';
import { getData } from './service/mock';
import * as _ from 'lodash'


function App() {

  useEffect(() => {
    getData()
  }, [])

  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(1)
  const [content, setContent] = useState('')

  const handleInputNumber = (e) => {
    setPageNumber(e.target.value)
  }

  const handleInputSize = (e) => {
    setPageSize(e.target.value)
  }

  const handleSubmit = async () => {
    let res = await fetchData(pageNumber,
      pageSize)
    setContent(JSON.stringify(_.get(res, ['data', 'data'], [])))
    console.log('res', res)

  }
  return (
    <main>
      <h1>这里是返回结果</h1>
      <section>
        <span style={{ marginRight: '10px' }}>页码：</span><input type="text" onChange={handleInputNumber}></input>
        <span style={{ marginRight: '10px' }}>数量: </span><input type="text" onChange={handleInputSize}></input>
        <button onClick={handleSubmit}>send API</button>
      </section>
      <section>
        {content}
      </section>
    </main>
  );
}

export default App;
