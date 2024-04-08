import React from 'react';

/**
 * GeneralTable is a reusable table component that takes in header,
 * columns, and data as props.
 * @param {string} props.header The header of the table.
 * @param {Array} props.columns The columns of the table. Each column is an object
 * with 'header', 'width', and 'render' properties. Render is a function specifying
 * what to render for that specific column.
 * @param {Array} props.data The data to be displayed in the table. Each item in the
 * data array represents a row in the table.
 */
const GeneralTable = ({ header, columns, data }) => {
  return (
    <div className="w-full h-full overflow-auto">
      <h1 className="text-center text-2xl mb-4">{header}</h1>
      <table className="w-full">

        <thead>
          <tr>
            {/* Map through the columns array to render each column header */}
            {columns.map((column, index) => (
              <th key={index} className={`text-left p-2 ${column.width}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Check if data is empty */}
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center p-2">
                No data available</td>
            </tr>
          ) : (
            /* Map through the data array to render each row */
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* For each row, map through the columns array to render each cell */}
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="p-2">
                    {/* Use the render function provided in the column object to
                    render the cell content */}
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default GeneralTable;