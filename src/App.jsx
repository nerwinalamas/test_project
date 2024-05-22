import Headline from "./components/Headline";
import Achieve from "./components/Achieve";
import Founder from "./components/Founder";
import PartnerBrands from "./components/PartnerBrands";
import Advices from "./components/Advices";
import FeedBacks from "./components/FeedBacks";
import Agenda from "./components/Agenda";
import Footer from "./components/Footer";

const App = () => {
	return (
		<div className="w-screen flex flex-col items-center justify-center gap-5 p-5 relative font-oxygen text-customBlack max-w-full lg:max-w-full lg:px-20 xl:max-w-screen-xl xl:mx-auto xl:overflow-x-hidden">
			<div className="w-[90%] h-[329px] bg-customOrange bg-opacity-15 rounded-b-full absolute -top-0 inset-x-auto md:h-[358px] lg:right-20 lg:w-[350px] lg:h-[500px] xl:right-40 xl:w-[390px] xl:h-[630px]"></div>
			<Headline />
			<Achieve />
			<Founder />
			<PartnerBrands />
			<Advices />
			<FeedBacks />
			<Agenda />
			<Footer />
		</div>
	);
};

export default App;
