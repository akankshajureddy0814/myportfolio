export const skills = [
    {
      icon: '☕',
      title: 'Languages',
      tags: ['Java 8/11/17', 'JavaScript ES6+', 'TypeScript', 'Python', 'SQL', 'PL/SQL'],
    },
    {
      icon: '⚛️',
      title: 'Frontend',
      tags: [
        'React.js', 'Angular', 'Redux Toolkit', 'RxJS', 'React Hooks',
        'NgRx Store', 'Material-UI', 'Tailwind CSS', 'Bootstrap',
        'HTML5/CSS3', 'jQuery', 'JSP/JSTL',
      ],
    },
    {
      icon: '🔧',
      title: 'Backend',
      tags: [
        'Spring Boot', 'Spring MVC', 'Spring Core (IOC/AOP)', 'Spring Security',
        'Spring Cloud Gateway', 'Spring Data JPA', 'Spring Batch', 'Hibernate',
        'Node.js', 'Express.js', 'Apache CXF', 'JAX-RS',
      ],
    },
    {
      icon: '📨',
      title: 'Microservices & Messaging',
      tags: [
        'Microservices Architecture', 'Apache Kafka', 'RabbitMQ', 'IBM MQ',
        'Spring JMS', 'WebSockets', 'MQTT', 'REST', 'GraphQL', 'gRPC',
      ],
    },
    {
      icon: '🗄️',
      title: 'Databases',
      tags: [
        'PostgreSQL', 'MySQL', 'Oracle 19c', 'MongoDB', 'Redis',
        'Elasticsearch', 'Snowflake', 'Google Cloud Spanner', 'DB2',
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud & Infrastructure',
      tags: [
        'AWS EC2/S3/Lambda', 'AWS EKS/ECS', 'AWS API Gateway', 'AWS CloudWatch/RDS',
        'Azure AKS/DevOps', 'Azure Service Bus', 'Azure Monitor/App Insights',
        'GCP GKE/Cloud Run', 'GCP Pub/Sub/Stackdriver',
      ],
    },
    {
      icon: '🚀',
      title: 'DevOps & CI/CD',
      tags: [
        'Docker', 'Kubernetes', 'Helm', 'Jenkins', 'GitHub Actions',
        'GitLab CI/CD', 'Azure DevOps', 'Terraform', 'AWS CloudFormation',
        'Maven', 'Gradle',
      ],
    },
    {
      icon: '🧪',
      title: 'Testing & QA',
      tags: [
        'JUnit', 'Mockito', 'Cypress', 'Jest', 'React Testing Library',
        'Selenium', 'TestNG', 'Cucumber', 'SonarQube',
      ],
    },
    {
      icon: '📊',
      title: 'Monitoring & Logging',
      tags: [
        'Prometheus', 'Grafana', 'ELK Stack', 'Splunk',
        'AWS CloudWatch', 'Azure Monitor', 'OpenTelemetry', 'Log4J',
      ],
    },
    {
      icon: '🔒',
      title: 'Security',
      tags: ['OAuth2.0', 'JWT', 'Spring Security', 'RBAC', 'HIPAA Compliance', 'PCI-DSS', 'AWS IAM'],
    },
    {
      icon: '🖥️',
      title: 'Application Servers',
      tags: ['Apache Tomcat', 'JBoss', 'WebSphere V9.0', 'Red Hat OpenShift'],
    },
    {
      icon: '🤖',
      title: 'AI/ML & Data',
      tags: ['TensorFlow', 'PyTorch', 'LangChain', 'pgvector', 'Apache Spark', 'Kafka Streams', 'Parquet'],
    },
    {
      icon: '🛠️',
      title: 'Version Control & Tools',
      tags: [
        'Git', 'GitHub', 'GitLab', 'Bitbucket', 'SVN',
        'JIRA', 'Confluence', 'Postman', 'Swagger', 'IntelliJ IDEA',
      ],
    },
  ];
  
  export const experiences = [
    {
      role: 'Java Full Stack Developer',
      date: 'Sept 2024 – Present',
      client: 'New Jersey Department of Children & Families, Trenton, NJ',
      points: [
        'Designed and developed enterprise web applications on <strong>WebSphere Application Server V9.0</strong>, improving process efficiency by 30% across state systems.',
        'Optimized <strong>Oracle 19c SQL queries</strong>, reducing execution time by 40%; performed JVM tuning to increase throughput by 20% across 500+ concurrent users.',
        'Built <strong>RESTful APIs</strong> using Spring Boot and Spring Cloud Gateway, bridging legacy on-premises systems with modern cloud-hosted microservices.',
        'Implemented <strong>Spring Security with OAuth2 and JWT</strong>, enforcing role-based access control and securing sensitive government data.',
        'Deployed containerized microservices on <strong>Azure Kubernetes Service (AKS)</strong> with Azure DevOps CI/CD pipelines and Azure Monitor for full observability.',
        'Utilized <strong>Azure Service Bus</strong> for reliable asynchronous messaging between legacy and modernized microservices.',
        'Provisioned infrastructure using <strong>Terraform and AWS CloudFormation</strong> for reproducible environment setups.',
        'Led migration to <strong>Atlassian platforms</strong> (Jira, Bitbucket, Confluence), reducing merge conflicts by 25%.',
        'Implemented <strong>SonarQube</strong> and automated regression pipelines using JUnit and Mockito, increasing release stability by 35%.',
        'Monitored application logs using <strong>Splunk</strong>, resolving 95% of production issues within SLA targets.',
      ],
      tags: ['WebSphere V9.0', 'Oracle 19c', 'Spring Boot', 'Spring Security', 'OAuth2/JWT', 'Azure AKS', 'Azure DevOps', 'Azure Service Bus', 'React.js', 'Angular', 'Terraform', 'SonarQube'],
    },
    {
      role: 'Java Full Stack Developer',
      date: 'May 2023 – Aug 2024',
      client: 'Cleveland Clinic, Remote',
      points: [
        'Designed and developed <strong>Spring Boot microservices</strong> for real-time patient management and appointment scheduling with high availability.',
        'Built <strong>RESTful and GraphQL APIs</strong> with reusable schema fragments for Angular (NgRx Store) frontends, reducing redundant API calls.',
        'Developed responsive frontends using <strong>React.js, TypeScript, Redux Toolkit, and React Hooks</strong> for patient portals and care management modules.',
        'Integrated <strong>Apache Kafka</strong> for real-time notifications and <strong>IBM MQ</strong> for guaranteed-delivery messaging between hospital services.',
        'Implemented <strong>WebSockets</strong> for live updates on patient status, bed availability, and clinician notifications.',
        'Deployed on <strong>AWS EKS using Helm charts</strong> with HPA and Cluster Autoscaler for cost-efficient scaling.',
        'Automated deployments via <strong>Azure DevOps CI/CD</strong> with Azure Container Registry on Azure Kubernetes Service (AKS).',
        'Monitored with <strong>Prometheus, Grafana, and AWS CloudWatch</strong>; built pipelines with Jenkins and GitHub Actions.',
        'Reduced post-release defects by 45% through <strong>JUnit, Mockito, and Cypress</strong> test automation.',
      ],
      tags: ['Spring Boot', 'GraphQL', 'React.js', 'Angular/NgRx', 'React Hooks', 'AWS EKS', 'Azure AKS', 'Helm', 'IBM MQ', 'Kafka', 'WebSockets', 'Prometheus', 'Grafana', 'HIPAA'],
    },
    {
      role: 'Java Full Stack Developer',
      date: 'Dec 2020 – Jul 2022',
      client: 'Citi Bank, Hyderabad, India',
      points: [
        'Designed customer onboarding, KYC, and loan origination workflows using <strong>Java 11, Spring Boot, and microservices</strong>, ensuring PCI-DSS compliance.',
        'Modernized legacy systems by refactoring <strong>SOAP-based services into RESTful microservices</strong>, reducing technical debt.',
        'Engineered <strong>Spring Batch</strong> pipelines for high-volume financial transaction processing and automated reporting.',
        'Built responsive UIs using <strong>Angular and React.js</strong>, aligned with WCAG 2.1 accessibility standards.',
        'Implemented messaging using <strong>Apache Kafka and RabbitMQ</strong> for event-driven transaction notifications.',
        'Containerized with <strong>Docker</strong> and deployed on <strong>Azure Kubernetes Service (AKS)</strong> with Azure DevOps CI/CD.',
        'Implemented monitoring using <strong>Azure Monitor, Application Insights, and ELK Stack</strong>.',
        'Ensured code quality using <strong>JUnit, Mockito, TDD, and SonarQube</strong>.',
      ],
      tags: ['Spring Boot', 'Spring Batch', 'Apache Kafka', 'RabbitMQ', 'Angular', 'React.js', 'Azure AKS', 'ELK Stack', 'Oracle', 'PostgreSQL', 'PCI-DSS', 'SonarQube'],
    },
    {
      role: 'Java Full Stack Developer',
      date: 'Jul 2019 – Nov 2020',
      client: 'Accenture, Hyderabad, India',
      points: [
        'Built responsive web applications using <strong>ReactJS, HTML5, CSS3</strong> with reusable components and Flux architecture; integrated SSO using OAuth.',
        'Developed Python-based applications using <strong>Django and Flask</strong> for backend business logic and data processing.',
        'Managed large datasets using <strong>MongoDB</strong> and configured <strong>Elasticsearch</strong> clusters for full-text search.',
        'Deployed on <strong>AWS EC2</strong> and configured <strong>AWS RDS (PostgreSQL)</strong>; monitored with Splunk and AWS CloudWatch.',
        'Maintained <strong>Jenkins</strong> pipelines and integrated <strong>AWS CodeBuild</strong> for cloud-native CI/CD using Maven.',
        'Automated testing using <strong>Jest, React Testing Library, Selenium with TestNG and Cucumber</strong>.',
        'Implemented <strong>MQTT</strong> protocol for lightweight real-time messaging between distributed components.',
      ],
      tags: ['React.js', 'Spring Boot', 'Django/Flask', 'AWS EC2/RDS', 'Elasticsearch', 'MongoDB', 'Jest', 'React Testing Library', 'Selenium', 'TestNG', 'Cucumber', 'MQTT'],
    },
    {
      role: 'Software Developer',
      date: 'Apr 2018 – Jun 2019',
      client: 'Symbiosis, Hyderabad, India',
      points: [
        'Built web interfaces using <strong>Spring MVC, JSP, JSTL, jQuery</strong>, progressing to React.js and Spring Boot full-stack development.',
        'Configured <strong>Hibernate</strong> ORM for MySQL and designed schemas using PostgreSQL; managed legacy data with <strong>DB2</strong>.',
        'Implemented <strong>JMS message listeners</strong> and configured <strong>RabbitMQ</strong> for asynchronous messaging.',
        'Integrated <strong>MongoDB</strong> with Spring Data and containerized services with <strong>Docker</strong>.',
        'Deployed on <strong>JBoss Application Server</strong>, monitored with Log4J, and automated CI/CD using Jenkins and Maven.',
        'Wrote unit and integration tests using <strong>JUnit and Mockito</strong>; managed code using Git in Agile/Scrum.',
      ],
      tags: ['Spring Boot', 'Spring MVC', 'React.js', 'RabbitMQ', 'Spring JMS', 'Docker', 'PostgreSQL', 'MongoDB', 'DB2', 'JBoss', 'Log4J', 'Hibernate'],
    },
  ];
  
  export const education = [
    {
      degree: 'Master of Science, Computer Science',
      school: 'University of Missouri – Kansas City, USA',
    },
    {
      degree: 'Bachelor of Technology, Information Technology',
      school: 'Bhoj Reddy Engineering College for Women, India',
    },
  ];