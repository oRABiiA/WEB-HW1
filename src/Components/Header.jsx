import backgroundHome from "../assets/Backgrounds/Black-Background.jpeg";

const Header = () => {
    return (
        <section>
            <div className="relative h-[350px] overflow-hidden bg-cover bg-[50%] bg-no-repeat shadow-2xl"
                 style={{backgroundImage: `url(${backgroundHome})`}}>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
                    <div className="flex h-full items-center justify-center">
                        <div className="px-6 text-center text-white md:px-12">
                            <section className="mb-6 text-5xl font-bold">
                                <h1 className="w-full text-3xl lg:text-5xl xl:text-5xl font-bold text-white-600 sm:text-5xl">
                                    Interactive Infographics
                                </h1>
                            </section>
                            <h3 className="mb-8 text-3xl font-bold">See Your Charts Alive!</h3>
                            {/*<button type="button" className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600">*/}
                            {/*    Home*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
