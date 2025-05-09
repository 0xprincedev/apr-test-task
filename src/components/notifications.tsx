import { Icon } from '@iconify/react/dist/iconify.js'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Notifications: React.FC<Props> = ({ className }) => {
  return (
    <button className={twMerge('flex size-10 items-center justify-center', className)}>
      <Icon
        icon='material-symbols:notifications-outline'
        className='text-2xl text-[#323232]'
      />
    </button>
  )
}

export default Notifications
