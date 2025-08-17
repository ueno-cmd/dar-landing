import {motion} from 'framer-motion'

const Problem = () => {
    const problems = [
        {
            emoji: "🔍",
            title: "自分らしさ迷子",
            description: "日々の忙しさの中で「本当の自分」や「生き方の軸」を見失いかけている。"
        },
        {
            emoji: "💭",
            title: "言葉にならない違和感",
            description: "周囲に合わせて生きているけれど、どこかで「このままでいいのか」と感じている。"
        },
        {
            emoji: "🤝",
            title: "つながりの質に飢えている",
            description: "人と関わる仕事をしているけれど、もっと深い対話や本質的なつながりを求めている。"
        },
        {
            emoji: "🌌",
            title: "地に足のついたスピリチュアルを探している",
            description: "哲学やスピリチュアルに惹かれるけれど、抽象的すぎる世界には馴染めない。"
        }
    ]

    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        こんな悩みを
                        <span className="text-orange-500">抱えていませんか？</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        多くの人が感じている、人生への迷いや不安。
                        あなただけではありません。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {problems.map((problem, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <div className="text-6xl mb-4 text-center">{problem.emoji}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                {problem.title}
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                {problem.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="bg-white rounded-3xl p-8 md:p-12 mt-16 shadow-lg"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    viewport={{once: true}}
                >
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            DARは、そんなあなたを支えます
                        </h3>
                        <p className="text-lg text-gray-600">
                            それぞれの悩みに寄り添い、あなたらしい答えを見つけるお手伝いをします
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-800 font-medium mb-2">🔍 自分らしさ迷子</p>
                                <p className="text-gray-600 text-sm">静かな問いと対話を通して、あなたの"内なる声"をそっと拾い上げます。</p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium mb-2">💭 言葉にならない違和感</p>
                                <p className="text-gray-600 text-sm">違和感を否定せず、言葉にならない気持ちに居場所をつくります。</p>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div>
                                <p className="text-gray-800 font-medium mb-2">🤝 つながりの質に飢えている</p>
                                <p className="text-gray-600 text-sm">表面的な交流を超えて、共鳴と変容を生む場づくりを体験できます。</p>
                            </div>
                            <div>
                                <p className="text-gray-800 font-medium mb-2">🌌 地に足のついたスピリチュアルを探している</p>
                                <p className="text-gray-600 text-sm">詩的でありながら実践的。あなたの感性に寄り添いながら、意味を編み直します。</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Problem