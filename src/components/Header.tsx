import React, { useState } from "react"
import { HeaderContainer, SearchInput } from "./Header.styled"

interface HeaderProps {
  onSearch: (query: string) => void
}

export const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSearchClick = () => {
    onSearch(inputValue)
  }

  return (
    <HeaderContainer>
      <SearchInput type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter movie name" />
      <button onClick={handleSearchClick}>Search</button>
    </HeaderContainer>
  )
}
