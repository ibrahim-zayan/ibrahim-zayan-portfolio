export const portfolioData = {
  personalInfo: {
    fullName: 'Ibrahim Reda Ibrahim Zayan',
    shortName: 'Ibrahim Zayan',
    role: 'Junior Cloud Engineer',
    field: 'Cloud Computing',
    location: 'El Shorouk, Cairo, Egypt',
    phone: '01013125231',
    email: 'ibrahimzayan977@gmail.com',
    linkedin: 'https://linkedin.com/in/ibrahim-zayan',
    github: null,
    cvUrl: '/Ibrahim_Zayan_CV.pdf',
    profileImage: '/profile.jpg',

    status: {
      isAvailable: true,
      text: 'Focused on AWS Cloud Engineering & Infrastructure',
    },

    professionalSummary:
      'Junior Cloud Engineer focused on AWS cloud infrastructure, networking, Linux, and Infrastructure as Code with Terraform. I build practical cloud projects and hands-on labs to strengthen my understanding of cloud architecture, security, networking, and infrastructure automation.',

    education: {
      degree: 'B.Sc. in Communications and Computer Engineering',
      specialization: 'Computers and Control Specialization',
      institution: 'El Shorouk Academy',
      period: '2022 – 2027',
    },

    aboutParagraphs: [
      'I am building my foundation in Cloud Engineering through structured AWS and Linux training combined with hands-on practice. My learning focuses on cloud infrastructure, networking, security fundamentals, Infrastructure as Code with Terraform, and practical AWS architectures.',
      'I use hands-on labs and realistic project simulations to turn concepts into practical experience, and I continue expanding my skills across AWS services, Linux administration, networking, and cloud infrastructure design.',
    ],

    languages: [
      { name: 'Arabic', level: 'Native' },
      { name: 'English', level: 'Intermediate' },
    ],

    softSkills: [
      'Problem Solving',
      'Teamwork',
      'Time Management',
      'Communication',
    ],
  },

  corePillars: [
    {
      id: 'aws-cloud',
      title: 'AWS Cloud Fundamentals',
      description:
        'Hands-on experience with core AWS services including VPC, EC2, S3, ALB, Auto Scaling, RDS, and IAM through NTI training and cloud labs.',
      icon: 'Cloud',
      badge: 'AWS / Cloud Labs',
    },
    {
      id: 'iac-terraform',
      title: 'Infrastructure as Code',
      description:
        'Practical use of Terraform to define AWS infrastructure as code, organizing resources, writing reproducible configurations, and managing VPCs, subnets, and compute.',
      icon: 'Binary',
      badge: 'Terraform / IaC',
    },
    {
      id: 'networking',
      title: 'Networking & VPC Design',
      description:
        'Solid grasp of OSI & TCP/IP models, IPv4 subnetting (CIDR), DNS, DHCP, NAT, routing, and VPC network segmentation with public, private, and database subnets.',
      icon: 'Network',
      badge: 'TCP/IP & Subnetting',
    },
    {
      id: 'linux-os',
      title: 'Ubuntu Linux & Shell',
      description:
        'Linux administration essentials, command-line operations, file permissions, package management, and secure remote access via SSH based on Mahara Tech training.',
      icon: 'Terminal',
      badge: 'Ubuntu / CLI',
    },
  ],

  skillCategories: [
    {
      name: 'Cloud & AWS',
      skills: [
        'AWS Cloud Fundamentals',
        'IAM',
        'Amazon EC2',
        'Amazon S3',
        'Amazon VPC',
        'Application Load Balancer',
        'Auto Scaling',
        'Amazon RDS',
        'ElastiCache',
        'CloudFront',
        'Route 53',
        'NAT Gateway',
        'Security Groups',
        'AWS SSM',
        'AWS Management Console',
      ],
    },
    {
      name: 'Infrastructure as Code',
      skills: ['Terraform', 'Infrastructure as Code (IaC)'],
    },
    {
      name: 'Networking',
      skills: [
        'OSI Model',
        'TCP/IP Model',
        'IPv4 Addressing & Subnetting',
        'DNS',
        'DHCP',
        'ARP',
        'NAT',
        'Routing',
        'Switching',
        'TCP/UDP',
        'Ports',
        'Security Groups',
        'VPC Networking',
      ],
    },
    {
      name: 'Operating Systems',
      skills: ['Ubuntu Linux', 'Linux Command Line', 'SSH'],
    },
    {
      name: 'Virtualization',
      skills: [
        'VMware Workstation',
        'Virtual Machine Configuration & Management',
      ],
    },
    {
      name: 'Version Control',
      skills: ['Git', 'GitHub', 'Repository Management'],
    },
    {
      name: 'Databases',
      skills: ['SQL', 'Database Schema Design'],
    },
  ],

  featuredProject: {
    id: 'retailedge',
    title: 'RetailEdge',
    subtitle: 'AWS Three-Tier Cloud Migration Simulation',
    classification: 'Personal Project / Cloud Architecture Simulation',
    status: 'Completed',

    summary:
      'Designed and implemented a scalable AWS three-tier architecture for a simulated e-commerce platform, covering networking, security, compute, data, high availability, and Infrastructure as Code.',

    businessProblem: {
      scenario:
        'RetailEdge is a simulated mid-size e-commerce company operating on 3 bare-metal LAMP servers in a colocation environment. The existing setup suffered from scalability and availability issues during peak traffic. The goal was to design and implement a scalable, highly available AWS architecture.',

      stats: [
        {
          label: 'Monthly Active Users',
          value: '200,000',
        },
        {
          label: 'Black Friday Downtime',
          value: '2–3 hrs',
        },
        {
          label: 'Lost Sales',
          value: '~$80,000',
        },
        {
          label: 'Deployment Time',
          value: '4 hrs',
        },
        {
          label: 'Incidents / Qtr',
          value: '3',
        },
      ],
    },

    technologies: [
      'AWS VPC',
      'EC2',
      'ALB',
      'Auto Scaling',
      'RDS MySQL Multi-AZ',
      'ElastiCache Redis',
      'S3',
      'CloudFront',
      'Route 53',
      'IAM',
      'Security Groups',
      'NAT Gateway',
      'AWS SSM',
      'Terraform',
    ],

    networking: {
      vpc: '10.0.0.0/16',
      availabilityZones: 2,
      subnetCount: 6,
      natGateways: 2,
      securityGroups: 3,

      subnets: [
        {
          label: 'Public Subnet — AZ-A',
          cidr: '10.0.1.0/24',
          type: 'public',
        },
        {
          label: 'Public Subnet — AZ-B',
          cidr: '10.0.11.0/24',
          type: 'public',
        },
        {
          label: 'App Subnet — AZ-A',
          cidr: '10.0.2.0/24',
          type: 'private',
        },
        {
          label: 'App Subnet — AZ-B',
          cidr: '10.0.12.0/24',
          type: 'private',
        },
        {
          label: 'DB Subnet — AZ-A',
          cidr: '10.0.3.0/24',
          type: 'database',
        },
        {
          label: 'DB Subnet — AZ-B',
          cidr: '10.0.13.0/24',
          type: 'database',
        },
      ],

      securityGroups: [
  'ALB-SG — HTTPS :443 inbound from Internet',
  'App-SG — Port :8080 inbound from ALB-SG only',
  'DB-SG — MySQL :3306 inbound from App-SG only',
],
    },
    implementations: [
      {
        id: 'console',
        label: 'AWS Console',
        title: 'AWS Console Implementation',
        description:
          'Built and validated the three-tier AWS architecture through the AWS Management Console to gain hands-on understanding of each infrastructure component.',

        highlights: [
          'VPC with public, private application, and database subnets across 2 Availability Zones',
          'Application Load Balancer, Launch Template, and Auto Scaling Group',
          'RDS MySQL Multi-AZ and ElastiCache Redis for the data layer',
          'CloudFront, Route 53, IAM, SSM, and Security Groups',
        ],
      },

      {
        id: 'terraform',
        label: 'Terraform',
        title: 'Terraform Implementation',
        description:
          'Recreated the validated AWS architecture using Terraform to practice Infrastructure as Code, repeatability, and organized infrastructure provisioning.',

        highlights: [
          'AWS networking, subnets, route tables, NAT Gateways, and Security Groups',
          'EC2 Launch Template, ALB, Target Groups, and Auto Scaling',
          'RDS MySQL, ElastiCache Redis, and S3 resources',
          'Terraform variables, outputs, resource organization, plan, and apply workflow',
        ],
      },
    ],

    architectureHighlights: [
      {
        point:
          'Three-tier architecture separating web, application, and data layers',
        tag: 'Architecture',
      },
      {
        point: 'Multi-AZ design across 2 Availability Zones',
        tag: 'Resilience',
      },
      {
        point:
          'Public, private application, and private database subnet separation',
        tag: 'Networking',
      },
      {
        point:
          'Security Groups control traffic between each application tier',
        tag: 'Security',
      },
      {
        point:
          'Auto Scaling provides elastic compute capacity for changing demand',
        tag: 'Scalability',
      },
      {
        point:
          'RDS Multi-AZ provides database redundancy and automated failover',
        tag: 'Resilience',
      },
    ],
  },

  labProjects: [
    {
      id: 'aws-vpc-terraform',
      title: 'AWS VPC Infrastructure with Terraform',
      category: 'Infrastructure as Code',
      description:
        'Designed and provisioned AWS VPC infrastructure using Terraform, applying network segmentation with public and private subnets, route tables, and Security Groups.',
      technologies: [
        'Terraform',
        'Amazon VPC',
        'Subnets',
        'Route Tables',
        'Security Groups',
      ],
    },
    {
      id: 'private-ec2-nat-gateway',
      title: 'Private EC2 + NAT Gateway',
      category: 'Cloud Networking',
      description:
        'Configured EC2 instances in private subnets with outbound internet access through an AWS NAT Gateway, demonstrating private workload patterns and Security Group access control.',
      technologies: [
        'Amazon EC2',
        'NAT Gateway',
        'Elastic IP',
        'Private Subnets',
        'IAM',
      ],
    },
  ],

  certifications: [
    {
      id: 'ubuntu-linux-essentials',
      title: 'Ubuntu Linux Essentials',
      organization: 'Mahara Tech',
      credentialType: 'Verified Certification',
      icon: 'Terminal',
      whatILearned: [
        'Linux operating system fundamentals',
        'Ubuntu system administration basics',
        'Essential command-line skills',
        'File permissions, package management, and SSH',
      ],
    },
    {
      id: 'aws-cloud-fundamentals',
      title: 'AWS Cloud Fundamentals',
      organization: 'AWS Academy',
      credentialType: 'Verified Certification',
      icon: 'Award',
      whatILearned: [
        'Core AWS cloud concepts',
        'Overview of key AWS services',
        'Cloud security and shared responsibility',
        'Practical cloud fundamentals',
      ],
    },
    {
      id: 'cloud-essentials-nti',
      title: 'Cloud Essentials',
      organization: 'National Telecommunication Institute (NTI)',
      credentialType: 'Verified Certification',
      icon: 'BookOpen',
      whatILearned: [
        'Fundamentals of cloud computing',
        'Cloud infrastructure concepts',
        'Overview of AWS technologies',
        'Core cloud architecture principles',
      ],
    },
    {
      id: 'amazon-public-cloud-practitioner-nti',
      title: 'Amazon Public Cloud Practitioner',
      organization: 'National Telecommunication Institute (NTI)',
      credentialType: 'Verified Certification',
      icon: 'ShieldCheck',
      whatILearned: [
        'AWS Cloud practitioner fundamentals',
        'Core services: EC2, S3, VPC, IAM',
        'Cloud security basics',
        'Hands-on AWS labs',
      ],
    },
  ],

  coursesAndTraining: [
    {
      id: 'nti-aws-cloud-practitioner',
      title: 'AWS Cloud Practitioner Training',
      organization: 'National Telecommunication Institute (NTI)',
      type: 'Structured Training',
      topics: [
        'AWS Cloud fundamentals and global infrastructure',
        'Core services: EC2, S3, VPC, IAM',
        'Cloud security and shared responsibility model',
        'Cloud networking basics',
        'Hands-on guided AWS labs',
      ],
    },
    {
      id: 'nti-cloud-essentials',
      title: 'Cloud Essentials',
      organization: 'National Telecommunication Institute (NTI)',
      type: 'Structured Training',
      topics: [
        'Fundamentals of cloud computing',
        'Cloud infrastructure concepts',
        'Overview of AWS technologies and deployments',
      ],
    },
    {
      id: 'mahara-tech-linux',
      title: 'Ubuntu Linux Essentials',
      organization: 'Mahara Tech',
      type: 'Structured Training',
      topics: [
        'Linux operating system fundamentals',
        'Ubuntu system administration basics',
        'Essential command-line skills and navigation',
        'File permissions, package management, and SSH',
      ],
    },
    {
      id: 'networking-fundamentals-self-study',
      title: 'Networking Fundamentals',
      organization: 'Self-Study & Engineering Coursework',
      type: 'Self-Study',
      topics: [
        'IP addressing and subnetting (CIDR)',
        'DHCP, DNS, ARP, and NAT',
        'Routing and switching principles',
        'TCP/IP and OSI model fundamentals',
      ],
    },
    {
      id: 'terraform-self-study',
      title: 'Terraform — Infrastructure as Code',
      organization: 'Self-Study',
      type: 'Self-Study',
      topics: [
        'Terraform configuration and HCL syntax',
        'AWS provider and resource definitions',
        'Variables, outputs, and resource references',
        'Infrastructure planning with terraform plan',
        'Practical AWS infrastructure provisioning',
      ],
    },
  ],
};