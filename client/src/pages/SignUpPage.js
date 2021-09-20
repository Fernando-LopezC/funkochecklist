import React from 'react';

const SignUpPage = () => {
  return <>
    <section className="py-20" style={{
      backgroundImage: 'url(https://wc.wallpaperuse.com/wallp/30-302906_s.jpg)',
      backgroundSize: 'cover',
      
    }}>
      <div className="container mx-auto max-w-screen-lg">
        <div className="py-15 grid grid-cols-8">
          <div className="col-span-3">
            <form className="bg-gray-200 rounded p-4">
              <h2 className="text-2xl mb-6 text-center font-bold">Register to your Funko Pop Checklist</h2>
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">First Name</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="text" name="name" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Last Name</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="text" name="name" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Username</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="text" name="name" placeholder="" />
              </div>
              <div className="flex flex-col mb-4">
                <label className="font-semibold mb-1">Email Address</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="text" name="email" placeholder="Email Address" />
              </div>
              <div className="flex flex-col mb-6">
                <label className="font-semibold mb-1">Password</label>
                <input className="py-2 px-4 bg-white rounded border-2 border-gray-600" type="password" name="password" placeholder="" />
              </div>
              <div className="flex">
                <button className="py-2 px-4 inline-flex text-white rounded w-full hover:bg-blue-800 justify-center bg-blue-600">
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-span-5"></div>
        </div>
      </div>
    </section>
  </>;
}

export default SignUpPage;