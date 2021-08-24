import React from 'react';
import "./Teams.css"
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Teams = ({ team }) => {
    const { strTeamBadge, strTeam, strSport, idTeam } = team;
    // console.log(idTeam);
    const History = useHistory();
    const handleClick = (TeamId) => {
        const url = `TeamsDetail/${TeamId}`;
        History.push(url);
    } 
    return (
        <Col className="teamsContainer">
            <div className="imgDiv">
                <img src={strTeamBadge} alt="logo not found" />
            </div>
            <div className="detailDiv">
                <h2 style={{ textAlign: 'center' }}>{strTeam}</h2>
                <h5 style={{ color: "gray", textAlign: 'center', paddingBottom: '10px' }}> <small> Sports type: {strSport} </small></h5>
                <div style={{ display: "flex", justifyContent: 'space-around', margin: "30px" }}>
                    <button onClick={() => handleClick(idTeam)} style={{ padding: "10px 18px 10px 18px", border: 'none', borderRadius: '18px 0px 18px 0px', color: 'white', backgroundColor: "blue", position: 'absolute', top: "89%"}}>Explore</button>
                </div>
            </div>

        </Col>
    );
};

export default Teams;