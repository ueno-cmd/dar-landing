import {motion} from 'framer-motion'
import formBackground from '../assets/e89790b00539d9d9.png'

const ApplicationForm = () => {

    return (
        <section 
            id="application-form" 
            className="py-20 px-4 relative overflow-hidden"
            style={{
                backgroundImage: `url(${formBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* 背景オーバーレイ */}
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="max-w-3xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-orange-300">申し込み</span>フォーム
                    </h2>
                    <p className="text-xl text-white/90">
                        あなたの人生を変える第一歩を踏み出しましょう
                    </p>
                </motion.div>

                <motion.div
                    className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    {/* 準備中メッセージ */}
                    <div className="text-center py-16">
                        <div className="text-6xl mb-6">🚧</div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            申し込みフォーム準備中
                        </h3>
                        <p className="text-lg text-gray-600 mb-6">
                            現在、申し込みフォームの準備を進めております。<br />
                            近日中に公開予定ですので、今しばらくお待ちください。
                        </p>
                        <div className="bg-orange-50 rounded-xl p-6 max-w-md mx-auto">
                            <h4 className="font-semibold text-orange-800 mb-2">お問い合わせ</h4>
                            <p className="text-sm text-orange-700">
                                ご質問やお急ぎの場合は、<br />
                                以下までお気軽にお問い合わせください。
                            </p>
                            <p className="text-sm text-orange-800 font-medium mt-2">
                                メール: [準備中]
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ApplicationForm