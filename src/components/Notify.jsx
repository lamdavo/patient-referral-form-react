function Notify(people) {
  return (
    <div className='text-white  h-[47px] rounded-bl-3xl  rounded-br-3xl bg-green-600 items-center justify-center'>
      <p>
        {`Success! You have submitted ${people.people.length} pending referrals. You will be
        notified once they've been approved `}
      </p>
    </div>
  );
}

export default Notify;
