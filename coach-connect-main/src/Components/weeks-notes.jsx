function WeeksNotes() {

  return (
    <div className="bg-white w-7/12 h-6/12 rounded-lg shadow-md" style={{
      position: "fixed",
      bottom: 100,
      right: 100,
      top: 100
    }}>
        <h1 className="bg-transparent text-black align-text-top text-center text-4xl">
          This Weeks Notes
        </h1>
        <div className="flex flex-col h-full justify-center bg-transparent">
          <h1 className="bg-transparent text-black mb-28 ml-12">
            Monday
          </h1>
          <h1 className="bg-gray-100 text-black mb-28 ml-12">
            Tuesday
          </h1>
          <h1 className="bg-transparent text-black mb-28 ml-12">
            Wednesday
          </h1>
          <h1 className="bg-gray-100 text-black mb-28 ml-12">
            Thursday
          </h1>
          <h1 className="bg-transparent text-black mb-28 ml-12">
            Friday
          </h1>
          <h1 className="bg-gray-100 text-black mb-28 ml-12">
            Saturday
          </h1>
          <h1 className="bg-transparent text-black mb-28 ml-12">
            Sunday
          </h1>
        </div>
    </div>
  );
}
export default WeeksNotes;