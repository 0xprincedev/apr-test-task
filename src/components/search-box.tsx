import { Icon } from '@iconify/react/dist/iconify.js'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const SearchBox: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={twMerge(
        'relative flex h-10 w-full max-w-[350px] items-center rounded-md bg-[#F9F9FB]',
        className,
      )}
    >
      <Icon
        icon='material-symbols:search'
        className='absolute top-1/2 left-3 -translate-y-1/2 text-base'
      />
      <input
        type='text'
        className='h-full w-full pr-4 pl-9 text-sm font-medium'
        placeholder='Search...'
      />
    </div>
  )
}

export default SearchBox
