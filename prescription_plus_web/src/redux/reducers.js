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
    doctor:{},
    advice: '',
    followup: '',
    test: [],
    patient:{},
    Rx_Id: []
}
function RxReducer(state = initialState, action) {
    switch (action.type) {
        case SET_RX_COMPLAINTS:
            return { ...state, complaint: [...state.complaint, action.payload] };
        case REMOVE_RX_COMPLAINTS:
            return {...state, complaint: [...state.complaint.filter(complaint => complaint.term!==action.payload) ]};
        case UPDATE_RX_COMPLAINTS:
            const index = state.complaint.findIndex(com => com.term ===action.payload.term);
            let newArray = [...state.complaint];
            newArray[index].value = action.payload;
            return {...state, complaint: newArray};



        case SET_RX_MEDICINE:
            return { ...state, medicine: [...state.medicine,action.payload] };
        case REMOVE_RX_MEDICINE:
                return { ...state, medicine: [ ...state.medicine.filter(medicine => medicine.term!==action.payload) ]};
        case UPDATE_RX_MEDICINE:
                index = state.medicine.findIndex(med => med.key ===action.payload.key);
                newArray = [...state.medicine];
                newArray[index].value = action.payload.value;
                return {...state, medicine: newArray};
        
            
        case SET_RX_ADVICE:
            return { ...state, advice: action.payload };
         
        case REMOVE_RX_ADVICE:
            return { advice: ''};

        case SET_ADD_PATIENT:
            return  { ...state, patient: action.payload };
        case REMOVE_PATIENT:
            return { patient: {}};

        case SET_REG_DOCTOR:
     
            return  { ...state, doctor: action.payload};
        case REMOVE_REG_DOCTOR:
            return { doctor: {}};

        case SET_RX_FOLLOWUP: 
            return { ...state, followup: action.payload };

        case CANCEL_RX: 
            return {complaint: [], patient: {}, medicine: [], advice: '', followup: ''};
        
        case RX_ID:
            return { ...state, Rx_Id: [{key: action.payload.key, value: action.payload.value}] };



        case SET_TEST:
            console.log("Inside reducer Rx test")
            return { ...state, test: [...state.test, action.payload] };
        case REMOVE_TEST:
            return { ...state, test: [...state.test.filter(test => test.term!==action.payload) ]};
            
        default:
            return state;
    }
}

export default RxReducer;