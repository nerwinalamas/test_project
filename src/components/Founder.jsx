import Marni from "../assets/images/marni_image_cluster_mobile.png";

const Founder = () => {
	return (
		<div className="flex flex-col items-center md:w-96 lg:w-full lg:flex-row lg:gap-5 xl:justify-evenly">
			<h1 className="w-[280px] text-4xl text-center font-playfairDisplay font-bold leading-[50px] lg:hidden">
				Meet our founder,{" "}
				<span className="text-customPeach">Marni</span>
			</h1>
			<img src={Marni} title="Marni" alt="Marni Image" className="cursor-pointer mt-14 mb-16 xl:w-96 xl:h-full xl:object-contain" />
			<div className="xl:w-max">
				<h1 className="hidden w-96 text-5xl font-playfairDisplay font-bold leading-[50px] lg:block lg:leading-[50px]">
					Meet our founder,{" "}
					<span className="text-customPeach">Marni</span>
				</h1>
				<p className="w-[309px] mt-2 mb-16 text-xl leading-8 tracking-wide text-customGray md:w-full xl:w-[500px] lg:text-lg lg:mb-5 lg:mt-5">
					Having been married for 17 years, divorced, and successfully
					dated again in today’s complex social environment, and now
					happily married, Marni understands what it feels like to be
					lonely and sick of wasting time going on dates and having
					relationships with unavailable men that go nowhere.
					<br />
					<br />
					Through her own journey to find love, Marni discovered that
					creating a process to shorten the journey for other women
					suffering from the inability to create emotionally safe and
					fulfilling life relationships was truly the mission of her
					soul and purpose.
				</p>
				<button className="w-[90%] p-5 text-xl rounded-full font-bold bg-customOrange text-customWhite lg:hidden hover:bg-opacity-80">
					Learn More
				</button>
				<button className="hidden lg:block lg:text-lg lg:rounded-full lg:font-bold lg:bg-customOrange lg:text-customWhite lg:w-max lg:p-4 lg:px-10 lg:hover:bg-opacity-80">
					Discover Marni's Proven Process
				</button>
			</div>
		</div>
	);
};

export default Founder;
