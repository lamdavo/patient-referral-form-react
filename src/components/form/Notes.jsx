function Notes() {
  return (
    <div>
      <label htmlFor='notes' className='sr-only'>
        Notes
      </label>
      <input
        type='text'
        name='notes'
        id='notes'
        className='block w-full  border-0 py-1.5 text-gray-900  placeholder:text-gray-400 focus:ring-2  sm:text-sm sm:leading-6 border-b border-[ #3A719B]'
        placeholder='Notes/Reason *'
        required
      />
    </div>
  );
}
export default Notes;
