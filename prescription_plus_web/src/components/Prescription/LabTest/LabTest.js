import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTest,removeTest} from "../../../redux/actions";
import {Button,Col,Form,Row,ListGroup,Collapse,InputGroup,ButtonGroup,Card} from 'react-bootstrap';
import {server_url} from "../../../config";

const LabTest = () =>{
    const dispatch = useDispatch()
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [labtest,setLabtest]  = useState([])
    const [search, setSearch] = useState(false);
    const Rx = useSelector(state=>state.RxReducer);

    var Rxlabtest = []
    if(Rx.test){
      Rxlabtest = Rx.test;
    }
    console.log("--------------",Rxlabtest)

    const onPressHandler = (value) =>{
        dispatch(setTest({
            term:value
        }));
        setLabtest([])
    }

    const removelabtest = (k) =>{
        dispatch(removeTest(k));
    } 
    const testJson = [
        {
            term: "Blood Test 1"
        },
        {
            term: "Blood Test 2"
        },
        {
            term: "Blood Test 3"
        },
      ];

    useEffect(() => {
        const fetchLabTest = async () => {
            setLoading(true);
            var url = `${server_url}/search/labtest?data=${query}`
            let res = await axios.get(url);
            res = res.data;
            res = res.data;
            let labtestData = []
            for (let [k, val] of Object.entries(res)) {
                
                labtestData.push({
                term: val['term']});
                
            }
            setLabtest(labtestData)
            // setLabtest(testJson);
            setLoading(false);
            };
            if (query.length > 2) fetchLabTest();
            if(query.length < 2)setLabtest([])
        }, [query]);
    
    return (
        <div >
            <input type='text' 
            placeholder="Search LabTest.." 
            className="search" 
            onChange={(e) => setQuery(e.target.value)}
            />
            {loading ? (
            <h4>Loading ...</h4>
            ) : (
            labtest.map((item) => 
            <ListGroup defaultActiveKey={item.key}>
                <ListGroup.Item action onClick={()=>{
                onPressHandler(item.term)
                }}>
                <h6>{item.term}</h6>
                </ListGroup.Item>
            </ListGroup>
                )
            )}
        <br />
        {Rxlabtest.map((val) => (
                <Card >
                <Card.Body>
                  <Card.Title>{val.term}</Card.Title>
                  <Button variant="secondary" onClick={()=>{removelabtest(val.term)}} >Remove Medicine</Button>
                </Card.Body>
              </Card>
            ))}
        </div>
    )
}

export default LabTest;