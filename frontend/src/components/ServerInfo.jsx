import React from 'react';
import SettingsTable from './SettingsTable'; // Import the SettingsTable component
import RulesTable from './RulesTable'; // Import the RulesTable component

function ServerInfo({ data }) {
  return (
    <div className="server-info">
      <h2>Server Overview</h2>
      <p><strong>Players:</strong> {data.players}</p>
      <p><strong>Ping:</strong> {data.ping}</p>
      <p><strong>Tickrate:</strong> {data.tickrate}</p>

      <SettingsTable settings={data.settings} />
      <RulesTable rules={data.rules} />
    </div>
  );
}

export default ServerInfo;
