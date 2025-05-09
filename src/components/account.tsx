import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Account: React.FC<Props> = ({ className }) => {
  return (
    <button
      className={twMerge('flex size-8 items-center rounded-full bg-[#23366E]', className)}
    >
      <span className='w-full text-center text-sm font-semibold text-white'>MS</span>
    </button>
  )
}

export default Account
