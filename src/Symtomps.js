import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Symtomps() {
    return (
        <Container>
            <Row>
                <Col lg="5">
                <h1>Symtomps</h1>
People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:
<ul>
    <li>Fever or chills</li>
    <li>Cough</li>
    <li>Shortness of breath or difficulty breathing</li>
    <li>Fatigue</li>
    <li>Muscle or body aches</li>
    <li>Headache</li>
    <li>New loss of taste or smell</li>
    <li>Sore throat</li>
    <li>Congestion or runny nose</li>
    <li>Nausea or vomiting</li>
    <li>Diarrhea</li>
    
</ul>


This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.

<h2>When to seek emergency medical attention</h2>
Look for emergency warning signs* for COVID-19. If someone is showing any of these signs, seek emergency medical care immediately:
<ul>
    <li>Trouble breathing</li>
    <li>Persistent pain or pressure in the chest</li>
    <li>New confusion</li>
    <li>Inability to wake or stay awake</li>
    <li>Bluish lips or face</li>
</ul>

*This list is not all possible symptoms. Please call your medical provider for any other symptoms that are severe or concerning to you.


Call 911 or call ahead to your local emergency facility: Notify the operator that you are seeking care for someone who has or may have COVID-19.
<h3> source: <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"> cdc.gov</a></h3>
                </Col>
                <Col><img src="https://image.freepik.com/free-vector/symptoms-recommendations-coronavirus-2019-ncov_24877-62737.jpg" alt="fever"/></Col>
                
            </Row>
        </Container>
    )
}

export default Symtomps
