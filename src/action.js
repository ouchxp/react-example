
function updateText(text) {
  return {
    type: "UPDATE_TEXT",
    text,
  }
}

export function fetchGreeting() {
  return function(dispatch) {
    return fetch('/greetings')
      .then(resp => resp.json())
      .then((body) => dispatch(updateText(body.greetings))
    );
  };
}
