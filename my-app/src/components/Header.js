import PropTypes from 'prop-types'


const Header = ({title}) => {
  return ( 
    <header>
        <h1 style={{color: 'red'}}>{title}</h1>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task tracker',
}


Header.propTypes = {
  title: PropTypes.string,
}

export default Header
