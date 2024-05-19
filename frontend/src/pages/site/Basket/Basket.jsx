
import React, { useEffect, useState } from 'react';
import './Basket.css';
import { Helmet } from 'react-helmet';

const Basket = () => {
  const [basket, setBasket] = useState(
    localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : []
  );

  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const handleDelete = (id) => {
    let updatedBasket = basket.map((item) => {
      if (item.id === id) {
        if (item.count > 1) {
          item.count--;
        } else {
          return null;
        }
      }
      return item;
    });

    updatedBasket = updatedBasket.filter((item) => item !== null);
    setBasket(updatedBasket);
  };

  const handleAdd = (id) => {
    let updatedBasket = basket.map((item) => {
      if (item.id === id) {
        item.count++;
      }
      return item;
    });

    setBasket(updatedBasket);
  };

  return (
    <>
  <Helmet>
    <title>Basket</title>
  </Helmet>

  <div className="container">
      <table className="table mt-5 table-dark">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Count</th>
            <th scope="col">Delete</th>
            <th scope="col">Add</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item, index) => (
            <tr key={index}>
              <td>
                <img width={"60px"} height={"60px"} src={item.image} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.price * item.count}</td>
              <td>{item.count}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={() => handleAdd(item.id)}>
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
    
  );
};

export default Basket;

