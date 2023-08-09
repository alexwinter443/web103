import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header.jsx'
import Home from './components/home/home'
import Card1 from './components/cards/creatorCard'
import {useState, useEffect} from 'react'
import {supabase} from './client'
import {Row,Col,Container} from 'react-bootstrap'



function App() {

  const [creators, setCreators] = useState([]);

  useEffect(() => {
    getCreators();

}, [])

async function getCreators() {
    try{
        const {data, error } = await supabase 
            .from("creators")
            .select("*")
        if(error) throw error;
        if(data != null){
            setCreators(data); // [creator1,creator2,creator3]
        }
    }
    catch(error) {
        alert(error.message);
    }
}




console.log(creators);



  return (
    <div>
      <Header></Header>
      
      <Container>
        <Row>
          {creators.map((creator) => (
            <Col key={creator.id}>
              <Card1 creator={creator} />
            </Col>
          ))}
        </Row>
      </Container>
      
    </div>
  )
}

export default App
