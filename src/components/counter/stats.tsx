



const CounterStats = () => {
  const stats = [
    { name: 'Words', stat: '71,897' },
    { name: 'Character', stat: '58.16' },
    { name: 'Senteces', stat: '24.57' },
    { name: 'Paragraph', stat: '24.57' },
  ]

  return (
    <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
      {stats.map((item) => (
        <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
          <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
          <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
        </div>
      ))}
    </dl>
  )
}

export default CounterStats