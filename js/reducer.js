let state //= {count: 0};

function changeState(state = {count: 0}, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    renderState()
}

function renderState(){
    document.body.textContent = state.count
}

dispatch({ type: '@@INIT' })
// renderState()

// Because changeState() now has a default argument, the state argument is set to { count: 0 }.

// When changeState() executes, the switch statement executes the default case, returning the value of state. The code changeState(undefined, { type: '@@INIT' }) returns { count: 0 },

// In dispatch(), when the changeState() reducer returns, dispatch assigns the return value to state, thus updating our state to the initial value of { count: 0 }. On the next line, render() is called, displaying 0 in our HTML.

// Essentially, we take advantage of our state starting off as undefined, and never being undefined again. This means the reducer's default argument can be used to set up the initial state and never be used again.