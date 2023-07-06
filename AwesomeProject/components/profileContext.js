import React from "react";

// set the defaults
const profileContext = React.createContext({
  profile: {name: 'James',
            age: 235,
            catFood: 5},
  setProfile: () => {}
});

export default profileContext;