import * as React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleLoginClick() {
    navigate("/login");
  }
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="flex z-10 justify-center items-center self-stretch px-16 py-5 w-full bg-white border-b border-solid backdrop-blur-[15px] border-black border-opacity-40 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-center px-px w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5 self-stretch py-3 my-auto text-black whitespace-nowrap">
            {/* <div className="grow text-2xl font-bold leading-10">largerthan</div> */}
            <img
              src="eagl-logo.png"
              alt="LargerThan Logo"
              className="grow text-2xl font-bold leading-10"
              style={{ height: "45px" }}
            />
          </div>
          <div className="flex gap-5 justify-center self-stretch px-5 py-4 text-lg font-medium text-zinc-600 max-md:flex-wrap">
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Home
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About us
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("what-we-do")}
            >
              What We Do
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("media")}
            >
              Media
            </div>
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </div>
          </div>

          <div
            onClick={handleLoginClick}
            className="justify-center self-stretch px-8 py-3 my-auto text-base font-medium text-right text-white whitespace-nowrap bg-blue-800 rounded max-md:px-5"
          >
            Login
          </div>
          <div
            onClick={handleLoginClick}
            className="justify-center self-stretch px-8 py-3 my-auto text-base font-medium text-right text-white whitespace-nowrap bg-blue-800 rounded max-md:px-5"
          >
            Register
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center self-stretch px-16 py-20 w-full font-medium min-h-[735px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="mainpage.jpg"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-14 w-full max-w-[1279px] max-md:mt-10 max-md:max-w-full">
          <div className="text-6xl font-bold text-white leading-[77px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
            Inclusive care for children with special needs
          </div>
          <div className="flex gap-5 justify-between self-start mt-16 text-base text-right max-md:mt-10">
            <div className="justify-center px-8 py-4 text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5">
              What we do
            </div>
          </div>
          <div className="flex gap-5 mt-48 text-lg text-right text-white max-md:flex-wrap max-md:mt-10">
            <div>230 children under our care</div>
            <div className="shrink-0 my-auto max-w-full h-px border border-solid backdrop-blur-[15px] bg-neutral-200 border-neutral-200 w-[836px]" />
            <div className="flex-auto">58 donations collected</div>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="mt-20 w-full max-w-[1270px] max-md:mt-10 max-md:max-w-full"
      >
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex gap-5 items-start mt-24 text-base max-md:flex-wrap max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=30d4071338e7485e977656a212aa2027&"
                className="shrink-0 self-start border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]"
              />
              <div className="flex flex-col grow shrink-0 self-end px-5 mt-12 basis-0 w-fit max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl font-bold text-gray-800 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  We provide a place for children with special needs
                </div>
                <div className="mt-10 leading-7 text-zinc-600 max-md:mt-10 max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                  <br />
                  <br />
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                  et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </div>
                <div className="justify-center self-start px-8 py-4 mt-14 font-medium text-right text-black bg-amber-300 rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e67abbcab5ec7364852e0174a05c50b049aa8edc4831635e76458e88ca8d878b?apiKey=30d4071338e7485e977656a212aa2027&"
              className="grow w-full aspect-[0.83] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-16 w-full max-w-screen-xl text-base font-medium text-gray-800 uppercase tracking-[2px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div>our Supporters</div>
        <div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[1074px]" />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/306e1f67354407dac320b00f568aa2a115f56aa0719ab0d7b038117e4734a37d?apiKey=30d4071338e7485e977656a212aa2027&"
        className="mt-9 max-w-screen-xl aspect-[50] w-[1280px] max-md:max-w-full"
      />
      <div className="flex justify-center items-center self-stretch px-16 py-20 mt-20 w-full bg-amber-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="mt-6 mb-4 w-full max-w-screen-xl max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=30d4071338e7485e977656a212aa2027&"
                  className="border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]"
                />
                <div className="flex flex-col items-start pl-20 mt-12 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                  <div className="ml-4 text-5xl font-bold text-gray-800 leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                    Some services we provide for our children
                  </div>
                  <div className="mt-9 ml-4 text-base leading-7 text-zinc-600 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique.
                  </div>
                  <div className="flex gap-5 self-center mt-9 max-w-full w-[460px] max-md:flex-wrap">
                    <div className="shrink-0 w-0.5 border-2 border-solid bg-neutral-200 border-neutral-200 h-[441px]" />
                    <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                      <div className="flex gap-5 items-start max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/21267cab003d03401f40fa978e3fb926d31fbac0bdbae402505252630819ef16?apiKey=30d4071338e7485e977656a212aa2027&"
                          className="shrink-0 w-7 aspect-square"
                        />
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="text-2xl font-bold text-gray-800">
                            Family support
                          </div>
                          <div className="mt-4 text-base leading-7 text-zinc-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 self-start mt-7 text-2xl font-bold text-gray-800">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/93cf091d8042384031470c8041fe28196319675b958c4e045d0731edc7574f0b?apiKey=30d4071338e7485e977656a212aa2027&"
                          className="shrink-0 w-7 aspect-square"
                        />
                        <div className="flex-auto my-auto">Health benefits</div>
                      </div>
                      <div className="self-end mt-5 text-base leading-7 text-zinc-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros.
                      </div>
                      <div className="flex gap-5 items-start mt-7 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fed748f798029493d0d3c4313c18f4ec6193d7f9d4e1fb8eb956ec811600c05?apiKey=30d4071338e7485e977656a212aa2027&"
                          className="shrink-0 w-7 aspect-square"
                        />
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="text-2xl font-bold text-gray-800">
                            Scholarships
                          </div>
                          <div className="mt-5 text-base leading-7 text-zinc-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-5 items-start mt-7 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/399880c3ac2cc965bb0312b5ad34b94838bf3ed0d5554410362a39789df08439?apiKey=30d4071338e7485e977656a212aa2027&"
                          className="shrink-0 w-7 aspect-square"
                        />
                        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                          <div className="text-2xl font-bold text-gray-800">
                            Therapy
                          </div>
                          <div className="mt-5 text-base leading-7 text-zinc-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse varius enim in eros.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d5dca26a2bab4fbbbd7d9573f8760705d18f3e592dc2ef3dc5ca2d3e5723e6fc?apiKey=30d4071338e7485e977656a212aa2027&"
                className="grow mt-11 w-full aspect-[0.73] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start px-5 mt-28 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/762240a751cf47dfac607bc8b139686351e07ad7ad291bfadc36cf5a80278f90?apiKey=30d4071338e7485e977656a212aa2027&"
          className="border-2 border-gray-800 border-solid aspect-[33.33] stroke-[2px] stroke-gray-800 w-[72px]"
        />
        <div className="mt-12 ml-24 text-5xl font-bold text-gray-800 leading-[58px] w-[640px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          We are creating a place where children with special needs can thrive
        </div>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 pt-20 pb-12 w-full text-base text-white rounded-3xl bg-stone-950 max-md:px-5 max-md:mt-6">
                <div className="mt-2.5 text-3xl font-bold leading-10">
                  Mission smile 1k: Outdoor charity
                </div>
                <div className="mt-7 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
                <div className="justify-center px-8 py-4 mt-20 font-medium text-right text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 pt-20 pb-12 w-full text-base text-white rounded-3xl bg-stone-950 max-md:px-5 max-md:mt-6">
                <div className="mt-2.5 text-3xl font-bold leading-10">
                  Weekly excursions
                </div>
                <div className="mt-7 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
                <div className="justify-center px-8 py-4 mt-28 font-medium text-right text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-12 pt-20 pb-12 w-full text-base text-white rounded-3xl bg-stone-950 max-md:px-5 max-md:mt-6">
                <div className="mt-2.5 text-3xl font-bold leading-10">
                  Monthly public awareness
                </div>
                <div className="mt-8 leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </div>
                <div className="justify-center px-8 py-4 mt-20 font-medium text-right text-gray-800 bg-white rounded backdrop-blur-2xl max-md:px-5 max-md:mt-10">
                  Learn more
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center self-stretch px-16 pb-20 mt-24 w-full text-base text-white bg-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex z-10 gap-5 justify-between mt-0 mb-4 w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col self-end mt-60 max-md:mt-10 max-md:max-w-full">
            <div className="text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              How we spend your donations and where it goes
            </div>
            <div className="mt-6 leading-7 max-md:max-w-full">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </div>
            <div className="flex gap-5 mt-10 font-medium leading-[160%] max-md:flex-wrap max-md:mt-10">
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <div className="shrink-0 w-4 h-4 bg-green-200 rounded" />
                  <div className="flex-auto my-auto">40% child care home</div>
                </div>
                <div className="flex gap-2 mt-7">
                  <div className="shrink-0 w-4 h-4 bg-amber-300 rounded" />
                  <div className="flex-auto my-auto">10% excursions</div>
                </div>
              </div>
              <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                <div className="flex gap-5 justify-between w-full">
                  <div className="flex gap-2">
                    <div className="shrink-0 self-start w-4 h-4 bg-violet-400 rounded" />
                    <div className="flex-auto">35% cleanliness program</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="shrink-0 self-start w-4 h-4 bg-amber-100 rounded" />
                    <div className="flex-auto">10% helping people</div>
                  </div>
                </div>
                <div className="flex gap-2 self-start mt-6">
                  <div className="shrink-0 self-start w-4 h-4 bg-rose-300 rounded" />
                  <div className="flex-auto">5% feeding the poor</div>
                </div>
              </div>
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55ee1b53365e41249e23d6b2859294d94e23045ea9444375ec1d0dc44a95b594?apiKey=30d4071338e7485e977656a212aa2027&"
            className="w-full aspect-[0.68]"
          />
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 mt-24 w-full max-w-screen-xl min-h-[384px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1c42677d4a0eb91157bf25ef38c4a5f7724ba9eab435dcc340778b2cd2e88f92?apiKey=30d4071338e7485e977656a212aa2027&"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-6 mb-3 max-w-full w-[798px]">
          <div className="text-5xl font-bold text-center text-white leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            You can contribute to provide a place for children with special
            needs!
          </div>
          <div className="flex gap-5 justify-between self-center mt-9 text-base font-medium text-right">
            <div className="justify-center px-8 py-4 text-black bg-amber-300 rounded backdrop-blur-2xl max-md:px-5">
              Join as a volunteer
            </div>
            <div className="justify-center px-8 py-4 text-gray-800 whitespace-nowrap bg-white rounded backdrop-blur-2xl max-md:px-5">
              Donate
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-24 w-full max-w-screen-xl text-4xl font-medium text-gray-800 leading-[56px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div>Our Events</div>
        <div className="shrink-0 my-auto max-w-full h-px border border-solid bg-neutral-200 border-neutral-200 w-[1042px]" />
      </div>
      <div className="mt-16 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 px-11 py-12 mx-auto w-full text-gray-800 bg-amber-300 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-auto gap-5 items-start">
                <div className="flex flex-col font-medium whitespace-nowrap">
                  <div className="text-5xl leading-[57.6px] max-md:text-4xl">
                    13
                  </div>
                  <div className="mt-4 text-base uppercase tracking-[2px]">
                    apr
                  </div>
                </div>
                <div className="flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit">
                  <div className="shrink-0 self-center w-11 h-0.5 bg-gray-800 border-2 border-gray-800 border-solid" />
                  <div className="mt-7">A day with our wonderful children </div>
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=30d4071338e7485e977656a212aa2027&"
                className="shrink-0 my-auto w-14 aspect-square"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 items-start px-11 py-12 w-full text-gray-800 bg-amber-300 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:mt-6 max-md:max-w-full">
              <div className="flex flex-col font-medium whitespace-nowrap">
                <div className="text-5xl leading-[57.6px] max-md:text-4xl">
                  25
                </div>
                <div className="mt-4 text-base uppercase tracking-[2px]">
                  apr
                </div>
              </div>
              <div className="flex flex-col grow shrink-0 mt-1.5 text-3xl font-bold leading-10 basis-0 w-fit max-md:max-w-full">
                <div className="shrink-0 self-center w-11 h-0.5 bg-gray-800 border-2 border-gray-800 border-solid" />
                <div className="flex gap-5 items-start mt-4 max-md:flex-wrap">
                  <div className="flex-auto mt-3.5">
                    Seminar: Caring for children with autism
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/622a48f5953e4efcbd93191a00c17ef1745e80759f04c985d0ec663268135304?apiKey=30d4071338e7485e977656a212aa2027&"
                    className="shrink-0 w-14 aspect-square"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center self-stretch px-16 py-20 mt-20 w-full bg-stone-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between my-5 w-full max-w-screen-xl max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-1.5 self-start text-white whitespace-nowrap">
            <div className="grow text-2xl font-bold leading-10">largerthan</div>
            <div className="text-2xl leading-10">i</div>
          </div>
          <div className="flex gap-5 justify-between items-start mt-1 max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col text-sm leading-6 text-white">
              <div className="text-base font-bold">Home</div>
              <div className="mt-10">About us</div>
              <div className="mt-9">Team</div>
              <div className="mt-9">What we do</div>
              <div className="mt-9">Contact</div>
            </div>
            <div className="flex flex-col self-stretch text-sm leading-6 text-white whitespace-nowrap">
              <div className="text-base font-bold">More</div>
              <div className="mt-10">Projects</div>
              <div className="mt-8">Events</div>
              <div className="mt-9">Donate</div>
              <div className="mt-9">Blog</div>
            </div>
            <div className="flex flex-col text-sm leading-6 text-white">
              <div className="text-base font-bold">Connect </div>
              <div className="mt-10">Facebook</div>
              <div className="mt-9">Instagram</div>
              <div className="mt-8">Twitter</div>
              <div className="mt-9">Linkdin </div>
            </div>
            <div className="flex flex-col mt-1.5 max-md:max-w-full">
              <div className="text-4xl font-bold text-white leading-[56px] max-md:max-w-full">
                Subscribe to get latest updates
              </div>
              <div className="flex gap-0 mt-10 text-base max-md:flex-wrap max-md:max-w-full">
                <div className="z-10 grow justify-center items-start px-6 py-7 rounded border border-solid border-indigo-50 border-opacity-30 text-indigo-50 text-opacity-30 w-fit max-md:px-5 max-md:max-w-full">
                  Your email
                </div>
                <div className="justify-center px-8 py-4 font-medium text-right text-gray-800 whitespace-nowrap bg-white rounded backdrop-blur-2xl max-md:px-5">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
