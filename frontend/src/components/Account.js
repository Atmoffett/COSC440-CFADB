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


function Account() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Account Information',
                columns: [
                    {
                        Header: 'Account ID',
                        accessor: 'AID',
                    },
                    {
                        Header: 'Employee Username',
                        accessor: 'Username',
                    },
                    {
                        Header: 'Authority',
                        accessor: 'Authority',
                    },
                    {
                        Header: 'Employee ID',
                        accessor: 'EmployeeID',
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
        const data = await fetch('/account');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <div className="container-fluid" >
                <h1 className="mt-5">Accounts</h1>
                <div>
                    <div className="alert alert-info rounded-pill" role="alert" style={{ display: 'flex', justifyContent: 'center', height: '75vh' }}>
                        <Table columns={columns} data={items} />
                    </div>
                </div>
                <p>This table's purpose is to display information regarding employee accounts here at Chick-fil-a </p>
            </div>
        </section>

    );
}
export default Account;

