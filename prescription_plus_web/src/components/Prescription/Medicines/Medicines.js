import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setMedicine, removeMedicine, updateMedicine } from "../../../redux/actions";
import {Button,Col,Form,Row,ListGroup,Collapse,InputGroup,ButtonGroup,Card} from 'react-bootstrap';
import {server_url} from "../../../config";

const Medicines = () =>{
  const dispatch = useDispatch()
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [med, setMed] = useState([])
  const [medicines, setMedicines] = useState([])
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [dosage, setDosage] = useState("")
  const [duration, setDuration] = useState("")
  const [durationtype,setDurationType] = useState("")
  const [when,setWhen] = useState("")
  const [advice,setAdvice]= useState("")
  const [quantity,setQuantity] = useState("")

  const Rx = useSelector(state=>state.RxReducer);

  let Rxmedicines = []
  if(Rx.medicine){
    Rxmedicines = Rx.medicine;
  }

  const Dosage = [
    { name: '1-1-1', value: '1' },
    { name: '1-1-0', value: '2' },
    { name: '1-0-0', value: '3' },
    { name: '1-0-1', value: '4' },
    { name: '0-1-1', value: '5' },
    { name: '0-1-0', value: '6' },
    { name: '0-0-1', value: '7' }
  ];
  const Duration= [
    { name: 'Days', value: '1' },
    { name: 'Weeks', value: '2' },
    { name: 'Months', value: '3' },
    { name: 'Year', value: '4' }
  ];

  const When= [
    { name: 'Before Food', value: '1' },
    { name: 'After Food', value: '2' }
  ];


  useEffect(() => {
    const fetchMedicine = async () => {
      setLoading(true);
      const url = `${server_url}/search/medicine?data=${query}`
      let res = await axios.get(url);
      console.log(res)
      res = res.data;
      res = res.data;
        
        let medicine = []
        for (let [k, val] of Object.entries(res)) {

            medicine.push({
            key: val['Identifier'],
            value: val['Brand Name']});
    
          }
      setPosts(medicine);
      setLoading(false);
    };
    if (query.length > 2) fetchMedicine();
    if(query.length === 0)setPosts([])
  }, [query]);



  const onPressHandler = (key,value) =>{
    setMed({key,value})
    setPosts([])
    setOpen(!open)
    setSearch(!search)
    }
  
  const removemedicine = (k) =>{
      dispatch(removeMedicine(k));
    }

  const UpdateMedicineDetails = (value)=>{
      removemedicine(value.term)
      setDosage(value.dosage)
      setDuration(value.duration)
      setWhen(value.when)
      setDurationType(value.durationtype)
      setAdvice(value.additional_info)
      setQuantity(value.quantity)
      setMed({"key":value.medSCTID,"value":value.term})
      setOpen(!open)
      setSearch(!search)
    }
  const addMedicine =() =>{
    console.log("----addMedicine-----")
   dispatch(setMedicine({
        medSCTID: med.key,
      term: med.value,
      dosage: dosage,
      duration: duration,
      durationtype: durationtype,
      when:  when,
      quantity: quantity,
      additional_info: advice}));
    setDosage("")
    setDuration("")
    setWhen("")
    setOpen(!open)
    setDurationType("")
    setAdvice("")
    setQuantity("")
    setSearch(!search)
  }

  return (
    <div >
      <input type='text' 
      placeholder="Search.." 
      className="search" 
      onChange={(e) => setQuery(e.target.value)}
      disabled = {search}
      />
      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts.map((item) => 
        <ListGroup defaultActiveKey={item.key}>
          <ListGroup.Item action onClick={()=>{
            onPressHandler(item.key, item.value)
          }}>
          <h6>{item.value}</h6>
          </ListGroup.Item>
        </ListGroup>
          )
      )}
      <br />
        {Rxmedicines.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
                  <Button variant="secondary" disabled = {search} onClick={()=>{removemedicine(val.term)}} >Remove Medicine</Button>
                  <Button variant="secondary" disabled = {search} onClick={()=>{UpdateMedicineDetails(val)}} >Edit Medicine</Button>
                </Card.Body>
              </Card>
            ))}
      <br />
       <>
          <Collapse in={open}>
         <Form>
            <Form.Group className="mb-3" controlId="formGridMedicine">
              <Form.Label>Medicines</Form.Label>
              <InputGroup.Text>{med.value}</InputGroup.Text>
            </Form.Group> 
          <Form.Group className="mb-3" controlId="formGridDosage">
            <Form.Label><h3>Dosage</h3></Form.Label>
            <Button className="mb-1" variant="outline-dark">
              {dosage}
            </Button>
            <br />
            <ButtonGroup className="mb-3">
                {Dosage.map((val) => (
                  <Button variant="secondary" onClick={()=>setDosage(val.name)}>
                    {val.name}
                  </Button>
                ))}
      </ButtonGroup>
      <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridDuration">
            <Form.Label><h3>Duration</h3></Form.Label>
            <InputGroup className="mb-3">
            <Form.Control placeholder="" defaultValue={Rxmedicines.duration} onChange={(e) => setDuration(e.currentTarget.value)} />
            <InputGroup.Text id="basic-addon2">{durationtype}</InputGroup.Text>
            </InputGroup>
            <br />
            <ButtonGroup className="mb-3">
                {Duration.map((val) => (
                  <Button variant="secondary" onClick={()=>setDurationType(val.name)}>
                    {val.name}
                  </Button>
                ))}
      </ButtonGroup>
      <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridWhen">
            <Form.Label> <h3>When</h3></Form.Label>
            <Button className="mb-1" variant="outline-dark">
              {when}
            </Button>
            <br />
            <ButtonGroup className="mb-3">
                {When.map((val) => (
                  <Button variant="secondary" onClick={()=>setWhen(val.name)}>
                    {val.name}
                  </Button>
                ))}
      </ButtonGroup>
      <br />
          </Form.Group>


          <Form.Group className="mb-3" controlId="formGridQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control placeholder="" onChange={(e) => setQuantity(e.currentTarget.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAdditionalInfo">
            <Form.Label>Advice</Form.Label>
            <Form.Control placeholder="" onChange={(e) => setAdvice(e.currentTarget.value)}/>
          </Form.Group>

          <Button variant="primary" onClick={addMedicine}>
            Submit
          </Button>
          </Form>  
          </Collapse>
     </>
    </div>
  )
}
export default Medicines;