import portfolio_img_1 from "@/assets/img/project_successfull_1.jpg";
import portfolio_img_2 from "@/assets/img/project_successfull_2.jpg";
import portfolio_img_3 from "@/assets/img/project_successfull_3.jpg";
import portfolio_img_4 from "@/assets/img/new_work_img.png";
import portfolio_img_5 from "@/assets/img/project_successfull_5.jpg";
import { StaticImageData } from "next/image";


interface PortfolioDataType {
	id: number;
	img: StaticImageData;
	title: string;
	des: string;
}

const portfolio_data: PortfolioDataType[] = [
	{
		id: 1,
		img: portfolio_img_1,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 2,
		img: portfolio_img_2,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 3,
		img: portfolio_img_3,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 4,
		img: portfolio_img_4,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},
	{
		id: 5,
		img: portfolio_img_5,
		title: "Project Task Management",
		des: "Digital Services / App Design",
	},	 

];

export default portfolio_data;
