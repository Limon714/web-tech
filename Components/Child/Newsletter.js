const Newsletter = () => {
  return (
      <>
        <section className="bg-gray-50 mt-20">
              <div className="container mx-auto md:px-20 py-16 text-center">
                  <h1 className="font-bold text-3xl">Subscribe Newsletter</h1>
                  <div className="py-4">
                      <input type="text" className="subscribe" placeholder="Enter your Email Address"/>
                  </div>
                  <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl">
                      Subscribe Now
                  </button>
              </div>
       </section>
      </>
  )
}

export default Newsletter