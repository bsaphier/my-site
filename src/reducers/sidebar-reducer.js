const initialState = {
  menuItems: [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Filler',
      link: '/filler'
    }
  ]
};


/* ~~~~~~~~ actions ~~~~~~~~ */


/* ~~~~~~~~ reducer ~~~~~~~~ */
export default function(state = initialState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    default:
      return newState;

  }
}


/* ~~~~ action creators ~~~~ */
