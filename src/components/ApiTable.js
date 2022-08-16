import React, { useState, useEffect } from 'react'

const ApiTable = () => {
    const URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    const [data, getData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = () => {
        fetch(URL)
            .then((res) =>
                res.json())
            .then((response) => {
                getData(response);
            })
    }
    if (!data) return (<div>No Record Found</div>)
    return (
        <>
        <h1>Table COntaining Country Information</h1>
        <div>
            <tbody>
                <tr>
                    <th>Nation</th> 
                    <th>IdNation</th>
                    <th>IDYear</th>
                    <th>Year</th>
                    <th>Population</th>
                    <th>SlugNation</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.Nation}</td>
                        <td>{item.IdNation}</td>
                        <td>{item.IDYear}</td>
                        <td>{item.Year}</td>
                        <td>{item.Population}</td>
                
                        <td>{item.SlugNation}</td>
                    </tr>
                ))}
            </tbody>
        </div>
        </>
    )
}

export default ApiTable
