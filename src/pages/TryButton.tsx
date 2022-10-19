import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TryButton() {
  const navigate = useNavigate();
  const navToHome = () => navigate('/questions');

  //changes userState to {isLogged: false}
  function logout() {
    console.log('sdfassdfa')
    navToHome();
    return;
  }

  //<Button onClick={logout} sx={{ width: '200px', color: 'rgb(65, 91, 152)' }} variant="outlined">Logout</Button>

  //<Button onClick={handleSubmit}><div className='landingLoginButton'>SUBMIT</div></Button>

  return (
    <div className="logoutButton">
      <form>
        <Button onClick={logout}>
          <div className="landingLoginButton">Navigate</div>
        </Button>
      </form>
    </div>
  );
}

export default TryButton;
