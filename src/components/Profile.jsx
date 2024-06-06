const Profile = () => {
  return (
    <div class="bg-gray-100 p-4 scroll-smooth  books items-center">
      <div class="border-1 shadow-lg shadow-gray-700 rounded-lg">
        {/* <!-- top content --> */}
        <div class="flex rounded-t-lg bg-top-color sm:px-2 w-full">
          <div class="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <img src="images/profile.jpg" />
          </div>

          <div class="w-2/3 sm:text-center pl-5 mt-10 text-start">
            <p class="font-poppins font-bold text-heading sm:text-4xl text-2xl">
              Yusuf Emre Şehirli
            </p>
            <p class="text-heading">Software Engineer</p>
          </div>
        </div>

        {/* <!-- main content --> */}
        <div class="p-5">
          <div class="flex flex-col sm:flex-row sm:mt-10">
            <div class="flex flex-col sm:w-1/3">
              {/* <!-- My contact --> */}
              <div class="py-3 sm:order-none order-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  My Contact
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a class="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </a>
                    <div class="ml-2 truncate">
                      Yusufemresehirli@hotmail.com
                    </div>
                  </div>

                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Facebook"
                      href=""
                      target="_blank"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        class="h-4"
                      >
                        <path
                          fill="currentColor"
                          d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </a>
                    <div>Yusufemresehirli</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        class="h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </a>
                    <div>Yusufemresehirli</div>
                  </div>
                </div>
              </div>
              {/* <!-- Skills --> */}
              <div class="py-3 sm:order-none order-2">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Skills
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div>
                  <div class="flex items-center my-1">
                    <a class="w-6 text-gray-700 hover:text-orange-600">
                      <svg
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
                        />
                        <path
                          fill="currentColor"
                          d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
                        />
                      </svg>
                    </a>
                    <div class="ml-2">Tailwind CSS</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Facebook"
                      href=""
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <g
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Logo"
                            transform="translate(0.000000, -144.000000)"
                          >
                            <g
                              id="Android_2_fill"
                              transform="translate(0.000000, 144.000000)"
                            >
                              <path
                                d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                                id="MingCute"
                                fill-rule="nonzero"
                              ></path>
                              <path
                                d="M18.4472,4.10555 C18.9412,4.35254 19.1414,4.95321 18.8944,5.44719 L17.7199,7.79631 C20.3074,9.6038 22,12.6042 22,16 L22,17 C22,18.1046 21.1046,19 20,19 L4,19 C2.89543,19 2,18.1046 2,17 L2,16 C2,12.6042 3.69259,9.60379 6.28014,7.79631 L5.10558,5.44719 C4.85859,4.95321 5.05881,4.35254 5.55279,4.10555 C6.04677,3.85856 6.64744,4.05878 6.89443,4.55276 L8.028,6.8199 C9.24553,6.29239 10.5886,6 12,6 C13.4114,6 14.7545,6.29239 15.972,6.81991 L17.1056,4.55276 C17.3526,4.05878 17.9532,3.85856 18.4472,4.10555 Z M7.5,12 C6.67157,12 6,12.6716 6,13.5 C6,14.3284 6.67157,15 7.5,15 C8.32843,15 9,14.3284 9,13.5 C9,12.6716 8.32843,12 7.5,12 Z M16.5,12 C15.6716,12 15,12.6716 15,13.5 C15,14.3284 15.6716,15 16.5,15 C17.3284,15 18,14.3284 18,13.5 C18,12.6716 17.3284,12 16.5,12 Z"
                                id="形状结合"
                                fill="#09244B"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </a>
                    <div class="ml-2">Android</div>
                  </div>
                  <div class="flex items-center my-1">
                    <a
                      class="w-6 text-gray-700 hover:text-orange-600"
                      aria-label="Visit TrendyMinds Twitter"
                      href=""
                      target="_blank"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 7.82959L18.6965 9.35641C20.239 10.7447 21.0103 11.4389 21.0103 12.3296C21.0103 13.2203 20.239 13.9145 18.6965 15.3028L17 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M13.9868 5L12.9934 8.70743M11.8432 13L10.0132 19.8297"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M7.00005 7.82959L5.30358 9.35641C3.76102 10.7447 2.98975 11.4389 2.98975 12.3296C2.98975 13.2203 3.76102 13.9145 5.30358 15.3028L7.00005 16.8296"
                          stroke="#1C274C"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </a>
                    <div class="ml-2">Html, Css, JS , React.js</div>
                  </div>
                </div>
              </div>
              {/* <!-- Education Background --> */}
              <div class="py-3 sm:order-none order-1">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Education
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col space-y-1">
                  <div class="flex flex-col">
                    <p class="font-semibold text-xs text-gray-700">2019</p>
                    <p class="text-sm font-medium">Near East University</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:w-2/3 order-first sm:order-none sm:-mt-10">
              {/* <!-- About me --> */}
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  About Me
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>
                <p>
                  To get a career opportunity which would help me to utilize my
                  academic background to assist me to gain experience, employ my
                  excellent skills, and enable me to make positive contribution.
                </p>
              </div>

              {/* <!-- Professional Experience --> */}
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Professional Experience
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  <div class="flex flex-col">
                    <p class="text-lg font-bold text-gray-700">
                      Software Engineer
                    </p>
                    <p class="font-semibold text-sm text-gray-700">
                      2021 - Present
                    </p>
                    <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul class="text-sm list-disc pl-4 space-y-1">
                      <li>Working on customer facing product</li>
                      <li>Deliverying highly efficient solutions</li>
                      <li>Solving critical bugs</li>
                    </ul>
                  </div>

                  <div class="flex flex-col mt-8">
                    <p class="text-lg font-bold text-gray-700">Features</p>
                    <p class="font-semibold text-sm text-gray-700 mt-2 mb-1">
                      Key Responsibilities
                    </p>
                    <ul class="text-sm list-disc pl-4 space-y-1">
                      <li>Developed usable components</li>
                      <li>Solving complex problems</li>
                      <li>Solving critical bugs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* <!-- Projects --> */}
              <div class="py-3">
                <h2 class="text-lg font-poppins font-bold text-top-color">
                  Projects
                </h2>
                <div class="border-2 w-20 border-top-color my-3"></div>

                <div class="flex flex-col">
                  <div class="flex flex-col">
                    <p class="text-lg font-semibold text-gray-700">
                      Auction Web App
                    </p>
                    <p class="font-normal text-sm text-gray-700 mb-1 pl-2">
                      A platform to sell as well as to buy used books only for
                      PCCoE College due to this reuse of books will be there
                      beneficial for environment also indirectly helps increase
                      communication between juniors and seniors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
