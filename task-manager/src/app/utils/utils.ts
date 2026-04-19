export function uid(): string {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export function addDaysISO(n: number): string {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return d.toISOString().slice(0, 10);
}

export function proximityColor(dueISO: string){
  const today = new Date()
  const due = new Date(dueISO)
  const diff = Math.ceil((due.getTime() - today.getTime()) / (1000*60*60*24))
  if (diff < 0) return 'bg-gray-500' // passed
  if (diff <= 1) return 'bg-red-500'
  if (diff <= 3) return 'bg-orange-400'
  if (diff <= 7) return 'bg-yellow-300'
  return 'bg-green-400'
}