import React from 'react';

const tableStyle = {
    margin: "0 auto",
}
const Table = ({ data }) => {

  const formatVolume = (volume) => {
    return volume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          {Object.keys(data).map((key) => (
            <th key={key} style={{padding: "10px"}}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(data).map((value, index) => (
            <td key={index} style={{padding: "10px"}}>
              {index === Object.values(data).length - 1 ? formatVolume(value) : value}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
