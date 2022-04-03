import Button from "./Button"
import { useLocation } from 'react-router-dom'

function Header({ onClickAdd, showForm }) {
    const currentLocation = useLocation()
    return (
        <div className="header">
        <h3>Task Reminder</h3>
        { currentLocation.pathname === "/" && <Button color={showForm ? 'red' : 'green'} text={showForm ? 'Close' : 'Add'} onClickAdd={onClickAdd} />}
      </div>
    )
}

export default Header
