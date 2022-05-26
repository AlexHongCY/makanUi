import React from "react";
//import {useState} from 'react';

const Restaurants = ({ data }) => {
//   const [l, setL] = useState("");
//   const [searchParamLC] = useState(["located_at"]);
//   const [filterParam, setFilterParam] = useState(["All"]);

//   function search(data) {
//     return data.filter((located_at) => {
//       if (located_at === filterParam) {
//         return searchParamLC.some((newItem) => {
//           return (
//             located_at[newItem].toString().toLowerCase().indexOf(l.toLowerCase()) > -1
//           );
//         });
//       } else if (filterParam === "All") {
//         return searchParamLC.some((newItem) => {
//           return (
//             located_at[newItem].toString().toLowerCase().indexOf(l.toLowerCase()) > -1
//           );
//         });
//       }
//     });
//   }

  return (
    <>
      {/* <h3 className="child-header">Locations</h3>
      <label htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder=""
          value={l}
          onChange={(e) => setL(e.target.value)}
        />
      </label>
      <br />
      <span> Search Region</span>
      <label
        onChange={(e) => {
          setFilterParam(e.target.value);
        }}
        aria-label="Location"
      >
        <option value="All"></option>
      </label> */}
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
                  <br />
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default Restaurants;
