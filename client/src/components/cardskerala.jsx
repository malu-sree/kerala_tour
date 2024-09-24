import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import k  from  './images/img2.jfif'
import alap from './images/img1.jfif';
import  mn from './images/img3.jfif';
import svp from './images/img4.jfif'
import kochi  from  './images/img6.webp'
import w from './images/img5.webp';
import  tvm from './images/img7.jpeg';
import ko from './images/img8.jpg'
import { Container, Row,Col } from 'react-bootstrap';
import '../App.css'
import { useState } from 'react';
function Cardskerala(){
    const [title,setTitle]=useState("")
    
    const record=[
        {idno:1,title:'Kannur',
            description:"kannur (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, ",imageUrl:k},
        {idno:2,title:'Alappuzha',
        description:" Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. ",imageUrl:alap},
        {idno:3,title:'Munnar',
         description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:mn},   
         {idno:4,title:'Slient Valley',
            description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:svp},   
            {idno:5,title:'Kochi',
                description:"Kochi (also known as Cochin) is a city in southwest India's coastal Kerala state. It has been a port since 1341, ",imageUrl:kochi},
            {idno:6,title:'Wayanad',
            description:" Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. ",imageUrl:w},
            {idno:7,title:'Trivandarum',
             description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:tvm},   
             {idno:8,title:'Kozhikode',
                description:"Munnar is a town in the Western Ghats mountain range in India’s Kerala state. ",imageUrl:ko},                             
    ]
    return(
        <>
       <Container className="margint">
        <Row className='mb-3'> 
            <Col>
             <input type="text" name="sch" onChange={(e)=>{
                   setTitle(e.target.value)
             }} className='form-control' placeholder='type  place name here!'/>
             
            </Col>
        </Row>
        <Row className='mb-3'>
            <Col>
            <Button variant='success' onClick={()=>{
                setTitle("")
            }}>
                All
            </Button>
            </Col>
            {
                record.length>0&& 
                record.map((item)=>{
                    return(
                        <Col key={item.idno}>
                        <Button variant='info' onClick={(e)=>{
                            setTitle(item.title)
                        }}>
                            {item.title}
                        </Button> 
                      
                        </Col>
                    )
                })
            }
        </Row>
        <Row>
            {    
                 record.length>0?  
                
                 record.filter((rec)=>{
                    return(rec.title.toLocaleLowerCase().match(title.toLocaleLowerCase()))
                 })

             
                 .map((list)=>{
                   return(
                    <Col lg={3} className='mb-2' key={list.idno}>
                    <Card>
                        <Card.Img variant="top" src={list.imageUrl}  style={{height:'120px'}}/>
                        <Card.Body>
                        <Card.Title>{list.title}</Card.Title>
                                <Card.Text>
                                 {list.description}
                                </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                </Col>
                   )
                 })
                 
                 
                 :"No Data Found"

            }
      

       
        </Row>
       </Container>
     
        </>
    )
}

export default Cardskerala;