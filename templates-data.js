// ─────────────────────────────────────────────────────────────
// ARALOOM TEMPLATE DATA BUNDLE
// This file allows the gallery to work without a local server (CORS-safe).
// ─────────────────────────────────────────────────────────────

window.ARALOOM_TEMPLATES = {
  registry: [
    {
      "id": "tab_mnksbnl6_f169c7r",
      "name": "Research Papers",
      "category": "research",
      "author": "Araloom Team",
      "authorType": "official",
      "description": "Simplified capture for academic research title, URL, BibTeX citation, notes, and tags.",
      "file": "research-papers.json",
      "icon": "📚",
      "color": "#6366f1",
      "fieldCount": 5
    },
    {
      "id": "tpl_jobs_001",
      "name": "Job Tracker",
      "category": "jobs",
      "author": "Araloom Team",
      "authorType": "official",
      "description": "Track applications from LinkedIn, Indeed, or any job board. Status, salary, deadline in one view.",
      "file": "job-tracker.json",
      "icon": "💼",
      "color": "#6366f1",
      "fieldCount": 8
    },
    {
      "id": "tpl_design_001",
      "name": "Design Inspiration",
      "category": "design",
      "author": "Araloom Team",
      "authorType": "official",
      "description": "Collect UI references, color palettes, and typography from any website. Build your visual moodboard.",
      "file": "design-inspiration.json",
      "icon": "🎨",
      "color": "#e85d3a",
      "fieldCount": 5
    },
    {
      "id": "tpl_learning_001",
      "name": "Learning Path",
      "category": "learning",
      "author": "Araloom Team",
      "authorType": "official",
      "description": "Structure online courses and tutorials. Track what you've learned and what to do next.",
      "file": "learning-path.json",
      "icon": "🎓",
      "color": "#6366f1",
      "fieldCount": 6
    },
    {
      "id": "tpl_biz_001",
      "name": "Deal Flow Tracker",
      "category": "business",
      "author": "VC Network",
      "authorType": "community",
      "description": "Track startups, funding rounds, and investment signals from Crunchbase, TechCrunch, and more.",
      "file": "deal-flow.json",
      "icon": "📈",
      "color": "#e85d3a",
      "fieldCount": 7
    },
    {
      "id": "tpl_books_001",
      "name": "Book & Article Notes",
      "category": "learning",
      "author": "Reader's Circle",
      "authorType": "community",
      "description": "Capture quotes, key ideas, and action items from anything you read online.",
      "file": "book-notes.json",
      "icon": "📖",
      "color": "#6366f1",
      "fieldCount": 6
    },
    {
      "id": "tpl_ux_001",
      "name": "UX Research Notes",
      "category": "design",
      "author": "Design Collective",
      "authorType": "community",
      "description": "Collect competitor flows, user feedback patterns, and usability observations from any website.",
      "file": "ux-research.json",
      "icon": "🔬",
      "color": "#e85d3a",
      "fieldCount": 6
    },
    {
      "id": "tpl_startup_001",
      "name": "Startup Research",
      "category": "research",
      "author": "Founder Community",
      "authorType": "community",
      "description": "Track competitors, product launches, and market positioning from any source across the web.",
      "file": "startup-research.json",
      "icon": "🚀",
      "color": "#e85d3a",
      "fieldCount": 6
    },
    {
      "id": "tpl_content_001",
      "name": "Content Inspiration",
      "category": "business",
      "author": "Content Creators",
      "authorType": "community",
      "description": "Save ideas, hooks, and references for posts, videos, newsletters, and threads.",
      "file": "content-calendar.json",
      "icon": "📅",
      "color": "#6366f1",
      "fieldCount": 6
    }
  ],
  details: {
    "tab_mnksbnl6_f169c7r": {
      "id": "tab_mnksbnl6_f169c7r",
      "name": "Research Papers",
      "description": "Simplified capture for academic research title, URL, BibTeX citation, notes, and tags.",
      "author": "Araloom Team",
      "icon": "📚",
      "color": "#6366f1",
      "fieldSchema": [
        { "id": "f1", "label": "Title", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "BibTeX", "type": "bibtex", "required": false, "subFields": ["author", "year", "journal", "doi", "title"] },
        { "id": "f4", "label": "Notes", "type": "textarea", "required": false, "placeholder": "Brief summary or takeaway..." },
        { "id": "f5", "label": "Tags", "type": "tags", "required": false, "placeholder": "ai, nlp, math..." }
      ]
    },
    "tpl_jobs_001": {
      "id": "tpl_jobs_001",
      "name": "Job Tracker",
      "description": "Track applications from LinkedIn, Indeed, or any job board. Status, salary, deadline in one view.",
      "author": "Araloom Team",
      "icon": "💼",
      "color": "#6366f1",
      "fieldSchema": [
        { "id": "f1", "label": "Job Title", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Company", "type": "text", "required": true },
        { "id": "f4", "label": "Salary", "type": "text", "required": false },
        { "id": "f5", "label": "Status", "type": "select", "required": false, "options": ["Saved", "Applied", "Interviewing", "Offer", "Rejected"] },
        { "id": "f6", "label": "Deadline", "type": "date", "required": false },
        { "id": "f7", "label": "Notes", "type": "textarea", "required": false, "placeholder": "Impressions, contacts, next steps..." },
        { "id": "f8", "label": "Tags", "type": "tags", "required": false }
      ]
    },
    "tpl_design_001": {
      "id": "tpl_design_001",
      "name": "Design Inspiration",
      "description": "Collect UI references, color palettes, and typography from any website. Build your visual moodboard.",
      "author": "Araloom Team",
      "icon": "🎨",
      "color": "#e85d3a",
      "fieldSchema": [
        { "id": "f1", "label": "Page Title", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "What I Like", "type": "textarea", "required": false, "placeholder": "Layout, colors, type choices..." },
        { "id": "f4", "label": "Style Type", "type": "select", "required": false, "options": ["Minimal", "Brutalist", "Glassmorphism", "Gradient", "Dark", "Light", "Editorial"] },
        { "id": "f5", "label": "Tags", "type": "tags", "required": false, "placeholder": "typography, dark-mode, cards..." }
      ]
    },
    "tpl_learning_001": {
      "id": "tpl_learning_001",
      "name": "Learning Path",
      "description": "Structure online courses and tutorials. Track what you've learned and what to do next.",
      "author": "Araloom Team",
      "icon": "🎓",
      "color": "#6366f1",
      "fieldSchema": [
        { "id": "f1", "label": "Resource Title", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Platform", "type": "text", "required": false },
        { "id": "f4", "label": "Status", "type": "select", "required": false, "options": ["Not Started", "In Progress", "Completed", "Revisit"] },
        { "id": "f5", "label": "Key Takeaways", "type": "textarea", "required": false },
        { "id": "f6", "label": "Tags", "type": "tags", "required": false, "placeholder": "python, ml, beginner..." }
      ]
    },
    "tpl_biz_001": {
      "id": "tpl_biz_001",
      "name": "Deal Flow Tracker",
      "description": "Track startups, funding rounds, and investment signals from Crunchbase, TechCrunch, and more.",
      "author": "VC Network",
      "icon": "📈",
      "color": "#e85d3a",
      "fieldSchema": [
        { "id": "f1", "label": "Company", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Stage", "type": "select", "required": false, "options": ["Pre-seed", "Seed", "Series A", "Series B", "Growth", "Public"] },
        { "id": "f4", "label": "Valuation", "type": "text", "required": false },
        { "id": "f5", "label": "Thesis Fit", "type": "select", "required": false, "options": ["Strong", "Moderate", "Weak", "Pass"] },
        { "id": "f6", "label": "Notes", "type": "textarea", "required": false },
        { "id": "f7", "label": "Tags", "type": "tags", "required": false, "placeholder": "ai, fintech, b2b..." }
      ]
    },
    "tpl_books_001": {
      "id": "tpl_books_001",
      "name": "Book & Article Notes",
      "description": "Capture quotes, key ideas, and action items from anything you read online.",
      "author": "Reader's Circle",
      "icon": "📖",
      "color": "#6366f1",
      "fieldSchema": [
        { "id": "f1", "label": "Title", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Author", "type": "text", "required": false },
        { "id": "f4", "label": "Key Quote", "type": "textarea", "required": false, "placeholder": "The most important line..." },
        { "id": "f5", "label": "My Takeaway", "type": "textarea", "required": false },
        { "id": "f6", "label": "Tags", "type": "tags", "required": false }
      ]
    },
    "tpl_ux_001": {
      "id": "tpl_ux_001",
      "name": "UX Research Notes",
      "description": "Collect competitor flows, user feedback patterns, and usability observations from any website.",
      "author": "Design Collective",
      "icon": "🔬",
      "color": "#e85d3a",
      "fieldSchema": [
        { "id": "f1", "label": "Page", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Observation", "type": "textarea", "required": false, "placeholder": "What did you notice?" },
        { "id": "f4", "label": "Sentiment", "type": "select", "required": false, "options": ["Positive", "Neutral", "Negative", "Mixed"] },
        { "id": "f5", "label": "Project Link", "type": "text", "required": false, "placeholder": "@ProjectName" },
        { "id": "f6", "label": "Tags", "type": "tags", "required": false, "placeholder": "onboarding, nav, cta..." }
      ]
    },
    "tpl_startup_001": {
      "id": "tpl_startup_001",
      "name": "Startup Research",
      "description": "Track competitors, product launches, and market positioning from any source across the web.",
      "author": "Founder Community",
      "icon": "🚀",
      "color": "#e85d3a",
      "fieldSchema": [
        { "id": "f1", "label": "Company/Product", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Category", "type": "text", "required": false },
        { "id": "f4", "label": "Key Points", "type": "textarea", "required": false },
        { "id": "f5", "label": "Threat Level", "type": "select", "required": false, "options": ["Low", "Medium", "High", "Watch"] },
        { "id": "f6", "label": "Tags", "type": "tags", "required": false }
      ]
    },
    "tpl_content_001": {
      "id": "tpl_content_001",
      "name": "Content Inspiration",
      "description": "Save ideas, hooks, and references for posts, videos, newsletters, and threads.",
      "author": "Content Creators",
      "icon": "📅",
      "color": "#6366f1",
      "fieldSchema": [
        { "id": "f1", "label": "Source Title", "type": "auto_title", "required": true },
        { "id": "f2", "label": "URL", "type": "auto_url", "required": true },
        { "id": "f3", "label": "Hook Idea", "type": "textarea", "required": false, "placeholder": "How could this become a post?" },
        { "id": "f4", "label": "Format", "type": "select", "required": false, "options": ["Thread", "Newsletter", "Video", "Blog", "Short"] },
        { "id": "f5", "label": "Status", "type": "select", "required": false, "options": ["Idea", "Draft", "Scheduled", "Published"] },
        { "id": "f6", "label": "Tags", "type": "tags", "required": false }
      ]
    }
  }
};
