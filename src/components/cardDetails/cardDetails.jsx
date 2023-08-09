import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { supabase } from '../../client'
import Header from '../header/header.jsx'
import { useParams, useNavigate } from 'react-router-dom'
import imagesrc from '../../assets/youtube.png'



const CardDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [url, setUrl] = useState('')
    const [imageurl, setImgUrl] = useState('')

    useEffect(() => {
        const FetchCard = async () => {
            const { data, error } = await supabase
                .from("creators")
                .select()
                .eq("id", id)
                
            if (data) {
                //setCardDetails(data)
                setName(data[0].name)
                setDescription(data[0].description)
                setUrl(data[0].url)
                setImgUrl(data[0].imageurl)
                console.log(data)
            }
        }
        FetchCard();

    }, [id])

    return (

        <div>
            <>
                <Header></Header>
               
                    <Container>
                        <Row> 
                            <Form>

                                <Col md={{ span: 6, offset: 3 }}>
                                    <h3>Creator Details</h3>
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="name"
                                        defaultValue={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
            
                                    <Form.Label>Product Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        id="description"
                                        defaultValue={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />

                                    <Form.Label>Creator Youtube</Form.Label>
                                    <br></br>
                                    
                                    {<Button style={{  width: "100px", height: "50px"}} variant="outline-danger" onClick={() => location.href = `${url}`}><svg xmlns="http://www.w3.org/2000/svg" width="100" height="40" fill="currentColor" className="bi bi-youtube" viewBox="6 1 15 15">
                                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                    </svg></Button>}
                                    

                                    {/* <Form.Control 
                                        type="button"
                                        id="url"
                                        defaultValue={name}
                                        className="w-50"
                                        variant="success"
                                        
                                    />                   */}
                                   <br></br>

                                    <br></br>
                                    {<Button variant="light" onClick={() => navigate('/')}>back</Button>}
                                    <br></br>
                                    <br></br>
                                    {<Button onClick={() => navigate(`/edit/${id}`)}>Edit</Button>}
                               </Col>
                               
                            </Form>
                            
                        </Row>
                        
                    </Container>
               

            </>
        </div>
    )
}

export default CardDetails