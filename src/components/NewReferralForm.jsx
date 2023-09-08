import {
  FName,
  LName,
  Dob,
  Language,
  Phone,
  Email,
  Address,
  Notes,
} from './form/constant';

const NewReferralForm = ({ title = 'New Referral', isOpen, setIsOpen }) => {
  return (
    <div className='accordion w-[782px]  bg-white text-[#3A719B] mb-1'>
      <div className='accordion-item w-'>
        {/* collapsed container */}
        <div className='accordion-title flex h-[64px]'>
          {/* id number */}
          <div className='w-10 h-16 bg-green-600 flex items-center justify-center'>
            <span className='w-[15px] h-[16px] text-white'>1</span>
          </div>
          {/* patient name and trash and icons wrapper*/}
          <div className='flex flex-grow'>
            {/* patient name container */}
            <div className='h-16 flex items-center pl-3'>
              <span className='w-[400px]'>{title}</span>
            </div>
            {/* trash and chevron icons container */}
            <div className='flex  flex-grow h-16 w-20 items-center justify-end pr-6'>
              <div>
                {/* <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span> */}
              </div>
              <div className='pl-2' onClick={() => setIsOpen(!isOpen)}>
                {' '}
                {isOpen ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      fillRule='evenodd'
                      d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className='accordion-content w-[670px] h-[316px] mx-auto'>
            {/* form */}
            <div className='w-[670px]'>
              <div id='form-container' className='flex flex-col gap-4'>
                <div id='1' className='flex '>
                  <div className=' w-[335px]'>
                    <FName />
                  </div>
                  <div className=' w-[335px]'>
                    <LName />
                  </div>
                </div>
                <div id='2' className='flex'>
                  <div className='w-[335px]'>
                    <Dob />
                  </div>
                  <div className='w-[335px]'>
                    <Language />
                  </div>
                </div>
                <div id='3' className='flex'>
                  <div className='w-[335px]'>
                    <Phone />
                  </div>
                  <div className='w-[335px]'>
                    <Email />
                  </div>
                </div>
                <div>
                  <Address />
                </div>
                <div>
                  <Notes />
                </div>
              </div>
              {/* end form */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default NewReferralForm;
