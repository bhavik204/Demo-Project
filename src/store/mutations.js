export function SET_PAGE_TITLE(state, headerTitle) {
    state.headerName = headerTitle

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function SET_ARROW_STATUS(state, arrowdisp) {
    state.showArrow = arrowdisp

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function SET_PROPOSALFLOW_STATUS(state, propstat) {
    state.proposalBindFlow = propstat
}
export function SET_POST_FLOW_STATUS(state, poststate) {
    state.postFlow = poststate
}
export function ADD_PROPID(state, propid) {
    console.log(propid)
    state.proposalIdentityCollection = (propid)
    console.log(state.proposalIdentityCollection)
}
// console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
export function SET_EDIT_STATUS(state, editstatus) {
    state.editstat = editstatus
    console.log(state.editstat)

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function SET_ACTIVE_STATUS(state, activestate) {
    state.active = activestate

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function SET_INDEX(state, indexno) {
    state.index = indexno

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}


export function ADD_PRODUCTLEADDATA_PRODUCT(state, leadproddat) {

    state.productLeadData.product = leadproddat
    console.log(state.productLeadData)


    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function ADD_PRODUCTLEADDATA_LEAD(state, leadproddat) {

    state.productLeadData.lead = leadproddat
    console.log(state.productLeadData)


    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function ADD_BI_DATA(state, appformdat) {
    if (appformdat.productId) {
        state.productLeadData[0] = appformdat;

    } else if (appformdat.leadId) {
        state.productLeadData[1] = appformdat;

    } else if (appformdat.benefitIllustration) {
        state.productLeadData[2] = appformdat
    } else if (appformdat.personalDetails) {
        state.productLeadData[3] = appformdat
    }
}

export function ADD_CALENDARFORMDATA(state, calformdat) {

    state.calendarData = (calformdat)
    console.log(state.calendarData)


    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function ADD_CALENDARMAINFORMDATA(state, calformmaindat) {

    state.calendarMainData = (calformmaindat)
    console.log(state.calendarMainData)


    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}

export function MODIFY_APPFORMDATA(state, appformdat) {
    state.applicationFormData.push(appformdat)
    console.log(state.applicationFormData)


    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}



export function ADD_FORMDATA(state, formdat) {
    state.applicationFormData = (formdat)
    console.log(state.applicationFormData)

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')
}
export function SET_AGENT_DATA(state, agentdata) {
    state.agentDetails = agentdata
}
export function ADD_APPFORMDATA(state, appformdat) {

    //  state.applicationFormData.formparams = (appformdat)
    // state.applicationFormData = appformdat
    // console.log(state.applicationFormData)

    // console.log(headerTitle , state.headerName ,state , 'SET_PAGE_TITLE Mutation')

    /**
     * New Code for Proposal Personal
     */
    let objData = state.applicationFormData[0];
    if ('benefitIllustration' in objData && 'benefitIllustration' in appformdat) {
        state.applicationFormData[0].benefitIllustration = appformdat.benefitIllustration;
    } else if ('personalDetails' in objData && 'personalDetails' in appformdat) {
        state.applicationFormData[0].personalDetails = appformdat.personalDetails;
    } else if ('nomineeDetails' in objData && 'nomineeDetails' in appformdat) {
        state.applicationFormData[0].nomineeDetails = appformdat.nomineeDetails
    } else if ('familyhistoryDetails' in objData && 'familyhistoryDetails' in appformdat) {
        state.applicationFormData[0].familyhistoryDetails = appformdat.familyhistoryDetails
    } else if ('lifeinsuranceDetails' in objData && 'lifeinsuranceDetails' in appformdat) {
        state.applicationFormData[0].lifeinsuranceDetails = appformdat.lifeinsuranceDetails
    } else if ('misc' in objData && 'misc' in appformdat) {
        state.applicationFormData[0].misc = appformdat.misc
    } else if ('confidentialReport' in objData && 'confidentialReport' in appformdat) {
        state.applicationFormData[0].confidentialReport = appformdat.confidentialReport
    } else if ('detailsOfWitness' in objData && 'detailsOfWitness' in appformdat) {
        state.applicationFormData[0].detailsOfWitness = appformdat.detailsOfWitness;
    } else if ('paymentOptions' in objData && 'paymentOptions' in appformdat) {
        state.applicationFormData[0].paymentOptions = appformdat.paymentOptions
    }

    /** For UploadAddressProof  */
    else if('documentUpload' in objData && 'UploadAddressProof' in appformdat) {
        let tempOB = state.applicationFormData[0].documentUpload;
        if ('UploadAddressProof' in tempOB) {
            state.applicationFormData[0].documentUpload.UploadAddressProof = appformdat.UploadAddressProof;
        } else {
            state.applicationFormData[0].documentUpload = Object.assign({ UploadAddressProof: appformdat.UploadAddressProof }, tempOB);
        }
    } 
    /** For  UploadIDProof*/
    else if('documentUpload' in objData && 'UploadIDProof' in appformdat) {
        let tempOB = state.applicationFormData[0].documentUpload;
        if ('UploadIDProof' in tempOB) {
            state.applicationFormData[0].documentUpload.UploadIDProof = appformdat.UploadIDProof;
            console.log('Upload Id Proof ', appformdat.UploadIDProof);
        } else {
            state.applicationFormData[0].documentUpload = Object.assign({ UploadIDProof: appformdat.UploadIDProof }, tempOB);
            console.log('I am in else section please help me', state.applicationFormData[0].documentUpload);
        }
    } 

  
    
    else if('documentUpload' in objData && 'UploadAgeProof' in appformdat) {
        let tempOB = state.applicationFormData[0].documentUpload;
        if('UploadAgeProof' in tempOB) {
            state.applicationFormData[0].documentUpload.UploadAgeProof = appformdat.UploadAgeProof;  
        }  else {
            state.applicationFormData[0].documentUpload = Object.assign({UploadAgeProof: appformdat.UploadAgeProof}, tempOB);            console.log('I am in else section please help me', state.applicationFormData[0].documentUpload);
        }
    }

    /**
     * For UploadIncomeProof
     */

    else if('documentUpload' in objData && 'UploadIncomeProof' in appformdat) {
        let tempOB = state.applicationFormData[0].documentUpload;
        if('UploadIncomeProof' in tempOB) {
            state.applicationFormData[0].documentUpload.UploadIncomeProof = appformdat.UploadIncomeProof;  
        }  else {
            state.applicationFormData[0].documentUpload = Object.assign({UploadIncomeProof: appformdat.UploadIncomeProof}, tempOB);            console.log('I am in else section please help me', state.applicationFormData[0].documentUpload);
        }
    }

    /**
     * For UploadPhotoID
     */

    else if('documentUpload' in objData && 'UploadPhotoID' in appformdat) {
        let tempOB = state.applicationFormData[0].documentUpload;
        if('UploadPhotoID' in tempOB) {
            state.applicationFormData[0].documentUpload.UploadPhotoID = appformdat.UploadPhotoID;  
        }  else {
            state.applicationFormData[0].documentUpload = Object.assign({UploadPhotoID: appformdat.UploadPhotoID}, tempOB);            console.log('I am in else section please help me', state.applicationFormData[0].documentUpload);
        }
    }

    /**
     * For CustomerDeclarationCapture
     */

    else if('documentUpload' in objData && 'CustomerDeclarationCapture' in appformdat) {
        let tempOB = state.applicationFormData[0].documentUpload;
        if('CustomerDeclarationCapture' in tempOB) {
            state.applicationFormData[0].documentUpload.CustomerDeclarationCapture = appformdat.CustomerDeclarationCapture;  
        }  else {
            state.applicationFormData[0].documentUpload = Object.assign({CustomerDeclarationCapture: appformdat.CustomerDeclarationCapture}, tempOB);            console.log('I am in else section please help me', state.applicationFormData[0].documentUpload);
        }
    }
}
export function ADD_PROPOSALFAMILY(state, propsalfml) {
    state.proposalFmlyDetails[0] = propsalfml
    console.log(state.proposalFmlyDetails)
}

export function Add_BI_GETDATA(state, BIdataGET, leadObj, prodObj) {
    state.applicationFormData[0].benefitIllustration = BIdataGET

}
export function Add_BI_GETDATA_Prod(state, prodObj) {
    state.applicationFormData[0].productId = prodObj

}
export function Add_BI_GETDATA_Lead(state, leadObj) {
    state.applicationFormData[0].leadId = leadObj

}




export function INSERT_LEADS_DATA(state, formData) {
    // let storageDeft = state.leadFormData.length;
    if (formData.statusLeadData) {
        state.leadFormData[0] = formData;

    } else if (formData.personalLeadData) {
        state.leadFormData[1] = formData;

    } else if (formData.contactLeadData) {
        state.leadFormData[2] = formData;

    } else if (formData.professionLeadData) {
        state.leadFormData[3] = formData;

    } else if (formData.productLeadData) {
        state.leadFormData[4] = formData;
        // console.log(state.leadFormData[4]);
    } else if (formData.exsitLeadData) {
        state.leadFormData[5] = formData;
        // console.log(state.leadFormData[4]);
    }
    // Clear Leads Storage
    else if (formData.emptyArray) {
        state.leadFormData = formData.emptyArray
        state.leadsFormHandler.dateTimeVisible = false
        state.leadsFormHandler.apntVisible = false
        state.leadsFormHandler.divshow = true
        state.leadsFormHandler.showChildFields = false
        state.leadsFormHandler.childTable = false
        state.leadsFormHandler.showLead = false
        state.leadsFormHandler.showfield = false
    }
    console.log('Mutation ::', state.leadFormData);
}

// Leads Form Handler property 
export function LEAD_FORM_HANDLER(state, collection) {
    if (collection.apntVisible) {
        state.leadsFormHandler.apntVisible = collection.apntVisible;
        state.leadsFormHandler.divshow = collection.divshow;
        console.log(collection);
    } else if (collection.dateTimeVisible) {
        state.leadsFormHandler.dateTimeVisible = collection.dateTimeVisible;
        console.log(collection);
    } else if (collection.showChildFields) {
        state.leadsFormHandler.showChildFields = collection.showChildFields;
    }
    // console.log(collection);

    // Fresh Lead Indicator :
    else if (collection.freshLead) {
        // if (state.leadsFormHandler.freshLead === true) {
        state.leadsFormHandler.freshLead = collection.freshLead
            // } else if (state.leadsFormHandler.freshLead === false) {
            //     state.leadsFormHandler.freshLead = true
            // }
    } else if (collection.httpMethod) {
        // It Accept String POST or PUT
        state.leadsFormHandler.httpMethod = collection.httpMethod /** Http Method POST and PUT  */
        console.log('HTTP METHOD: ', collection.httpMethod);
    } else if (collection._leadId) {
        state.leadsFormHandler._leadId = collection._leadId
    }
}
// console.log(collection);

export function LOGOUT(state, userId) {
    // if (state.agentDetails !== '') {
    state = '';
    console.log(state)
        // }
}

export function SAVE_MOBLENO_ID(state, OtpCollection) {
    console.log('from mutation', OtpCollection)
    state.resndOtpData = OtpCollection;
    // state.resndOtpData.userId = OtpCollection.agent_id;
    console.log('from mutation', state)
}

export function SAVE_RESPONSE(state, response) {
    state.errInResponse = response;
    console.log('SAVE_RESPONSE: ', state.errInResponse);
}

// Testing purpose
export function AADHAR(state, response) {
    state.aadharNumber = response;
    console.log('AADHAR CARD NUMBER: ', state.aadharNumber);
}