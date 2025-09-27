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
  designation: "Chief Executive Office",
  company: "Exctel Engineering Pte Ltd",
  linkedin: "https://linkedin.com/in/nowshazd",
  bio: "Nowshad Hameed, CEO of Exctel Engineering Pte Ltd, brings nearly 30 years of experience in project management and expertise across telecommunications, safety, security, and building management systems. ",
  expertise: [
	"Project Management",
    "Industrial Automation",
    "Telecommunications Systems",
    "Safety & Security Systems", 
    
  ]
}


];

export default advisory_board_data;
