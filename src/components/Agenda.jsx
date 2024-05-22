import { useState } from "react";
import { agendasData } from "../data";

const Agenda = () => {
	const [showTab, setShowTab] = useState(1);

	return (
		<div className="flex flex-col items-center gap-14 font-playfairDisplay md:w-96 lg:w-full lg:flex-row lg:justify-between lg:items-start text-customDarkerBlack">
			<h1 className="w-48 h-24 text-4xl text-center font-bold lg:text-5xl lg:w-72 lg:text-start lg:mx-auto lg:leading-[1.13]">
				What’s on the agenda
			</h1>
			{/* FOR SMALLER SCREENS ONLY */}
			<div className="w-[349px] rounded-3xl p-7 flex flex-col gap-5 items-center bg-customLightGray lg:hidden">
				<p
					className={`w-56 text-3xl font-bold p-2 text-center cursor-pointer ${
						showTab === 1 ? "rounded-full bg-customCream" : ""
					}`}
					onClick={() => setShowTab(1)}
				>
					Day 1
				</p>
				<p
					className={`w-56 text-3xl font-bold p-2 text-center cursor-pointer ${
						showTab === 2 ? "rounded-full bg-customCream" : ""
					}`}
					onClick={() => setShowTab(2)}
				>
					Day 2
				</p>
				<p
					className={`w-56 text-3xl font-bold p-2 text-center cursor-pointer ${
						showTab === 3 ? "rounded-full bg-customCream" : ""
					}`}
					onClick={() => setShowTab(3)}
				>
					Day 3
				</p>
			</div>

			<div className="lg:w-[55%]">
				{/* FOR LARGE SCREEN AND UP */}
				<div className="hidden lg:w-full lg:rounded-full lg:p-3 lg:flex lg:gap-5 lg:items-center lg:bg-customLightGray">
					<p
						className={`w-56 text-3xl font-bold p-2 text-center cursor-pointer ${
							showTab === 1 ? "rounded-full bg-customCream" : ""
						}`}
						onClick={() => setShowTab(1)}
					>
						Day 1
					</p>
					<p
						className={`w-56 text-3xl font-bold p-2 text-center cursor-pointer ${
							showTab === 2 ? "rounded-full bg-customCream" : ""
						}`}
						onClick={() => setShowTab(2)}
					>
						Day 2
					</p>
					<p
						className={`w-56 text-3xl font-bold p-2 text-center cursor-pointer ${
							showTab === 3 ? "rounded-full bg-customCream" : ""
						}`}
						onClick={() => setShowTab(3)}
					>
						Day 3
					</p>
				</div>
				{/* DAY 1 */}
				<div
					className={`flex flex-col gap-12 items-center lg:items-start ${
						showTab === 1 ? "block" : "hidden"
					}`}
				>
					<h2 className="w-80 text-3xl font-bold text-customDarkerBlack lg:w-full lg:mt-20">
						Your REVEAL Day! (aka The Silver Bullet)
					</h2>
					<p className="w-[312px] text-lg tracking-wide text-customBlack font-oxygen md:w-full lg:text-xl xl:text-base">
						Identify your personal 10% blindspot (everyone has one)
						that sends quality men running for the hills and clear
						limiting beliefs that keep you stuck in the scarcity
						mindset (so you can attract a quality man who’s words
						and actions actually match).
						<br />
						<br />
						By the end of the day, you’ll know EXACTLY why you’re
						single and what next steps are required to get you
						closer to magnetizing high-caliber men and creating the
						life you love.
					</p>
					<div className="w-80 lg:pl-14 lg:w-full">
						<ul className="relative border-s-4 border-customOrange border-opacity-20 font-oxygen">
							{agendasData.map((data, index) => (
								<li className="mb-10 ms-11" key={index}>
									<span className="absolute flex items-center justify-center w-9 h-9 bg-customOrangeVariant text-customWhite rounded-full -start-5">
										<p className="text-base font-bold">
											{data.step}
										</p>
									</span>
									<div className="flex flex-col gap-8">
										<h3 className="text-xl font-bold font-playfairDisplay text-customDarkerBlack lg:text-2xl">
											{data.title}
										</h3>
										<p className="w-64 text-base tracking-wide text-customBlack lg:w-full">
											{data.description}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* DAY 2 */}
				<div
					className={`flex flex-col gap-5 ${
						showTab === 2 ? "block" : "hidden"
					}`}
				>
					<h2 className="text-3xl font-bold text-customDarkerBlack text-center lg:mt-20">
						Day 2
					</h2>
					<p className="w-[312px] text-lg tracking-wide text-customBlack font-oxygen lg:w-full">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolore quia a aliquam deleniti numquam, ut assumenda,
						sed perferendis animi, minima nam asperiores quidem.
						Nemo, nesciunt? Laboriosam eaque, voluptate, aut tempore
						labore sequi possimus velit cupiditate porro, nesciunt
						nulla quasi non voluptates atque? Asperiores accusamus
						dolore a obcaecati cumque, numquam quidem?
					</p>
				</div>

				{/* DAY 3 */}
				<div
					className={`flex flex-col gap-5 ${
						showTab === 3 ? "block" : "hidden"
					}`}
				>
					<h2 className="text-3xl font-bold text-customDarkerBlack text-center lg:mt-20">
						Day 3
					</h2>
					<p className="w-[312px] text-lg tracking-wide text-customBlack font-oxygen lg:w-full">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Dolore quia a aliquam deleniti numquam, ut assumenda,
						sed perferendis animi, minima nam asperiores quidem.
						Nemo, nesciunt? Laboriosam eaque, voluptate, aut tempore
						labore sequi possimus velit cupiditate porro, nesciunt
						nulla quasi non voluptates atque? Asperiores accusamus
						dolore a obcaecati cumque, numquam quidem?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Agenda;
