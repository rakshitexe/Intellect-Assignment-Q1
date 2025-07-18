import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import EmojiCheckinWidget from '../components/EmojiCheckinWidget';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { emojiCheckinData } from '../data/emojiData';
// src/setupTests.ts or wherever your setup file is


describe('EmojiCheckinWidget', () => {
  const onCloseMock = vi.fn();

  const renderComponent = () => {
    return render(
      <Provider store={store}>
        <EmojiCheckinWidget onClose={onCloseMock} />
      </Provider>
    );
  };

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  it('renders the greeting step initially', () => {
    renderComponent();
    expect(screen.getByText('Wellbeing Check-in')).toBeInTheDocument();
    expect(screen.queryByText(/Hello! How are you feeling today/i)).not.toBeInTheDocument();
  });

  it('transitions to select step on continue click', () => {
    renderComponent();
    const continueBtn = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(continueBtn);
    expect(screen.getByText(/Hello! How are you feeling today/i)).toBeInTheDocument();
  });

  it('disables continue button when no emoji is selected', () => {
    renderComponent();
    const continueBtn = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(continueBtn); // go to select step

    // Check that we're at the select step
    expect(screen.getByText(/Hello! How are you feeling today/i)).toBeInTheDocument();
    const nextContinueBtn = screen.getByRole('button', { name: /continue/i });

    expect(nextContinueBtn).toBeDisabled();
  });

//   it('enables continue button when an emoji is selected', () => {
//     renderComponent();
//     const continueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(continueBtn); // go to select step

//     const emojiToSelect = emojiCheckinData.options[3].id;
//     const emojiOption = screen.getByTestId(`emoji-option-${emojiToSelect}`);
//     fireEvent.click(emojiOption);

//     const nextContinueBtn = screen.getByRole('button', { name: /continue/i });
//     expect(nextContinueBtn).not.toBeDisabled();
//   });

//   it('transitions to summary step after selecting emoji and clicking continue', () => {
//     renderComponent();
//     const continueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(continueBtn); // greeting → select

//     const emojiToSelect = emojiCheckinData.options[2].id;
//     const emojiOption = screen.getByTestId(`emoji-option-${emojiToSelect}`);
//     fireEvent.click(emojiOption);

//     const nextContinueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(nextContinueBtn); // select → summary

//     const selectedLabel = emojiCheckinData.options[2].label;
//     expect(screen.getByText(`You’re feeling:`)).toBeInTheDocument();
//     expect(screen.getByText(selectedLabel)).toBeInTheDocument();
//   });

//   it('calls onClose after clicking Finish on summary step', async () => {
//     renderComponent();
//     const continueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(continueBtn); // greeting → select

//     const emojiToSelect = emojiCheckinData.options[1].id;
//     const emojiOption = screen.getByTestId(`emoji-option-${emojiToSelect}`);
//     fireEvent.click(emojiOption);

//     const nextContinueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(nextContinueBtn); // select → summary

//     const finishBtn = screen.getByRole('button', { name: /finish/i });
//     fireEvent.click(finishBtn); // summary → done

//     await waitFor(() => {
//       expect(onCloseMock).toHaveBeenCalled();
//     }, { timeout: 1000 });
//   });

//   it('navigates back from summary to select', () => {
//     renderComponent();
//     const continueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(continueBtn); // greeting → select

//     const emojiToSelect = emojiCheckinData.options[3].id;
//     const emojiOption = screen.getByTestId(`emoji-option-${emojiToSelect}`);
//     fireEvent.click(emojiOption);

//     const nextContinueBtn = screen.getByRole('button', { name: /continue/i });
//     fireEvent.click(nextContinueBtn); // select → summary

//     const backBtn = screen.getByRole('button', { name: /back/i });
//     fireEvent.click(backBtn); // summary → select

//     expect(screen.getByText(/Hello! How are you feeling today/i)).toBeInTheDocument();
//   });

  it('navigates back from select to greeting', () => {
    renderComponent();
    const continueBtn = screen.getByRole('button', { name: /continue/i });
    fireEvent.click(continueBtn); // greeting → select

    const backBtn = screen.getByRole('button', { name: /back/i });
    fireEvent.click(backBtn); // select → greeting

    expect(screen.getByText(/Wellbeing Check-in/i)).toBeInTheDocument();
  });
});
