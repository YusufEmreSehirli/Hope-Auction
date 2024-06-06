import React, { useState } from "react";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonationSubmit = (event) => {
    event.preventDefault();
    // Bağış işlemini burada işleyin
    console.log("Donated Amount: ", donationAmount);
    handleCloseModal();
  };

  return (
    <div className="flex flex-col overflow-auto home">
      {/* Hero Section */}
      <div className="bg-[#8E1C3F] h-[500px] w-full bg-cover bg-center p-20 rounded-md">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="mb-4 text-5xl font-extrabold text-white">
            Welcome To Hope Auction
          </h1>
          <p className="text-lg text-white p-3">
            Hope Auction is your one-stop destination for auctions of electronic
            items, clothing, books, online courses, and more. Join us in our
            mission to support students in need.
            <br />
            Every purchase you make contributes to our cause - we donate 5% of
            all sales to support underprivileged students.
          </p>
          <img
            className="rounded mt-4 mb-4"
            src="images/logo.neu.jpg"
            alt="Hope Auction Logo"
          />
          <button className="px-6 py-2 mt-4 text-black bg-white rounded-md shadow-md">
            Learn More ...
          </button>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What You Can Find</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Electronic Items</h3>
            <p className="text-gray-600">
              Explore a wide range of electronic gadgets, including the latest
              smartphones, laptops, and accessories. All at unbeatable prices.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Clothing</h3>
            <p className="text-gray-600">
              Discover fashionable clothing for all seasons. From casual wear to
              formal attire, we have something for everyone.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Books</h3>
            <p className="text-gray-600">
              Find a variety of books, including bestsellers, classics, and
              educational materials. Perfect for book lovers and students alike.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Online Courses</h3>
            <p className="text-gray-600">
              Access a wide range of online courses to enhance your skills and
              knowledge. Learn at your own pace from the comfort of your home.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Home & Garden</h3>
            <p className="text-gray-600">
              Browse our selection of home and garden products. From furniture
              to gardening tools, find everything you need to beautify your
              space.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Toys & Games</h3>
            <p className="text-gray-600">
              Discover a range of toys and games for kids of all ages. Perfect
              for gifts or adding fun to your family time.
            </p>
          </div>
        </div>
      </div>

      {/* Donation Section */}
      <div className="bg-white py-16 px-6 flex flex-col items-center text-center">
        <h2 className="text-3xl font-bold mb-8">Make a Donation</h2>
        <p className="text-lg text-gray-600 mb-8">
          Your support can make a significant impact. Direct donations help us
          provide more resources and opportunities for underprivileged students.
          Click the button below to contribute.
        </p>
        <div className="flex justify-center items-center mb-4">
          <img
            className="rounded"
            src="images/logo2.jpg"
            alt="Hope Auction Logo"
          />
        </div>
        <button
          className="px-6 py-2 text-white bg-[#8E1C3F] rounded-md shadow-md"
          onClick={handleOpenModal}
        >
          Donate Now
        </button>
      </div>

      {/* Donation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
            <form onSubmit={handleDonationSubmit}>
              <label
                htmlFor="donationAmount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Donation Amount
              </label>
              <input
                type="number"
                id="donationAmount"
                value={donationAmount}
                onChange={handleDonationChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
                required
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#8E1C3F] text-white rounded-md"
                >
                  Donate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <div className="bg-white py-16 px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mt-4 text-sm">
            Here are some common questions about Hope Auction and our mission to
            support students:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-black mb-2">
              How does Hope Auction support students in need?
            </h3>
            <p className="text-gray-600 text-sm">
              Hope Auction donates 5% of all sales proceeds to support
              underprivileged students. We believe in giving back to the
              community and empowering the next generation.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-black mb-2">
              Can I donate directly to support students?
            </h3>
            <p className="text-gray-600 text-sm">
              Yes, you can! We provide options for direct donations to our
              student support fund. Your generosity can make a significant
              impact on the lives of students in need.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-black mb-2">
              How can I get involved in supporting Hope Auction's mission?
            </h3>
            <p className="text-gray-600 text-sm">
              There are several ways to get involved, including participating in
              auctions, spreading the word about our cause, and volunteering
              your time and skills. Contact us to learn more about how you can
              contribute.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src="images/thumbnail_IMG_1279.jpg"
              alt="Team Member"
              className="h-48 w-48 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Yusuf Emre Şehirli</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src="images/thumbnail_IMG_1279.jpg"
              alt="Team Member"
              className="h-48 w-48 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Yusuf Emre Şehirli</h3>
            <p className="text-gray-600">Co-Founder & COO</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <img
              src="images/thumbnail_IMG_1279.jpg"
              alt="Team Member"
              className="h-48 w-48 mx-auto rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Yusuf Emre Şehirli</h3>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16 px-6">
        <h2 className="text-3xl font-extrabold text-center text-black">
          Contact Us
        </h2>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Do you have any questions or need help? Then reach out we'd love to
          hear about your project and provide help.
        </p>
        <div className="flex mt-12 space-x-4 justify-center">
          <div>
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                <a
                  href="mailto:info@example.com"
                  className="text-[#007bff] text-sm ml-3"
                >
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
            <h2 className="mt-12 text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    {/* Icon SVG Here */}
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 511 512"
                  >
                    {/* Icon SVG Here */}
                  </svg>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="javascript:void(0)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="#007bff"
                    viewBox="0 0 24 24"
                  >
                    {/* Icon SVG Here */}
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <form className="ml-auto space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
            />
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-[#007bff]"
            ></textarea>
            <button
              type="button"
              className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
