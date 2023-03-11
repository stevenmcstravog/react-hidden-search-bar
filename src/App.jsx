import React, { useState, useEffect, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

const App = () => {

  const [uiProps, setUIProps] = useState({
    bg: "#f8f9fa",
    shadow: "",
    transitions: "all .3 ease",
    opocity: 0,
    showSearchIcon: true,
    showSearchBar: false,
  })

  const bodyStyle = (document.body.style)

  const inputStyle = {
    margin: "10vh 40vw",
    width: "20vw",
    height: "30px",
    padding: "1rem .3rem",
    border: "none",
    outline: "none",
    background: "transparent",
    borderBottom: `2px solid #ffc107`,
    fontSize: "1.3rem",
    color: "#fff",
    boxShadow: "0px 55px 60px -15px rgba(0,0,0,.75)",
    opacity: uiProps.opocity,
    transitions: "all .3s ease"
  }

  const bsSearchStyle = {
    color: "#343a40",
    fontSize: 50,
    cursor: "pointer",
    position: "absolute",
    top: 20,
    right: 20
  }

  const containerStyle = {
    height: "100vh"
  }

  const inputEl = useRef(null)

  useEffect(() => {
    bodyStyle.background = uiProps.bg
    bodyStyle.boxShadow = uiProps.shadow
    bodyStyle.transitions = uiProps.transitions
    uiProps.showSearchBar && inputEl.current.focus()
  }, [uiProps.shadow], [uiProps.showSearchBar])

  const showSearch = () => {
    setUIProps({
      opacity: 1,
      showSearchIcon: false,
      showSearchBar: true
    })
  }

  const handleSearchFocus = () =>
    setUIProps({
      shadow: "inset 0 -98vh 30vw 100px rgba(0,0,0,0.8)",
    })

  const handleSearchBlur = (e) => {
    setUIProps({
      shadow: "none",
      opacity: 0,
      showSearchIcon: true
    })
  }

  return (
    <div style={containerStyle}>
      {uiProps.showSearchIcon
        ? <BsSearch style={bsSearchStyle} onClick={showSearch} />
        : <input
          type="text"
          placeholder="Search"
          style={inputStyle}
          ref={inputEl}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      }
    </div>
  )
}

export default App
