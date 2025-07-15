import React, { useState } from 'react'
import { data } from './kitchen'
import './styles.css'

function Breakfast({ category }) {

    const [selectedItems, setSelectedItems] = useState([]);
    const handleSelect = (item) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item]);
        }

    };

    const [showDiv, setShowDiv] = useState(false)
    const displayOrder = () => {
        setShowDiv(!showDiv)
    }

    const totalPrice = Object.values(selectedItems).reduce((acc, item) =>
        acc + item.price, 0).toFixed(2)
    return (

        <div className="foodServed">
            {category === 'breakfast' && (
                <div className="breakfast" id="breakfast">

                    <ul >
                        {
                            data.breakfast.map((item, i) => (<li key={i}>
                                <span className="breakfast__items">
                                    <span className="breakfast__image">
                                        <img alt="photos" src={item.image} />
                                    </span>
                                    <span className="breakfast__name"> {item.name}</span>
                                    <span className="breakfast__description"> {item.description}</span>
                                </span>

                                <span className="breakfast__ordering">
                                    <span className="breakfast__price">${item.price}</span>
                                    <button className="selecting"
                                        style={{
                                            backgroundColor: selectedItems.includes(item) ? 'blue' : ' ',
                                            color: selectedItems.includes(item) ? 'white' : '',

                                        }}
                                        onClick={() => handleSelect(item)}
                                    >
                                        {selectedItems.includes(item) ? 'Selected' : 'Select'}</button>
                                </span>
                            </li>
                            ))
                        }

                    </ul>

                </div>
            )}
            {category === 'foodsAndDrinks' && (
                <div className="breakfast" id="foods">

                    <ul >
                        {
                            data.foods.map((item, i) => (<li key={i}>
                                <span className="breakfast__items">

                                    <img className="breakfast__image" alt="photos" src={item.image} />

                                    <p className="breakfast__name"> {item.name}</p>
                                    <p className="breakfast__description"> {item.description}</p>
                                </span>

                                <span className="breakfast__ordering">
                                    <span className="breakfast__price">${item.price}</span>
                                    <button className="selecting"
                                        style={{
                                            backgroundColor: selectedItems.includes(item) ? 'blue' : ' ',
                                            color: selectedItems.includes(item) ? 'white' : '',

                                        }}
                                        onClick={() => handleSelect(item)}
                                    >
                                        {selectedItems.includes(item) ? 'Selected' : 'Select'}</button>
                                </span>
                            </li>
                            ))
                        }

                    </ul>

                </div>
            )}
            {category === 'desserts' && (
                <div className="breakfast" id="dessert">

                    <ul >
                        {
                            data.dessert.map((item, i) => (<li key={i}>
                                <span className="breakfast__items">
                                    <span className="breakfast__image">
                                        <img alt="photos" src={item.image} />
                                    </span>
                                    <span className="breakfast__name"> {item.name}</span>
                                    <span className="breakfast__description"> {item.description}</span>
                                </span>

                                <span className="breakfast__ordering">
                                    <span className="breakfast__price">${item.price}</span>
                                    <button className="selecting"
                                        style={{
                                            backgroundColor: selectedItems.includes(item) ? 'blue' : ' ',
                                            color: selectedItems.includes(item) ? 'white' : '',

                                        }}
                                        onClick={() => handleSelect(item)}
                                    >
                                        {selectedItems.includes(item) ? 'Selected' : 'Select'}</button>
                                </span>
                            </li>
                            ))
                        }

                    </ul>

                </div>
            )}



            <div className="order-details">

                <button className="orderButton" onClick={displayOrder} >ORDER</button>
                <div className={showDiv ? 'my-orders' : 'my-orders-invisible'}  >
                    <h3>ORDERS for table 4</h3>
                    <ul>{selectedItems.map((item, i) =>
                        <li key={i} >
                            <span>{item.name}</span>
                            <span>{item.price}</span>

                        </li>)}
                        <div className="place-order">

                            <h3>Amount =${totalPrice} </h3>
                            <button>Place Order</button>
                        </div>
                    </ul>



                </div>
            </div>
        </div>
    )
}

export default Breakfast