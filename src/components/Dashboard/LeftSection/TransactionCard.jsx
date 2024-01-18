import { categoriesTransaction } from "@/utilities/categoriesTransaction";

const TransactionCard = ({ data }) => {
	const findCategory = category => {
		return categoriesTransaction.find(item => item.title === category);
	};

	const categoryData = findCategory(data.category);

	return (
		<div className="w-full h-10 flex flex-row gap-3 px-2 justify-center items-center">
			<div className="w-10 h-full bg-color-dark text-color-gray flex justify-center items-center rounded-md">{categoryData && <div>{categoryData.icon}</div>}</div>
			<div className="w-full flex flex-row justify-between items-center">
				<div className="w-full h-full py-2 flex flex-col justify-between items-start">
                    <h4 className="text-color-white font-medium text-md">{data.title}</h4>
                    <span className="text-color-gray font-normal text-sm">{data.time}</span>
                </div>
				<div className="w-full h-full py-2 flex flex-row justify-end items-center">
					<span className="text-color-white font-semibold text-md">{data.price}</span>
				</div>
			</div>
		</div>
	);
};

export default TransactionCard;
