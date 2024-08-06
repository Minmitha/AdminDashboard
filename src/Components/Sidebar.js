export function SidebarLayout() {
    return (
        <>
            <div className="flex m-0 overflow-hidden h-screen">
                {/* sidebar left */}
                <div className="flex  flex-col  h-screen">

                    <div className="w-full flex flex-grow sticky ">
                        <div className="w-20  bg-[#8774C5]">
                            <div className="flex flex-col px-1 my-4" >
                                <div className="gap-4">
                                    <img src="./img/browserbutton.svg" alt="" className="mb-4" />
                                    <img src="./img/firstlogo.svg" alt="" className="h-10 w-10 bg-cover bg-no-repeat" />
                                </div>
                                <div className="h-96">
                                    <div className="w-36 h-96 bg-[#5F578D] rounded-full pt-12 p-2">
                                        {/* menus */}
                                        <img src="./img/logo1.png" alt="" className="h-10 w-10 bg-cover bg-no-repeat mb-4 " />
                                        <img src="./img/logo2.svg" alt="" className="h-10 w-10 bg-cover bg-no-repeat mb-4 " />
                                        <img src="./img/logo3.svg" alt="" className="h-10 w-10 bg-cover bg-no-repeat mb-4 " />
                                        <img src="./img/logo4.png" alt="" className="h-10 w-10 bg-cover bg-no-repeat mb-4 " />
                                        <img src="./img/addicon.png" alt="" className="h-10 w-10 bg-cover bg-no-repeat mb-4 " />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-52 lg:w-64 bg-[#6C609E] border-r border-[#000000] ">
                            <div>
                                <h1 className="text-white px-3 my-2">Explore</h1>
                                <hr class="border-t-2 border-[#7A70A8] my-4" />
                            </div>


                            <aside id="logo-sidebar" class="top-0 left-0 z-40 pt-10 transition-transform -translate-x-full sm:translate-x-0 dark:bg-[#000000] dark:border-[#000000]" aria-label="Sidebar">
                                <div class=" px-3 pb-4 overflow-y-auto dark:bg-gray-800">
                                    <ul class="space-y-2 font-medium">
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM13.9563 14.0949C13.763 14.2644 13.5167 14.3629 13.024 14.56C10.7142 15.4839 9.55936 15.9459 8.89971 15.4976C8.7433 15.3913 8.6084 15.2564 8.50212 15.1C8.05386 14.4404 8.51582 13.2855 9.43973 10.9757C9.6368 10.483 9.73533 10.2367 9.9048 10.0434C9.94799 9.99419 9.99435 9.94782 10.0436 9.90464C10.2368 9.73517 10.4832 9.63663 10.9759 9.43956C13.2856 8.51565 14.4405 8.0537 15.1002 8.50196C15.2566 8.60824 15.3915 8.74314 15.4978 8.89954C15.946 9.5592 15.4841 10.7141 14.5602 13.0239C14.3631 13.5165 14.2646 13.7629 14.0951 13.9561C14.0519 14.0054 14.0055 14.0517 13.9563 14.0949Z" />
                                                </svg>

                                                <span class="ms-3">Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.3187 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2539 5.40001 11.2509 5.67552 11.2503 6L11.25 6.45499C11.25 6.4598 11.25 6.4646 11.25 6.46938V14.5359C10.4003 13.7384 9.25721 13.25 8 13.25C5.37665 13.25 3.25 15.3766 3.25 18C3.25 20.6234 5.37665 22.75 8 22.75C10.6234 22.75 12.75 20.6234 12.75 18V9.21059C12.8548 9.26646 12.9683 9.32316 13.0927 9.38527L15.8002 10.739C16.2185 10.9481 16.5589 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6836 9.43055 20.7179 9.13826 20.7341 8.83189C20.75 8.52806 20.75 8.14752 20.75 7.67988L20.7501 7.59705C20.7502 7.2493 20.7503 6.97726 20.701 6.71946C20.574 6.05585 20.2071 5.46223 19.6704 5.05185C19.4618 4.89242 19.2185 4.77088 18.9074 4.6155L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1623 2.76086C14.8811 2.63826 14.6043 2.53829 14.3187 2.50498Z" />
                                                </svg>

                                                <span class="flex-1 ms-3 whitespace-nowrap">Music</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15" id="gaming">
                                                    <path d="M13.1,12.5c-0.6,0.3-1.4,0.1-1.8-0.5l-1.1-1.4H4.8L3.7,12l0,0c-0.5,0.7-1.4,0.8-2.1,0.3c-0.5-0.4-0.7-1-0.6-1.5l0.7-3.7l0,0&#xA;&#x9;C1.9,5.9,3,5,4.2,5v0H7V3.5C7,2.7,7.6,2,8.4,2h3.1C11.8,2,12,2.2,12,2.5S11.8,3,11.5,3h-3C8.2,3,8,3.2,8,3.4c0,0,0,0.1,0,0.1V5h2.8&#xA;&#x9;v0c1.2,0,2.3,0.9,2.5,2.1l0,0l0.7,3.7l0,0C14.1,11.5,13.8,12.2,13.1,12.5z M6,7.5C6,6.7,5.3,6,4.5,6S3,6.7,3,7.5S3.7,9,4.5,9&#xA;&#x9;S6,8.3,6,7.5z M12,7.5C12,7.2,11.8,7,11.5,7H11V6.5C11,6.2,10.8,6,10.5,6S10,6.2,10,6.5V7H9.5C9.2,7,9,7.2,9,7.5S9.2,8,9.5,8H10v0.5&#xA;&#x9;C10,8.8,10.2,9,10.5,9S11,8.8,11,8.5V8h0.5C11.8,8,12,7.8,12,7.5z" />
                                                </svg>

                                                <span class="flex-1 ms-3 whitespace-nowrap">Gaming</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" role="img" focusable="false">
                                                    <path d="m 12.499079,12.25525 c 0.0968,0 0.188377,-0.0436 0.249339,-0.11884 0.06096,-0.0752 0.08473,-0.17385 0.06473,-0.26853 l -0.202146,-0.95662 c 0.115125,-0.11137 0.187491,-0.26686 0.187491,-0.43975 0,-0.182 -0.08106,-0.34343 -0.206876,-0.45558 l 0,-3.32202 -0.810333,0.50146 0,2.82056 c -0.125815,0.11215 -0.2069,0.27358 -0.2069,0.45558 0,0.17291 0.07239,0.32841 0.187515,0.43975 l -0.20217,0.95662 c -0.02,0.0947 0.0038,0.19335 0.06473,0.26853 0.06096,0.0752 0.152539,0.11884 0.249339,0.11884 l 0.625281,0 z M 12.773741,4.75539 7.5021019,1.49209 C 7.3477151,1.39699 7.1736728,1.34925 6.9996305,1.34925 c -0.1740423,0 -0.3482077,0.0477 -0.5016586,0.14284 l -5.271713,3.2633 C 1.0854931,4.84249 0.99999905,4.99633 0.99999905,5.1619 c 0,0.1656 0.085494,0.31949 0.22625985,0.40673 l 5.2716883,3.26333 c 0.153451,0.0952 0.3276163,0.14284 0.5016586,0.14284 0.1740423,0 0.3481092,-0.0477 0.5024714,-0.14284 L 12.773741,5.56863 c 0.140766,-0.0872 0.22626,-0.24113 0.22626,-0.40673 0,-0.16557 -0.08549,-0.31946 -0.22626,-0.40651 z M 6.9996059,9.78508 c -0.3283798,0 -0.6488777,-0.0912 -0.928242,-0.26411 l -3.0750017,-1.90368 0,3.27796 c 0,0.97016 1.7931578,1.7555 4.0032436,1.7555 2.2108742,0 4.0038842,-0.78536 4.0038842,-1.7555 l 0,-3.27796 -3.0748786,1.90368 C 7.6492472,9.69388 7.3279857,9.78508 6.9996059,9.78508 Z" />
                                                </svg>

                                                <span class="flex-1 ms-3 whitespace-nowrap">Education</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 17 17">
                                                    <path d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.03 0.602-0.03 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.03zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z" />
                                                </svg>

                                                <span class="flex-1 ms-3 whitespace-nowrap">Science & Tech</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="-2 -2 24 24" preserveAspectRatio="xMinYMin">
                                                    <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
                                                    <path d="M12.923 6.526H7.077C5.93 6.526 5 7.446 5 8.58v2.89c0 1.135.93 2.054 2.077 2.054h5.846c1.147 0 2.077-.92 2.077-2.054V8.58c0-1.135-.93-2.054-2.077-2.054zm-1.404 3.64l-2.735 1.29a.11.11 0 0 1-.157-.099v-2.66a.11.11 0 0 1 .16-.097l2.734 1.37c.081.042.08.157-.002.196z" />
                                                </svg>
                                                <span class="flex-1 ms-3 whitespace-nowrap">Entertainment</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://outlook.office.com/mail/" class="flex items-center p-2 text-gray-900 rounded-lg text-white hover:bg-[#36306D] dark:hover:bg-gray-700 group">
                                                <svg class="w-5 h-5 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12.77 17.671L11.16 16.141L9.66 14.721L11.66 14.431L13.91 14.111L14.2 13.541C14.194 13.541 14.187 13.541 14.18 13.541C13.698 13.541 13.296 13.201 13.201 12.747C13.2 12.13 14 12.33 14.63 11.29C14.71 11.27 17.45 4 11.85 4C6.25 4 8.99 11.27 8.99 11.27C9.62 12.27 10.43 12.12 10.42 12.72C10.41 13.32 9.68 13.52 8.99 13.59C7.85 13.72 6.85 13.46 5.85 15.35C5.25 16.44 5 20 5 20H12.36V19.83L12.77 17.671Z" fill="currentColor" />
                                                    <path d="M15.57 20.001H16.13L15.85 19.861L15.57 20.001Z" fill="currentColor" />
                                                    <path d="M15.85 18.7309L18.32 20.0009L17.85 17.3109L19.85 15.4109L17.09 15.0209L15.85 12.5709L14.61 15.0209L11.85 15.4109L13.85 17.3109L13.38 20.0009L15.85 18.7309Z" fill="currentColor" />
                                                </svg>
                                                <span class="flex-1 ms-3 whitespace-nowrap">Student Hubs</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>

                    <div className="w-full h-43 order-last bg-amber-600 mt-auto">
                        <img src="./img/Frame7.png" alt="" className="bg-cover w-full bg-no-repeat mt-[-35px]" />
                        <img src="./img/Frame6.png" alt="" className="bg-cover  w-full  bg-no-repeat mt-[-35px] " />
                    </div>

                </div>

                {/* condent overflow */}
                <div className=" bg-[#1D203E] overflow-auto container  no-scrollbar">

                    <div className="bg-[#2B2E4A]">
                        <form class="max-w-md mx-auto">
                            <label for="default-search" class="mb-2 text-sm font-medium  text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative ">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input type="search" id="default-search" class="block w-full p-3 ps-10 text-sm text-white border border-[##7A70A8] rounded-lg  focus:ring-gray-500 focus:border-gray-500 bg-[#292B46] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Explore" required />
                                {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
                            </div>
                        </form>
                    </div>
                    <div className="flex justify-center px-4 py-4">
                        <img src="./img/Banner.png" alt="" className="h-[200px] w-[800px] bg-cover bg-no-repeat" />
                    </div>
                    <div className="px-4 py-4">
                            <p className="text-white text-2xl mb-2 px-6">Featured Community</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 mb-2">
                                <img src="./img/Card1.png" className="grid-cols-1 w-[600px] bg-cover bg-no-repeat"  alt=""/>
                                <img src="./img/Card2.png" className="grid-cols-1 w-[600px] bg-cover bg-no-repeat" alt="" />
                            </div>

                        <p className="text-white text-2xl mb-2 px-6">Popular Right Now</p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 mb-2">
                            <img src="./img/Card3.png" className="grid-cols-1 w-[600px] bg-cover bg-no-repeat" alt="" />
                            <img src="./img/Card4.png" className="grid-cols-1 w-[600px] bg-cover bg-no-repeat" alt="" />
                        </div>

                    </div>

                </div>
                {/* side bar right */}
                <div className="flex border-[#41435A] bg-[#2B2E4A] hidden lg:block">
                    <div className="flex flex-col">
                        <div className="h-10 mb-6">
                            <div className="place-items-center px-2 py-2 flex flex-row mb-2">
                                <img src="./img/Mail.png" alt="" className="bg-cover h-6 w-6 ml-8  bg-no-repeat" />
                                <img src="./img/Bell.png" alt="" className="bg-cover h-6  w-6  ml-8  bg-no-repeat  " />
                                <img src="./img/Chat.png" alt="" className="bg-cover h-6  w-6 ml-8  bg-no-repeat" />
                                <img src="./img/setting.png" alt="" className="bg-cover  h-6  w-6  ml-8  bg-no-repeat  " />
                            </div>
                            <hr class="border-t-1 border-[#41435A]" />
                        </div>
                        <div className="px-24 py-10 mb-6">
                            <img src="./img/User_profile.png" alt="" className="items-center bg-cover h-28 w-28 bg-no-repeat" />
                            <p className="py-2 text-lg text-white whitespace-nowrap">Sophie Fortune </p>
                            <p className="text-sm text-gray-300 text-center ">@sophiefortune </p>
                        </div>
                        <div className="px-4 py-10">
                            <div className="flex flex-row justify-between items-center">
                                <p className="py-2 text-xl text-[#6B6C7E]">New Members</p>
                                <p className="text-lg text-[#5C5E71] mr-4">see all</p>
                            </div>
                            <div className="">
                                <div className="h-20 w-64 bg-[#393D5D] border-grey-300 mb-2 rounded-lg">
                                    <div className="flex flex-row">
                                        <div className="py-4">
                                            <img src="./img/user1.png" alt="" className="bg-cover h-10 w-10 ml-8 bg-no-repeat" />
                                        </div>
                                        <div className="px-2 py-4">
                                            <p className="text-xl text-white">Anne Coture</p>
                                            <p className="text-lg text-[#6B6C7E]">5 min ago</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="h-20 w-64 bg-[#393D5D] border-grey-300 mb-2 rounded-lg">
                                    <div className="flex flex-row">
                                        <div className="py-4">
                                            <img src="./img/user2.png" alt="" className="bg-cover h-10 w-10 ml-8 bg-no-repeat" />
                                        </div>
                                        <div className="px-2 py-4">
                                            <p className="text-xl text-white">Shipla Sri</p>
                                            <p className="text-lg text-[#6B6C7E]">10 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-20 w-64 bg-[#393D5D] border-grey-300 mb-2 rounded-lg">
                                    <div className="flex flex-row">

                                        <div className="py-4">
                                            <img src="./img/user3.png" alt="" className="bg-cover h-10 w-10 ml-8 bg-no-repeat" />
                                        </div>
                                        <div className="px-2 py-4">
                                            <p className="text-xl text-white">Marie Goshal</p>
                                            <p className="text-lg text-[#6B6C7E]">25 min ago</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="h-20 w-64 bg-[#393D5D] border-grey-300 mb-2 rounded-lg">
                                    <div className="flex flex-row">

                                        <div className="py-4">
                                            <img src="./img/user4.png" alt="" className="bg-cover h-10 w-10 ml-8 bg-no-repeat" />
                                        </div>
                                        <div className="px-2 py-4">
                                            <p className="text-xl text-white">Minmitha A</p>
                                            <p className="text-lg text-[#6B6C7E]">5 min ago</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="py-4">
                                <p className="text-xl text-gray-300">Follow Me</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </>


    );
}
