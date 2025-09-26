const sureshPortrait = "/assets/img/Suresh_Portrait.jpg";
const nowshadPortrait = "/assets/img/Nowshad_Portrait.jpg";

interface AdvisoryBoardType {
	id: number;
	img: string;
	name: string;
	designation: string;
	company: string;
	linkedin: string;
	bio: string;
	expertise: string[];
}

const advisory_board_data: AdvisoryBoardType[] = [
	{
		id: 1,
		img: sureshPortrait,
		name: "Suresh Kumar",
		designation: "Senior Technology Advisor",
		company: "Tech Innovations Inc.",
		linkedin: "https://www.linkedin.com/in/suresh-kumar",
		bio: "With over 20 years of experience in technology leadership and digital transformation, Suresh brings strategic insights to help organizations navigate complex technological challenges and drive innovation.",
		expertise: ["Business Intelligence & Data", "IT Budgeting", "IT Strategy", "IT System Management", "Project Management"]
	},
	
{
		id: 2,
		img: nowshadPortrait,
		name: "Nowshad Hameed",
		designation: "Advisor",
		company: "Exctel Engineering LLC",
		linkedin: "https://linkedin.com/in/nowshazd",
		bio: "Nowshad Hameed, CEO of Exctel Engineering LLC, specializes in AI, cloud technologies, and digital transformation, bringing over 30 years of experience in ICT, industrial automation, and strategic technology leadership.",

		expertise: ["Artificial Intelligence (AI)", "Cloud Computing", "Blockchain", "Digital Transformation Strategy", "ICT & Industrial Automation"]
	}


];

export default advisory_board_data;
