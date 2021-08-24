import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// bootstrap Responsive components:
import { Container, Row, Col } from 'react-bootstrap';
// font_Awesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFlag, faFutbol, faMars, faLink } from '@fortawesome/free-solid-svg-icons'
// local images:
import bg from '../../Images/background.png'
import maleImg from '../../Images/male.png';
import feMaleImg from '../../Images/female.png';
// link style:
const linkStyle = {
    margin: '10%',
}

const TeamsDetail = () => {
    const { TeamId } = useParams();
    const [teamDetail, setTeamDetail] = useState([]);
    const { strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN } = teamDetail;
    useEffect(() => {
        const url = ` https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${TeamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]));
    }, [TeamId])
    // img male or female:
    let img;
    if (strGender === 'Male') {
        img = maleImg;
    }
    else{
        img = feMaleImg;
    }

    return (
        <div>
            <Row>
                <Col lg={12}>
                    <img style={{ width: "100%", height: 'auto' }} src={bg} alt="" />
                </Col>
            </Row>
            <br />
            <br />
            <Container>
                <Row style={{ backgroundColor: '#3A42FF', color: "white", padding: "2%", borderRadius: '26px' }}>
                    <Col style={{ marginTop: '.5%' }} lg={7}>
                        <h1>{strTeam}</h1>
                        <br />
                        <h3><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</h3>
                        <h3> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h3>
                        <h3> <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</h3>
                        <h3> <FontAwesomeIcon icon={faMars} /> Gender: {strGender} </h3>
                    </Col>
                    <Col lg={5}>
                        <img style={{ width: "100%", height: "auto", overflow: 'hidden', margin: '1%', }} src={img} alt="imgError-_-" />
                    </Col>
                </Row>
            </Container>
            <Row style={{ margin: "5.2%" }}>
                <Col lg={12}>
                    <h4 style={{ color: "Gray" }}>{strDescriptionEN}</h4>
                    <br />
                    <br />
                    <h4 style={{ color: "darkCyan" }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, facere atque aperiam ipsam voluptatum error aliquid perferendis est voluptatem quae quis architecto suscipit autem voluptatibus! Ab odio officiis commodi, fuga qui ex quod illum sapiente ullam suscipit consequatur, consequuntur illo? Minima vitae vel adipisci magnam! Earum, at? Sit, quas delectus. </h4>
                </Col>
            </Row>
            <Container style={{ width: '17%' }} >
                <Row>
                    <Col>
                        <a style={linkStyle} target='_blank.' href='https://www.facebook.com/bff.football'> <FontAwesomeIcon icon={faLink} /></a>
                        <a style={linkStyle} target='_blank.' href='https://www.youtube.com/results?search_query=bangladesh+football'><FontAwesomeIcon icon={faLink} /></a>
                        <a style={linkStyle} target='_blank.' href='https://www.twitter.com/Bangladeshfootball'><FontAwesomeIcon icon={faLink} /></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TeamsDetail;