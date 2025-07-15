
export interface EmojiOption {
  id: number
  icon: string
  label: string
}

export const emojiOptions: EmojiOption[] = [
  { id: 1, icon: "😞", label: "Terrible" },
  { id: 2, icon: "😔", label: "Bad" },
  { id: 3, icon: "😐", label: "Alright" },
  { id: 4, icon: "🙂", label: "Pretty Good" },
  { id: 5, icon: "😄", label: "Fantastic" },
]
