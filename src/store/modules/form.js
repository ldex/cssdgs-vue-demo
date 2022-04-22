// initial state
const state = () => ({
  formProgress: 0
})

// getters
const getters = {
  currentStep(state) {
    return state.formProgress
  },
  formStep1Valid(state) {
    return state.formProgress >= 1
  },
  formStep2Valid(state) {
    return state.formProgress >= 2
  },
  formStep3Valid(state) {
    return state.formProgress >= 3
  }
}

// actions
const actions = {
  setCurrentStep({commit}, step) {
    commit('SET_FORM_PROGRESS', step);
  },
  moveToNextStep({commit,getters}) {
    let currentStep = getters.currentStep;
    commit('SET_FORM_PROGRESS', ++currentStep);
  }
}

// mutations
const mutations = {
  SET_FORM_PROGRESS(state, step) {
    state.formProgress = step;
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
