import { actions } from "../actions";

const initialState = {
  loading: false,
  snippets: [
    {
      id: "abc",
      title: "Fenwick Tree",
      description: "Implementation of an OOP-style fenwick tree"
    },
    {
      id: "bcd",
      title: "Binary Tree",
      description: "Implementation of a generic binary tree"
    },
    {
      id: "cde",
      title: "Segment Tree",
      description: "Implementation of an OOP-style segment tree"
    },
  ]
};

const snippetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SNIPPET_LIST.GET: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
}

export default snippetsReducer;