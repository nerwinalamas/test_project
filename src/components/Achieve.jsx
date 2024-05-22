import { achieveData } from "../data";

const Achieve = () => {
	return (
		<div className="my-28 flex flex-col gap-20 lg:w-full">
			<h1 className="font-playfairDisplay text-3xl font-bold text-center xl:text-4xl">
				What you’ll achieve:
			</h1>
			<div className="flex flex-col gap-24 lg:flex-row lg:flex-wrap xl:gap-32">
				{achieveData.map((data, index) => (
					<div key={index} className={`flex flex-col gap-5 items-center xl:gap-1 ${index === 1 ? "xl:mt-28" : ""}`}>
						<img src={data.image} alt={data.alternativeText} />
						<p className="w-[309px] mx-auto mt-7 mb-6 text-xl text-center leading-8 tracking-wide text-customGray xl:w-72">{data.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Achieve;
