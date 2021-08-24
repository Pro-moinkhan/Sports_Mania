import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Teams from '../Teams/Teams';
import BgImg from '../../../src/Images/background.png';
import './Home.css';

const Home = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Bangladesh`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <Container>
            <Row>
                <Col xs lg={12}>
                    <img style={{width: "100%", height: "auto", borderRadius: '0px 0px 6px 6px'}} src={BgImg} alt=""  />
                </Col>
            </Row>
            <Row >
                {
                    teams.map(team => <Teams team={team} key={team.idTeam}></Teams>)
                }
            </Row>
        </Container>
    );
};

export default Home;