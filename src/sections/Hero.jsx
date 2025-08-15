import {motion} from 'framer-motion'
import Button from '../components/Button'
import darImage from '../assets/DAR_v1.avif'

const Hero = () => {
    const scrollToForm = () => {
        document.getElementById('application-form')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <section
            className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                            あなたの人生を
                            <span className="text-orange-500 block">再デザイン</span>
                            しませんか？
                        </h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.2}}
                        >
                            ダイナマイトアーチストリトリート（DAR）で、
                            <br/>
                            あなたの過去を整理し、未来を設計する
                            <span className="font-semibold text-orange-600">特別プログラム</span>
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            <div className="bg-white rounded-xl p-4 shadow-md border border-blue-200 w-full sm:w-auto">
                                <h3 className="text-lg font-bold text-blue-600 mb-2">プチDAR（オンライン版）</h3>
                                <p className="text-sm text-gray-600 mb-2">4回のオンラインセッション</p>
                                <p className="text-xl font-bold text-gray-800">5,000円</p>
                            </div>

                            <div
                                className="bg-white rounded-xl p-4 shadow-md border border-orange-200 w-full sm:w-auto">
                                <h3 className="text-lg font-bold text-orange-600 mb-2">DAR合宿（リアル版）</h3>
                                <p className="text-sm text-gray-600 mb-2">2泊3日の集中プログラム</p>
                                <p className="text-xl font-bold text-gray-800">20,000円</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex justify-center lg:justify-start"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            <Button
                                size="lg"
                                onClick={scrollToForm}
                                className="min-w-[250px]"
                            >
                                プログラムを選んで申し込む
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <div className="relative">
                            <img
                                src={darImage}
                                alt="DAR - ダイナマイトアーチストリトリート"
                                className="max-w-full h-auto max-h-[600px] rounded-2xl shadow-2xl"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero