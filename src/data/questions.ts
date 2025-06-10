import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of NetSuite's Role-Based Access Control system?",
    options: [
      "To manage user passwords and authentication",
      "To control what data and features users can access based on their assigned roles",
      "To track user login activities and generate reports",
      "To automatically assign users to different subsidiaries"
    ],
    correctAnswer: 1,
    explanation: "Role-Based Access Control (RBAC) in NetSuite is designed to control user access to data and functionality based on their assigned roles, ensuring users only see and can modify information relevant to their job responsibilities.",
    category: "User Management",
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "Which of the following is NOT a standard NetSuite record type?",
    options: [
      "Customer",
      "Item",
      "Transaction",
      "Template"
    ],
    correctAnswer: 3,
    explanation: "Template is not a standard NetSuite record type. The standard record types include Customer, Vendor, Item, Employee, Transaction, and many others, but Template is not among them.",
    category: "Data Management",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the maximum number of custom fields that can be created on a single record type in NetSuite?",
    options: [
      "100",
      "200",
      "300",
      "Unlimited"
    ],
    correctAnswer: 2,
    explanation: "NetSuite allows up to 300 custom fields per record type. This limit helps maintain system performance while providing significant customization flexibility.",
    category: "Customization",
    difficulty: "Hard"
  },
  {
    id: 4,
    question: "Which SuiteScript type is used for user interface customization and client-side validation?",
    options: [
      "User Event Script",
      "Client Script",
      "Scheduled Script",
      "RESTlet"
    ],
    correctAnswer: 1,
    explanation: "Client Scripts run in the user's browser and are used for user interface customization, field validation, and client-side business logic. They execute when pages load, fields change, or forms are submitted.",
    category: "SuiteScript",
    difficulty: "Medium"
  },
  {
    id: 5,
    question: "What is the purpose of NetSuite's Saved Search feature?",
    options: [
      "To create custom reports and filter data based on specific criteria",
      "To save user login credentials securely",
      "To backup database information automatically",
      "To create shortcuts to frequently accessed records"
    ],
    correctAnswer: 0,
    explanation: "Saved Searches in NetSuite allow users to create custom reports, filter data based on specific criteria, and save these search configurations for reuse. They are fundamental for reporting and data analysis.",
    category: "Reports & Analytics",
    difficulty: "Easy"
  },
  {
    id: 6,
    question: "Which permission level allows a user to view, create, and edit records but NOT delete them?",
    options: [
      "View",
      "Create",
      "Edit",
      "Full"
    ],
    correctAnswer: 2,
    explanation: "The 'Edit' permission level in NetSuite allows users to view existing records, create new records, and modify existing records, but does not include the ability to delete records.",
    category: "Security",
    difficulty: "Medium"
  },
  {
    id: 7,
    question: "What is the primary function of NetSuite's Workflow feature?",
    options: [
      "To create custom user interfaces",
      "To automate business processes based on specified conditions",
      "To generate financial reports",
      "To manage user access permissions"
    ],
    correctAnswer: 1,
    explanation: "NetSuite Workflows are used to automate business processes by executing actions based on specified conditions and triggers, helping streamline operations and ensure consistency.",
    category: "Automation",
    difficulty: "Medium"
  },
  {
    id: 8,
    question: "In NetSuite, what does CSV import primarily require for successful data import?",
    options: [
      "Advanced SuiteScript knowledge",
      "Properly formatted data with correct field mappings",
      "Administrator role access only",
      "Third-party integration tools"
    ],
    correctAnswer: 1,
    explanation: "Successful CSV imports in NetSuite require properly formatted data with correct field mappings to ensure data integrity and successful import processing.",
    category: "Data Management",
    difficulty: "Easy"
  },
  {
    id: 9,
    question: "Which NetSuite feature allows you to create custom transaction forms?",
    options: [
      "Customization > Forms > Entry Forms",
      "Setup > Company > General Preferences",
      "Lists > Accounting > Accounts",
      "Reports > Financial > Balance Sheet"
    ],
    correctAnswer: 0,
    explanation: "Custom transaction forms in NetSuite are created through Customization > Forms > Entry Forms, where you can modify the layout, fields, and behavior of transaction entry forms.",
    category: "Customization",
    difficulty: "Medium"
  },
  {
    id: 10,
    question: "What is the maximum file size for a single file upload in NetSuite?",
    options: [
      "10 MB",
      "50 MB",
      "100 MB",
      "500 MB"
    ],
    correctAnswer: 2,
    explanation: "NetSuite allows file uploads up to 100 MB for a single file. This limit ensures system performance while accommodating most business document needs.",
    category: "System Limits",
    difficulty: "Hard"
  },
  {
    id: 11,
    question: "Which of the following is the correct way to reference a custom field in SuiteScript?",
    options: [
      "custbody_fieldname",
      "custom_fieldname",
      "cf_fieldname",
      "fieldname_custom"
    ],
    correctAnswer: 0,
    explanation: "In SuiteScript, custom fields are referenced using the format 'custbody_fieldname' for body fields, 'custentity_fieldname' for entity fields, etc., with the appropriate prefix followed by the field name.",
    category: "SuiteScript",
    difficulty: "Medium"
  },
  {
    id: 12,
    question: "What is the purpose of NetSuite's Mass Update feature?",
    options: [
      "To update user passwords in bulk",
      "To modify multiple records simultaneously based on search criteria",
      "To backup database records",
      "To create duplicate records automatically"
    ],
    correctAnswer: 1,
    explanation: "Mass Update in NetSuite allows administrators to modify multiple records simultaneously based on search criteria, making bulk data management efficient and consistent.",
    category: "Data Management",
    difficulty: "Easy"
  },
  {
    id: 13,
    question: "Which NetSuite edition provides the most comprehensive functionality?",
    options: [
      "NetSuite Limited Edition",
      "NetSuite Mid-Market Edition",
      "NetSuite Enterprise Edition",
      "NetSuite SuiteSuccess"
    ],
    correctAnswer: 2,
    explanation: "NetSuite Enterprise Edition provides the most comprehensive functionality, including advanced features for larger organizations with complex business requirements.",
    category: "Platform Knowledge",
    difficulty: "Easy"
  },
  {
    id: 14,
    question: "What is the recommended approach for testing customizations in NetSuite?",
    options: [
      "Test directly in the production environment",
      "Use the Sandbox environment for testing before deploying to production",
      "Test on a separate NetSuite instance",
      "No testing is required for minor customizations"
    ],
    correctAnswer: 1,
    explanation: "The recommended approach is to use NetSuite's Sandbox environment for testing customizations before deploying them to the production environment to ensure stability and data integrity.",
    category: "Best Practices",
    difficulty: "Medium"
  },
  {
    id: 15,
    question: "Which report type in NetSuite provides real-time data and cannot be scheduled?",
    options: [
      "Saved Search",
      "Financial Report",
      "Dashboard Portlet",
      "Analytics Workbook"
    ],
    correctAnswer: 2,
    explanation: "Dashboard Portlets provide real-time data views and cannot be scheduled like other reports. They refresh automatically when the dashboard is accessed.",
    category: "Reports & Analytics",
    difficulty: "Hard"
  },
  {
    id: 16,
    question: "What is the primary purpose of NetSuite's SuiteFlow (Workflow) feature?",
    options: [
      "To create custom dashboards",
      "To automate business processes and approvals",
      "To manage user permissions",
      "To generate financial statements"
    ],
    correctAnswer: 1,
    explanation: "SuiteFlow (Workflow) is NetSuite's business process automation tool that allows you to create automated workflows for approvals, notifications, and other business processes based on specific triggers and conditions.",
    category: "Automation",
    difficulty: "Medium"
  },
  {
    id: 17,
    question: "Which of the following is required to enable Multi-Location Inventory in NetSuite?",
    options: [
      "Advanced Inventory Management feature",
      "Multiple subsidiaries setup",
      "Warehouse Management System integration",
      "Third-party logistics provider"
    ],
    correctAnswer: 0,
    explanation: "Multi-Location Inventory requires the Advanced Inventory Management feature to be enabled in NetSuite. This feature allows tracking inventory across multiple locations.",
    category: "Inventory Management",
    difficulty: "Medium"
  },
  {
    id: 18,
    question: "What is the maximum number of subsidiaries that can be created in NetSuite?",
    options: [
      "50",
      "100",
      "200",
      "Unlimited"
    ],
    correctAnswer: 3,
    explanation: "NetSuite does not have a hard limit on the number of subsidiaries that can be created. The practical limit depends on your specific NetSuite edition and licensing agreement.",
    category: "Multi-Subsidiary",
    difficulty: "Hard"
  },
  {
    id: 19,
    question: "Which SuiteScript type is best suited for processing large amounts of data?",
    options: [
      "Client Script",
      "User Event Script",
      "Scheduled Script",
      "Suitelet"
    ],
    correctAnswer: 2,
    explanation: "Scheduled Scripts are designed for processing large amounts of data as they run in the background without user interaction and have higher governance limits than other script types.",
    category: "SuiteScript",
    difficulty: "Medium"
  },
  {
    id: 20,
    question: "What is the purpose of NetSuite's SuiteCommerce platform?",
    options: [
      "Internal employee portal",
      "B2B and B2C e-commerce website creation",
      "Financial reporting dashboard",
      "Customer service ticketing system"
    ],
    correctAnswer: 1,
    explanation: "SuiteCommerce is NetSuite's e-commerce platform that enables businesses to create B2B and B2C websites integrated with their NetSuite ERP system.",
    category: "E-commerce",
    difficulty: "Easy"
  },
  {
    id: 21,
    question: "Which feature allows you to track changes made to records in NetSuite?",
    options: [
      "System Notes",
      "Audit Trail",
      "Change Log",
      "Record History"
    ],
    correctAnswer: 0,
    explanation: "System Notes in NetSuite automatically track changes made to records, showing what was changed, when, and by whom. This provides an audit trail for record modifications.",
    category: "Security",
    difficulty: "Easy"
  },
  {
    id: 22,
    question: "What is the primary difference between a Custom Record and a Custom Field?",
    options: [
      "Custom Records store data, Custom Fields modify existing records",
      "Custom Records are for reporting, Custom Fields are for data entry",
      "Custom Records require scripting, Custom Fields do not",
      "There is no difference between them"
    ],
    correctAnswer: 0,
    explanation: "Custom Records create entirely new data structures to store information, while Custom Fields add additional data points to existing NetSuite record types.",
    category: "Customization",
    difficulty: "Medium"
  },
  {
    id: 23,
    question: "Which NetSuite feature is used to create automated email notifications?",
    options: [
      "Email Templates",
      "Workflow Actions",
      "Scheduled Scripts",
      "Mass Email"
    ],
    correctAnswer: 1,
    explanation: "Workflow Actions in NetSuite can be configured to send automated email notifications based on specific triggers and conditions in business processes.",
    category: "Automation",
    difficulty: "Medium"
  },
  {
    id: 24,
    question: "What is the maximum number of lines that can be imported in a single CSV import?",
    options: [
      "1,000",
      "5,000",
      "10,000",
      "25,000"
    ],
    correctAnswer: 2,
    explanation: "NetSuite allows up to 10,000 lines in a single CSV import. For larger imports, the data should be split into multiple files or use SuiteScript for processing.",
    category: "Data Management",
    difficulty: "Hard"
  },
  {
    id: 25,
    question: "Which permission is required to access the SuiteScript Debugger?",
    options: [
      "Administrator",
      "Developer",
      "Script Debugger",
      "Full Access"
    ],
    correctAnswer: 2,
    explanation: "The 'Script Debugger' permission is specifically required to access and use the SuiteScript Debugger tool in NetSuite for troubleshooting scripts.",
    category: "SuiteScript",
    difficulty: "Medium"
  },
  {
    id: 26,
    question: "What is the purpose of NetSuite's SuiteAnalytics Workbook?",
    options: [
      "Creating custom forms",
      "Advanced data analysis and visualization",
      "Managing user permissions",
      "Automating business processes"
    ],
    correctAnswer: 1,
    explanation: "SuiteAnalytics Workbook is NetSuite's advanced analytics tool that allows users to create sophisticated reports, perform data analysis, and create visualizations using drag-and-drop functionality.",
    category: "Reports & Analytics",
    difficulty: "Medium"
  },
  {
    id: 27,
    question: "Which of the following is a valid NetSuite integration method?",
    options: [
      "RESTlets",
      "Web Services (SOAP)",
      "SuiteTalk",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "NetSuite supports multiple integration methods including RESTlets (REST-based), Web Services (SOAP-based), and SuiteTalk (NetSuite's web services platform). All are valid integration approaches.",
    category: "Integration",
    difficulty: "Medium"
  },
  {
    id: 28,
    question: "What is the recommended frequency for NetSuite system backups?",
    options: [
      "Weekly",
      "Daily",
      "NetSuite handles backups automatically",
      "Monthly"
    ],
    correctAnswer: 2,
    explanation: "NetSuite automatically handles system backups as part of their cloud infrastructure. Customers don't need to manually perform system backups, though data exports for additional security are recommended.",
    category: "System Administration",
    difficulty: "Easy"
  },
  {
    id: 29,
    question: "Which feature allows you to restrict access to specific IP addresses in NetSuite?",
    options: [
      "Role Restrictions",
      "IP Address Rules",
      "Access Control Lists",
      "Network Security Settings"
    ],
    correctAnswer: 1,
    explanation: "IP Address Rules in NetSuite allow administrators to restrict user access to specific IP addresses or IP address ranges for enhanced security.",
    category: "Security",
    difficulty: "Medium"
  },
  {
    id: 30,
    question: "What is the primary purpose of NetSuite's SuiteBuilder platform?",
    options: [
      "Creating mobile applications",
      "Customizing NetSuite without coding",
      "Building external websites",
      "Managing third-party integrations"
    ],
    correctAnswer: 1,
    explanation: "SuiteBuilder is NetSuite's point-and-click customization platform that allows users to customize NetSuite functionality without requiring programming knowledge.",
    category: "Customization",
    difficulty: "Easy"
  },
  {
    id: 31,
    question: "Which script type executes before a record is loaded in the user interface?",
    options: [
      "beforeLoad",
      "beforeSubmit",
      "afterSubmit",
      "pageInit"
    ],
    correctAnswer: 0,
    explanation: "The beforeLoad event in User Event Scripts executes before a record is loaded in the user interface, allowing you to modify the form or set field values before the user sees the record.",
    category: "SuiteScript",
    difficulty: "Hard"
  },
  {
    id: 32,
    question: "What is the maximum number of dashboard portlets that can be displayed on a single dashboard?",
    options: [
      "6",
      "9",
      "12",
      "15"
    ],
    correctAnswer: 2,
    explanation: "NetSuite allows up to 12 portlets to be displayed on a single dashboard, arranged in a 3x4 grid layout for optimal viewing and organization.",
    category: "User Interface",
    difficulty: "Hard"
  },
  {
    id: 33,
    question: "Which NetSuite feature is used to manage recurring billing and subscriptions?",
    options: [
      "Advanced Billing",
      "SuiteSubscriptions",
      "Recurring Revenue Management",
      "Subscription Billing"
    ],
    correctAnswer: 0,
    explanation: "Advanced Billing is NetSuite's feature for managing complex billing scenarios including recurring billing, subscriptions, usage-based billing, and milestone billing.",
    category: "Billing & Revenue",
    difficulty: "Medium"
  },
  {
    id: 34,
    question: "What is the purpose of NetSuite's Global Search functionality?",
    options: [
      "Searching across all records and transactions",
      "Finding specific saved searches",
      "Locating system settings",
      "Searching help documentation"
    ],
    correctAnswer: 0,
    explanation: "Global Search allows users to search across all records, transactions, and data in NetSuite from a single search box, providing quick access to information throughout the system.",
    category: "User Interface",
    difficulty: "Easy"
  },
  {
    id: 35,
    question: "Which permission level is required to delete records in NetSuite?",
    options: [
      "Edit",
      "Full",
      "Delete",
      "Administrator"
    ],
    correctAnswer: 1,
    explanation: "The 'Full' permission level is required to delete records in NetSuite. This level includes View, Create, Edit, and Delete permissions for the specified record type.",
    category: "Security",
    difficulty: "Medium"
  },
  {
    id: 36,
    question: "What is the primary benefit of using NetSuite's SuiteSuccess methodology?",
    options: [
      "Faster implementation with pre-configured best practices",
      "Lower licensing costs",
      "Enhanced security features",
      "Unlimited customization options"
    ],
    correctAnswer: 0,
    explanation: "SuiteSuccess provides industry-specific pre-configured solutions and best practices that enable faster NetSuite implementations with proven business processes.",
    category: "Implementation",
    difficulty: "Medium"
  },
  {
    id: 37,
    question: "Which feature allows you to create conditional formatting in NetSuite reports?",
    options: [
      "Report Styles",
      "Conditional Formatting",
      "Format Rules",
      "Display Options"
    ],
    correctAnswer: 1,
    explanation: "Conditional Formatting in NetSuite reports allows you to apply different formatting (colors, fonts, etc.) to data based on specific conditions or criteria.",
    category: "Reports & Analytics",
    difficulty: "Medium"
  },
  {
    id: 38,
    question: "What is the maximum number of approval levels in a NetSuite workflow?",
    options: [
      "5",
      "10",
      "15",
      "20"
    ],
    correctAnswer: 1,
    explanation: "NetSuite workflows support up to 10 approval levels, allowing for complex approval hierarchies in business processes.",
    category: "Automation",
    difficulty: "Hard"
  },
  {
    id: 39,
    question: "Which NetSuite feature is used to manage project accounting and resource allocation?",
    options: [
      "Project Management",
      "SuiteProjects",
      "Resource Planning",
      "Professional Services Automation (PSA)"
    ],
    correctAnswer: 1,
    explanation: "SuiteProjects is NetSuite's comprehensive project management solution that includes project accounting, resource allocation, time tracking, and project profitability analysis.",
    category: "Project Management",
    difficulty: "Medium"
  },
  {
    id: 40,
    question: "What is the purpose of NetSuite's SuiteSign feature?",
    options: [
      "Digital signature collection",
      "Document encryption",
      "User authentication",
      "Electronic invoicing"
    ],
    correctAnswer: 0,
    explanation: "SuiteSign is NetSuite's electronic signature solution that allows businesses to collect legally binding digital signatures on documents directly within NetSuite.",
    category: "Document Management",
    difficulty: "Easy"
  },
  {
    id: 41,
    question: "Which NetSuite module is primarily used for managing customer support cases?",
    options: [
      "SuiteSupport",
      "Case Management",
      "Customer Service",
      "SuiteService"
    ],
    correctAnswer: 1,
    explanation: "Case Management in NetSuite is the primary module for tracking and managing customer support cases, including escalation procedures and resolution tracking.",
    category: "Customer Service",
    difficulty: "Easy"
  },
  {
    id: 42,
    question: "What is the maximum number of custom lists that can be created in NetSuite?",
    options: [
      "100",
      "500",
      "1,000",
      "Unlimited"
    ],
    correctAnswer: 3,
    explanation: "NetSuite does not impose a specific limit on the number of custom lists that can be created, though practical limits may apply based on system performance and account configuration.",
    category: "Customization",
    difficulty: "Hard"
  },
  {
    id: 43,
    question: "Which feature in NetSuite allows you to create time-based automatic actions?",
    options: [
      "Scheduled Scripts",
      "Time-based Workflows",
      "Automated Processes",
      "Both A and B"
    ],
    correctAnswer: 3,
    explanation: "Both Scheduled Scripts and Time-based Workflows can create automatic actions based on time triggers. Scheduled Scripts run at specified intervals, while Time-based Workflows execute based on date/time conditions.",
    category: "Automation",
    difficulty: "Medium"
  },
  {
    id: 44,
    question: "What is the purpose of NetSuite's Bundle feature?",
    options: [
      "To group related customizations for deployment",
      "To create product bundles for sales",
      "To bundle multiple transactions together",
      "To package reports for distribution"
    ],
    correctAnswer: 0,
    explanation: "Bundles in NetSuite allow you to group related customizations (scripts, custom fields, records, etc.) together for easy deployment between accounts or environments.",
    category: "Customization",
    difficulty: "Medium"
  },
  {
    id: 45,
    question: "Which permission is required to create and modify saved searches?",
    options: [
      "Reports",
      "Lists",
      "Custom Records",
      "Saved Searches"
    ],
    correctAnswer: 0,
    explanation: "The 'Reports' permission is required to create and modify saved searches in NetSuite, as saved searches are considered a type of report.",
    category: "Security",
    difficulty: "Medium"
  },
  {
    id: 46,
    question: "What is the maximum number of characters allowed in a NetSuite custom field label?",
    options: [
      "40",
      "60",
      "80",
      "100"
    ],
    correctAnswer: 1,
    explanation: "NetSuite allows up to 60 characters for custom field labels. This limit ensures proper display across different screen sizes and interfaces.",
    category: "Customization",
    difficulty: "Hard"
  },
  {
    id: 47,
    question: "Which NetSuite feature allows you to create custom PDF templates?",
    options: [
      "PDF Builder",
      "Advanced PDF/HTML Templates",
      "Document Generator",
      "Template Designer"
    ],
    correctAnswer: 1,
    explanation: "Advanced PDF/HTML Templates in NetSuite allow you to create custom PDF documents using HTML, CSS, and FreeMarker template language for invoices, statements, and other business documents.",
    category: "Document Management",
    difficulty: "Medium"
  },
  {
    id: 48,
    question: "What is the primary purpose of NetSuite's Territory Management feature?",
    options: [
      "Managing geographical sales territories",
      "Organizing warehouse locations",
      "Defining user access regions",
      "Creating location hierarchies"
    ],
    correctAnswer: 0,
    explanation: "Territory Management in NetSuite is used to define and manage geographical sales territories, assign sales representatives to territories, and track performance by territory.",
    category: "Sales Management",
    difficulty: "Easy"
  },
  {
    id: 49,
    question: "Which script governance limit applies to Client Scripts in NetSuite?",
    options: [
      "10,000 units",
      "1,000 units",
      "No governance limits",
      "5,000 units"
    ],
    correctAnswer: 1,
    explanation: "Client Scripts in NetSuite have a governance limit of 1,000 units. This limit helps ensure responsive user interfaces by preventing scripts from consuming too many resources.",
    category: "SuiteScript",
    difficulty: "Hard"
  },
  {
    id: 50,
    question: "What is the purpose of NetSuite's Demand Planning feature?",
    options: [
      "Forecasting future inventory needs",
      "Planning employee schedules",
      "Managing project timelines",
      "Scheduling system maintenance"
    ],
    correctAnswer: 0,
    explanation: "Demand Planning in NetSuite helps businesses forecast future inventory needs based on historical data, seasonality, and other factors to optimize inventory levels and reduce stockouts.",
    category: "Inventory Management",
    difficulty: "Medium"
  },
  {
    id: 51,
    question: "Which NetSuite feature allows you to create custom approval hierarchies?",
    options: [
      "Approval Routing",
      "Workflow States",
      "Custom Approvals",
      "Approval Chains"
    ],
    correctAnswer: 0,
    explanation: "Approval Routing in NetSuite allows you to create custom approval hierarchies based on various criteria such as amount, department, or employee hierarchy.",
    category: "Automation",
    difficulty: "Medium"
  },
  {
    id: 52,
    question: "What is the maximum number of workflow states that can be created in a single workflow?",
    options: [
      "50",
      "100",
      "200",
      "Unlimited"
    ],
    correctAnswer: 1,
    explanation: "NetSuite allows up to 100 workflow states in a single workflow, providing flexibility for complex business processes while maintaining system performance.",
    category: "Automation",
    difficulty: "Hard"
  },
  {
    id: 53,
    question: "Which NetSuite feature is used to manage vendor relationships and procurement?",
    options: [
      "Vendor Management",
      "SuiteProcurement",
      "Purchase Management",
      "Supplier Portal"
    ],
    correctAnswer: 1,
    explanation: "SuiteProcurement is NetSuite's comprehensive procurement solution that manages vendor relationships, purchase requisitions, approvals, and procurement analytics.",
    category: "Procurement",
    difficulty: "Easy"
  },
  {
    id: 54,
    question: "What is the purpose of NetSuite's Intercompany Management feature?",
    options: [
      "Managing transactions between subsidiaries",
      "Handling external company relationships",
      "Creating company hierarchies",
      "Managing multi-currency transactions"
    ],
    correctAnswer: 0,
    explanation: "Intercompany Management in NetSuite facilitates and automates transactions between different subsidiaries within the same organization, ensuring proper elimination and consolidation.",
    category: "Multi-Subsidiary",
    difficulty: "Medium"
  },
  {
    id: 55,
    question: "Which permission level allows users to view records but not modify them?",
    options: [
      "None",
      "View",
      "Read-Only",
      "Limited"
    ],
    correctAnswer: 1,
    explanation: "The 'View' permission level in NetSuite allows users to see and access records but prevents them from making any modifications to the data.",
    category: "Security",
    difficulty: "Easy"
  },
  {
    id: 56,
    question: "What is the maximum number of custom transaction types that can be created in NetSuite?",
    options: [
      "10",
      "25",
      "50",
      "100"
    ],
    correctAnswer: 2,
    explanation: "NetSuite allows up to 50 custom transaction types to be created, providing flexibility for businesses with unique transaction requirements.",
    category: "Customization",
    difficulty: "Hard"
  },
  {
    id: 57,
    question: "Which NetSuite feature allows you to create custom KPI dashboards?",
    options: [
      "Dashboard Builder",
      "KPI Manager",
      "SuiteAnalytics",
      "Performance Dashboards"
    ],
    correctAnswer: 2,
    explanation: "SuiteAnalytics in NetSuite provides tools to create custom KPI dashboards with real-time data visualization and performance metrics tracking.",
    category: "Reports & Analytics",
    difficulty: "Medium"
  },
  {
    id: 58,
    question: "What is the primary purpose of NetSuite's Revenue Recognition feature?",
    options: [
      "Tracking sales performance",
      "Managing subscription billing",
      "Automating revenue recognition according to accounting standards",
      "Calculating sales commissions"
    ],
    correctAnswer: 2,
    explanation: "Revenue Recognition in NetSuite automates the process of recognizing revenue according to accounting standards like ASC 606 and IFRS 15, ensuring compliance and accuracy.",
    category: "Financial Management",
    difficulty: "Medium"
  },
  {
    id: 59,
    question: "Which NetSuite module is used for managing manufacturing operations?",
    options: [
      "Manufacturing",
      "SuiteManufacturing",
      "Production Management",
      "Work Order Management"
    ],
    correctAnswer: 3,
    explanation: "Work Order Management in NetSuite is the primary module for managing manufacturing operations, including work orders, routing, bill of materials, and production scheduling.",
    category: "Manufacturing",
    difficulty: "Easy"
  },
  {
    id: 60,
    question: "What is the maximum number of custom segments that can be added to the Chart of Accounts in NetSuite?",
    options: [
      "3",
      "5",
      "7",
      "10"
    ],
    correctAnswer: 2,
    explanation: "NetSuite allows up to 7 custom segments to be added to the Chart of Accounts, providing flexibility for complex financial reporting and analysis requirements.",
    category: "Financial Management",
    difficulty: "Hard"
  }
];