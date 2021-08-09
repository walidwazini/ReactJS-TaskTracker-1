import PropTypes from 'prop-types'


const Button = ({ color, text, onClick }) => {
    // e = Passing the event object 
    // const onClick = (e) => {
    //     console.log(e)
    // }
    
    return (
        <div>
            <button
                onClick={onClick}
                className='btn'
                style={{ backgroundColor: color }}
            >{text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
