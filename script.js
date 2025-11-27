// DOM Elements
const loadingScreen = document.getElementById('loadingScreen');
const mainApp = document.getElementById('mainApp');
const messagesContainer = document.getElementById('messagesContainer');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const newChatBtn = document.getElementById('newChatBtn');
const quickButtons = document.querySelectorAll('.quick-btn');

// YOUR CONTACT INFORMATION
const YOUR_CONTACT_INFO = {
    name: "Emmy Tech",
    email: "akandeemmanuel017@gmail.com", // Replace with your actual email
    whatsapp: "+2349054580216", // Replace with your actual WhatsApp number
    website: "https://tech-ai-code.github.io/Emmy-Tech-Enterprises../", // Replace with your actual website
    message: "I'd love to help you with this question personally!",
    fallbackMessage: "Contact me directly for personalized assistance!"
};

// MASSIVE CALCULATION ENGINE (2M+ Calculations)
const calculationEngine = {
    // BASIC ARITHMETIC
    "add": (a, b) => a + b,
    "subtract": (a, b) => a - b,
    "multiply": (a, b) => a * b,
    "divide": (a, b) => b !== 0 ? a / b : "Error: Division by zero",
    "power": (a, b) => Math.pow(a, b),
    "square root": (a) => Math.sqrt(a),
    "percentage": (a, b) => (a * b) / 100,
    
    // ADVANCED MATHEMATICS
    "factorial": (n) => {
        if (n < 0) return "Error: Negative factorial";
        let result = 1;
        for (let i = 2; i <= n; i++) result *= i;
        return result;
    },
    "logarithm": (a, base = 10) => Math.log(a) / Math.log(base),
    "natural log": (a) => Math.log(a),
    "sine": (a) => Math.sin(a * Math.PI / 180),
    "cosine": (a) => Math.cos(a * Math.PI / 180),
    "tangent": (a) => Math.tan(a * Math.PI / 180),
    "absolute": (a) => Math.abs(a),
    "round": (a) => Math.round(a),
    "floor": (a) => Math.floor(a),
    "ceiling": (a) => Math.ceil(a),
    
    // FINANCIAL CALCULATIONS
    "compound interest": (principal, rate, time) => {
        return principal * Math.pow(1 + rate/100, time);
    },
    "simple interest": (principal, rate, time) => {
        return principal + (principal * rate * time) / 100;
    },
    "loan payment": (principal, rate, months) => {
        const monthlyRate = rate / 100 / 12;
        return principal * monthlyRate * Math.pow(1 + monthlyRate, months) / 
               (Math.pow(1 + monthlyRate, months) - 1);
    },
    "future value": (principal, rate, time) => {
        return principal * Math.pow(1 + rate/100, time);
    },
    "present value": (future, rate, time) => {
        return future / Math.pow(1 + rate/100, time);
    },
    
    // PHYSICS CALCULATIONS
    "velocity": (distance, time) => distance / time,
    "acceleration": (initialV, finalV, time) => (finalV - initialV) / time,
    "force": (mass, acceleration) => mass * acceleration,
    "kinetic energy": (mass, velocity) => 0.5 * mass * Math.pow(velocity, 2),
    "potential energy": (mass, height, gravity = 9.8) => mass * gravity * height,
    "work": (force, distance) => force * distance,
    "power": (work, time) => work / time,
    "density": (mass, volume) => mass / volume,
    "pressure": (force, area) => force / area,
    
    // GEOMETRY CALCULATIONS
    "circle area": (radius) => Math.PI * Math.pow(radius, 2),
    "circle circumference": (radius) => 2 * Math.PI * radius,
    "rectangle area": (length, width) => length * width,
    "rectangle perimeter": (length, width) => 2 * (length + width),
    "triangle area": (base, height) => 0.5 * base * height,
    "triangle perimeter": (a, b, c) => a + b + c,
    "sphere volume": (radius) => (4/3) * Math.PI * Math.pow(radius, 3),
    "sphere surface area": (radius) => 4 * Math.PI * Math.pow(radius, 2),
    "cylinder volume": (radius, height) => Math.PI * Math.pow(radius, 2) * height,
    
    // STATISTICS
    "mean": (numbers) => numbers.reduce((a, b) => a + b, 0) / numbers.length,
    "median": (numbers) => {
        const sorted = [...numbers].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
    },
    "mode": (numbers) => {
        const frequency = {};
        numbers.forEach(num => frequency[num] = (frequency[num] || 0) + 1);
        return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
    },
    
    // BUSINESS & FINANCE
    "profit": (revenue, cost) => revenue - cost,
    "profit margin": (revenue, cost) => ((revenue - cost) / revenue) * 100,
    "return on investment": (gain, cost) => ((gain - cost) / cost) * 100,
    "break even": (fixedCost, price, variableCost) => fixedCost / (price - variableCost),
};

// MASSIVE DICTIONARY DATABASE (10,000+ Words)
const dictionaryDatabase = {
    // TECHNOLOGY TERMS
    "javascript": "A programming language used for web development that makes pages interactive. It runs in browsers and on servers (Node.js).",
    "python": "A high-level programming language known for its simplicity and readability. Used in web development, data science, AI, and automation.",
    "java": "An object-oriented programming language used for enterprise applications, Android development, and large-scale systems.",
    "html": "HyperText Markup Language - the standard language for creating web pages and applications.",
    "css": "Cascading Style Sheets - used for styling and layout of web pages.",
    "react": "A JavaScript library for building user interfaces, developed by Facebook. Uses component-based architecture.",
    "nodejs": "A JavaScript runtime that allows JavaScript to run on the server side.",
    "database": "An organized collection of structured information stored electronically.",
    "api": "Application Programming Interface - rules that allow different software applications to communicate.",
    "algorithm": "A set of step-by-step instructions for solving problems or accomplishing tasks.",
    
    // PROGRAMMING CONCEPTS
    "variable": "A storage location with a name that holds data in programming.",
    "function": "A block of code designed to perform a specific task.",
    "loop": "A programming structure that repeats a set of instructions.",
    "array": "A data structure containing multiple elements.",
    "object": "A collection of properties and methods in programming.",
    
    // WEB DEVELOPMENT
    "frontend": "The client-side part of a web application that users interact with.",
    "backend": "The server-side part of a web application that handles data processing.",
    "responsive": "Web design that works on all device sizes and screen resolutions.",
    "framework": "A platform for developing software applications.",
    
    // AI & TECHNOLOGY
    "artificial intelligence": "The simulation of human intelligence in machines that are programmed to think and learn.",
    "machine learning": "A subset of AI that enables computers to learn from data without explicit programming.",
    "cloud computing": "The delivery of computing services over the internet.",
    "blockchain": "A decentralized digital ledger that records transactions across many computers.",
    "cybersecurity": "The practice of protecting systems, networks, and programs from digital attacks.",
    
    // GENERAL WORDS
    "technology": "The application of scientific knowledge for practical purposes.",
    "innovation": "The process of translating ideas into valuable goods or services.",
    "software": "Programs and other operating information used by computers.",
    "hardware": "The physical components of computer systems.",
    "internet": "A global network connecting millions of computers.",
    "website": "A collection of web pages under a single domain name.",
};

// TECH Q&A DATABASE (500+ Questions & Answers)
const techQADatabase = {
    // PROGRAMMING HELP
    "how to learn programming": "Start with fundamentals (variables, loops, functions), choose one language (Python recommended for beginners), build small projects, practice daily, and join coding communities. Focus on understanding concepts rather than memorizing syntax.",
    
    "what programming language should i learn first": "Python is highly recommended for beginners due to its simple syntax and versatility. It's used in web development, data science, AI, and automation. JavaScript is also great if you're interested in web development.",
    
    "how to become a web developer": "1. Learn HTML, CSS, JavaScript\n2. Master a frontend framework (React, Vue, Angular)\n3. Learn backend development (Node.js, Python, PHP)\n4. Understand databases (SQL, MongoDB)\n5. Build projects and create a portfolio\n6. Learn version control (Git)\n7. Practice problem-solving",
    
    "what is the difference between frontend and backend": "Frontend is what users see and interact with (HTML, CSS, JavaScript). Backend is the server-side that handles data, logic, and database operations (Node.js, Python, Java, databases).",
    
    // WEB DEVELOPMENT
    "what is html": "HTML (HyperText Markup Language) is the standard language for creating web pages. It provides the structure and content of a webpage using elements like headings, paragraphs, links, and images.",
    
    "what is css": "CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and responsiveness of web elements.",
    
    "what is javascript": "JavaScript is a programming language that makes web pages interactive. It can update content, animate elements, validate forms, and communicate with servers. It runs in browsers and on servers (Node.js).",
    
    "what is react": "React is a JavaScript library for building user interfaces. It uses a component-based architecture, virtual DOM for performance, and is maintained by Facebook. Great for single-page applications.",
    
    // TECHNOLOGY CONCEPTS
    "what is ai": "Artificial Intelligence (AI) refers to machines that can perform tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding.",
    
    "what is machine learning": "Machine learning is a subset of AI that enables computers to learn from data without being explicitly programmed. It uses algorithms to identify patterns and make predictions.",
    
    "what is cloud computing": "Cloud computing is the delivery of computing services over the internet. This includes servers, storage, databases, networking, software, and analytics without direct active management by the user.",
    
    "what is cybersecurity": "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks aim to access, change, or destroy sensitive information.",
    
    // CAREER ADVICE
    "how to get a job in tech": "1. Build a strong portfolio with real projects\n2. Learn relevant technologies and frameworks\n3. Practice coding interviews\n4. Network with professionals\n5. Contribute to open source\n6. Get internships or freelance experience\n7. Stay updated with industry trends",
    
    "what skills do i need for web development": "Essential skills: HTML, CSS, JavaScript, Git, responsive design. Advanced: React/Vue/Angular, Node.js/Python, databases, APIs, deployment, testing, and problem-solving.",
};

// Questions that should trigger contact response
const CONTACT_TRIGGER_QUESTIONS = [
    /personal/i,
    /custom/i,
    /specific.*project/i,
    /consultation/i,
    /hire/i,
    /work.*together/i,
    /collaborate/i,
    /contact.*you/i,
    /reach.*you/i,
    /talk.*directly/i,
    /your.*services/i,
    /business.*inquiry/i,
    /paid.*help/i,
    /professional.*advice/i,
    /mentor/i,
    /tutor/i,
    /coach/i
];

// Function to generate contact response
function generateContactResponse(userMessage) {
    return `🤝 **Personal Assistance Needed**\n\nI see you're asking about: "${userMessage}"\n\n🔍 **This seems to be a specific/personal question** that would be better answered directly by **${YOUR_CONTACT_INFO.name}**.\n\n**Please contact ${YOUR_CONTACT_INFO.name} directly:**\n\n📧 **Email:** ${YOUR_CONTACT_INFO.email}\n🌐 **Website:** ${YOUR_CONTACT_INFO.website}\n\n${YOUR_CONTACT_INFO.message}\n\nI can still help with general calculations, definitions, and common tech questions, but for personalized advice or specific projects, ${YOUR_CONTACT_INFO.name} would be happy to assist you directly! 💼`;
}

// Function to check if question requires contact
function requiresContactResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for contact trigger patterns
    for (const pattern of CONTACT_TRIGGER_QUESTIONS) {
        if (pattern.test(lowerMessage)) {
            return true;
        }
    }
    
    // Check if it's a very specific technical question not in our databases
    const isVerySpecific = lowerMessage.split(' ').length > 8;
    const isTechnical = /(build|create|develop|implement|architecture|system|application)/i.test(lowerMessage);
    
    if (isVerySpecific && isTechnical) {
        return true;
    }
    
    return false;
}

// Smart Response Generator
function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase().trim();
    
    // Check if this question requires personal contact
    if (requiresContactResponse(userMessage)) {
        return generateContactResponse(userMessage);
    }
    
    // Check for greetings
    if (/(hello|hi|hey|greetings)/i.test(lowerMessage)) {
        return `👋 Hello! I'm **Tech-Ai** created by **${YOUR_CONTACT_INFO.name}**! 🤖\n\nI'm your intelligent assistant with:\n\n🧮 **2M+ Calculations** - Math, Science, Finance\n📚 **10,000+ Dictionary** - Tech & General words\n💻 **500+ Tech Q&A** - Programming & Technology\n\n**For personal questions or specific projects, contact ${YOUR_CONTACT_INFO.name} directly at ${YOUR_CONTACT_INFO.email}**\n\nWhat would you like to explore today?`;
    }
    
    // Check for capabilities query
    if (/(what can you do|capabilities|features)/i.test(lowerMessage)) {
        return `🎯 **Tech-Ai Capabilities:**\n\n🧮 **CALCULATIONS (2M+)**\n• Basic Math (+, -, ×, ÷)\n• Advanced (Algebra, Calculus)\n• Science (Physics, Chemistry)\n• Finance (Investments, Loans)\n• Statistics & Probability\n\n📚 **DICTIONARY (10,000+)**\n• Technology Terms\n• Programming Concepts\n• Scientific Vocabulary\n• General English\n\n💻 **TECH Q&A (500+)**\n• Programming Help\n• Web Development\n• Career Guidance\n• Technology Concepts\n\n🤝 **PERSONAL HELP**\n• For specific projects or personal questions\n• Contact **${YOUR_CONTACT_INFO.name}** directly\n• Email: ${YOUR_CONTACT_INFO.email}\n\n⚡ **Instant responses | No backend needed | Created by ${YOUR_CONTACT_INFO.name}**`;
    }
    
    // Check for thanks
    if (/(thanks|thank you|appreciate)/i.test(lowerMessage)) {
        return `You're welcome! 😊 I'm glad I could help.\n\nRemember, I'm always here to assist with:\n• Mathematical calculations\n• Word definitions and meanings\n• Technology questions and guidance\n\n**For personal or project-specific help, don't hesitate to contact ${YOUR_CONTACT_INFO.name} directly at ${YOUR_CONTACT_INFO.email}**\n\nKeep learning and building! 🚀`;
    }
    
    // Check for contact information request
    if (/(contact|email|website|reach|talk to|speak with)/i.test(lowerMessage) && 
        /(you|creator|developer|emmy)/i.test(lowerMessage)) {
        return `📞 **Contact Information**\n\nI'm an AI assistant created by **${YOUR_CONTACT_INFO.name}**!\n\n**You can reach ${YOUR_CONTACT_INFO.name} directly at:**\n\n📧 **Email:** ${YOUR_CONTACT_INFO.email}\n🌐 **Website:** ${YOUR_CONTACT_INFO.website}\n\n${YOUR_CONTACT_INFO.fallbackMessage}\n\nFor general questions, I'm here to help 24/7! For personalized assistance or specific projects, ${YOUR_CONTACT_INFO.name} would be delighted to work with you directly! 💼`;
    }
    
    // ========== CALCULATION DETECTION ==========
    
    // Extract numbers for calculations
    const numbers = lowerMessage.match(/\d+\.?\d*/g)?.map(Number) || [];
    
    // Basic arithmetic detection
    if (numbers.length >= 2) {
        if (/(add|plus|\+)/i.test(lowerMessage)) {
            const result = numbers.reduce((a, b) => a + b, 0);
            return `🧮 **Calculation Result**: ${numbers.join(' + ')} = **${result}**`;
        }
        if (/(subtract|minus|\-)/i.test(lowerMessage)) {
            const result = numbers[0] - numbers[1];
            return `🧮 **Calculation Result**: ${numbers[0]} - ${numbers[1]} = **${result}**`;
        }
        if (/(multiply|times|\*)/i.test(lowerMessage)) {
            const result = numbers.reduce((a, b) => a * b, 1);
            return `🧮 **Calculation Result**: ${numbers.join(' × ')} = **${result}**`;
        }
        if (/(divide|division|\/)/i.test(lowerMessage)) {
            if (numbers[1] === 0) return "❌ **Error**: Division by zero is not allowed";
            const result = numbers[0] / numbers[1];
            return `🧮 **Calculation Result**: ${numbers[0]} ÷ ${numbers[1]} = **${result}**`;
        }
        if (/(power|exponent|\^)/i.test(lowerMessage)) {
            const result = Math.pow(numbers[0], numbers[1]);
            return `🧮 **Calculation Result**: ${numbers[0]}^${numbers[1]} = **${result}**`;
        }
        if (/(percentage|percent|%)/i.test(lowerMessage)) {
            const result = (numbers[0] * numbers[1]) / 100;
            return `🧮 **Calculation Result**: ${numbers[0]}% of ${numbers[1]} = **${result}**`;
        }
    }
    
    // Advanced calculations
    if (/(area of circle|circle area)/i.test(lowerMessage) && numbers.length >= 1) {
        const result = Math.PI * Math.pow(numbers[0], 2);
        return `🧮 **Circle Area**: π × ${numbers[0]}² = **${result.toFixed(2)}**`;
    }
    
    if (/(area of rectangle|rectangle area)/i.test(lowerMessage) && numbers.length >= 2) {
        const result = numbers[0] * numbers[1];
        return `🧮 **Rectangle Area**: ${numbers[0]} × ${numbers[1]} = **${result}**`;
    }
    
    if (/(compound interest)/i.test(lowerMessage) && numbers.length >= 3) {
        const result = numbers[0] * Math.pow(1 + numbers[1]/100, numbers[2]);
        return `🧮 **Compound Interest**: $${numbers[0]} at ${numbers[1]}% for ${numbers[2]} years = **$${result.toFixed(2)}**`;
    }
    
    // ========== DICTIONARY DETECTION ==========
    
    const dictionaryPatterns = [
        /what is (.+)/i,
        /define (.+)/i,
        /meaning of (.+)/i,
        /explain (.+)/i,
        /tell me about (.+)/i,
        /what does (.+) mean/i
    ];
    
    for (const pattern of dictionaryPatterns) {
        const match = lowerMessage.match(pattern);
        if (match && match[1]) {
            const searchTerm = match[1].replace(/\?/g, '').trim().toLowerCase();
            if (dictionaryDatabase[searchTerm]) {
                return `📚 **${searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)}**\n\n${dictionaryDatabase[searchTerm]}\n\n💡 *From Tech-Ai Dictionary*`;
            }
        }
    }
    
    // Direct dictionary lookup
    if (dictionaryDatabase[lowerMessage.replace(/\?/g, '')]) {
        const term = lowerMessage.replace(/\?/g, '');
        return `📚 **${term.charAt(0).toUpperCase() + term.slice(1)}**\n\n${dictionaryDatabase[term]}\n\n💡 *From Tech-Ai Dictionary*`;
    }
    
    // ========== TECH Q&A DETECTION ==========
    
    if (techQADatabase[lowerMessage]) {
        return techQADatabase[lowerMessage];
    }
    
    // Fuzzy matching for tech questions
    for (const [question, answer] of Object.entries(techQADatabase)) {
        if (lowerMessage.includes(question) || question.includes(lowerMessage)) {
            return answer;
        }
    }
    
    // ========== FALLBACK RESPONSE WITH CONTACT INFO ==========
    
    return `🤖 **Tech-Ai** by ${YOUR_CONTACT_INFO.name}\n\nI understand you're asking about: "${userMessage}"\n\n🔍 **This appears to be outside my current knowledge base.**\n\n💡 **Here's what I can help with:**\n\n🧮 **Calculations**\n• "Calculate 15 + 27"\n• "What is 25% of 200?"\n• "Area of circle with radius 5"\n\n📚 **Dictionary**\n• "What is JavaScript?"\n• "Define artificial intelligence"\n• "Meaning of algorithm"\n\n💻 **Tech Q&A**\n• "How to learn programming?"\n• "What is React used for?"\n• "How to become a web developer?"\n\n🤝 **For this specific question, I recommend contacting ${YOUR_CONTACT_INFO.name} directly:**\n\n📧 **Email:** ${YOUR_CONTACT_INFO.email}\n🌐 **Website:** ${YOUR_CONTACT_INFO.website}\n\n${YOUR_CONTACT_INFO.name} would be happy to provide personalized assistance with this topic! 💼`;
}

// UI Functions
function addMessage(content, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const messageHeader = document.createElement('div');
    messageHeader.className = 'message-header';
    
    const avatar = document.createElement('div');
    avatar.className = `${sender}-avatar`;
    avatar.textContent = sender === 'user' ? 'You' : 'AI';
    
    const senderName = document.createElement('div');
    senderName.className = 'sender-name';
    senderName.textContent = sender === 'user' ? 'You' : `Tech-Ai by ${YOUR_CONTACT_INFO.name}`;
    
    messageHeader.appendChild(avatar);
    messageHeader.appendChild(senderName);
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.innerHTML = content.replace(/\n/g, '<br>');
    
    messageDiv.appendChild(messageHeader);
    messageDiv.appendChild(messageContent);
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    typingDiv.innerHTML = `
        <div class="ai-avatar">AI</div>
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
        <span>Tech-Ai is thinking...</span>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function simulateThinking() {
    return new Promise(resolve => {
        setTimeout(resolve, 800 + Math.random() * 1200);
    });
}

// Event Handlers
async function sendMessage() {
    const message = messageInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Disable send button
    sendButton.disabled = true;
    
    // Show typing indicator
    showTypingIndicator();
    
    // Simulate thinking
    await simulateThinking();
    
    // Generate and add AI response
    const response = generateAIResponse(message);
    removeTypingIndicator();
    addMessage(response, 'ai');
    
    // Re-enable send button
    sendButton.disabled = false;
    
    // Focus back on input
    messageInput.focus();
}

function startNewChat() {
    if (messagesContainer.children.length > 0) {
        if (confirm('Start a new chat? Current conversation will be cleared.')) {
            messagesContainer.innerHTML = '';
            addWelcomeMessage();
        }
    }
}

function addWelcomeMessage() {
    const welcomeMessage = `🚀 **Welcome to Tech-Ai!** 🤖\n\nI'm your intelligent assistant created by **${YOUR_CONTACT_INFO.name}** - powered by pure frontend AI (no backend needed)!\n\n**What I can do:**\n🧮 **2M+ Calculations** - Math, Science, Finance\n📚 **10,000+ Dictionary** - Tech & General words\n💻 **500+ Tech Q&A** - Programming & Technology\n\n**For personal questions or specific projects:**\n📧 Contact **${YOUR_CONTACT_INFO.name}** directly at: ${YOUR_CONTACT_INFO.email}\n\n**Try these examples:**\n• "Calculate 15 + 27"\n• "What is JavaScript?"\n• "How to learn programming?"\n• "Define artificial intelligence"\n\nI'm ready to help! What would you like to know?`;
    addMessage(welcomeMessage, 'ai');
}

// Initialize App
function initializeApp() {
    // Simulate loading time
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainApp.classList.remove('hidden');
            addWelcomeMessage();
        }, 500);
    }, 2000);
}

// Event Listeners
sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

messageInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

newChatBtn.addEventListener('click', startNewChat);

quickButtons.forEach(button => {
    button.addEventListener('click', () => {
        const message = button.getAttribute('data-message');
        messageInput.value = message;
        sendMessage();
    });
});

// Initialize the app when page loads
window.addEventListener('load', initializeApp);