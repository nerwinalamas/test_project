import { useState, useRef, useEffect } from "react";
import MaskGroup from "../assets/images/mask_group_121.jpg";
import { advicesData } from "../data";
import MinusCircleLine from "../assets/svgs/minus_circle_line.svg";
import PlusCircleLine from "../assets/svgs/plus_circle_line.svg";

const Advices = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const [height, setHeight] = useState({});
	const contentRefs = useRef([]);

	const handleClick = (index) => {
		if (openIndex === index) {
			setOpenIndex(null);
		} else {
			setOpenIndex(index);
			setHeight({ [index]: contentRefs.current[index].scrollHeight });
		}
	};

	useEffect(() => {
		if (openIndex !== null) {
			setHeight({ [openIndex]: contentRefs.current[openIndex].scrollHeight });
		}
	}, [openIndex]);

	return (
		<div className="flex flex-col gap-14 md:w-full lg:w-full lg:flex-row-reverse lg:justify-evenly">
			<img src={MaskGroup} alt="Mask Group 121" className="lg:w-96 lg:h-96 lg:rounded-md" />
			<div className="flex flex-col xl:w-[50%]">
				{advicesData.map((data, index) => (
					<div key={index} className="border-b-2 border-customGray">
						<div
							className="flex justify-between px-5 py-4 lg:py-5 cursor-pointer"
							onClick={() => handleClick(index)}
						>
							<h3 className="w-60 md:w-80 px-1 text-xl font-playfairDisplay font-bold leading-[35px] text-customDarkerBlack lg:w-96">
								{data.title}
							</h3>
							{openIndex === index ? (
								<img
									src={MinusCircleLine}
									alt="Minus Circle Line Icon"
									className="cursor-pointer"
								/>
							) : (
								<img
									src={PlusCircleLine}
									alt="Plus Circle Line Icon"
									className="cursor-pointer"
								/>
							)}
						</div>
						<div
							className={`transition-all duration-700 ease-in-out overflow-hidden`}
							style={{ maxHeight: openIndex === index ? `${height[index]}px` : "0" }}
						>
							<div ref={(el) => (contentRefs.current[index] = el)} className="p-5">
								{data.description}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Advices;