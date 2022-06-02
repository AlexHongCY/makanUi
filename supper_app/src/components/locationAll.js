import React from "react";
//import {useState} from 'react';

const Restaurants = ({ data }) => {


  return (
    <>
      <table>
        <tbody>
          <tr className="table-wrapper">
            <th>Name</th>
            <th>Address</th>
            <th>Located_at</th>
          </tr>
          {/* {search(data)
            //.slice(0, visible) */}
            {data.map((a) => {
              return (
                <tr key={a._id}>
                  <td>{a.name}</td>
                  <td>{a.address}</td>
                  <td>{a.located_at}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Restaurants;
