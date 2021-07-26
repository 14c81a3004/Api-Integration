import * as React from "react";
import {BrowserRouter as Router,Route,Link,Switch,Redirect, useParams, useHistory} from 'react-router-dom';
import './App.css';

function Apppage1() {
  const [users, setUsers] = React.useState([]);
  const demo = async () => {
    const res = await fetch("https://reqres.in/api/users?page=1");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    demo();
  }, []);
  return (
    <div className="App">
      <h1>Api data page-1</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
                <div className='card' key={user.id}>
                <p>{user.id}</p>
                <p>
                  <strong>{user.first_name} {user.last_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
function Apppage2() {
  const [users, setUsers] = React.useState([]);
  const demo = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    demo();
  }, []);
  return (
    <div className="App">
      <h1>Api data page-2</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div className='card' key={user.id}>
                <p>{user.id}</p>
                <p>
                  <strong>{user.first_name} {user.last_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default class ApiComponent extends React.Component{
  render(){
    return(
      <>
        <nav>
        <Router>
        <Switch>
          <div className='row'>
          <ul class="pagination">
              <li class="page-item"><Link to='/page1' class="page-link" href="#"><button>1</button></Link></li>
              <li class="page-item"><Link to='/page2' class="page-link" href="#"><button>2</button></Link></li>
          </ul>
          <Route exact path='/'>
             <Apppage1 />
          </Route>
          <Route path='/page1'>
             <Redirect to='/'></Redirect>
          </Route>
          <Route path='/page2'>
              <Apppage2 />
          </Route>              
          </div>
        </Switch>
        </Router>
      </nav>
      </>
    )
  }
}
