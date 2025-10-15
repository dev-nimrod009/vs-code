import React, { useState } from "react";
import { data } from "./kitchen";
import "./styles.css";

const MenuList = ({ items, selectedItems, onSelect }) => {
    return (
        <ul>
            {data.breakfast.map((item, i) => (
                <li key={i}>
                    <div className="breakfast__items">
                        <img
                            alt={item.name}
                            src={item.image}
                            className="breakfast__image"
                        />

                        <h4 className="breakfast__name"> {item.name}</h4>
                        <p className="breakfast__description"> {item.description}</p>
                    </div>

                    <div className="breakfast__ordering">
                        <span className="breakfast__price">${item.price.toFixed(2)}</span>
                        <button
                            className={`select-button ${selectedItems.some((i) => i.id === item.id) ? "selected" : ""
                                }`}
                            onClick={() => onSelect(item)}
                        >
                            {selectedItems.some((i) => i.id === item.id)
                                ? "Selected"
                                : "Select"}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

function Breakfast({ category }) {
    const [selectedItems, setSelectedItems] = useState([]);
    const handleSelect = (item) => {
        setSelectedItems((prevItems) => {
            if (prevItems.some((i) => i.id === item.id)) {
                return prevItems.filter((i) => i.id !== item.id);
            } else {
                return [...prevItems, item];
            }
        });
    };

    const [showDiv, setShowDiv] = useState(false);

    const totalPrice = selectedItems
        .reduce((acc, item) => acc + item.price, 0)
        .toFixed(2);

    const getCategoryData = () => {
        switch (category) {
            case "breakfast":
                return data.breakfast;
            case "foodAndDrinks":
                return data.foods;
            case "desserts":
                return data.dessert;
            default:
                return [];
        }
    };
    return (
        <div className="foodServed">
            <div className="breakfast">
                <MenuList
                    items={getCategoryData()}
                    selectedItems={selectedItems}
                    onSelect={handleSelect}
                />
            </div>

            <div className="order-details">
                <button className="orderButton" onClick={() => setShowDiv(!showDiv)}>
                    ORDER({selectedItems.length})
                </button>
                <div className={`order-modal ${showDiv ? "my-orders" : "hide"}`}>
                    <h3>ORDERS for table 4 </h3>
                    <ul className="order-list">
                        {selectedItems.map((item, i) => (
                            <li key={i} className="order-items">
                                <span>{item.name}</span>
                                <span>{item.price.toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="place-order">
                        <h3>Amount =${totalPrice} </h3>
                        <button>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breakfast;
