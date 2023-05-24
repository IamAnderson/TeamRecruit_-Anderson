import { MdOutlinePayments } from "react-icons/md";

const Logo = () => {
  return (
    <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center bg-blue-600 w-[50px] h-[50px] rounded-full'>
            <MdOutlinePayments size={"24.65px"} color="#fff" />
        </div>

        <span className="text-[22px] text-sky-950"> <b>AceCoin</b>Pay </span>
    </div>
  )
}

export default Logo