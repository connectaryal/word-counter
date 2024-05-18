import { useState } from "react"
import { WordService } from "../../services/word.service";

const useWordCount = () => {

  const [words, setWord] = useState<string>('');

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement

    setWord(target.value)
  }

  const wordService = new WordService(words);

  const stats = [
    { name: 'Words', stat: wordService.getWordCount() },
    { name: 'Character', stat: wordService.getCharCount() },
    { name: 'Senteces', stat: wordService.getSentenceCount() },
    { name: 'Paragraph', stat: wordService.getParagraphCount() },
  ];

  return {
    words,
    handleKeyUp,
    stats
  }
}

export default useWordCount