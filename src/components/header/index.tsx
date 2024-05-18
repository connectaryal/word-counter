const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Header = () => {
  return (
    <header className="w-full bg-white">

      <div className="flex justify-between">

        <div className="logo">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Word Counter
          </h1>

        </div>
        <div className="menu">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header;