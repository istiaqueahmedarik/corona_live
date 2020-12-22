import React from 'react'
import { CardColumns, CardDeck, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import Columns from 'react-columns';


  


function Covid() {
    const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  useEffect(() => {
    Axios
      .all([
        Axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        Axios.get("https://corona.lmao.ninja/v3/covid-19/countries"),
      ])
      .then((responseArr) => {
        setLatest(responseArr[0].data);
        //console.log(responseArr[1].data)
        setResults(responseArr[1].data);
        //setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const filterCountries = results.filter((item) => {
    return searchCountries !== ""
      ? item.country.toLowerCase().includes(searchCountries.toLowerCase())
      : item;
  });
  const countries = filterCountries.map((data,i) =>{
    return(
      <Card
        key={i}
        bg="light"
        text="dark"
        className="text-center country" style={{margin:"10px"}}
      >
         <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
        <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's cases {data.todayCases}</Card.Text>
          <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    )
  })
  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  var queries = [{
    columns: 2,
    query: 'min-width: 500px'
  }, {
    columns: 3,
    query: 'min-width: 1000px'
  }];
    return (
        <div className="covid">
          <CardDeck>
      <Card bg="secondary" text="white" className="text-center" style={{margin:"10px"}}>
        
        <Card.Body>
          <Card.Title>Cases</Card.Title>
          <Card.Text>
            {latest.cases}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Last updated {lastUpdated} ago</small>
        </Card.Footer>
      </Card>
      <Card bg="danger" text={"white"} className="text-center" style={{margin:"10px"}}>
        
        <Card.Body>
          <Card.Title>Deaths</Card.Title>
          <Card.Text>
            {latest.deaths}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Last updated {lastUpdated} ago</small>
        </Card.Footer>
      </Card>
      <Card bg="success" text={'white'} className="text-center" style={{margin:"10px"}}>
        
        <Card.Body>
          <Card.Title>Recovered</Card.Title>
          <Card.Text>
            {latest.recovered}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>Last updated {lastUpdated} ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
    <Form>
      <Form.Group controlId="formGroupSearch">
        
        <Form.Control type="text" placeholder="Search..." onChange={(e) => setSearchCountries(e.target.value)}/>
      </Form.Group>
      
    </Form>
        <Columns queries={queries}>{countries}</Columns>
        </div>
      );
}

export default Covid;
