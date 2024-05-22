import { Link } from "react-router-dom";
import PdfImage from "../assets/images/pdf_image.png";
import CircleText from "../assets/images/circle_text_image.png"

const Headline = () => {
	return (
		<div className="w-full relative max-w-sm lg:max-w-full lg:p-5 lg:flex lg:flex-col lg:gap-20">
			<Link to={"/"}>
				<h1 title="Logo" className="font-playfairDisplay text-3xl font-bold text-center capitalize lg:text-left lg:mt-5 xl:text-4xl">
					Logo
				</h1>
			</Link>
			<div className="lg:flex lg:flex-row-reverse lg:relative">
				<img src={PdfImage} alt="PDF Image" title="PDF Image" className="cursor-pointer mx-auto lg:w-96 lg:h-auto" />
				<img src={CircleText} alt="You are enough image" className="hidden lg:w-28 lg:h-28 lg:object-contain lg:block lg:absolute lg:-top-5 lg:-right-5 xl:w-32 xl:h-32 xl:object-contain xl:right-16 animate-spin-slow" />
				<div className="xl:w-1/2 xl:py-14">
					<h2 className="w-[95%] text-4xl mx-auto font-playfairDisplay font-bold leading-[45px] xl:w-[80%] xl:mx-0 xl:text-5xl text-customBlack">
						How to attract your dream partner.
					</h2>
					<p className="w-[95%] mx-auto mt-7 mb-6 text-xl leading-8 tracking-wide text-customGray xl:mx-0 xl:text-2xl">
						Overcome the beliefs that block your ability to connect
						with high quality men and learn the real reason why
						smart, successful women are still single after 30.
					</p>
					<button className="w-full p-5 text-xl rounded-full font-bold bg-customOrange text-customWhite lg:hidden">
						Download Your Guide
					</button>
					<button className="hidden lg:block lg:p-5 lg:text-xl lg:rounded-full lg:font-bold lg:bg-customOrange lg:text-customWhite lg:w-80 xl:p-4 hover:bg-opacity-80">
						Download Your Guide Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Headline;
