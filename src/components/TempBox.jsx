import React, { useId } from 'react';
import PropTypes from 'prop-types';

function TempBox({
  label,
  amount = '',
  perubahanHasil,
  perubahanSuhu,
  selectedTemp = 'c',
  banyakDisabled = false,
  tempDisabled = false,
  className = '',
}) 
{
  const id = useId()
  const isAmountProvided = amount !== '';
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1-2'>
            <label   className='text-black/40 mb-2 inline-block'>{label}</label>
            <input 
            id = {id}
            type="number"
            className='outline-none w-full bg-transparent py-1.5'
            placeholder={isAmountProvided ? 'Amount' : 'Amount'}
            disabled={banyakDisabled}
            value={amount}
            onChange={(e) => perubahanHasil && perubahanHasil (Number(e.target.value))}
             />
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className="text-black/40 mb-2 w-full">Temperature Type</p>
        <select 
        className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
        value={selectedTemp}
        disabled={tempDisabled}
        onChange={(e) => { perubahanSuhu && perubahanSuhu(e.target.value)}}
        >
              <option value="c">°C(Celcius)</option>
              <option value="f">°F(Fahrenheit)</option>
              <option value="k">°K(Kelvin)</option>
              <option value="r">°R(Reamur)</option>

        </select>
        </div>
    </div>
  )
}

TempBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    perubahanHasil: PropTypes.func.isRequired,
   perubahanSuhu: PropTypes.func.isRequired,
    selectedTemp: PropTypes.string.isRequired,
    banyakDisabled: PropTypes.bool.isRequired,
    tempDisabled: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
};

export default TempBox;
