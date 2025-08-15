import {motion} from 'framer-motion'

const Problem = () => {
    const problems = [
        {
            emoji: "😰",
            title: "将来への不安",
            description: "このままでいいのか、何をすべきかわからない"
        },
        {
            emoji: "🔄",
            title: "繰り返す日々",
            description: "同じような毎日の繰り返しで成長を感じられない"
        },
        {
            emoji: "💭",
            title: "過去への執着",
            description: "過去の失敗や後悔が今の行動を妨げている"
        },
        {
            emoji: "🎯",
            title: "目標の不明確",
            description: "やりたいことはあるけど、具体的な道筋が見えない"
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
                    className="text-center mt-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8, delay: 0.4}}
                    viewport={{once: true}}
                >
                    <p className="text-2xl font-medium text-gray-800 mb-4">
                        でも、大丈夫。
                    </p>
                    <p className="text-xl text-gray-600">
                        DARプログラムがあなたの人生を変える
                        <span className="text-orange-600 font-semibold">きっかけ</span>
                        をお届けします。
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Problem