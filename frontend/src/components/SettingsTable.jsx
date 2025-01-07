import React from 'react';

function SettingsTable({ settings }) {
  return (
    <div>
      <h3>Settings</h3>
      <table className="table-auto border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">Setting</th>
            <th className="border px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(settings).map(([key, value]) => (
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

export default SettingsTable;
