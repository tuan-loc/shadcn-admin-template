import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Circle,
  CheckCircle,
  AlertCircle,
  Timer,
  HelpCircle,
  CircleOff,
} from 'lucide-react'

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
]

export const statuses = [
  {
    value: 'backlog' as const,
    label: 'Backlog',
    icon: HelpCircle,
  },
  {
    value: 'todo' as const,
    label: 'Todo',
    icon: Circle,
  },
  {
    value: 'in progress' as const,
    label: 'In Progress',
    icon: Timer,
  },
  {
    value: 'done' as const,
    label: 'Done',
    icon: CheckCircle,
  },
  {
    value: 'canceled' as const,
    label: 'Canceled',
    icon: CircleOff,
  },
]

export const priorities = [
  {
    label: 'Low',
    value: 'low' as const,
    icon: ArrowDown,
  },
  {
    label: 'Medium',
    value: 'medium' as const,
    icon: ArrowRight,
  },
  {
    label: 'High',
    value: 'high' as const,
    icon: ArrowUp,
  },
  {
    label: 'Critical',
    value: 'critical' as const,
    icon: AlertCircle,
  },
]
