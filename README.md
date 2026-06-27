# HR AI Assistant

An AI-powered HR chatbot that answers employee questions related to Leave Management, Job Creation, Payroll Basics, and Workforce Management. The chatbot retrieves relevant HR knowledge from a structured JSON knowledge base, builds contextual prompts, and generates natural language responses using Google's Gemini AI.

The HR AI Assistant is a modern, responsive chatbot application designed to help employees get instant answers to common HR-related questions. Instead of relying on hardcoded responses, it uses an intelligent knowledge retrieval system that:

- Searches through a structured JSON knowledge base
- Matches user queries using keyword analysis and text similarity
- Generates human-like responses using Google Gemini AI
- Provides context-aware answers with relevant HR information

---

## ✨ Features

- **AI-powered HR chatbot** with natural language understanding
- **Multi-category support**:
  - Leave Management
  - Job Creation
  - Payroll Basics
  - Workforce Management
- **Structured JSON knowledge base** (40+ HR entries) instead of hardcoded responses
- **Intelligent keyword-based retrieval** with scoring algorithm
- **Text normalization** for improved matching accuracy
- **Synonym mapping** for better query understanding
- **Stop-word removal** to focus on meaningful terms
- **Context-aware prompt generation** for accurate AI responses
- **Google Gemini integration** for natural language generation
- **Modern responsive chat interface** with typing indicators
- **Clean modular architecture** following service layer patterns
- **Easy to extend** with Memory and RAG capabilities

---

## 🛠 Tech Stack

### Frontend
- **Next.js** (App Router) - Modern React framework
- **React** 19.2.4 - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** 4 - Styling

### Backend
- **Next.js API Routes** - Server-side API endpoints

### AI & NLP
- **Google Gemini API** - AI response generation
- **LangChain** - Prompt engineering and chain orchestration
- **Structured Prompt Engineering** - Context-aware responses

### Utilities
- **Lucide React** - Icon library
- **react-markdown** - Markdown rendering

---

## 🏗 Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend                              │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │ ChatContainer│  │ ChatMessage  │  │   ChatInput       │  │
│  └─────────────┘  └──────────────┘  └───────────────────┘  │
└────────────────────────────┬────────────────────────────────┘
                             │ API Call
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                     API Layer (route.ts)                     │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                      Service Layer                           │
│  ┌─────────────┐  ┌──────────────┐  ┌───────────────────┐  │
│  │  AI Service │  │Knowledge Svc │  │  Prompt Service   │  │
│  └─────────────┘  └──────────────┘  └───────────────────┘  │
└────────────────────────────┬────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────┐
│                       Data Layer                             │
│  ┌─────────────────────┐  ┌─────────────────────────────┐ │
│  │   knowledge.json    │  │        Gemini AI             │ │
│  │   (40+ HR entries)  │  │    (Response Generation)     │ │
│  └─────────────────────┘  └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

---

## 📁 Folder Structure

```
ai-chatbot/
├── public/                      # Static assets
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts      # Chat API endpoint
│   │   ├── chat/
│   │   │   └── page.tsx          # Chat page
│   │   ├── globals.css            # Global styles
│   │   ├── layout.tsx             # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/               # React components
│   │   └── chat/
│   │       ├── ChatContainer.tsx # Main chat container
│   │       ├── ChatHeader.tsx    # Chat header
│   │       ├── ChatInput.tsx     # Message input
│   │       ├── ChatMessage.tsx   # Message bubble
│   │       └── TypingIndicator.tsx # AI typing animation
│   ├── data/
│   │   └── knowledge.json        # HR knowledge base
│   ├── hooks/
│   │   └── useChat.ts            # Chat state management
│   ├── lib/
│   │   ├── constants.ts          # App constants
│   │   ├── gemini.ts             # Gemini AI configuration
│   │   ├── langchain.ts          # LangChain setup
│   │   └── prompt.ts             # Prompt templates
│   ├── services/                 # Business logic layer
│   │   ├── ai.service.ts         # AI generation service
│   │   ├── chat.service.ts       # Chat orchestration
│   │   ├── knowledge.service.ts  # Knowledge retrieval
│   │   └── prompt.service.ts     # Prompt building
│   ├── types/
│   │   ├── chat.ts               # Chat type definitions
│   │   └── knowledge.ts          # Knowledge type definitions
│   └── utils/
│       └── text.ts               # Text processing utilities
├── CLAUDE.md                     # Claude AI instructions
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS configuration
├── README.md                     # This file
└── tsconfig.json                 # TypeScript configuration
```

---

## 🚀 Setup Instructions

### Prerequisites

- **Node.js** 18.17 or later
- **npm**, **yarn**, **pnpm**, or **bun**
- **Google Gemini API Key**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env.local
   ```

4. **Configure your API key** (see Environment Variables section)

5. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Gemini API Configuration
GOOGLE_API_KEY=your_gemini_api_key_here

# Optional: API Configuration
API_TIMEOUT=30000
MAX_TOKENS=2048
```

### Getting a Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the generated key
5. Paste it in your `.env.local` file

---

## ▶️ Running the Project

### Development Mode

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 🤖 AI Usage

### How the AI Works

The HR AI Assistant uses a two-stage approach:

1. **Knowledge Retrieval**: Find the most relevant HR knowledge entries
2. **Response Generation**: Use Gemini AI to generate a natural response

### Prompt Engineering

The system uses structured prompts that include:
- Role definition ("You are an HR assistant...")
- Context from retrieved knowledge
- User question
- Response guidelines

### Model Configuration

- **Model**: `gemini-2.5-flash`
- **Temperature**: 0.7 (balanced creativity)
- **Max Output**: Configurable via constants

---

## 🔍 Knowledge Retrieval Flow

```
┌─────────────────┐
│  User Question  │
│ "How do I apply │
│    for leave?"  │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Text Normalization                         │
│  • Convert to lowercase                                      │
│  • Remove punctuation                                         │
│  • Tokenize words                                            │
│  • Remove stop words                                         │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Synonym Mapping                            │
│  • "vacation" → "leave"                                     │
│  • "holiday" → "leave"                                      │
│  • "time off" → "leave"                                    │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Keyword Matching                          │
│  • Match against knowledge base keywords                     │
│  • Calculate relevance score                                │
│  • Rank by score                                            │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                  Context Selection                           │
│  • Select top N relevant entries                            │
│  • Build context prompt                                     │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────┐
│                  Gemini AI Generation                        │
│  • Generate natural language response                       │
│  • Format with markdown                                     │
└────────┬────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│   AI Response   │
│  "To apply for  │
│  leave, log in   │
│  to the HR      │
│  portal..."     │
└─────────────────┘
```

---

## 📖 Architecture Explanation

### Service Layer Pattern

The application follows a **Service Layer Architecture** with clear separation of concerns:

| Layer | Responsibility | Files |
|-------|---------------|-------|
| **API Layer** | Handle HTTP requests/responses | `route.ts` |
| **Service Layer** | Business logic | `*.service.ts` |
| **Data Layer** | Data access & storage | `knowledge.json` |
| **UI Layer** | User interface | `components/*` |

### Key Services

1. **ChatService** - Orchestrates the entire chat flow
2. **KnowledgeService** - Retrieves relevant HR knowledge
3. **PromptService** - Builds context-aware prompts
4. **AIService** - Generates AI responses

### Knowledge Base Structure

Each knowledge entry contains:

```typescript
interface KnowledgeItem {
  id: number;           // Unique identifier
  category: string;     // "leave" | "jobs" | "payroll" | "workforce"
  question: string;     // Example question
  answer: string;       // Detailed answer
  keywords: string[];   // Search keywords for matching
}
```

### Text Processing Pipeline

```
Raw Input → Normalize → Tokenize → Remove Stop Words → Match Keywords
```

---

## 📝 Knowledge Base Categories

The chatbot contains **40+ structured HR knowledge entries** divided into:

### 1. Leave Management
- Leave application process
- Leave types (Casual, Sick, Earned, Maternity, Paternity, Unpaid)
- Leave approval workflow
- Leave balance checking
- Leave cancellation and editing

### 2. Job Creation
- Creating job postings
- Required job information
- Job posting permissions
- Editing and closing jobs
- Recruitment workflow

### 3. Payroll Basics
- Salary components
- Payment schedules
- Deductions
- Payslip access

### 4. Workforce Management
- Employee onboarding
- Performance reviews
- Time tracking
- Team management

---

## 📌 Assumptions

1. **API Key Required**: The application requires a valid Google Gemini API key to function
2. **Knowledge Base is Static**: The knowledge.json file is the source of truth for HR information
3. **Single-turn Conversations**: Currently supports single question-answer interactions
4. **No Authentication**: The demo version does not include user authentication
5. **English Only**: The chatbot is designed for English language queries
6. **JSON Knowledge Source**: No database integration - all data comes from knowledge.json
7. **Server-side Rendering**: Chat interface uses client-side React, API calls are server-side
8. **Rate Limits**: Gemini API has rate limits that may affect high-traffic usage

---

## 🚀 Future Improvements

- [ ] **Persistent Chat History** - Store conversation history in a database
- [ ] **User Authentication** - Add login/logout functionality
- [ ] **Multi-language Support** - Support for multiple languages
- [ ] **RAG Integration** - Enhanced retrieval with vector embeddings
- [ ] **Conversation Memory** - Context across multiple messages
- [ ] **Feedback System** - Allow users to rate responses
- [ ] **Analytics Dashboard** - Track popular questions and topics
- [ ] **Knowledge Base Admin** - UI for managing knowledge entries
- [ ] **Database Integration** - Move from JSON to PostgreSQL/MongoDB
- [ ] **Caching Layer** - Redis for faster knowledge retrieval
- [ ] **Rate Limiting** - Protect API from abuse
- [ ] **Webhook Integration** - Connect with HR systems (Workday, BambooHR)

---

## 📸 Screenshots Placeholder

> Add screenshots of the application here

### Chat Interface
```
┌─────────────────────────────────────────┐
│  🤖 HR AI Assistant                     │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ Hello! How can I help you      │   │
│  │ today with your HR questions?   │   │
│  └─────────────────────────────────┘   │
│                                         │
│                    ┌─────────────────┐  │
│                    │ How do I apply  │  │
│                    │ for leave?      │  │
│                    └─────────────────┘  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │ To apply for leave, log in to  │   │
│  │ the HR portal, navigate to the │   │
│  │ Leave section...               │   │
│  └─────────────────────────────────┘   │
│                                         │
├─────────────────────────────────────────┤
│  [Type your message...          ] [➤]  │
└─────────────────────────────────────────┘
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Google Gemini](https://ai.google.dev/) - AI language model
- [LangChain](https://js.langchain.com/) - AI development framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide](https://lucide.dev/) - Beautiful icons
