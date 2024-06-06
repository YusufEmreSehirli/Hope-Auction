import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="gradient-form h-full w-full bg bg-neutral-200">
      <div className=" h-full p-10 items-center justify-center">
        <div className="flex h-full flex-wrap items-center justify-center">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg ">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* left Side */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* logo */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="images/indir (1).png"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold ">
                        We are The Hope Auction Team
                      </h4>
                    </div>

                    <form>
                      <p className="mb-4">Please login to your account</p>
                      {/* usernamne input */}
                      <div className="relative mb-4 border">
                        <input
                          type="text"
                          placeholder="Username"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                        />
                        <label
                          for="exampleFormControlInput1"
                          className="  pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.5] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.4rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Username
                        </label>
                      </div>
                      {/* password */}
                      <div className="relative mb-4 border">
                        <input
                          type="password"
                          className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                        <label
                          for="exampleFormControlInput11"
                          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                        >
                          Password
                        </label>
                      </div>
                      {/* submit */}
                      <div className="mb-12 pb-1 pt-1 text-center login ">
                        <Link to="/">
                          <button
                            className="mb-3 inline-block w-full rounded px-5 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-dark-3 transition duration-150 ease-in-out"
                            type="button"
                          >
                            Log in
                          </button>
                        </Link>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 "
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* right side */}
                <div className="flex login items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none">
                  <div className="px-4 py-6 md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim aliquid facilis quo veritatis numquam praesentium
                      corporis tempora! Fugiat dignissimos, nam praesentium
                      tempora commodi modi. Nemo repellendus impedit voluptatem
                      reprehenderit hic!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
