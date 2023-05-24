import React from 'react'


interface Props{
    text: string;
    textVar?: boolean;
    textSm?: boolean;
    fontWgt?: string; 
    capitalize?: boolean;
}

const Title = ({ text, textVar, textSm, fontWgt, capitalize } : Props) => {
  return (
    <div className={`${textSm ? "text-[#27225294]" : "text-sky-950"} ${textSm && ("text-[12px]")} ${textVar ? "text-[14px]" : "text-[16px] md:text-[18px]"} font-${fontWgt} ${capitalize && ("capitalize")}`}>
        {text}
    </div>
  )
}

export default Title