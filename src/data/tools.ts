export interface ToolItem {
  id: string
  name: string
  description: string
  category: 'text' | 'image' | 'code' | 'voice' | 'video'
  link: string
  icon: string
}

export interface ToolCategory {
  key: string
  label: string
  icon: string
}

export const toolCategories: ToolCategory[] = [
  { key: 'text', label: '文本生成', icon: '📝' },
  { key: 'image', label: '图像生成', icon: '🎨' },
  { key: 'code', label: '代码助手', icon: '💻' },
  { key: 'voice', label: '语音处理', icon: '🎙️' },
  { key: 'video', label: '视频生成', icon: '🎬' },
]

export const toolsData: ToolItem[] = [
  {
    id: '1',
    name: 'ChatGPT',
    description: 'OpenAI推出的多功能对话AI，支持文本生成、代码编写、图像理解等多模态功能。',
    category: 'text',
    link: 'https://chat.openai.com',
    icon: '🤖',
  },
  {
    id: '2',
    name: 'Claude',
    description: 'Anthropic的长上下文对话AI，擅长深度分析和安全可控的文本生成。',
    category: 'text',
    link: 'https://claude.ai',
    icon: '🧠',
  },
  {
    id: '3',
    name: 'Gemini',
    description: 'Google的多模态AI助手，深度集成Google生态，支持搜索、文档分析等功能。',
    category: 'text',
    link: 'https://gemini.google.com',
    icon: '🌟',
  },
  {
    id: '4',
    name: 'DeepSeek',
    description: '深度求索推出的高性能开源模型，性价比极高，代码和数学能力突出。',
    category: 'text',
    link: 'https://chat.deepseek.com',
    icon: '🔍',
  },
  {
    id: '5',
    name: 'Midjourney',
    description: '顶尖AI图像生成工具，以艺术感和审美质量著称，广泛用于创意设计。',
    category: 'image',
    link: 'https://www.midjourney.com',
    icon: '🖼️',
  },
  {
    id: '6',
    name: 'DALL·E 4',
    description: 'OpenAI的图像生成模型，支持文本精确渲染和复杂场景构图。',
    category: 'image',
    link: 'https://openai.com/dall-e',
    icon: '🎯',
  },
  {
    id: '7',
    name: 'Stable Diffusion 4',
    description: 'Stability AI的开源图像生成模型，支持本地部署和自定义微调。',
    category: 'image',
    link: 'https://stability.ai',
    icon: '⚡',
  },
  {
    id: '8',
    name: 'GitHub Copilot',
    description: 'GitHub与OpenAI联合推出的AI编程助手，深度集成IDE，实时代码补全。',
    category: 'code',
    link: 'https://github.com/features/copilot',
    icon: '🐙',
  },
  {
    id: '9',
    name: 'Cursor',
    description: '基于AI的下一代代码编辑器，支持全代码库理解和自然语言编程。',
    category: 'code',
    link: 'https://cursor.sh',
    icon: '🖱️',
  },
  {
    id: '10',
    name: 'ElevenLabs',
    description: '领先的AI语音合成和克隆平台，支持多语言自然语音生成。',
    category: 'voice',
    link: 'https://elevenlabs.io',
    icon: '🔊',
  },
  {
    id: '11',
    name: 'Sora',
    description: 'OpenAI的视频生成模型，支持从文本描述生成高质量视频片段。',
    category: 'video',
    link: 'https://openai.com/sora',
    icon: '🎥',
  },
  {
    id: '12',
    name: 'Runway',
    description: '专业级AI视频创作平台，支持视频编辑、生成和特效制作。',
    category: 'video',
    link: 'https://runwayml.com',
    icon: '✂️',
  },
]

