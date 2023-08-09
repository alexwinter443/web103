import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { supabase } from '../../client'
import Header from '../header/header.jsx'
import { useParams, useNavigate } from 'react-router-dom'


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


    async function updateCreator() {
        try {
            const { data, error } = await supabase
                .from("creators")
                .update({
                    name, description, url, imageurl
                })
                .eq("id", id)

            if (error) throw error;

            navigate('/');

        } catch (error) {
            alert(error.message);
        }

    }

    async function deleteCreator() {
        try {
            const { data, error } = await supabase
                .from("creators")
                .delete()
                .eq("id", id)

            if (error) throw error;
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    return (

        <div>
            <>
                <Header></Header>
                <Container>
                    <Row>
                        <Form>
                            <Col md={{ span: 6, offset: 3 }}>
                                <h3>Edit Creator</h3>
                                <Form.Label>Creator Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="name"
                                    defaultValue={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                                <Form.Label>Creator Description</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="description"
                                    defaultValue={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />

                                <Form.Label>Creator Url</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="img"
                                    defaultValue={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                />

                                <Form.Label>Creator Img Url</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="imgurl"
                                    defaultValue={imageurl}
                                    onChange={(e) => setImgUrl(e.target.value)}
                                />


                                {<Button variant="light" onClick={() => navigate('/')}>back</Button>}
                                <br></br>
                                <br></br>
                               
                                {<Button onClick={() => updateCreator()}>Update Creator</Button>}
                                <br></br>
                                <br></br>
                                {<Button variant="danger" onClick={() => deleteCreator()}>Delete Creator</Button>}

                            </Col>
                        </Form>
                    </Row>
                </Container>

            </>
        </div>
    )
}

export default CardDetails