import React, { useEffect, useState } from 'react';
import ServerInfo from './components/ServerInfo'; // Import the ServerInfo component

function App() {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    // Fetch server data from the backend
    fetch('http://localhost:5000/api/server-info')
      .then((response) => response.json())
      .then((data) => setServerData(data))
      .catch((error) => console.error('Error fetching server data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Server Info</h1>
      {serverData ? <ServerInfo data={serverData} /> : <p>Loading server data...</p>}
    </div>
  );
}

export default App;
