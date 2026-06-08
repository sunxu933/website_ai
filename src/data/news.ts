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
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%236366f1%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eGPT-5%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '2',
    title: 'Google DeepMind推出Gemini 2.5 Ultra',
    summary: 'DeepMind发布Gemini 2.5 Ultra，原生支持200万token上下文窗口，在代码生成和数学推理方面表现卓越。',
    date: '2026-06-05',
    tag: '大模型',
    source: 'Google AI Blog',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%2310b981%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eGemini+2.5+Ultra%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '3',
    title: 'Anthropic Claude 4发布：安全对齐新标杆',
    summary: 'Anthropic发布Claude 4系列模型，采用全新的宪法式AI训练方法，在有害内容过滤和指令遵循方面达到行业领先水平。',
    date: '2026-06-03',
    tag: '大模型',
    source: 'Anthropic Blog',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%23f59e0b%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eClaude+4%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '4',
    title: 'Meta开源Llama 4：社区生态蓬勃发展',
    summary: 'Meta发布Llama 4系列开源模型，参数规模从8B到405B不等，采用混合专家架构，性能接近闭源顶级模型。',
    date: '2026-05-28',
    tag: '开源',
    source: 'Meta AI',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%238b5cf6%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eLlama+4%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '5',
    title: 'AI编程助手市场格局：GitHub Copilot与Cursor对决',
    summary: '最新数据显示，AI编程助手市场GitHub Copilot保持领先，但Cursor凭借深度代码理解能力快速追赶，开发者满意度创新高。',
    date: '2026-05-25',
    tag: 'AI工具',
    source: 'TechCrunch',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%23ec4899%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eAI+Coding%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '6',
    title: 'AI视频生成进入新时代：Sora 2.0与可灵2.0对比',
    summary: 'OpenAI Sora 2.0和快手的可灵2.0相继发布，AI视频生成质量接近专业制作水平，时长和一致性显著提升。',
    date: '2026-05-20',
    tag: 'AI视频',
    source: '机器之心',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%2306b6d4%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eSora+2.0%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '7',
    title: 'AI治理里程碑：欧盟AI法案全面生效',
    summary: '欧盟人工智能法案正式全面生效，对高风险AI系统实施严格监管，全球AI治理进入新阶段。',
    date: '2026-05-15',
    tag: 'AI政策',
    source: 'Reuters',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%23ef4444%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eEU+AI+Act%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
  {
    id: '8',
    title: 'AI Agent元年：自主智能体落地企业应用',
    summary: '2026年被称为AI Agent元年，多家企业推出自主AI代理产品，能够独立完成复杂工作流程，企业效率提升显著。',
    date: '2026-05-10',
    tag: 'AI应用',
    source: '36氪',
    imageUrl: 'data:image/svg+xml,%3csvg+xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22+width%3d%22600%22+height%3d%22400%22%3e%0a++%3crect+width%3d%22600%22+height%3d%22400%22+fill%3d%22%2314b8a6%22%2f%3e%0a++%3ctext+x%3d%22300%22+y%3d%22200%22+font-family%3d%22Arial%2csans-serif%22+font-size%3d%2222%22+fill%3d%22white%22+text-anchor%3d%22middle%22+dominant-baseline%3d%22middle%22+font-weight%3d%22bold%22%3eAI+Agent%3c%2ftext%3e%0a%3c%2fsvg%3e',
  },
]

