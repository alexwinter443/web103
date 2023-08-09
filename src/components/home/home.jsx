import React from 'react'
import './home.css'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import {supabase} from '../../client'
import Header from '../header/header.jsx'


const Home = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [imgurl, setimgUrl] = useState("");

    async function createCreator1(){
        try{   
          const {data, error } = await supabase 
              .from("creators")
              .insert({
                name: name,
                description: description,
                url: url,
                imageurl: imgurl
                
              })
              .single()
          if(error) throw error;
        //   window.location.reload();
        window.location.href = '../'
          
      }
      catch(error) {

          alert(error.message);
      }
      }

      
    return (

        <>
        <Header></Header>
        <Container>
            <Row>
                <Form>
                <Col md={{ span: 6, offset: 3 }}>
                    <h3>Create Product</h3>


                    <Form.Label>Creator Name</Form.Label>
                    <Form.Control
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Form.Label>Creator Description</Form.Label>
                    <Form.Control
                        type="text"
                        id="description"
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <Form.Label>Creator Url</Form.Label>
                    <Form.Control
                        type="text"
                        id="url"
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <Form.Label>Creator Img Url</Form.Label>
                    <Form.Control
                        type="text"
                        id="imageurl"
                        onChange={(e) => setimgUrl(e.target.value)}
                    />


                    <br></br>
                    <Button onClick={() => createCreator1()}>Create Creator</Button>

                </Col>
                </Form>
            </Row>
        </Container>

       </>
    )
}

export default Home