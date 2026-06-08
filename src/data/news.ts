export interface NewsItem {
  id: string
  title: string
  summary: string
  date: string
  tag: string
  source: string
  imageUrl: string
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'OpenAI发布GPT-5：多模态能力再突破',
    summary: 'OpenAI正式发布GPT-5，支持文本、图像、音频的多模态输入与输出，推理能力大幅提升，在多项基准测试中刷新纪录。',
    date: '2026-06-07',
    tag: '大模型',
    source: 'OpenAI官方',
    imageUrl: 'https://placehold.co/600x400/6366f1/ffffff?text=GPT-5',
  },
  {
    id: '2',
    title: 'Google DeepMind推出Gemini 2.5 Ultra',
    summary: 'DeepMind发布Gemini 2.5 Ultra，原生支持200万token上下文窗口，在代码生成和数学推理方面表现卓越。',
    date: '2026-06-05',
    tag: '大模型',
    source: 'Google AI Blog',
    imageUrl: 'https://placehold.co/600x400/10b981/ffffff?text=Gemini+2.5',
  },
  {
    id: '3',
    title: 'Anthropic Claude 4发布：安全对齐新标杆',
    summary: 'Anthropic发布Claude 4系列模型，采用全新的宪法式AI训练方法，在有害内容过滤和指令遵循方面达到行业领先水平。',
    date: '2026-06-03',
    tag: '大模型',
    source: 'Anthropic Blog',
    imageUrl: 'https://placehold.co/600x400/f59e0b/ffffff?text=Claude+4',
  },
  {
    id: '4',
    title: 'Meta开源Llama 4：社区生态蓬勃发展',
    summary: 'Meta发布Llama 4系列开源模型，参数规模从8B到405B不等，采用混合专家架构，性能接近闭源顶级模型。',
    date: '2026-05-28',
    tag: '开源',
    source: 'Meta AI',
    imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Llama+4',
  },
  {
    id: '5',
    title: 'AI编程助手市场格局：GitHub Copilot与Cursor对决',
    summary: '最新数据显示，AI编程助手市场GitHub Copilot保持领先，但Cursor凭借深度代码理解能力快速追赶，开发者满意度创新高。',
    date: '2026-05-25',
    tag: 'AI工具',
    source: 'TechCrunch',
    imageUrl: 'https://placehold.co/600x400/ec4899/ffffff?text=AI+Coding',
  },
  {
    id: '6',
    title: 'AI视频生成进入新时代：Sora 2.0与可灵2.0对比',
    summary: 'OpenAI Sora 2.0和快手的可灵2.0相继发布，AI视频生成质量接近专业制作水平，时长和一致性显著提升。',
    date: '2026-05-20',
    tag: 'AI视频',
    source: '机器之心',
    imageUrl: 'https://placehold.co/600x400/06b6d4/ffffff?text=Sora+2.0',
  },
  {
    id: '7',
    title: 'AI治理里程碑：欧盟AI法案全面生效',
    summary: '欧盟人工智能法案正式全面生效，对高风险AI系统实施严格监管，全球AI治理进入新阶段。',
    date: '2026-05-15',
    tag: 'AI政策',
    source: 'Reuters',
    imageUrl: 'https://placehold.co/600x400/ef4444/ffffff?text=EU+AI+Act',
  },
  {
    id: '8',
    title: 'AI Agent元年：自主智能体落地企业应用',
    summary: '2026年被称为AI Agent元年，多家企业推出自主AI代理产品，能够独立完成复杂工作流程，企业效率提升显著。',
    date: '2026-05-10',
    tag: 'AI应用',
    source: '36氪',
    imageUrl: 'https://placehold.co/600x400/14b8a6/ffffff?text=AI+Agent',
  },
]

