import { motion } from 'framer-motion'
import Button from './Button'

const Header = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const scrollToForm = () => {
    document.getElementById('application-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  const navItems = [
    { label: 'DARとは', id: 'program-intro' },
    { label: 'プログラム比較', id: 'program-comparison' },
    { label: 'プチDAR', id: 'petit-dar-sessions' },
    { label: 'DAR合宿', id: 'camp-sessions' },
    { label: '料金', id: 'pricing' },
    { label: '申し込み', id: 'application-form' }
  ]

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">DAR</h1>
              <p className="text-xs text-gray-600">ダイナマイトアーチストリトリート</p>
            </div>
          </motion.div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-600 hover:text-orange-600 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              size="sm" 
              onClick={scrollToForm}
              className="hidden sm:block"
            >
              申し込み
            </Button>
            
            <motion.button
              className="lg:hidden flex flex-col gap-1 p-2"
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-6 h-0.5 bg-gray-600"></span>
              <span className="w-6 h-0.5 bg-gray-600"></span>
              <span className="w-6 h-0.5 bg-gray-600"></span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header