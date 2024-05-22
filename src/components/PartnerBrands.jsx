import { partnerBrandsData } from "../data";

const PartnerBrands = () => {
	return (
		<div className="my-24 flex flex-wrap gap-x-8 gap-y-5 lg:w-full lg:gap-20 lg:flex-nowrap lg:justify-center xl:gap-32">
			{partnerBrandsData.map((data, index) => (
				<img title={data.name} src={data.icon} alt={data.name} key={index} className="cursor-pointer object-contain h-20 w-32 max-w-max mx-auto xl:h-24 xl:w-36" />
			))}
		</div>
	);
};

export default PartnerBrands;
