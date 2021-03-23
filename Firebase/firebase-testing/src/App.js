import { useContext, useEffect, useState } from 'react';

import { AuthContext } from './firebase/auth';
import { getTeams, getTeamsWithChampionships } from './firebase/firestore';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import GoogleButton from 'react-google-button';

import './App.css';

const email = 'test@test.com';
const password = '123456';

function App() {
  const {
    user,
    loading,
    handleLogout,
    handleRegister,
    handleLogin,
    handleGoogleSignin,
  } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    // async function getData() {
    //   setData(await getTeams());
    // }
    // getData();
    getTeams().then((result) => setData(result));
  }, []);

  const handleClick = async () => {
    setData(await getTeamsWithChampionships());
  };

  const showAllTeams = async () => {
    setData(await getTeams());
  };

  return (
    <div className='App'>
      <h1>Firebase Auth</h1>
      <>
        {loading ? (
          <Loader type='Audio' color='#00BFFF' height={100} width={100} timeout={3000} />
        ) : user ? (
          <>
            <h3>{user.email}</h3>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          <>
            <button onClick={() => handleRegister(email, password)}>Sign Up</button>
            <br />
            <button onClick={() => handleLogin(email, password)}>Log in</button>
            <GoogleButton onClick={handleGoogleSignin} type={'light'} />
          </>
        )}
      </>
      <br />
      {user ? (
        <>
          <h2>Firestore</h2>
          <div>
            {data ? (
              <>
                {data.map((team) => {
                  return (
                    <div key={team.id}>
                      <h4>
                        {team.full_name} - {team.fundation_yr}
                      </h4>
                    </div>
                  );
                })}
                <button onClick={handleClick}>Show teams with at least 1 championship</button>
                <button onClick={showAllTeams}>Show all teams</button>
              </>
            ) : null}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default App;
