import React, { useState } from 'react';
import TempBox from '../components/TempBox';
import { TypeAnimation } from 'react-type-animation'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';

const Temp = () => {
    const [banyak, setBanyak] = useState(null);
    const [suhuSatu, setSuhuSatu] = useState("c");
    const [suhuDua, setSuhuDua] = useState("k");
    const [hasil, setHasil] = useState(0);
    const [persamaan, setPersamaan] = useState("....");

    const swap = () => {
        setSuhuSatu(suhuDua);
        setSuhuDua(suhuSatu);
        setHasil(banyak);
        setBanyak(hasil);
    }

        const convert = () => {
            if (suhuSatu === "c" ) {
                if(suhuDua === "r"){
                    const nilaiSuhu = banyak * 4/5;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak}* 4/5`);
                } else if (suhuDua === "k") {
                    const nilaiSuhu = banyak + 273;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak} + 273`);
                } else if (suhuDua === "f"){
                    const nilaiSuhu = banyak * 9/5 + 32;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak} * 9/5 + 32`);
                } else{
                    const nilaiSuhu = banyak;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak}`);
                }
            } else if (suhuSatu === "r"){
                if(suhuDua === "c"){
                    const nilaiSuhu = banyak * 5/4;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak} * 5/4`);
                } else if(suhuDua === "f"){
                    const nilaiSuhu = banyak * 9/4 + 32;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak} * 9/4 + 32`);
                } else if (suhuDua === "k"){
                    const nilaiSuhu = banyak * 5/4 + 273;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak} * 5/4 + 273`);
                } else {
                    const nilaiSuhu = banyak;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak}`);
                }
            }else if(suhuSatu === "f"){
                if(suhuDua === "c"){
                    const nilaiSuhu = (banyak - 32) * 5/9;
                    setHasil(nilaiSuhu);
                    setPersamaan(`(${banyak} - 32) * 5/9`);
                } else if(suhuDua === "r"){
                    const nilaiSuhu = (banyak - 32) * 4/9;
                    setHasil(nilaiSuhu);
                    setPersamaan(`(${banyak} - 32) * 4/9`);
                } else if(suhuDua === "k"){
                    const nilaiSuhu = (banyak - 32) * 5/9 + 273;
                    setHasil(nilaiSuhu);
                    setPersamaan(`(${banyak} - 32) * 5/9 + 273`);
                } else{
                    const nilaiSuhu = banyak;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak}`);
                }
            }else if (suhuSatu === "k"){
                if(suhuDua === "c"){
                    const nilaiSuhu = banyak - 273;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak} - 273`);
                } else if(suhuDua === "r"){
                    const nilaiSuhu = (banyak - 273) * 4/5;
                    setHasil(nilaiSuhu);
                    setPersamaan(`(${banyak} - 273) * 4/5`);
                } else if(suhuDua === "f"){
                    const nilaiSuhu = (banyak - 273) * 9/5 + 32;
                    setHasil(nilaiSuhu);
                    setPersamaan(`(${banyak} - 273) * 9/5 + 32`);
                } else {
                    const nilaiSuhu = banyak;
                    setHasil(nilaiSuhu);
                    setPersamaan(`${banyak}`);
                
                }
            }
        }

        return (
            <div className='h-screen flex-wrap flex-1 justify-center items-center bg-cover bg-no-repeat pt-2'
            style={{backgroundImage: `url(https://images.pexels.com/photos/707344/pexels-photo-707344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`, backgroundSize: 'cover', backgroundPosition: 'center'}}
          >
            <p className='text-red-500 text-3xl font-serif font-bold text-center pt-8'>Temperature Converter Program{'\n'}</p>
            <p className='text-cream text-xl font-serif italic text-center pt-4 pb-10'>
        <TypeAnimation
          sequence={[
            '"Temperature: nature silent maestro."',
            1500,
            'Degrees tell stories of energy',
            1500,
            '"Heat and cold, a delicate balance."',
            1500,
            '"From frosty whispers to fiery embrace."',
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
                  <TempBox
                    label="Suhu Awal"
                    amount={banyak}
                    perubahanSuhu={(Suhu) => setSuhuSatu(Suhu)}
                    perubahanHasil={(banyak) => setBanyak(banyak)}
                    selectedTemp={suhuSatu}
                  />
                </div>
                <div className='w-full mb-1'>
                  <TempBox
                    label="Suhu Konversi"
                    amount={hasil}
                    perubahanSuhu={(Suhu) => setSuhuDua(Suhu)}
                    selectedTemp={suhuDua}
                  />
                </div>
                <div className='relative w-full h-0.5'>
                  <button
                    type='submit'
                    className='bg-blue-600 text-white px-12 py-3 rounded-lg '
                  >
                    Convert {suhuSatu.toUpperCase()} to {suhuDua.toUpperCase()}
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
              <h1 className='text-biru font-serif font-bold text-center text-xl'>How It Works...</h1>
              <p className="text-cream font-serif font-bold text-center text-lg">Hasil dari °{suhuSatu.toUpperCase()} to °{suhuDua.toUpperCase()}= {persamaan}</p>
            </div>
            <div className='flex-wrap items-center justify-center mx-auto w-full max-w-md px-72 pt-5'>
            <NavLink to="/">
            <button>
             <FontAwesomeIcon className='items-center justify-center bg-red-500 rounded-sm size-6' icon={faHouse}/>
            </button>
            </NavLink>
            </div>
            </div>
          </div>
        );
      }

export default Temp