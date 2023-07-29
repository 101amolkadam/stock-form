import React, { useState } from "react";
import Form from './components/Form.jsx';
import Table from './components/Table.jsx';


function App() {
	const [data, setData] = useState({});

	return (
		<>
		<Form setData={setData}/>
		<Table data={data}/>
		</>
	);
}

export default App;