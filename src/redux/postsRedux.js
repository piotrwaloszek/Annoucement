import { initialState } from "./initialState";

/* selectors */	/* selectors */
export const getAll = ({posts}) => posts.data;	export const getAll = ({posts}) => posts.data;
export const getOne = ({posts}, id) => posts.data.filter(item => item.id == id);


/* action name creator */	/* action name creator */
const reducerName = 'posts';	const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;	const createActionName = name => `app/${reducerName}/${name}`;
/* action types */	/* action types */
const FETCH_START = createActionName('FETCH_START');	const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');	const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');	const FETCH_ERROR = createActionName('FETCH_ERROR');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');


/* action creators */	/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });	export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });	export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });	export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const addPost = payload => ({payload, type: ADD_POST});
export const editPost = payload => ({payload, type: EDIT_POST});


/* thunk creators */	/* thunk creators */


/* reducer */	/* reducer */
export const reducer = (statePart = [], action = {}) => {	export const reducer = (statePart = initialState, action = {}) => {
  switch (action.type) {	  switch (action.type) {
    case FETCH_START: {	    case FETCH_START: {
      return {	      return {
        ...statePart,	        ...statePart,
        loading: {	        loading: {
          active: true,	          active: true,
          error: false,	          error: false,
        },	        },
      };	      };
    }	    }
    case FETCH_SUCCESS: {	    case FETCH_SUCCESS: {
      return {	      return {
        ...statePart,	        ...statePart,
        loading: {	        loading: {
          active: false,	          active: false,
          error: false,	          error: false,
        },	        },
        data: action.payload,	        data: action.payload,
      };	      };
    }	    }
    case FETCH_ERROR: {	    case FETCH_ERROR: {
      return {	      return {
        ...statePart,	        ...statePart,
        loading: {	        loading: {
          active: false,	          active: false,
          error: action.payload,	          error: action.payload,
        },	        },
      };	      };
    }	    }
    case ADD_POST: {
      return {
        ...statePart,
        data: [...statePart.data, action.payload],
      }
    }
    case EDIT_POST: {
      return {
        ...statePart,
        data: statePart.data.map(post => post.id === action.payload.id ? action.payload : post),
      }
    }
    default:	    default:
      return statePart;	      return statePart;
  }	  }
};	};
 6  src/styles/settings.scss
