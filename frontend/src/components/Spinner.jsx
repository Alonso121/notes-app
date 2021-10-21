function Spinner(params) {
  return (
    <div className="relative">
      <div className="w-5 h-5 border-2 border-purple-200 rounded-full" />
      <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-purple-700 rounded-full animate-spin" />
    </div>
  );
}

export default Spinner;
