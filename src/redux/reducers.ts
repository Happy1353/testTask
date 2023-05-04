const initialState = {date: '2000-01-01'};

export const dateReducer: any = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_DATE':
      return {...state, date: action.payload};
    default:
      return state;
  }
};
