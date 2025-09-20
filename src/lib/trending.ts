export type SubCourse = {
	level: 'Beginner' | 'Intermediate' | 'Advanced';
	link: string;
};

export type TrendingCourse = {
	id: string;
	title: string;
	description: string;
	price: number;
	duration: string;
	students: number;
	rating: number;
	category: string;
	thumbnail: string;
	instructor: string;
	subCourses: SubCourse[];
};

export const trendingCourses: TrendingCourse[] = [
	{
		id: 'c1',
		title: 'Complete Web Development Bootcamp',
		description:
			'Full-stack path: HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB with deployment and 3 capstone projects.',
		price: 18500,
		duration: '40 hours',
		students: 15420,
		rating: 4.8,
		category: 'Web',
		thumbnail:
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1280&q=80&auto=format&fit=crop',
		instructor: 'John Smith',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c1?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c1?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c1?level=advanced' }
		]
	},
	{
		id: 'c2',
		title: 'Docker & Kubernetes Mastery',
		description:
			'Docker fundamentals to Kubernetes production ops: images, Compose, Helm, clusters, autoscaling, and CI/CD deployment.',
		price: 18500,
		duration: '25 hours',
		students: 8930,
		rating: 4.7,
		category: 'DevOps',
		thumbnail:
			'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Sarah Johnson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c2?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c2?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c2?level=advanced' }
		]
	},
	{
		id: 'c3',
		title: 'Machine Learning with Python',
		description:
			'End-to-end ML: data prep, feature engineering, model training with scikit-learn, evaluation, and model serving basics.',
		price: 18500,
		duration: '50 hours',
		students: 12350,
		rating: 4.9,
		category: 'ML',
		thumbnail:
			'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Dr. Michael Chen',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c3?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c3?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c3?level=advanced' }
		]
	},
	{
		id: 'c4',
		title: 'Ethical Hacking & Penetration Testing',
		description:
			'Cybersecurity essentials: networking, OWASP Top 10, reconnaissance, exploitation, and reporting with practical labs.',
		price: 18500,
		duration: '35 hours',
		students: 6720,
		rating: 4.6,
		category: 'Cybersec',
		thumbnail:
			'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Alex Rodriguez',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c4?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c4?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c4?level=advanced' }
		]
	},
	{
		id: 'c5',
		title: 'React Advanced Patterns',
		description:
			'Advanced React: custom hooks, context patterns, compound components, concurrency, and performance profiling.',
		price: 18500,
		duration: '20 hours',
		students: 9840,
		rating: 4.8,
		category: 'Web',
		thumbnail:
			'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Emily Davis',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c5?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c5?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c5?level=advanced' }
		]
	},
	{
		id: 'c6',
		title: 'CI/CD Pipeline Automation',
		description:
			'CI/CD in practice: build, test, and deploy with GitHub Actions/Jenkins, artifacts, environments, and rollout strategies.',
		price: 18500,
		duration: '30 hours',
		students: 7250,
		rating: 4.7,
		category: 'DevOps',
		thumbnail:
			'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=1280&q=80&auto=format&fit=crop',
		instructor: 'David Wilson',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c6?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c6?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c6?level=advanced' }
		]
	},
	{
		id: 'c7',
		title: 'Next.js Full-Stack Development',
		description:
			'Production-grade Next.js: routing, data fetching, auth, Prisma ORM, PostgreSQL, and Vercel deployment.',
		price: 18500,
		duration: '28 hours',
		students: 8120,
		rating: 4.8,
		category: 'Web',
		thumbnail:
			'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Priya Kapoor',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c7?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c7?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c7?level=advanced' }
		]
	},
	{
		id: 'c8',
		title: 'Python for Data Analysis',
		description:
			'Data analysis with Python: Pandas, NumPy, data cleaning, joins, aggregations, and visualizations with Matplotlib/Seaborn.',
		price: 18500,
		duration: '32 hours',
		students: 11050,
		rating: 4.7,
		category: 'Data',
		thumbnail:
			'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Aisha Khan',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c8?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c8?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c8?level=advanced' }
		]
	},
	{
		id: 'c9',
		title: 'AWS Cloud Practitioner to Solutions Architect',
		description:
			'AWS journey: core services (EC2, S3, IAM), VPC, serverless (Lambda), and architecture patterns aligned to certifications.',
		price: 18500,
		duration: '45 hours',
		students: 9650,
		rating: 4.8,
		category: 'Cloud',
		thumbnail:
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1280&q=80&auto=format&fit=crop',
		instructor: 'Marco Rossi',
		subCourses: [
			{ level: 'Beginner', link: '/courses/c9?level=beginner' },
			{ level: 'Intermediate', link: '/courses/c9?level=intermediate' },
			{ level: 'Advanced', link: '/courses/c9?level=advanced' }
		]
	}
];


