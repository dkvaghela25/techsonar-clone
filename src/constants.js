export const reasons = [
    {
        imgUrl: "./images/reasons/uptime_monitoring.svg",
        title: "Uptime Monitoring",
        description: "Get notified instantly when your website goes down — via email, SMS, or app alerts."
    },
    {
        imgUrl: "./images/reasons/performance_checks.svg",
        title: "Performance Checks",
        description: "Monitor speed and response time to keep your site blazing fast."
    },
    {
        imgUrl: "./images/reasons/global_servers.svg",
        title: "Global Servers",
        description: "Monitor from multiple locations worldwide for accurate results."
    },
    {
        imgUrl: "./images/reasons/risk_and_ threat_detection.svg",
        title: "Risk & Threat Detection",
        description: "Identify potential threats and vulnerabilities to keep your site secure 24/7."
    },
]

export const features = [
    {
        imgUrl: "./images/highlights/highlight_image_1.png",
        title: "Show real-time response and risk metrics",
        description: "Showcase live response time metrics and risk analysis across global locations. With a clear performance graph and zero critical risks detected, your users can trust that your website is fast, stable, and monitored 24/7.",
        link: ""
    },
    {
        imgUrl: "./images/highlights/highlight_image_2.jpg",
        title: "Display uptime status to build user trust",
        description: "Build credibility with a public-facing status page that displays uptime history, real-time availability, and incident transparency. Demonstrate operational excellence and keep your users informed—automatically.",
        link: ""
    },
    {
        imgUrl: "./images/highlights/highlight_image_3.png",
        title: "Stay ahead with instant incident alerts",
        description: "Set up instant alerts via email, Slack, SMS, and more to respond quickly when downtime or performance issues occur. Proactive notifications help your team stay ahead and maintain uninterrupted service.",
        link: ""
    },
]

export const reviews = [
    {
        profilePicture: "./images/reviews/sarah.png",
        userName: "Sarah",
        role: "Startup Founder",
        reviewDescription: "Tens of thousands of business owners from around the world rely on our service, and Pulsetic is the best platform there is to ensure we communicate any downtimes clearly and swiftly to our customers to avoid panic and disappointment.",
    },
    {
        profilePicture: "./images/reviews/max.png",
        userName: "Max",
        role: "DevOps Lead",
        reviewDescription: "Tens of thousands of business owners from around the world rely on our service, and Pulsetic is the best platform there is to ensure we communicate any downtimes clearly and swiftly to our customers to avoid panic and disappointment.",
    },
    {
        profilePicture: "./images/reviews/jason.png",
        userName: "Jason",
        role: "Lead, Growth Marketing",
        reviewDescription: "Tens of thousands of business owners from around the world rely on our service, and Pulsetic is the best platform there is to ensure we communicate any downtimes clearly and swiftly to our customers to avoid panic and disappointment.",
    },
    {
        profilePicture: "./images/reviews/david_miller.png",
        userName: "David Miller",
        role: "Lead, Growth Marketing",
        reviewDescription: "Tens of thousands of business owners from around the world rely on our service, and Pulsetic is the best platform there is to ensure we communicate any downtimes clearly and swiftly to our customers to avoid panic and disappointment.",
    },
]

export const faqs = [
    {
        queId: 1,
        que: "What is TechSonar?",
        ans: "TechSonar is a website monitoring service that checks your website's uptime and performance from multiple global locations. If your site goes down, you get notified instantly."
    },
    {
        queId: 2,
        que: "How often does TechSonar check my website?",
        ans: "TechSonar monitors your website at regular intervals, with options ranging from every minute to every 5 minutes depending on your plan."
    },
    {
        queId: 3,
        que: "How will I be notified if my website goes down?",
        ans: "You will receive instant notifications via email, SMS, or app alerts when your website experiences downtime or performance issues."
    },
    {
        queId: 4,
        que: "Do I need to install anything on my website?",
        ans: "No coding required. Simply add your website URL and start monitoring in minutes. TechSonar monitors your site externally without requiring any installation."
    },
]

export const billingCycles = ["monthly", "yearly"]

export const plans = [
    {
        "id": "plan-starter",
        "name": "Starter",
        "description": "Perfect for personal blogs or small projects needing basic uptime assurance.",
        "prices": {
            "monthly": { "price": 0 },
            "yearly": { "price": 0 },
        },
        "features": [
            "1 Website monitored",
            "5 minute check intervals",
            "Email notifications only",
            "3 Global locations",
            "7-day data retention"
        ],
        "buttonText": "Get Started",
        "isPopular": false
    },
    {
        "id": "plan-pro",
        "name": "Professional",
        "description": "Ideal for growing businesses that require faster intervals and multi-channel alerts.",
        "prices": {
            "monthly": { "price": 29 },
            "yearly": { "price": 290, "save": 58 },
        },
        "features": [
            "Up to 10 Websites",
            "1 minute check intervals",
            "Email, SMS & App Alerts",
            "10 Global locations",
            "30-day data retention",
            "Priority Support"
        ],
        "buttonText": "Start Free Trial",
        "isPopular": true
    },
    {
        "id": "plan-enterprise",
        "name": "Enterprise",
        "description": "Designed for mission-critical applications requiring real-time monitoring.",
        "prices": {
            "monthly": { "price": 99 },
            "yearly": { "price": 999, "save": 189 },
        },
        "features": [
            "Unlimited Websites",
            "30 second check intervals",
            "Custom Webhook Alerts",
            "25+ Global locations",
            "365-day data retention",
            "Dedicated Account Manager"
        ],
        "buttonText": "Start Free Trial",
        "isPopular": false
    }
]