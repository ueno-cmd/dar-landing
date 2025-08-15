import {motion} from 'framer-motion'
import backgroundImage from '../assets/5ff7a918f45bf42d.png'

const ProgramIntro = () => {
    const features = [
        {
            icon: "🎯",
            title: "個人に最適化",
            description: "あなた専用のアプローチで人生設計をサポート"
        },
        {
            icon: "🏔️",
            title: "選べる形式",
            description: "オンライン完結または自然豊かな合宿から選択可能"
        },
        {
            icon: "📝",
            title: "実践的内容",
            description: "理論だけでなく、具体的な行動計画まで"
        },
        {
            icon: "🤝",
            title: "段階的成長",
            description: "4つのステップ、または2泊3日の合宿で確実にステップアップ"
        }
    ]

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-orange-500">DAR</span>プログラムとは？
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-2xl font-medium text-gray-800 mb-4">
                            ダイナマイトアーチストリトリート
                        </p>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            あなたの人生を「作品」として捉え、過去を整理し、現在を理解し、
                            未来を設計する革新的なプログラムです。
                            わずか4つのセッション、または自然豊かな場所での合宿で、人生の転機を創り出します。
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="text-center"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    {/* 背景オーバーレイ */}
                    <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
                    
                    {/* コンテンツ */}
                    <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-6">
                        なぜ「ダイナマイト」なのか？
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-white leading-relaxed mb-6">
                            人生の中で、<span
                            className="font-semibold text-orange-300">本当の自分やまだ見ぬ可能性（原石）</span>に出会うには、時に深い坑道を進む必要があります。
                            DARプログラムの「ダイナマイト」は、無謀な爆発ではなく、安全に岩盤を切り開くための道具。

                        </p>
                        <p className="text-lg text-white leading-relaxed mb-6">
                            あなたの中の<span className="font-semibold text-orange-200">原石</span>に近づいたその瞬間、「カチリ」と導火線に火が灯り、可能性の扉が静かに、しかし確実に開き始めます。
                        </p>
                        <p className="text-lg text-white leading-relaxed">
                            安全で着実に、あなたらしさの
                            <span className="text-orange-300 font-semibold">鉱脈</span>
                            を掘り進めましょう。
                        </p>
                    </div>
                    <div className="absolute bottom-4 right-6 text-sm text-white/80">
                        DARプロジェクト代表：KEIGO
                    </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default ProgramIntro