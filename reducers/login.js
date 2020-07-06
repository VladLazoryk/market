export default function reducer(
    state = {
      users: [{ username: "Vlad", password: "Abc12345678" }],
      loginStatus: false
    },
    action
  ) {
    switch (action.type) {
      case "AUTHENTICATE_USER": {
        userData = action.payload;
        console.log(userData, state.username);
        if (userData[0] == state.username && userData[1] == state.password)
          return { ...state, loginStatus: true };
        else return { ...state, loginStatus: false };
        break;
      }
      case "ADD_USER": {
        userData = action.payload;
        console.log(userData, state.users);
        return {
          ...state,
          users: [
            ...state["users"],
            { username: userData[0], password: userData[1] }
          ]
        };
        break;
      }
      default: {
        return state;
      }
    }
  }
