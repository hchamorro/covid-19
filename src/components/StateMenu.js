import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { StateNameContext } from '../utils/StateName';
import { StateDataContext } from '../utils/StateData';
import history from './history';
import Axios from 'axios';

function StateMenu() {
  const [stateName, setStateName] = useContext(StateNameContext);
  const [stateData, setStateData] = useContext(StateDataContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStateName = (event) => {
    let state = event.target.id;
    setStateName(state);
    getData(state);
    handleClose();
    history.push('/states');
  };

  function getData(state) {
    setStateName(state);
    Axios.get(
      `https://cors-anywhere.herokuapp.com/https://covidtracking.com/api/states/daily?state=${state}`
    ).then((res) => setStateData(res.data));
  }

  return (
    <div>
      <Button
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
      >
        Choose State
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleStateName} id="AL">
          Alabama
        </MenuItem>
        <MenuItem onClick={handleStateName} id="AK">
          Alaska
        </MenuItem>
        <MenuItem onClick={handleStateName} id="AZ">
          Arizona
        </MenuItem>
        <MenuItem onClick={handleStateName} id="AR">
          Arkansas
        </MenuItem>
        <MenuItem onClick={handleStateName} id="CA">
          California
        </MenuItem>
        <MenuItem onClick={handleStateName} id="CO">
          Colorado
        </MenuItem>
        <MenuItem onClick={handleStateName} id="CT">
          Connecticut
        </MenuItem>
        <MenuItem onClick={handleStateName} id="DE">
          Delaware
        </MenuItem>
        <MenuItem onClick={handleStateName} id="DC">
          District of Columbia
        </MenuItem>
        <MenuItem onClick={handleStateName} id="FL">
          Florida
        </MenuItem>
        <MenuItem onClick={handleStateName} id="GA">
          Georgia
        </MenuItem>
        <MenuItem onClick={handleStateName} id="GU">
          Guam
        </MenuItem>
        <MenuItem onClick={handleStateName} id="HI">
          Hawaii
        </MenuItem>
        <MenuItem onClick={handleStateName} id="ID">
          Idaho
        </MenuItem>
        <MenuItem onClick={handleStateName} id="IL">
          Illinois
        </MenuItem>
        <MenuItem onClick={handleStateName} id="IN">
          Indiana
        </MenuItem>
        <MenuItem onClick={handleStateName} id="IA">
          Iowa
        </MenuItem>
        <MenuItem onClick={handleStateName} id="KS">
          Kansas
        </MenuItem>
        <MenuItem onClick={handleStateName} id="KY">
          Kentucky
        </MenuItem>
        <MenuItem onClick={handleStateName} id="LA">
          Louisiana
        </MenuItem>
        <MenuItem onClick={handleStateName} id="ME">
          Maine
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MD">
          Maryland
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MA">
          Massachusetts
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MI">
          Michigan
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MN">
          Minnesota
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MS">
          Mississippi
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MO">
          Missouri
        </MenuItem>
        <MenuItem onClick={handleStateName} id="MT">
          Montana
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NE">
          Nebraska
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NV">
          Nevada
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NH">
          New Hampshire
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NJ">
          New Jersey
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NM">
          New Mexico
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NY">
          New York
        </MenuItem>
        <MenuItem onClick={handleStateName} id="NC">
          North Carolina
        </MenuItem>
        <MenuItem onClick={handleStateName} id="ND">
          North Dakota
        </MenuItem>
        <MenuItem onClick={handleStateName} id="OH">
          Ohio
        </MenuItem>
        <MenuItem onClick={handleStateName} id="OK">
          Oklahoma
        </MenuItem>
        <MenuItem onClick={handleStateName} id="OR">
          Oregon
        </MenuItem>
        <MenuItem onClick={handleStateName} id="PA">
          Pennsylvania
        </MenuItem>
        <MenuItem onClick={handleStateName} id="PR">
          Puerto Rico
        </MenuItem>
        <MenuItem onClick={handleStateName} id="RI">
          Rhode Island
        </MenuItem>
        <MenuItem onClick={handleStateName} id="SC">
          South Carolina
        </MenuItem>
        <MenuItem onClick={handleStateName} id="SD">
          South Dakota
        </MenuItem>
        <MenuItem onClick={handleStateName} id="TN">
          Tennessee
        </MenuItem>
        <MenuItem onClick={handleStateName} id="TX">
          Texas
        </MenuItem>
        <MenuItem onClick={handleStateName} id="UT">
          Utah
        </MenuItem>
        <MenuItem onClick={handleStateName} id="VT">
          Vermont
        </MenuItem>
        <MenuItem onClick={handleStateName} id="VA">
          Virginia
        </MenuItem>
        <MenuItem onClick={handleStateName} id="WA">
          Washington
        </MenuItem>
        <MenuItem onClick={handleStateName} id="WV">
          West Virginia
        </MenuItem>
        <MenuItem onClick={handleStateName} id="WI">
          Wisconsin
        </MenuItem>
        <MenuItem onClick={handleStateName} id="WY">
          Wyoming
        </MenuItem>
      </Menu>
    </div>
  );
}
export default StateMenu;
