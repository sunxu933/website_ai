export interface TutorialItem {
  id: string
  title: string
  description: string
  duration: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  category: string
  imageUrl: string
}

export const tutorialsData: TutorialItem[] = [
  {
    id: '1',
    title: '从零开始搭建ChatGPT应用',
    description: '使用OpenAI API在30分钟内构建你的第一个AI聊天应用，涵盖API调用、流式输出和对话管理。',
    duration: '30分钟',
    difficulty: 'beginner',
    category: 'API开发',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80',
  },
  {
    id: '2',
    title: 'LangChain实战：构建RAG知识库问答',
    description: '深入LangChain框架，从文档加载到向量存储再到检索增强生成，构建企业级知识库问答系统。',
    duration: '45分钟',
    difficulty: 'intermediate',
    category: '框架',
    imageUrl: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=400&q=80',
  },
  {
    id: '3',
    title: 'AI Agent开发指南：AutoGPT原理与实践',
    description: '了解AI Agent的核心工作原理，动手构建一个能自主执行任务的智能代理。',
    duration: '60分钟',
    difficulty: 'advanced',
    category: 'Agent',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80',
  },
  {
    id: '4',
    title: 'Stable Diffusion微调：DreamBooth全流程',
    description: '使用DreamBooth技术微调Stable Diffusion，生成个性化AI图像模型的完整教程。',
    duration: '45分钟',
    difficulty: 'intermediate',
    category: '图像',
    imageUrl: 'https://images.unsplash.com/photo-1547954575-855750c57bd3?w=400&q=80',
  },
  {
    id: '5',
    title: 'Prompt Engineering大师课',
    description: '从基础到高级的提示工程技巧，包括思维链、少样本学习、角色扮演等方法。',
    duration: '25分钟',
    difficulty: 'beginner',
    category: '提示工程',
    imageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910ah5f?w=400&q=80',
  },
  {
    id: '6',
    title: '使用Vercel AI SDK快速部署AI应用',
    description: '借助Vercel AI SDK，在React和Next.js项目中快速集成各种AI模型的流式对话功能。',
    duration: '20分钟',
    difficulty: 'beginner',
    category: '前端',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80',
  },
  {
    id: '7',
    title: 'LlamaIndex与向量数据库深度整合',
    description: '使用LlamaIndex连接Chroma、Pinecone等向量数据库，构建高性能语义搜索系统。',
    duration: '50分钟',
    difficulty: 'advanced',
    category: '数据',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
  },
  {
    id: '8',
    title: 'AI模型部署：从HuggingFace到生产环境',
    description: '学习如何使用HuggingFace TGI、vLLM等工具将开源模型部署到生产环境。',
    duration: '40分钟',
    difficulty: 'intermediate',
    category: '部署',
    imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80',
  },
]

