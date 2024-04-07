import React from 'react';

const GeneralTable = ({ header, columns, data }) => {
  return (
    <div className="w-full h-full overflow-auto">
      <h1 className="text-center text-2xl mb-4">{header}</h1>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={`text-left p-2 ${column.width}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="p-2">
                  {column.render(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeneralTable;