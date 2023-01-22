import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
      if (isEmpty) {
        return <h1 className="text-center">your cart is empty</h1>;
      }
    return (
        <div className='mt-16'>
               <div className='text-center'>
                <h3 className='text-xl font-bold  uppercase  '>Checkout <span className='text-xl font-bold text-primary'> View</span></h3>
                
                <div className="row justify-center">
        <div className="columns-1 ">
          <h5 className='text-xl font-bold'>
            Cart {totalUniqueItems} total Items: ({totalItems})
          </h5>
          <table className="table lg:w-full w-50 table-auto table-hover m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} alt="" style={{ height: "6rem" }} />
                    </td>
                    <td className='text-lg font-bold'>{item.title}</td>
                    <td className='text-lg font-bold'>${item.price}</td>
                    <td className='text-lg font-bold'>Quantity : ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2 ml-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2 ml-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="columns-auto ms-auto">
          <h2 className='text-xl font-bold'>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="columns-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="btn btn-primary m-2">Pay Now</button>
        </div>
      </div>
                
        </div>

        </div>
    );
};

export default Cart;