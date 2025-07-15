import AlrightIcon from '../assets/icons/emoji/alright.png'
import BadIcon from '../assets/icons/emoji/bad.png'

export interface EmojiOption {
  id: number
  iconPath: string
  label: string
}

export interface EmojiCheckinConfig {
  question: string
  options: EmojiOption[]
}

export const emojiCheckinData: EmojiCheckinConfig = {
  question: "Hello! How are you feeling today?",
  options: [
    { id: 1, iconPath: AlrightIcon, label: "Terrible" },
    { id: 2, iconPath: BadIcon, label: "Bad" },
    { id: 3, iconPath: BadIcon, label: "Alright" },
    { id: 4, iconPath: AlrightIcon, label: "Pretty Good" },
    { id: 5, iconPath: BadIcon, label: "Fantastic" },
  ]
}