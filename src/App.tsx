import React, { useState } from 'react';
import './App.css';
import Logo from './component/Logo';
import Title from './component/Title';
import { IoMdClose } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import { BsCheckCircleFill, BsGrid3X3GapFill, BsApple } from "react-icons/bs";
import { HiWifi } from "react-icons/hi";
import { RxBorderDotted } from "react-icons/rx";
import { TbReceipt } from "react-icons/tb";
import master_card_icon from "./assets/mastercard.png";
import master_card_icon_ from "./assets/mastercard_.png";
import chip from "./assets/chip.png";

function App() {

  const handlePayment = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //req to send payments
  }

  return (
    <>
      <div className='h-full w-full'>
        <div className='flex items-start justify-center bg-[#193741] h-full w-full py-12 lg:py-24'>
          <div className='bg-[#fff] rounded-[4px] w-[85%] lg:w-[80%] pt-4 pb-12'>
            <span className='flex items-center justify-end w-full cursor-pointer px-4'> 
              <IoMdClose size={"24.65px"} className="text-sky-950" /> 
            </span>

            <div className='flex flex-col lg:flex-row lg:items-start justify-start gap-28 lg:gap-8 w-full px-6 lg:px-8'>
              <div className='lg:flex-[0.7] flex flex-col gap-4 justify-start w-full'>
                <div className='flex flex-col md:flex-row justify-start md:items-center md:justify-between w-full mb-4'>
                  <div className='mb-4 md:mb-0'>
                    <Logo />
                  </div>

                  <div className='flex items-center gap-1'>
                    <span className='flex items-center bg-sky-950 text-[#fff] text-[16px] font-semibold rounded-[3px] h-[30px] px-2'> {"0"} </span>
                    <span className='flex items-center bg-sky-950 text-[#fff] text-[16px] font-semibold rounded-[3px] h-[30px] px-2'> {"1"} </span>
                    <span className='flex items-center text-sky-950 text-[16px] font-bold h-[30px]'> : </span>
                    <span className='flex items-center bg-sky-950 text-[#fff] text-[16px] font-semibold rounded-[3px] h-[30px] px-2'> {"1"} </span>
                    <span className='flex items-center bg-sky-950 text-[#fff] text-[16px] font-semibold rounded-[3px] h-[30px] px-2'> {"9"} </span>
                  </div>
                </div>

                <form onSubmit={handlePayment} className='w-full'>
                  <div className='flex flex-col gap-4 justify-start w-full'>
                    <>
                      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:w-full'>
                        <div>
                          <Title text='Card Number' fontWgt='bold' capitalize />
                          <Title textSm text='Enter the 16-digit card number on the card' /> 
                        </div>
                        <span className='hidden lg:flex items-center gap-1 text-[14px] lg:text-[16px] text-blue-600 font-semibold'> <HiPencil size={"24.65px"} /> Edit </span>
                      </div>

                      <div className='flex items-center gap-4 w-full border border-[#27225225] rounded-[6px] p-4'>
                        <img src={master_card_icon} alt="" className='w-[30px] h-[30px] object-cover' />
                        <input type="number" placeholder='2412  -  7512  -  3412  -  3456' min={12 || "12"} max={12 || "12"}
                        className='placeholder:text-[#27225294] text-[18px] lg:text-[20px] font-semibold border-none focus:outline-none w-full' />

                        <span className='flex items-end justify-end lg:w-full'> <BsCheckCircleFill size={"19.65px"} className="text-sky-400" /> </span>
                      </div>
                    </>

                    <>
                      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-8 w-full'>
                        <div className='w-full'>
                          <Title text='CVV Number' fontWgt='bold' capitalize />
                          <Title textSm text='Enter the 3 or 4 digit on the card' /> 
                        </div>

                        <div className='flex items-center w-full border border-[#27225225] rounded-[6px] p-4'>
                          <div className='flex items-center justify-center w-full'>
                            <input type="number" placeholder='' min={3 || "3"} max={"3" || 3 || "4" || 4}
                            className='flex justify-center placeholder:text-[#27225294] text-[20px] font-semibold border-none focus:outline-none w-[20%]' />
                          </div>
                          
                          <span className='flex items-end justify-end'> <BsGrid3X3GapFill size={"24.65px"} color="#c4c4c4" /> </span>
                        </div>
                      </div>

                      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-8 w-full'>
                        <div className='w-full'>
                          <Title text='Expiry Date' fontWgt='bold' capitalize />
                          <Title textSm text='Enter the expiration date of the card' /> 
                        </div>

                        <div className='flex items-center gap-4 w-full'>
                          <div className='flex items-center justify-center border border-[#27225225] rounded-[6px] w-full p-4'>
                            <input type="number" placeholder='' min={3 || "3"} max={3 || "3"}
                            className='flex justify-center border-none placeholder:text-[#27225294] text-[20px] font-semibold focus:outline-none w-[50%]' />
                          </div>
                          
                            <span className='text-[18px] font-bold'> / </span>

                            <div className='flex items-center justify-center border border-[#27225225] rounded-[6px] w-full p-4'>
                              <input type="number" placeholder='' min={3 || "3"} max={3 || "3"}
                              className='flex justify-center border-none placeholder:text-[#27225294] text-[20px] font-semibold focus:outline-none w-[50%]' />
                            </div>
                        </div>
                      </div>

                      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 lg:gap-8 w-full'>
                        <div className='w-full'>
                          <Title text='Password' fontWgt='bold' capitalize />
                          <Title textSm text='Enter your Dynamic password' /> 
                        </div>

                        <div className='flex items-center gap-4 w-full border border-[#27225225] rounded-[6px] p-4'>
                          <input type="password" placeholder='' 
                          className='flex justify-center placeholder:text-[#27225294] text-[27.75px] border-none focus:outline-none w-full' />
                          
                          <span className='flex items-end justify-end w-full'> <BsGrid3X3GapFill size={"24.65px"} color="#c4c4c4" /> </span>
                        </div>
                      </div>
                    </>

                    <button type='submit' className='flex items-center justify-center text-[#fff] text-[18px] font-bold bg-blue-600 rounded-[6px] w-full py-8'>
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>

              <div className='lg:flex-[0.3]'>
                <div className='flex flex-col gap-4 bg-[#dfe7ebc4] rounded-[10px] w-full pb-4 lg:mt-20'>
                  <div className='relative flex items-start justify-center w-full pt-72'>
                    <div className='absolute -top-10 left-[11%]'>
                      <div className='relative flex flex-col gap-4 bg-[#fff] shadow-2xl rounded-[15px] w-[230px] px-4 pt-8 pb-4'>
                        <>
                          <div className='absolute -top-5 right-[30%] py-2 w-[100px] bg-blue-600 shadow-xl shadow-blue-600' />
                        </>
                        
                        <div className='flex items-center justify-between w-full mb-16'>
                          <img src={chip} alt="" className='h-full w-[40px] object-contain' />
                          <HiWifi size={"24.65px"} className="text-sky-950" />
                        </div>

                        <div>
                          <Title text='Jonathan Michael' fontWgt='medium' />
                          <span className='flex items-center gap-2 w-full'>
                            <RxBorderDotted size={"43.65px"} className="text-sky-950" />
                            <Title text='3456' fontWgt='bold' />
                          </span>
                        </div>

                        <div className='flex items-center justify-between w-full'>
                          <Title text={"09/22"} fontWgt='semibold' />
                          <img src={master_card_icon_} alt="" className='w-[30px] h-[30px] object-contain' />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex flex-col gap-2 w-full px-4'>
                    <div className='flex items-center justify-between w-full'>
                      <Title textSm fontWgt='semibold' text='Company' />
                      <span className='flex items-center gap-2'>
                        <span className='flex items-center justify-center w-[20px] h-[20px] bg-blue-950 rounded-full'>
                          <BsApple size={"14px"} color="#fff" />
                        </span>
                        <Title textVar fontWgt='bold'  text='Apple' />
                      </span>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                      <Title textSm fontWgt='semibold' text='Order Number' />
                      <Title textVar fontWgt='bold' text='1266201' />
                    </div>

                    <div className='flex items-center justify-between w-full'>
                      <Title textSm fontWgt='semibold' text='Product' />
                      <Title textVar fontWgt='bold' text='MacBook Air' />
                    </div>

                    <div className='flex items-center justify-between w-full'>
                      <Title textSm fontWgt='semibold' text='VAT (20%)' />
                      <Title textVar fontWgt='bold'  text={`$${"100.00"}`} />
                    </div>
                  </div>

                  <div className='border border-dashed border-[#2722522a] w-full' />

                  <div className='flex justify-between items-center w-full px-4'>
                    <div>
                      <Title textSm text="You have to Pay" />
                      <span className='flex items-center gap-1 text-blue-950 text-[20px] font-semibold'> {"549"} <span className='text-[12px] mt-1'> .{"99"}{"USD"} </span> </span>
                    </div>

                    <TbReceipt size={"24.65px"} className="text-blue-950" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
