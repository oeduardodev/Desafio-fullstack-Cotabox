import { useState } from 'react'
import { HeaderContainer } from './styles'

export function Header({ onSearchSubmit }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [participation, setParticipation] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    const searchTerms = {
      firstName,
      lastName,
      participation,
    }
    onSearchSubmit(searchTerms)
  }

  return (
    <HeaderContainer>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="First name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <input
          type="text"
          placeholder="Participation"
          onChange={(e) => setParticipation(e.target.value)}
          value={participation}
        />
        <button type="submit">SEND</button>
      </form>
    </HeaderContainer>
  )
}
