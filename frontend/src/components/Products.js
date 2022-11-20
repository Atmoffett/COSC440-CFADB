import React, { useEffect, useState } from 'react';

function Products() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/products');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <div className="container-fluid" >
                <h1 className="mt-5">Product ID, Name, Quantity on hand, Max Quantity, Description</h1>
                <ol key={items.PID}>
                {
                        items.map(item => (
                         <div className="alert alert-info rounded-pill" role="alert">
                            <div className="table">
                                    <li>  {item.Name}, {item.Quantity}, {item.MaxQuantity}, {item.Description} </li>
                                </div>
                            </div>
                    ))
                    }
                </ol>
                </div>
        </section>

    );
}
export default Products;