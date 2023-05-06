import '../App.css';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';


function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


function Products() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Product Information',
                columns: [
                    {
                        Header: 'Product ID',
                        accessor: 'PID',
                    },
                    {
                        Header: 'Product Name',
                        accessor: 'Name',
                    },
                    {
                        Header: 'Quantity on Hand',
                        accessor: 'Quantity',
                    },
                    {
                        Header: 'Max Quantity',
                        accessor: 'MaxQuantity',
                    },
                    {
                        Header: 'Item Description',
                        accessor: 'Description',
                    },
                ],
            },
        ],
        []
    );
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
                <h1 className="mt-5">Products</h1>
                <div>
                    <div className="alert alert-info rounded-pill" role="alert" style={{ display: 'flex', justifyContent: 'center', height: '75vh'}}>
                        <Table columns={columns} data={items} />
                    </div>
                </div>
                <p>This table's purpose is to display information regarding different products available here at Chick-fil-a </p>
            </div>
        </section>

    );
}
export default Products;