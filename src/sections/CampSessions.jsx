import {motion} from 'framer-motion'

const CampSessions = () => {
    const schedule = [
        {
            day: "1日目",
            time: "到着〜夕方",
            activities: [
                {time: "13:00", activity: "集合・受付", icon: "🏠"},
                {time: "14:00", activity: "アイスブレイク", icon: "👋"},
                {time: "15:00", activity: "ガイダンス・班発表", icon: "📋"},
                {time: "16:00", activity: "一緒に料理タイム", icon: "👨‍🍳"},
                {time: "17:00", activity: "夕食", icon: "🍽️"},
                {time: "20:00", activity: "人生のコンセプト・サービス作り会", icon: "💡"},
                {time: "22:00", activity: "就寝", icon: "🛏️"}
            ],
            color: "from-blue-400 to-blue-600"
        },
        {
            day: "2日目",
            time: "朝〜夕方",
            activities: [
                {time: "5:00", activity: "朝散歩", icon: "🌅"},
                {time: "6:00", activity: "やりたい事動画撮影", icon: "📹"},
                {time: "7:00", activity: "アーティストデート予定立て", icon: "📝"},
                {time: "7:30", activity: "朝食", icon: "🍽️"},
                {time: "9:00", activity: "人生のコンセプト・哲学カフェ", icon: "🧠"},
                {time: "12:00", activity: "昼食", icon: "🍽️"},
                {time: "13:00", activity: "サービス仕合", icon: "🎨"},
                {time: "17:30", activity: "夕食", icon: "🍽️"},
                {time: "19:00", activity: "キャンプファイヤー", icon: "🔥"},
                {time: "22:00", activity: "就寝", icon: "🛏️"}
            ],
            color: "from-green-400 to-green-600"
        },
        {
            day: "3日目",
            time: "朝〜午後",
            activities: [
                {time: "5:00", activity: "朝散歩", icon: "🌅"},
                {time: "6:00", activity: "やりたい事動画撮影", icon: "📹"},
                {time: "7:00", activity: "アーティストデート予定立て", icon: "📝"},
                {time: "7:30", activity: "朝食", icon: "🍽️"},
                {time: "8:30", activity: "部屋点検", icon: "🏠"},
                {time: "9:00", activity: "班シェア会", icon: "💬"},
                {time: "10:00", activity: "全体シェア会", icon: "🎯"},
                {time: "11:00", activity: "集合写真・送会", icon: "📸"},
                {time: "12:00", activity: "昼食", icon: "🍽️"},
                {time: "13:00", activity: "解散", icon: "👋"}
            ],
            color: "from-orange-400 to-orange-600"
        }
    ]

    const features = [
        {
            icon: "🏕️",
            title: "自然豊かな環境",
            description: "関東の美しい自然の中で、日常を離れた特別な体験"
        },
        {
            icon: "👥",
            title: "少人数制",
            description: "4〜6人の少人数班で、一人ひとりに寄り添ったサポート"
        },
        {
            icon: "🎨",
            title: "実践的内容",
            description: "商品作成から発表まで、実際に形にする体験型プログラム"
        },
        {
            icon: "🔥",
            title: "特別な体験",
            description: "キャンプファイヤーやシェア会など、絆を深める特別な時間"
        }
    ]

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        <span className="text-orange-500">DAR合宿（リアル版）</span>
                        2泊3日のスケジュール
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        関東の自然豊かな環境で、集中プログラムであなたの可能性を最大限に引き出します
                    </p>
                </motion.div>

                <div className="space-y-8 mb-16">
                    {schedule.map((day, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-lg"
                            initial={{opacity: 0, x: index % 2 === 0 ? -50 : 50}}
                            whileInView={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: index * 0.1}}
                            viewport={{once: true}}
                        >
                            <div className="flex flex-col lg:flex-row gap-8">
                                <div className="flex-shrink-0 text-center lg:text-left">
                                    <div
                                        className={`inline-block bg-gradient-to-br ${day.color} rounded-2xl p-6 text-white mb-4`}>
                                        <h3 className="text-2xl font-bold">{day.day}</h3>
                                        <p className="text-lg opacity-90">{day.time}</p>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <div className="grid gap-4">
                                        {day.activities.map((activity, actIndex) => (
                                            <div key={actIndex}
                                                 className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                                <div className="text-3xl">{activity.icon}</div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-gray-500 bg-white px-3 py-1 rounded-full">
                              {activity.time}
                            </span>
                                                        <span className="text-lg font-medium text-gray-900">
                              {activity.activity}
                            </span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="mb-16"
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                        DAR合宿の特徴
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="text-center bg-white p-6 rounded-2xl shadow-md"
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                            >
                                <div className="text-5xl mb-4">{feature.icon}</div>
                                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="text-center"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                >
                    <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            合宿についての詳細
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">📍 開催場所</h4>
                                <p className="text-gray-600 mb-4">関東の自然豊かな場所</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">🏠 宿泊施設</h4>
                                <p className="text-gray-600 mb-4">快適なコテージタイプの宿泊施設</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">🍽️ 食事</h4>
                                <p className="text-gray-600 mb-4">6食付き（夕・朝・昼・夕・朝・昼）</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-gray-800 mb-2">🎒 持ち物</h4>
                                <p className="text-gray-600 mb-4">着替えと筆記用具のみ<br/>（詳細は参加決定後にご案内）
                                </p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-6 text-center">
                            ※内容は必要に応じて変わる可能性があります。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default CampSessions