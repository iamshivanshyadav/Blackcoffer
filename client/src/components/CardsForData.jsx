import React from 'react'
import Card from 'react-bootstrap/Card';
import '../App.css';

// we are returning a dynamic bootstrap card
const CardsForData = ({ item }) => {
    return (
        <div className='cardDiv'>
            <Card border='dark' style={{margin: '1.2rem' }}>
               
        <Card.Body className="bg-[#9ad0c2] rounded-lg">
            <Card.Title className="text-xl font-bold">Project Details</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.sector ? item.sector : "Sector"}</Card.Subtitle>
            <Card.Text className="text-sm overflow-hidden whitespace-nowrap overflow-ellipsis">
                <ul>
                    <li>Topic: {item.topic ? item.topic : "No Info"}</li>
                    <li>Title: {item.title ? item.title : "No Info"}</li>
                    <li>Insight: {item.insight ? item.insight : "No Info"}</li>
                    <li>URL: {item.url ? item.url : "No Info"}</li>
                    <li>Region: {item.region ? item.region : "No Info"}</li>
                    <li>Country: {item.country ? item.country : "No Info"}</li>
                    <li>Source: {item.source ? item.source : "No Info"}</li>
                    <li>Pestle: {item.pestle ? item.pestle : "No Info"}</li>
                    <li>Start Year: {item.start_year ? item.start_year : "No Info"}</li>
                    <li>End Year: {item.end_year ? item.end_year : "No Info"}</li>
                    <li>Added: {item.added ? item.added : "No Info"}</li>
                    <li>Published {item.published ? item.published : "No Info"}</li>
                    <li>Intensity: {item.intensity ? item.intensity : "No Info"}</li>
                    <li>Likelihood: {item.likelihood ? item.likelihood : "No Info"}</li>
                </ul>
            </Card.Text>
        </Card.Body>
            </Card>
        </div>
    )
}

export default CardsForData