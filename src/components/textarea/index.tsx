const TextArea = () => {

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {

    const target = e.target as HTMLTextAreaElement

    console.log(target.value)
  }

  return (
    <div className="textarea my-10">
      <textarea
        rows={5}
        name="comment"
        id="comment"
        className="block w-full rounded-md border-0 py-8 px-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Start typing or Paste your text here......."
        defaultValue={''}
        onKeyUp={(e) => handleKeyUp(e)}
      />

    </div>
  )
}

export default TextArea