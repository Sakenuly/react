import './App.css';
import { TodoPage } from './pages/todo';
import { Provider } from './reducer_context/reducer-context';

function App() {
	return (
		<Provider>
			<TodoPage />
		</Provider>
	);
}

export default App;
