export interface ModelItem {
  id: string
  rank: number
  name: string
  provider: string
  parameters: string
  mmluScore: number
  releaseDate: string
  type: string
}

export const modelsData: ModelItem[] = [
  {
    id: '1',
    rank: 1,
    name: 'GPT-5',
    provider: 'OpenAI',
    parameters: '未公开',
    mmluScore: 92.8,
    releaseDate: '2026-06',
    type: '闭源',
  },
  {
    id: '2',
    rank: 2,
    name: 'Gemini 2.5 Ultra',
    provider: 'Google',
    parameters: '未公开',
    mmluScore: 91.5,
    releaseDate: '2026-06',
    type: '闭源',
  },
  {
    id: '3',
    rank: 3,
    name: 'Claude 4 Opus',
    provider: 'Anthropic',
    parameters: '未公开',
    mmluScore: 90.2,
    releaseDate: '2026-06',
    type: '闭源',
  },
  {
    id: '4',
    rank: 4,
    name: 'Llama 4 405B',
    provider: 'Meta',
    parameters: '405B',
    mmluScore: 88.9,
    releaseDate: '2026-05',
    type: '开源',
  },
  {
    id: '5',
    rank: 5,
    name: 'Qwen 3',
    provider: '阿里通义',
    parameters: '72B',
    mmluScore: 87.6,
    releaseDate: '2026-05',
    type: '开源',
  },
  {
    id: '6',
    rank: 6,
    name: 'Grok 4',
    provider: 'xAI',
    parameters: '未公开',
    mmluScore: 86.3,
    releaseDate: '2026-05',
    type: '闭源',
  },
  {
    id: '7',
    rank: 7,
    name: 'DeepSeek-V3',
    provider: '深度求索',
    parameters: '671B',
    mmluScore: 85.8,
    releaseDate: '2026-04',
    type: '开源',
  },
  {
    id: '8',
    rank: 8,
    name: 'Mistral Large 3',
    provider: 'Mistral AI',
    parameters: '未公开',
    mmluScore: 84.5,
    releaseDate: '2026-05',
    type: '开源',
  },
]

