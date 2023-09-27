import { Tab } from './styles'
import dados from '../../../api/dados.js'

export function Tabela() {
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
