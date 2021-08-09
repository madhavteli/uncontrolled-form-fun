import React, {useState} from 'react';
import Btn from "./Components/Btn";

function App() {

	const [count, setCount] =useState(0);

	const increaseCount = () => {
		setCount(count+1);
	}

	const decreaseCount = () => {
		setCount(count <= 0 ? count : count-1);
	}

	const resetCount = () => {
		setCount(0);
	}

	return (
		<div>
			<Btn btnText='+' onClick={increaseCount}/>
			<h1>{count}</h1>
			<Btn btnText='-' onClick={decreaseCount}/>
			<Btn btnText='Reset' onClick={resetCount}/>
		</div>
	);
}

export default App;
