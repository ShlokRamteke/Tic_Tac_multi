import './App.css';
import Login from './components/Login';
import SignUP from './components/SignUp';
import {StreamChat} from 'stream-chat';
import Cookies from "universal-cookie"
require('dotenv').config()


function App() {
  const api_key=process.env.API_KEY;
  const cookies = new Cookies();
  const token=cookies.get("token");
  const client= StreamChat.getInstance(api_key);

  is (token){
    client.connectUser({
      id: cookies.get("userId"),
      name: cookies.get("username"),
    })
  }


  return (
    <div className="App">
      <SignUP />
      <Login />
    </div>
  );
}

export default App;
