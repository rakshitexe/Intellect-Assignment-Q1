// Import emoji icon images
import AlrightIcon from '../assets/icons/emoji/alright.png'
import BadIcon from '../assets/icons/emoji/bad.png'
import FantasticIcon from '../assets/icons/emoji/fantastic.png'
import TerribleIcon from '../assets/icons/emoji/terrible.png'
import PrettyGoodIcon from '../assets/icons/emoji/prettygood.png'

// Type for a single emoji option
export interface EmojiOption {
  id: number
  iconPath: string
  label: string
}

// Type for the full emoji check-in configuration
export interface EmojiCheckinConfig {
  question: string
  options: EmojiOption[]
}

// Emoji check-in data used in the widget
export const emojiCheckinData: EmojiCheckinConfig = {
  question: "Hello! How are you feeling today?",
  options: [
    { id: 1, iconPath: TerribleIcon, label: "Terrible" },
    { id: 2, iconPath: BadIcon, label: "Bad" },
    { id: 3, iconPath: AlrightIcon, label: "Alright" },
    { id: 4, iconPath: PrettyGoodIcon, label: "Pretty Good" },
    { id: 5, iconPath: FantasticIcon, label: "Fantastic" },
  ]
}
