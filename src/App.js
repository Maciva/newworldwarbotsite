import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ContentProvider from './ContentProvider';

function App() {

    return (
            <BrowserRouter>
                <ContentProvider />
            </BrowserRouter>

    );
}

export default App;
