
function App() {
  
  return (
    <>
      <div className="bg-orange-50 h-dvh p-5 md:flex md:justify-center md:items-center"> 
        <div className="flex flex-col md:flex-row rounded-lg bg-white my-3 drop-shadow-md md:justify-center">
          <img src="image-product-mobile.jpg" alt="Product"  className="rounded-t-lg md:hidden"/>
          {/* <div className="hidden md:block md:w-72 md:h-full"> */}
            <img src="image-product-desktop.jpg" alt="Product"  className="rounded-l-lg hidden md:block  md:w-80"/>
          {/* </div> */}
          <div className="p-5 flex flex-col gap-3 md:w-80 md:gap-5 md:flex md:m-4">
            <div className="text-slate-500">P E R F U M E</div>
            <div className="font-bold text-4xl font-Fraunces md:text-wrap">Gabrielle Essence Eau De Parfum</div>
            <div className="text-slate-400 text-xl text-balanced font-normal md:text-lg">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</div>
            <div className="flex gap-5 items-center">
              <div className="text-emerald-700 font-bold text-4xl font-Fraunces">$149.99</div>
              <div className="text-sm text-slate-500 line-through">$169.99</div>
            </div>
            <div className="flex justify-center items-center bg-emerald-700 gap-5 p-4 w-80% rounded-lg hover:bg-emerald-800 cursor-pointer">
              <img src="icon-cart.svg" alt="cart logo" className="size-5"/>
              <div className="text-white font-bold text-lg">Add to Cart</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
