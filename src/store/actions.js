
export function FETCH_TITLE ({ commit, state }) {
    
    commit('SET_PAGE_TITLE', { headerTitle })
    // console.log(headerTitle , state , 'FETCH_TITLE. Actions')

}

export function SHOW ({ commit, state }) {
   
   commit('SET_ARROW_STATUS', { arrowdisp })
   // console.log(headerTitle , state , 'FETCH_TITLE. Actions')

}
export function SHOW_STATUS ({ commit, state }) {
   
   commit('SET_ACTIVE_STATUS', { activestate })
   // console.log(headerTitle , state , 'FETCH_TITLE. Actions')

}
export function SHOW_INDEX ({ commit, state }) {
   
   commit('SET_INDEX', { indexno })
   // console.log(headerTitle , state , 'FETCH_TITLE. Actions')

}

export function ADD_APPDATA ({ commit, state},formparams) {

   commit('ADD_APPFORMDATA', { state,formparams })
   console.log(formparams)
   // console.log(headerTitle , state , 'FETCH_TITLE. Actions')

}
export function ADD_DATA ({ commit, state }) {
   
   commit('ADD_FORMDATA', { formdat })
   // console.log(headerTitle , state , 'FETCH_TITLE. Actions')

}

export function SET_AGENT ({ commit, state }) {
    commit('SET_AGENT_DATA', { agentdata })
}

