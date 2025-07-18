// __tests__/EmojiContainer.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import EmojiContainer from '../components/baseline-ui/EmojiContainer'

describe('EmojiContainer', () => {
  it('renders heading', () => {
    render(<EmojiContainer heading="How are you feeling today?">{<div>Content</div>}</EmojiContainer>)
    expect(screen.getByText('How are you feeling today?')).toBeInTheDocument()
  })

  it('renders children', () => {
    render(<EmojiContainer heading="Test">{<div>Custom Child</div>}</EmojiContainer>)
    expect(screen.getByText('Custom Child')).toBeInTheDocument()
  })

  it('calls onBack and onClose', () => {
    const backHandler = vi.fn()
    const closeHandler = vi.fn()

    render(
      <EmojiContainer
        heading="Test"
        onBack={backHandler}
        onClose={closeHandler}
      >
        <div>Child</div>
      </EmojiContainer>
    )

    fireEvent.click(screen.getByAltText('Back'))
    fireEvent.click(screen.getByText('✕'))

    expect(backHandler).toHaveBeenCalled()
    expect(closeHandler).toHaveBeenCalled()
  })

  it('renders continue button when enabled and calls onContinue', () => {
    const continueHandler = vi.fn()

    render(
      <EmojiContainer
        heading="Test"
        showContinueButton
        onContinue={continueHandler}
      >
        <div>Child</div>
      </EmojiContainer>
    )

    fireEvent.click(screen.getByText('Continue'))
    expect(continueHandler).toHaveBeenCalled()
  })
})
