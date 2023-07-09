import React from "react";

// set the defaults
const profileContext = React.createContext({
  profile: {name: 'James',
            age: 236,
            catFood: 5},
  setProfile: () => {}
});

export default profileContext;