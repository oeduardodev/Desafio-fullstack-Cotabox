import { HeaderContaiener } from './styles'

export function Header() {
  return (
    <HeaderContaiener>
      <form action="">
        <input type="text" name="Firt name" placeholder="Firt name" />
        <input type="text" name="Last name" placeholder="Last name" />
        <input type="text" name="Participation" placeholder="Participation" />
        <button>SEND</button>
      </form>
    </HeaderContaiener>
  )
}
