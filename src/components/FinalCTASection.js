import React from "react";

const FinalCTASection = () => {
  return (
    <>
      <section className="bg-black text-white py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Ready to Launch Your{" "}
                <span className="text-red-500">Winning Campaign?</span>
              </h2>
              <p className="mb-4">
                Get started today with Campaign Butler and receive:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span>
                    <strong>Same-day</strong> domain and email setup
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span>
                    <strong>Professional</strong> website within 72 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span>
                    <strong>Dedicated</strong> campaign strategist
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">▶</span>
                  <span>
                    <strong>Complete</strong> onboarding and training
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Form */}
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-400 bg-transparent px-4 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-400 bg-transparent px-4 py-2 rounded"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-400 bg-transparent px-4 py-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Phone Number (optional)"
                  className="w-full border border-gray-400 bg-transparent px-4 py-2 rounded"
                />
                <div className="flex items-center text-sm">
                  <input type="checkbox" className="mr-2" />
                  <span>
                    I agree to receive text messages from Campaign Butler. Read
                    more...
                  </span>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded font-bold w-full">
                  Launch My Campaign →
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-900 rounded-xl p-8">
            {/* Left Image */}
            <div className="flex justify-center">
              <div className="w-48 h-48 bg-gray-700 flex items-center justify-center rounded-full">
                <span className="text-gray-400">Image</span>
              </div>
            </div>

            {/* Right Text */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Visibility Starts Here. Victory Follows.
              </h3>
              <p className="text-gray-300 mb-6">
                Don’t leave your campaign success to chance. Partner with the
                experts who understand what it takes to win in today’s complex
                political landscape.
              </p>
              <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded font-bold">
                Get Started Today →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FinalCTASection;
