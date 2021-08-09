import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onPress = () => {
        console.log('click')
    }

    return (
        <header className='header'>
           <h1>{title}</h1>
           <Button color='green' text='Add' onClick={onPress}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header