export class WordService {
  private words = '';

  constructor(word: string) {

    this.words = word; // remove empty words
  }

  // get character count from word, split words by spaces, new line, and dots
  getWordCount() {
    return this.words ? this.words.split(/\s+/)?.length : 0;
  }

  // get word count from word
  getWord() {
    return this.words;
  }

  // get sentence count from word
  getSentenceCount() {
    return this.words ? this.words.split(/\./).length : 0;
  }

  // get paragraph count from word
  getParagraphCount() {
    return this.words ? this.words.split(/\n/).length : 0;
  }

  // get sentence count from word
  getCharCount() {
    return this.words ? this.words.split('').length : 0;
  }
}