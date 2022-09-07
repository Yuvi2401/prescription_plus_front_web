import React, {useEffect, useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setTest,removeTest} from "../../../redux/actions";
import {Button,Col,Form,Row,ListGroup,Collapse,InputGroup,ButtonGroup,Card} from 'react-bootstrap';
import {server_url} from "../../../config";
import { FiSearch } from "react-icons/fi";
import { BiTestTube } from "react-icons/bi";
import { IoChevronDown } from "react-icons/io5";
import { MdModeEdit, MdDelete } from "react-icons/md";

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
        <div className="leftPanel" >
                     <div className="medsContainer">
        {!search && (
          <div className="search">
            <div className="search-inputSec">
              <FiSearch className="search-inputSec-icon" />
              <input
                type="text"
                className="search-inputSec-text"
                placeholder="Search lab tests..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={search}
              />
            </div>
            {!loading && labtest.length > 0 && query.length > 2 && (
              <ul className="search-resultSec">
                {labtest.slice(0, 6).map((item) => {
                  return (
                    <li
                      className="search-resultSec-item"
                      onClick={() => {
                        onPressHandler(item.term);
                        setQuery("");
                      }}
                    >
                      {item.term}
                    </li>
                  );
                })}
              </ul>
            )}
            {loading && (
              <div className="search-loadingSec">
                <div class="lds-spinner">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        )}
        {Rxlabtest.length === 0 && !search && (
          <div className="noMeds">
            <div className="noMeds-icon">
              <BiTestTube />
            </div>
            <div className="noMeds-heading">No lab tests assigned</div>
            <div className="noMeds-subHeading">
              Search and select to assign lab tests to patient
            </div>
          </div>
        )}
        {!search && Rxlabtest.length > 0 && (
          <div className="assignedMeds">
            <div className="assignedMeds-title">Lab tests :</div>
            <ul className="assignedMeds-list">
              {Rxlabtest.map((val) => {
                return (
                  <li className="assignedMeds-list-item" key={val.medSCTID}>
                    <div className="head">
                      <div className="head-title">{val.term}</div>
                      <div className="head-icons">
                       
                        <MdDelete
                          className="delete"
                          onClick={()=>{removelabtest(val.term)}}
                        />
                        
                      </div>
                    </div>
                   
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
         
        </div>
    )
}

export default LabTest;