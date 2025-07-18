// __tests__/ContinueButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import ContinueButton from '../components/baseline-ui/NextButton'

describe('ContinueButton', () => {
  it('renders with default label', () => {
    render(<ContinueButton />)
    expect(screen.getByRole('button')).toHaveTextContent('Continue')
  })

  it('renders with custom label', () => {
    render(<ContinueButton label="Next Step" />)
    expect(screen.getByRole('button')).toHaveTextContent('Next Step')
  })

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn()
    render(<ContinueButton onClick={handleClick} />)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalled()
  })

  it('is disabled when disabled prop is true', () => {
    render(<ContinueButton disabled={true} />)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
