import { UserCircleIcon } from '@heroicons/react/20/solid';

export default function LastName() {
  return (
    <div>
      <div className='relative mt-2 rounded-md shadow-sm'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
          <UserCircleIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
        <input
          type='text'
          name='lastName'
          id='lastName'
          className='block w-full  border-0 py-1.5 pl-10 text-gray-900  sm:text-sm sm:leading-6 border-b border-[#3A719B]'
          placeholder='Last Name *'
          autoComplete='Last Name'
          required
        />
        <hr />
      </div>
    </div>
  );
}
