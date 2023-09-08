import { PhoneIcon } from '@heroicons/react/20/solid';

export default function Phone() {
  return (
    <div className=''>
      <div className='relative mt-2 pr-9'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          <PhoneIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </div>
        <input
          type='tel'
          name='phone'
          id='phone'
          className='block w-full  border-0 py-1.5 pl-10 text-gray-900   placeholder:text-gray-400   sm:text-sm sm:leading-6 border-b border-[ #3A719B]'
          placeholder='Phone *'
        />
      </div>
    </div>
  );
}
