import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<section id="center">
				<h1>Get started</h1>
				<button
					className="counter"
					onClick={() => setCount(count => count + 1)}
				>
					Count is {count}
				</button>
			</section>

		</>
	);
}

export default App;
