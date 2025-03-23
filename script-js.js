// Data storage (would normally be a server-side database)
const users = [
    { username: 'TheBlackWolf', password: 'theblackgame', role: 'admin', category: 'master', online: true }
];

const chats = {
    general: [
        { user: 'TheBlackWolf', role: 'admin', message: 'Welcome to the general chat! This is where all members can communicate.' }
    ],
    bugbounty: [
        { user: 'TheBlackWolf', role: 'admin', message: 'Welcome to the Bug Bounty Team chat!' }
    ],
    pentester: [
        { user: 'TheBlackWolf', role: 'admin', message: 'Welcome to the Pentester Team chat!' }
    ],
    hacker: [
        { user: 'TheBlackWolf', role: 'admin', message: 'Welcome to the Hacker Team chat!' }
    ]
};

// Test questions for each category
const testQuestions = {
    bugbounty: [
        { question: "What is a bug bounty program?", options: ["A software debugging tool", "A reward program for finding and reporting bugs", "A type of malware", "A hacking competition"], correctAnswer: 1 },
        { question: "What is responsible disclosure?", options: ["Hiding vulnerabilities from the public", "Reporting vulnerabilities directly to affected organizations before public disclosure", "Publicly announcing vulnerabilities without notifying the organization", "Selling vulnerabilities to the highest bidder"], correctAnswer: 1 },
        { question: "What is CSRF?", options: ["Cross-Site Request Forgery", "Client-Side Request Filter", "Cross-Site Response Function", "Client-Server Request Format"], correctAnswer: 0 },
        { question: "What is a zero-day vulnerability?", options: ["A vulnerability that has been patched for 0 days", "A vulnerability that was found on January 1st", "A vulnerability that is known to the vendor for 0 days", "A vulnerability that is unknown to the vendor and has no patch available"], correctAnswer: 3 },
        { question: "What does XSS stand for?", options: ["Cross-Site Scripting", "Extended Security System", "XML Security Service", "X-Server System"], correctAnswer: 0 },
        { question: "What is the primary goal of a bug bounty hunter?", options: ["To hack into systems for personal gain", "To identify and report security vulnerabilities", "To develop new security tools", "To create malware"], correctAnswer: 1 },
        { question: "What is a CVE?", options: ["Common Vulnerability Exposure", "Critical Vulnerability Error", "Common Vulnerability and Exposures", "Computer Virus Engine"], correctAnswer: 2 },
        { question: "What type of attack involves injecting SQL code?", options: ["XSS", "CSRF", "SQL Injection", "Buffer Overflow"], correctAnswer: 2 },
        { question: "What is privilege escalation?", options: ["Gaining higher access levels than authorized", "Increasing the pay for bug bounties", "Accelerating user permissions", "Promoting ethical hackers"], correctAnswer: 0 },
        { question: "What is sanitization in the context of web security?", options: ["Cleaning your keyboard", "Removing viruses from a system", "Processing user input to prevent code injection", "Deleting malicious files"], correctAnswer: 2 },
        { question: "What does API stand for?", options: ["Advanced Programming Interface", "Application Programming Interface", "Automated Program Integration", "Application Protocol Interface"], correctAnswer: 1 },
        { question: "What is a 'proof of concept' in bug bounty hunting?", options: ["A job application", "A demonstration that proves a vulnerability is real", "A security certification", "A training program"], correctAnswer: 1 },
        { question: "What is the OWASP Top 10?", options: ["The top 10 hackers in the world", "A list of the most critical web application security risks", "The 10 most secure websites", "The top 10 antivirus programs"], correctAnswer: 1 },
        { question: "What is a 'blind SQL injection'?", options: ["SQL injection performed without looking at the screen", "SQL injection that returns no visible feedback", "SQL injection that causes blindness", "SQL injection against a blind database administrator"], correctAnswer: 1 },
        { question: "What is 'scope' in a bug bounty program?", options: ["The range of payment amounts", "The time period for the program", "The systems and vulnerabilities that are eligible for rewards", "The geographic location for testers"], correctAnswer: 2 },
        { question: "What is 'rate limiting' used for?", options: ["Controlling download speeds", "Limiting battery consumption", "Preventing brute force attacks", "Reducing data costs"], correctAnswer: 2 },
        { question: "What is a web application firewall (WAF)?", options: ["A physical firewall for server rooms", "A filter that monitors HTTP traffic", "A program that prevents users from accessing the web", "A tool for testing web applications"], correctAnswer: 1 },
        { question: "What is 'reconnaissance' in security testing?", options: ["Rebuilding a server after an attack", "The process of gathering information about a target", "Acknowledging a security breach", "Recovering deleted data"], correctAnswer: 1 },
        { question: "What is the difference between black box and white box testing?", options: ["Black box testing is illegal, white box is legal", "Black box involves no knowledge of the system, white box has full access and knowledge", "Black box is more expensive than white box", "Black box is for networks, white box is for applications"], correctAnswer: 1 },
        { question: "What is a security vulnerability that allows attackers to include files from a remote server?", options: ["Remote Code Execution", "Cross-Site Scripting", "Remote File Inclusion", "Path Traversal"], correctAnswer: 2 }
    ],
    pentester: [
        { question: "What is penetration testing?", options: ["Testing network speeds", "Authorized simulated attacks to find vulnerabilities", "Physical testing of server hardware", "Testing user knowledge of security practices"], correctAnswer: 1 },
        { question: "What is the primary difference between penetration testing and vulnerability assessment?", options: ["They are the same thing", "Penetration testing actively exploits vulnerabilities, vulnerability assessment only identifies them", "Penetration testing is always automated, vulnerability assessment is manual", "Penetration testing is illegal, vulnerability assessment is legal"], correctAnswer: 1 },
        { question: "What is a 'pivot' in the context of penetration testing?", options: ["A type of network switch", "Using a compromised system to attack other systems", "A type of social engineering attack", "Changing testing methodology mid-assessment"], correctAnswer: 1 },
        { question: "What is the purpose of the reconnaissance phase in penetration testing?", options: ["To exploit vulnerabilities", "To fix security issues", "To gather information about the target", "To document findings"], correctAnswer: 2 },
        { question: "What tool would typically be used for port scanning?", options: ["Wireshark", "Metasploit", "Nmap", "Burp Suite"], correctAnswer: 2 },
        { question: "What is an 'engagement letter' in penetration testing?", options: ["A letter sent to users warning of an upcoming test", "A document outlining the scope and limitations of the test", "A phishing email used during testing", "A letter explaining findings after the test"], correctAnswer: 1 },
        { question: "What is the purpose of social engineering in a penetration test?", options: ["To make friends with employees", "To test physical security", "To test human vulnerability to manipulation", "To improve workplace morale"], correctAnswer: 2 },
        { question: "What is the purpose of the 'exploitation' phase in penetration testing?", options: ["To document vulnerabilities", "To actively prove vulnerabilities by exploiting them", "To scan for open ports", "To repair identified vulnerabilities"], correctAnswer: 1 },
        { question: "What is 'lateral movement' in penetration testing?", options: ["Physical movement through a facility", "Moving from one compromised system to another within the network", "Changing testing tools mid-assessment", "Redirecting network traffic"], correctAnswer: 1 },
        { question: "What framework provides a structured methodology for penetration testing?", options: ["NIST", "OWASP", "PTES (Penetration Testing Execution Standard)", "ISO 27001"], correctAnswer: 2 },
        { question: "What is a 'reverse shell'?", options: ["A shell that connects back to the attacker", "A shell that reverses commands", "A backdoor in a seashell", "A shell that undoes commands"], correctAnswer: 0 },
        { question: "Which of these is NOT typically a phase of penetration testing?", options: ["Reconnaissance", "Scanning", "Exploitation", "Remediation"], correctAnswer: 3 },
        { question: "What is 'persistence' in the context of penetration testing?", options: ["Continuing testing despite obstacles", "Maintaining access to a compromised system", "Repeatedly testing the same vulnerability", "Long-term contract for ongoing testing"], correctAnswer: 1 },
        { question: "What is the purpose of a 'null scan' in penetration testing?", options: ["Scanning for null values in databases", "A TCP scan with no flags set", "Testing for null pointer exceptions", "A scan that returns no results"], correctAnswer: 1 },
        { question: "What is 'privilege escalation'?", options: ["Increasing the scope of a penetration test", "Gaining higher-level access rights than intended", "Elevating the priority of a security issue", "Promoting junior pentesters"], correctAnswer: 1 },
        { question: "What is an 'air-gapped' system?", options: ["A system with air cooling", "A system physically isolated from unsecured networks", "A system with gaps in security", "A system running on airplane Wi-Fi"], correctAnswer: 1 },
        { question: "What is a 'pentest report'?", options: ["A log of test activities", "A comprehensive document detailing findings and recommendations", "A certification of security", "A list of tools used during testing"], correctAnswer: 1 },
        { question: "What does 'defense in depth' refer to?", options: ["Deep underground security facilities", "Multiple layers of security controls", "Defending against in-depth knowledge attacks", "Advanced defensive techniques"], correctAnswer: 1 },
        { question: "What is the difference between black-box, white-box, and gray-box testing?", options: ["They are different types of testing tools", "They refer to the amount of information given to the tester about the target", "They refer to different programming languages", "They refer to different types of networks"], correctAnswer: 1 },
        { question: "What is the goal of a penetration test?", options: ["To cause damage to systems", "To improve security by identifying and addressing vulnerabilities", "To train employees on security practices", "To comply with regulations only"], correctAnswer: 1 }
    ],
    hacker: [
        { question: "What is the primary difference between white hat, black hat, and gray hat hackers?", options: ["Their skill levels", "Their clothing preferences", "Their ethical stance and intentions", "Their programming languages of choice"], correctAnswer: 2 },
        { question: "What is 'ethical hacking'?", options: ["Hacking that is always legal", "Authorized hacking to improve security", "Hacking government systems", "Hacking only during business hours"], correctAnswer: 1 },
        { question: "What is a 'zero-day exploit'?", options: ["An exploit that takes 0 days to develop", "An exploit for a vulnerability that has been known for 0 days", "An exploit that works instantly", "An exploit that works on day 0 of a month"], correctAnswer: 1 },
        { question: "What is 'packet sniffing'?", options: ["Opening mailed packages", "Intercepting and analyzing network traffic", "Testing network speeds", "Sniffing for electronic components"], correctAnswer: 1 },
        { question: "What is a 'man-in-the-middle' attack?", options: ["An attack from inside a company", "An attack by a middle manager", "An attack where the attacker secretly relays and possibly alters communications", "An attack on middle-tier servers"], correctAnswer: 2 },
        { question: "What is 'social engineering'?", options: ["Building social networks", "Creating social media platforms", "Manipulating people into revealing confidential information", "Engineering social situations"], correctAnswer: 2 },
        { question: "What is a 'botnet'?", options: ["A network of automated chat bots", "A network of compromised computers controlled remotely", "A network of robots", "A type of fishing net"], correctAnswer: 1 },
        { question: "What is 'phishing'?", options: ["A fishing technique used by hackers", "Attempting to acquire sensitive information by masquerading as a trustworthy entity", "A type of network scanning", "A protocol for secure communications"], correctAnswer: 1 },
        { question: "What is a 'rainbow table'?", options: ["A colorful database layout", "A table showing network traffic by type", "A precomputed table for reversing cryptographic hash functions", "A diversity inclusion program for hackers"], correctAnswer: 2 },
        { question: "What is 'footprinting' in hacking?", options: ["Tracking physical movements", "Collecting information about a target's systems", "Measuring server room dimensions", "Creating copies of footprints"], correctAnswer: 1 },
        { question: "What is a 'backdoor' in security terms?", options: ["A secondary entrance to a building", "A method of bypassing authentication", "The back side of a server", "A backup system"], correctAnswer: 1 },
        { question: "What is 'cryptography'?", options: ["The study of secret writing and codes", "The study of ancient tombs", "The study of cryptocurrency", "The study of hidden networks"], correctAnswer: 0 },
        { question: "What is 'session hijacking'?", options: ["Taking over a classroom session", "Exploitation of a valid computer session", "Creating multiple sessions simultaneously", "Ending a session prematurely"], correctAnswer: 1 },
        { question: "What is a 'honeypot' in cybersecurity?", options: ["A sweet reward for finding bugs", "A trap set to detect or deflect unauthorized access attempts", "A pot of honey used to attract insects", "A fund for security researchers"], correctAnswer: 1 },
        { question: "What is the purpose of a proxy server in hacking?", options: ["To speed up internet connections", "To bypass content filters", "To hide the origin of traffic", "All of the above"], correctAnswer: 3 },
        { question: "What is 'enumeration' in the context of hacking?", options: ["Counting the number of successful attacks", "The process of extracting user names, machine names, network resources, shares, and services", "Rating the severity of vulnerabilities", "Listing all possible attack vectors"], correctAnswer: 1 },
        { question: "What is a 'logic bomb'?", options: ["A device that destroys electronics", "Code that executes malicious functions when specific conditions are met", "A tool for testing logical thinking", "An explosion caused by logical fallacies"], correctAnswer: 1 },
        { question: "What is 'war driving'?", options: ["Driving military vehicles", "Driving while hacking", "Searching for Wi-Fi networks while driving", "A driving game for hackers"], correctAnswer: 2 },
        { question: "What is the purpose of 'Kali Linux'?", options: ["General purpose Linux distribution", "Linux distribution designed for digital forensics and penetration testing", "Server operating system", "Desktop operating system with enhanced security"], correctAnswer: 1 },
        { question: "What is 'steganography'?", options: ["The study of dinosaur fossils", "The practice of hiding messages or information within other non-secret text or data", "A type of encryption", "A method of scanning networks"], correctAnswer: 1 }
    ]
};

// Current user state
let currentUser = null;
let selectedCategory = null;

// DOM Elements
const landingPage = document.getElementById('landingPage');
const testPage = document.getElementById('testPage');
const resultPage = document.getElementById('resultPage');
const loginPage = document.getElementById('loginPage');
const memberPage = document.getElementById('memberPage');
const adminLoginPage = document.getElementById('adminLoginPage');
const adminPage = document.getElementById('adminPage');

// Button Event Listeners
document.getElementById('bugBountyBtn').addEventListener('click', () => startTest('bugbounty'));
document.getElementById('pentesterBtn').addEventListener('click', () => startTest('pentester'));
document.getElementById('hackerBtn').addEventListener('click', () => startTest('hacker'));
document.getElementById('submitTestBtn').addEventListener('click', submitTest);
document.getElementById('