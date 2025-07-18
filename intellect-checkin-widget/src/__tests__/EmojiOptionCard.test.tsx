// __tests__/EmojiOptionCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import EmojiOptionCard from '../components/baseline-ui/EmojiOptionCard'

const mockEmoji = {
  id: 1,
  label: 'Happy',
  iconPath: '/happy.png'
}

describe('EmojiOptionCard', () => {
  it('renders emoji label and image', () => {
    render(<EmojiOptionCard emoji={mockEmoji} isSelected={false} onSelect={() => {}} />)
    expect(screen.getByText('Happy')).toBeInTheDocument()
    expect(screen.getByAltText('Happy')).toBeInTheDocument()
  })

  it('adds selected class when isSelected is true', () => {
    render(<EmojiOptionCard emoji={mockEmoji} isSelected={true} onSelect={() => {}} />)
    const button = screen.getByRole('button')
    expect(button.className).toMatch(/bg-\[#1c8bf225\]/)
  })

  it('calls onSelect when clicked', () => {
    const handleSelect = vi.fn()
    render(<EmojiOptionCard emoji={mockEmoji} isSelected={false} onSelect={handleSelect} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleSelect).toHaveBeenCalled()
  })
})
