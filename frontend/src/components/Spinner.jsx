
function Spinner({isLarge, children}) {
  
  return (
    <div className={`${isLarge ? 'w-28 h-28' : 'w-5 h-5'} relative flex justify-center items-center`}>
      <div className={`absolute ${isLarge ? 'w-28 h-28' : 'w-5 h-5'}  border-2 border-purple-200 rounded-full`} />
      <div className={`absolute top-0 left-0 ${isLarge ? 'w-28 h-28' : 'w-5 h-5'}  border-t-2 border-purple-700 rounded-full animate-spin`} />
      {children}
    </div>
  );
}

export default Spinner;
