import Janice from "../assets/images/janice.png";
import Jill from "../assets/images/testimonial_2_image.png";
import ArrowLeft from "../assets/svgs/slider_arrow_left.svg";
import ArrowRight from "../assets/svgs/slider_arrow_right.svg";
import ActiveSlideIndicator from "../assets/svgs/active_state_slide_indicator.svg";
import NonActiveSlideIndicator from "../assets/svgs/non_active_state_slide_indicator.svg";
import { feedbacksData } from "../data";
import { useState } from "react";

const FeedBacks = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const handlePrevSlide = () => {
	  setCurrentSlide((prev) => (prev === 0 ? feedbacksData.length - 1 : prev - 1));
	};
  
	const handleNextSlide = () => {
	  setCurrentSlide((prev) => (prev === feedbacksData.length - 1 ? 0 : prev + 1));
	};

	return (
		<div className="w-screen mt-32 mb-16 pt-20 pb-20 flex flex-col items-center gap-16 bg-customGray md:w-full xl:w-screen xl:max-w-screen-2xl xl:h-[590px] xl:px-40 xl:relative">
			<h1 className="w-72 text-3xl font-bold font-playfairDisplay text-customWhiteVariant xl:w-[33%] xl:absolute xl:top-20 xl:left-36 xl:text-3xl xl:tracking-wide 2xl:text-4xl 2xl:w-[36%] 2xl:left-48">
				See how women have been impacted by the
				<span className="text-customSoftOrange"> power of love:</span>
			</h1>

			{/* SLIDER HERE - SMALLER DEVICE ONLY */}
			<div className="w-max lg:w-max flex flex-col gap-10 items-center xl:hidden">
				<div className="w-[341px] flex flex-col gap-5 px-5 pt-9 pb-16 rounded-br-[85px] bg-customCreamVariant font-playfairDisplay transition-transform duration-1000 ease-in-out transform">
					<p className="text-2xl font-bold xl:text-xl">
						“{feedbacksData[currentSlide].title}”
					</p>
					<p className="font-oxygen text-xl text-customGray xl:text-base">
						{feedbacksData[currentSlide].description}
					</p>
					<div className="flex gap-5 items-center">
						<img src={Janice} alt={`${feedbacksData[currentSlide].from} Image`} />
						<p className="text-2xl italic">{feedbacksData[currentSlide].from}</p>
					</div>
				</div>

				<div className="flex gap-10">
					<img src={ArrowLeft} alt="Arrow Left Icon" onClick={handlePrevSlide} className="cursor-pointer" />
					{feedbacksData.map((_, index) => (
						<img
							key={index}
							src={index === currentSlide ? ActiveSlideIndicator : NonActiveSlideIndicator}
							alt="Slide Indicator Icon"
							className="transition-opacity duration-300 ease-in-out"
						/>
					))}
					<img src={ArrowRight} alt="Arrow Right Icon" onClick={handleNextSlide} className="cursor-pointer" />
				</div>
			</div>

			{/* FOR DESKTOP VIEW ONLY */}
			<div className="hidden xl:flex xl:flex-col xl:gap-5 xl:pb-16 xl:rounded-br-[85px] xl:bg-customCreamVariant xl:font-playfairDisplay xl:w-[38%] xl:absolute xl:bottom-20 xl:left-36 xl:h-80 xl:px-14 xl:pt-6 2xl:w-[36%] 2xl:left-48">
				<p className="text-2xl font-bold xl:text-xl">
					“Once Marni held me accountable, it was easier for me
					to finally recognize when Mr. Right (Mark) came along.”
				</p>
				<p className="font-oxygen text-xl text-customGray xl:text-base">
					If I hadn’t followed the guiding hand of Marni, I wouldn’t
					have been ready to accept the moments and opportunities
					presented to me every day.
				</p>
				<div className="flex gap-5 items-center">
					<img src={Janice} title="Janice" alt="Janice Image" className="cursor-pointer w-14 object-contain" />
					<p className="text-2xl italic">Janice</p>
				</div>
			</div>

			<div className="hidden xl:flex xl:flex-col xl:gap-4 xl:pb-16 xl:bg-customCreamVariant xl:font-playfairDisplay xl:w-[38%] xl:absolute xl:top-20 xl:right-36 xl:h-80 xl:px-14 xl:pt-6 xl:rounded-tl-[85px] 2xl:w-[36%] 2xl:right-48">
				<p className="text-2xl font-bold xl:text-xl">
					“I am now much more grounded and confident and I feel like
					I’m living the life that I wanted to live now.”
				</p>
				<p className="font-oxygen text-xl text-customGray xl:text-base">
					When I first joined the program, the best initial results I
					got were me actually loving who I am. I think I always had
					an appreciation for myself, but I didn’t truly believe that
					I was worthy of great things.
				</p>
				<div className="flex gap-5 items-center">
					<img src={Jill} title="Jill" alt="Jill Image" className="cursor-pointer w-14 object-contain" />
					<p className="text-2xl italic">Jill</p>
				</div>
			</div>
		</div>
	);
};

export default FeedBacks;
