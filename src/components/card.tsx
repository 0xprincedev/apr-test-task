import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  label: string
  value?: string
  percentage?: number
}

const Card: React.FC<Props> = ({ className, label, value, percentage }) => {
  return (
    <div
      className={twMerge(
        'border-border space-y-[5px] rounded-lg border bg-white p-[18px_8px_16px_14px] shadow-[0_0_5px_#EFEFF4]',
        className,
      )}
    >
      <p className='text-[11px]/[13px] text-[#152935]'>{label}</p>
      <p className='text-[15px]/[18px] font-semibold'>
        {value && <span className='text-[#152935]'>{value} </span>}
        {percentage && (
          <span className='text-[#5AD700]'>
            {value ? `(${percentage}%)` : `${percentage}%`}
          </span>
        )}
      </p>
    </div>
  )
}

export default Card
