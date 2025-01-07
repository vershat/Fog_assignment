import React from 'react';

function RulesTable({ rules }) {
  return (
    <div>
      <h3>Rules</h3>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Rule</th>
            <th className="border px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rules).map(([key, value]) => (
            <tr key={key}>
              <td className="border px-4 py-2">{key}</td>
              <td className="border px-4 py-2">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RulesTable;
