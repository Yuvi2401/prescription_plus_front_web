

export const SET_RX_COMPLAINTS= 'SET_RX_COMPLAINTS';
export const REMOVE_RX_COMPLAINTS= 'REMOVE_RX_COMPLAINTS';
export const UPDATE_RX_COMPLAINTS= 'UPDATE_RX_COMPLAINTS';
export const SET_RX_MEDICINE= 'SET_RX_MEDICINE';
export const REMOVE_RX_MEDICINE= 'REMOVE_RX_MEDICINE';
export const UPDATE_RX_MEDICINE= 'UPDATE_RX_MEDICINE';
export const SET_REG_DOCTOR= 'SET_REG_DOCTOR';
export const REMOVE_REG_DOCTOR= 'REMOVE_REG_DOCTOR';
export const UPDATE_REG_DOCTOR= 'UPDATE_REG_DOCTOR';
export const SET_RX_ADVICE= 'SET_RX_ADVICE';
export const REMOVE_RX_ADVICE= 'REMOVE_RX_ADVICE';
export const UPDATE_RX_ADVICE= 'UPDATE_RX_ADVICE';
export const SET_RX_FOLLOWUP= 'SET_RX_FOLLOWUP';
export const CANCEL_RX= 'CANCEL_RX'
export const SET_ADD_PATIENT= 'SET_ADD_PATIENT';
export const REMOVE_PATIENT = 'REMOVE_PATIENT';
export const UPDATE_PATIENT= 'UPDATE_PATIENT';
export const RX_ID = 'RX_ID';
export const SET_TEST = 'SET_TEST';
export const REMOVE_TEST = 'REMOVE_TEST';


export const setComplaints = complaints => dispatch => {
    dispatch({
        type: SET_RX_COMPLAINTS,
        payload: complaints,
    });
};

export const removeComplaints = complaints => dispatch => {
    dispatch({
        type: REMOVE_RX_COMPLAINTS,
        payload: complaints,
    });
};

export const updateComplaints = complaints => dispatch => {
    dispatch({
        type: UPDATE_RX_COMPLAINTS,
        payload: complaints,
    });
};

export const setMedicine = medicines => dispatch => {
    dispatch({
        type: SET_RX_MEDICINE,
        payload: medicines,
    });
};

export const removeMedicine = medicines => dispatch => {
    dispatch({
        type: REMOVE_RX_MEDICINE,
        payload: medicines,
    });
};

export const updateMedicine = medicines => dispatch => {
    dispatch({
        type: UPDATE_RX_MEDICINE,
        payload: medicines,
    });
};

export const setDoctor = doctor => dispatch => {
    dispatch({
        type: SET_REG_DOCTOR,
        payload: doctor
    })
}

export const removeDoctor = doctor => dispatch => {
    dispatch({
        type: REMOVE_REG_DOCTOR,
        payload: doctor
    })
}

export const updateDoctor = doctor => dispatch => {
    dispatch({
        type: UPDATE_REG_DOCTOR,
        payload: doctor
    })
}

export const setAdvice = advice => dispatch => {
    dispatch({
        type: SET_RX_ADVICE,
        payload: advice,
    });
};

export const removeAdvice = advice => dispatch => {
    dispatch({
        type: REMOVE_RX_ADVICE,
        payload: advice,
    });
};

export const updateAdvice = advice => dispatch => {
    dispatch({
        type: UPDATE_RX_ADVICE,
        payload: advice,
    });
};


export const setFollowup = followup => dispatch => {
    dispatch({
        type: SET_RX_FOLLOWUP,
        payload: followup,
    });
};

export const cancelRx = cancelrx => dispatch => {
    dispatch({
        type: CANCEL_RX,
        payload: cancelrx,
    });
};

export const setPatient = patient => dispatch => {
    dispatch({
        type: SET_ADD_PATIENT,
        payload: patient
    })
}

export const removePatient = patient => dispatch => {
    dispatch({
        type: REMOVE_PATIENT,
        payload: patient
    })
}

export const updatePatient = patient => dispatch => {
    dispatch({
        type: UPDATE_PATIENT,
        payload: patient
    })
}

export const setRx_Id = Rx_Id => dispatch => {
    dispatch({
        type: RX_ID,
        payload: Rx_Id
    })
}

export const setTest = test => dispatch => {
    dispatch({
        type: SET_TEST,
        payload: test
    })
}

export const removeTest = test => dispatch => {
    dispatch({
        type: REMOVE_TEST,
        payload: test
    })
}

