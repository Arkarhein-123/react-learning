
function Button() {
    const handleOnClick = () => {
        console.log("Button Clicked")
    }
  return (
    <div>
     <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 ease-in-out"
        onClick={handleOnClick}
     >
        Primary Button
    </button>
    </div>
  )
}

export default Button
