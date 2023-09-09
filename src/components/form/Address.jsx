import { AddressAutofill } from '@mapbox/search-js-react';

const mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

function Address() {
  return (
    <div>
      <label htmlFor='address' className='sr-only'>
        Address
      </label>
      {/* .env.local : get API Key at https://account.mapbox.com/ */}
      <AddressAutofill accessToken={mapboxAccessToken}>
        <input
          type='text'
          name='address'
          id='address'
          className='block w-full border-0 py-1.5 text-gray-900  placeholder:text-gray-400 0 sm:text-sm sm:leading-6 border-b border-[ #3A719B]'
          placeholder='Address *'
          autoComplete='address-line1'
        />
      </AddressAutofill>
    </div>
  );
}
export default Address;
