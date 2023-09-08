import { useState } from 'react';

import {
  Accordion,
  AddAntherForm,
  NewReferralForm,
  Notify,
} from './components/constant';

import getFormValues from './utils/getFormValues';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultList = JSON.parse(localStorage.getItem('list') || '[]');

function App() {
  const [people, setPeople] = useState(defaultList);
  const [isOpen, setIsOpen] = useState(true);
  const [notify, setNotify] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Function to setNotify to false after a delay
  const hideNotification = () => {
    setTimeout(() => {
      setNotify(false);
    }, 4000);
  };

  // Call hideNotification when you want to show the notification
  const showNotification = () => {
    setNotify(true);
    hideNotification(); // Call this to hide the notification after 5 seconds
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // access the value of the clicked button
    const submitType = e.target.querySelector(
      'button[type="submit"]:focus'
    ).value;

    //disables add anther patient button for 4 seconds
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 4000);

    // checks submit type
    if (submitType === 'add-anther-referral') {
      const { data, isEmpty } = getFormValues(e.currentTarget);
      const list = [data];
      setIsOpen(isOpen);

      const newList = [...people, ...list];
      if (isEmpty) {
        toast.error('Please provide all required values', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
        });

        return;
      }
      setPeople(newList);
      window.localStorage.setItem('list', JSON.stringify(newList));
      // reset form inputs
      document.querySelector('form').reset();
    } else if (submitType === 'onSubmitSendReferrals') {
      // const { data } = getFormValues(e.currentTarget);

      setTimeout(() => {
        clearLocalStorage();
        setIsOpen(isOpen);
        setNotify(false);
      }, 4000);

      // do something ex. POST data to server or Formspree.io
      //alert(JSON.stringify(people));
      console.log(JSON.stringify(people));
    }
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setPeople([]);
  };

  return (
    <>
      <section className='flex flex-col body-font font-montserrat justify-center items-center w-screen'>
        <header className='h-[196px] w-[1280px]'>
          <div className='mx-auto w-[449px] mt-[56px]'>
            <h1 className='text-center text-3xl'>Patient Referral Form</h1>
            <h2 className='text-center text-2xl'>
              Hayes Valley Health San Francisco
            </h2>
          </div>
        </header>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
        />
        <main className='bg-[#CDE7ED] w-[1280px] flex flex-col justify-center overflow-auto'>
          <div className='w-[828px] h-[47px]  text-center  mx-auto'>
            {/*  notify component: hidden */}
            {notify && <Notify people={people} />}
          </div>
          <form
            action=''
            className='form flex justify-center pt-10'
            onSubmit={onSubmit}
          >
            <article className='h-screen'>
              <section className='w-[782px] pb-5'>
                <div className='w-full  flex flex-col items-center'>
                  <div className='mb-8'>
                    <h1 className='text-2xl text-center'>Referral Patients</h1>
                    <h2 className='text-xl text-center'>
                      You can add up to five patients at a time
                    </h2>
                  </div>
                  <div>
                    {people.length === 0 && (
                      <NewReferralForm isOpen={isOpen} setIsOpen={setIsOpen} />
                    )}

                    {people.length <= 4 &&
                      people.map((item, index) => {
                        const { firstName, lastName } = item;
                        return (
                          <div key={index}>
                            <Accordion
                              title={item.title}
                              content={item.content}
                              firstName={firstName}
                              lastName={lastName}
                              clearLocalStorage={clearLocalStorage}
                              index={index}
                              isOpen={isOpen}
                              setIsOpen={setIsOpen}
                              people={people}
                              setPeople={setPeople}
                            />
                          </div>
                        );
                      })}
                  </div>

                  {people.length >= 1 && people.length <= 4 ? (
                    <AddAntherForm
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      people={people}
                    />
                  ) : null}

                  {people.length === 5 &&
                    people.map((item, index) => {
                      const { firstName, lastName } = item;
                      return (
                        <div key={index}>
                          <Accordion
                            title={item.title}
                            content={item.content}
                            firstName={firstName}
                            lastName={lastName}
                            clearLocalStorage={clearLocalStorage}
                            index={index}
                          />
                        </div>
                      );
                    })}
                </div>
              </section>
              <div className='text-center mt-5'>
                <button
                  type='submit'
                  name='add-another-referral'
                  value='add-anther-referral'
                  disabled={isButtonDisabled}
                >
                  {people.length <= 4 && 'SAVE +  ADD ANTHER PATIENT'}
                </button>
              </div>
              <div>
                <button
                  className='mt-4 w-full bg-blue-950 hover:bg-blue-900 text-white border shadow py-3 px-6 font-semibold text-md rounded-3xl'
                  type='submit'
                  name='onSubmitSendReferrals'
                  value='onSubmitSendReferrals'
                  onClick={showNotification}
                  disabled={people.length < 1}
                >
                  SEND REFERRALS
                </button>
              </div>
            </article>
          </form>
        </main>
      </section>
    </>
  );
}

export default App;
