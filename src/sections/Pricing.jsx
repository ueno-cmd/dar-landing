import {motion} from 'framer-motion'
import Button from '../components/Button'

const Pricing = () => {
    const scrollToForm = () => {
        document.getElementById('application-form')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    const programs = [
        {
            name: "プチDAR",
            subtitle: "オンライン版",
            price: "5,000",
            description: "4回のオンラインセッション + 全てのサポート込み",
            benefits: [
                "4回の個別セッション（各60分）",
                "ライフストーリー作成ワークシート",
                "目標設定・行動計画テンプレート",
                "セッション間のメールサポート",
                "録画データの提供（復習用）",
                "未来設計シート（最終成果物）"
            ],
            color: "blue",
            bgGradient: "from-blue-50 to-blue-100",
            borderColor: "border-blue-200"
        },
        {
            name: "DAR合宿",
            subtitle: "リアル版",
            price: "20,000",
            description: "2泊3日の集中プログラム + 全てのサポート込み",
            benefits: [
                "2泊3日の集中プログラム",
                "4〜6人の少人数班制サポート",
                "自然豊かな環境での体験",
                "商品作成＆実践ワークショップ",
                "キャンプファイヤー・シェア会",
                "宿泊・食事（5食）込み"
            ],
            color: "orange",
            bgGradient: "from-orange-50 to-orange-100",
            borderColor: "border-orange-200"
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
                        <span className="text-orange-500">投資価格</span>
                        について
                    </h2>
                    <p className="text-xl text-gray-600">
                        あなたの人生を変える価値ある投資
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            className={`bg-gradient-to-br ${program.bgGradient} rounded-3xl p-8 md:p-12 text-center shadow-lg border-2 ${program.borderColor}`}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: index * 0.2}}
                            viewport={{once: true}}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {program.name}
                                </h3>
                                <p className={`text-lg text-${program.color}-600 font-medium mb-4`}>
                                    {program.subtitle}
                                </p>
                                <div className="text-6xl font-bold text-gray-900 mb-2">
                                    <span className={`text-${program.color}-500`}>{program.price}</span>円
                                </div>
                                <p className="text-lg text-gray-600">
                                    {program.description}
                                </p>
                            </div>

                            <div className="grid gap-3 mb-8 text-left">
                                {program.benefits.map((benefit, benefitIndex) => (
                                    <motion.div
                                        key={benefitIndex}
                                        className="flex items-start gap-3"
                                        initial={{opacity: 0, x: -20}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.5, delay: benefitIndex * 0.1}}
                                        viewport={{once: true}}
                                    >
                                        <div className={`text-${program.color}-500 text-lg font-bold mt-0.5`}>✓</div>
                                        <span className="text-gray-700">{benefit}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="text-center mb-12"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <Button
                        size="lg"
                        onClick={scrollToForm}
                        className="min-w-[250px]"
                    >
                        プログラムを選んで申し込む
                    </Button>
                </motion.div>

                <motion.div
                    className="bg-gray-50 rounded-3xl p-8 text-center"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        なぜこの価格なのか？
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        通常、個人コーチングは1回数万円が相場です。
                        しかし、DARプログラムは「より多くの人に人生を変えるきっかけを提供したい」
                        という想いから、これらの特別価格を実現しました。
                        <span className="font-semibold text-orange-600">
                            あなたの人生への投資として、手の届く価格
                        </span>
                        で、人生が変わる体験をお届けします。
                    </p>
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <p className="text-lg text-gray-600 mb-4">
                        💡 <span className="font-semibold">注意</span>：モニター価格のため変動する可能性があります
                    </p>
                    <p className="text-sm text-gray-500">
                        ※ お支払いは申し込み確定後、詳細をご案内いたします
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Pricing