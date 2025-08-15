const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
    >
      メインコンテンツにスキップ
    </a>
  )
}

export default SkipLink