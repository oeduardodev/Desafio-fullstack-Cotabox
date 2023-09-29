import { Tab } from './styles'
import { useState, useEffect } from 'react'

export function Tabela() {
  interface TiposDados {
    id: number
    firstName: string
    lastName: string
    participation: number
  }

  const [dados, setDados] = useState<TiposDados[]>([])

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((data) => setDados(data))
      .catch((error) => console.error('Erro ao buscar dados da API:', error))
  }, [])

  return (
    <Tab>
      <thead>
        <tr>
          <th></th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Participation</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.participation}</td>
          </tr>
        ))}
      </tbody>
    </Tab>
  )
}
