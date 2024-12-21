// filepath: /G:/Practice/react/07context-api/src/App.tsx
import './App.css';
import {Login,Profile} from './components';
import UserContextProvider from './context/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>Hi, from Home page</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;