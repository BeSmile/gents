import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

const HomeFC = memo(() => {
  const {
    products,
  } = useSelector((state: any) => state.product);

  return (
      <div>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
          {/* <span onClick={() => dispatch({type: 'product/fetchProduct', payload: {id: 11, name: "ekfj"}})}>点击我添加</span> */}
          <br/>
          {products.map((item, key) => (
              <div key={key}>{item._id}-{item.title}- {key}</div>
          ))}
      </div>
  )
});

export default HomeFC;