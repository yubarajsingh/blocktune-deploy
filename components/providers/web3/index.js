const {createContext} = require("react");

const Web3Context = createContext(null)

function Web3Provider() {
    return (
    <Web3Context.Provider value={{test: "hello"}}>
      
    </Web3Context.Provider>
  )
}

