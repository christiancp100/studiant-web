import PropTypes from 'prop-types';


const Select = ({ name, placeholder, options, ...rest }) => {
  return (
    <select name={name} className="appearance-none rounded-lg shadow-md" {...rest}>
      <option value="">{placeholder}</option>
      {options && options.map(option => (
        <option key={option.value} value={option.value}>{option.title}</option>
      ))}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.array,
}

export default Select