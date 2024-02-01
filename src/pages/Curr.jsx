import { useState } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import InputBox from '../components/InputBox'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

function Curr() {
  const [amount, setAmount] = useState(null)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('idr')
  const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  

  const convert = () => {
    if (from === "btc" || to === "btc" ){
      const convValue = amount * currencyInfo[to];
      const roundVal = Number(convValue.toFixed(7)); 
      setConvertedAmount(roundVal);

    }else{
      const convValue = amount * currencyInfo[to];
      const roundVal = Number(convValue.toFixed(3)); 
      setConvertedAmount(roundVal);
    }
  }  


  return (
    <div className='h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat pt-2'
      style={{backgroundImage: `url(https://images.pexels.com/photos/6984984/pexels-photo-6984984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <p className='text-white text-3xl font-serif font-bold text-center pt-8'>Currency Converter Program{'\n'}</p>
      <p className='text-white text-xl font-serif italic text-center pt-4 pb-10'>
  <TypeAnimation
    sequence={[
      '"Welcome To Currency Convertor Program"',
      1500,
      '"This Program Currently Support 4 Kind of Currency."',
      1500,
      '"USD, IDR, BTC, JPY"',
      1500,
      '"Navigate the World of Currency Effortlessly"',
      1500,
      '"Enjoy Your Time"',
      1500,

  
        ]}
        wrapper='span'
        speed={60}
        repeat={Infinity}
        />
      </p>

      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 size-64 pb-3'>
        <form onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}>
          <div className='w-full mb-1'>
            <InputBox
              label="From"
              amount={amount}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>
          <div className='w-full mb-1'>
            <InputBox
              label="Converted Currency"
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
            />
          </div>
          <div className='relative w-full h-0.5'>
            <button
              type='submit'
              className='bg-blue-600 text-white px-12 py-3 rounded-lg '
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
          <div className='relative flex-1 px-80 h-0.5'>
            <button
              className='bg-orange-400 hover:border-blue-400 rounded-md px-6 py-3 hover:border-b-green-400' 
              onClick={swap}
            >
              Swap
            </button>
          </div>
        </form>
      </div>
      <div className='pt-4'>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 size-28'>
        <h1 className='text-white font-serif font-bold text-center text-xl'>Convertion Rates</h1>
        <p className="text-white font-serif font-bold text-center text-lg">{`1 ${from} = ${currencyInfo[to]} ${to}`}</p>

      </div>
      </div>
      <div className='flex-wrap items-center justify-center mx-auto w-full max-w-md px-72 pt-4'>
            <NavLink to="/">
            <button>
             <FontAwesomeIcon className='items-center justify-center bg-red-500 rounded-sm size-6' icon={faHouse}/>
            </button>
            </NavLink>
            </div>
    </div>
  );
}

export default Curr