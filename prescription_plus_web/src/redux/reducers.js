import { SET_RX_COMPLAINTS } from "./actions";
import {REMOVE_RX_COMPLAINTS} from "./actions"
import { UPDATE_RX_COMPLAINTS } from "./actions";
import { SET_RX_MEDICINE } from "./actions";
import {REMOVE_RX_MEDICINE} from "./actions"
import { UPDATE_RX_MEDICINE } from "./actions";
import { SET_REG_DOCTOR } from "./actions";
import { REMOVE_REG_DOCTOR } from "./actions";
import { SET_RX_ADVICE } from "./actions";
import {REMOVE_RX_ADVICE} from "./actions"
import { SET_RX_FOLLOWUP } from "./actions";
import { CANCEL_RX } from "./actions";
import { SET_ADD_PATIENT } from "./actions";
import { REMOVE_PATIENT } from "./actions";
import { RX_ID } from "./actions";
import { SET_TEST } from "./actions";
import { REMOVE_TEST } from "./actions";

const initialState = {
    complaint: [],
    medicine: [],
    doctor: {},
    advice: '',
    followup: '',
    test: [],
    patient:{},
    Rx_Id: []
}

const setInitialStateData = () => {
    const authDoctor = localStorage.getItem("authDoctor");
    if (authDoctor) {
        initialState.doctor = JSON.parse(authDoctor)
    }
    const complaint = localStorage.getItem("complaint");
    if (complaint) {
        initialState.complaint = JSON.parse(complaint)
    }
    const medicine = localStorage.getItem("medicine");
    if (medicine) {
        initialState.medicine = JSON.parse(medicine)
    }
    const labtest = localStorage.getItem("labtest");
    if (labtest) {
        initialState.test = JSON.parse(labtest)
    }
    const patient = localStorage.getItem("patient");
    if (patient) {
        initialState.patient = JSON.parse(patient)
    }
    const advice = localStorage.getItem("advice");
    if (advice) {
        initialState.advice = JSON.parse(advice)
    }
    const followup = localStorage.getItem("followup");
    if (followup) {
        initialState.followup = JSON.parse(followup)
    }

}

setInitialStateData();

function RxReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RX_COMPLAINTS:
            localStorage.setItem("complaint", JSON.stringify([...state.complaint, action.payload]))
            return { ...state, complaint: [...state.complaint, action.payload] };
        case REMOVE_RX_COMPLAINTS:
            localStorage.removeItem('complaint')
            localStorage.setItem("complaint", JSON.stringify([...state.complaint.filter(complaint => complaint.term!==action.payload) ]))
            return {...state, complaint: [...state.complaint.filter(complaint => complaint.term!==action.payload) ]};
        case UPDATE_RX_COMPLAINTS:
            const index = state.complaint.findIndex(com => com.term ===action.payload.term);
            let newArray = [...state.complaint];
            newArray[index].value = action.payload;
            localStorage.removeItem('complaint')
            localStorage.setItem("complaint", JSON.stringify(newArray))
            return {...state, complaint: newArray};



        case SET_RX_MEDICINE:
            localStorage.setItem("medicine", JSON.stringify([...state.medicine,action.payload]))
            return { ...state, medicine: [...state.medicine,action.payload] };
        case REMOVE_RX_MEDICINE:
            localStorage.removeItem('medicine')
            localStorage.setItem("medicine", JSON.stringify( [ ...state.medicine.filter(medicine => medicine.term!==action.payload) ]))
                return { ...state, medicine: [ ...state.medicine.filter(medicine => medicine.term!==action.payload) ]};
        case UPDATE_RX_MEDICINE:
                index = state.medicine.findIndex(med => med.key ===action.payload.key);
                newArray = [...state.medicine];
                newArray[index].value = action.payload.value;
                localStorage.removeItem('medicine')
                localStorage.setItem("medicine", JSON.stringify(newArray))
                return {...state, medicine: newArray};
        
            
        case SET_RX_ADVICE:
            localStorage.setItem("advice", JSON.stringify(action.payload))
            return { ...state, advice: action.payload };
         
        case REMOVE_RX_ADVICE:
            localStorage.removeItem("advice")
            return { advice: ''};

        case SET_ADD_PATIENT:
            localStorage.setItem("patient", JSON.stringify(action.payload))
            return  { ...state, patient: action.payload };
        case REMOVE_PATIENT:
            localStorage.removeItem("patient")
            return { patient: {}};

        case SET_REG_DOCTOR:

            localStorage.setItem("authDoctor", JSON.stringify(action.payload))
            return  { ...state, doctor: action.payload};
        case REMOVE_REG_DOCTOR:
            localStorage.removeItem("authDoctor")
            return { doctor: {}};

        case SET_RX_FOLLOWUP: 
        localStorage.setItem("followup", JSON.stringify(action.payload))
            return { ...state, followup: action.payload };

        case CANCEL_RX: 
            localStorage.removeItem("followup")
            localStorage.removeItem("advice")
            localStorage.removeItem("patient")
            localStorage.removeItem("complaint")
            localStorage.removeItem("medicine")
            localStorage.removeItem('labtest')
            console.log(state.doctor, "*****************INSIDE RX DOCTOR*************")
            return {...state, complaint: [], patient: {}, medicine: [], advice: '', followup: '', test: []};
        
        case RX_ID:
            return { ...state, Rx_Id: [{key: action.payload.key, value: action.payload.value}] };



        case SET_TEST:
            localStorage.setItem("labtest", JSON.stringify([...state.test, action.payload]))
            return { ...state, test: [...state.test, action.payload] };
        case REMOVE_TEST:
            localStorage.removeItem('labtest')
            localStorage.setItem("labtest", JSON.stringify([...state.test.filter(test => test.term!==action.payload) ]))
            return { ...state, test: [...state.test.filter(test => test.term!==action.payload) ]};
            
        default:
            return state;
    }
}

export default RxReducer;