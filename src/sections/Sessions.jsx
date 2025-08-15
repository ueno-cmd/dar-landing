import { motion } from 'framer-motion'

const Sessions = () => {
  const sessions = [
    {
      number: "01",
      title: "ゴール設定と行動設計・記録導入",
      description: "あなたの真の目標を明確化し、それを達成するための具体的な行動計画を立てます。記録システムを導入して進捗を可視化します。",
      icon: "🎯",
      color: "from-blue-400 to-blue-600"
    },
    {
      number: "02", 
      title: "ライフストーリーの棚卸・作成",
      description: "これまでの人生を振り返り、重要な出来事や経験を整理します。あなただけのライフストーリーを作成し、パターンを見つけ出します。",
      icon: "📖",
      color: "from-green-400 to-green-600"
    },
    {
      number: "03",
      title: "転機の深掘り",
      description: "人生の転機となった出来事を深く分析し、そこから得られた学びや成長を明確化します。失敗も成功も、すべてが財産です。",
      icon: "🔍", 
      color: "from-purple-400 to-purple-600"
    },
    {
      number: "04",
      title: "未来設計＆DAへの架け橋",
      description: "これまでのセッションを統合し、理想の未来を設計します。そして、その実現に向けた次のステップへの道筋を明確にします。",
      icon: "🚀",
      color: "from-orange-400 to-orange-600"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-500">プチDAR</span>
            4つのオンラインセッション
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zoomで段階的に進む設計により、確実にあなたの人生を前進させます
          </p>
        </motion.div>

        <div className="space-y-8">
          {sessions.map((session, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className={`w-32 h-32 bg-gradient-to-br ${session.color} rounded-2xl flex items-center justify-center text-white mb-4`}>
                    <span className="text-5xl">{session.icon}</span>
                  </div>
                  <div className="text-center">
                    <span className="text-sm font-medium text-gray-500">Session</span>
                    <div className="text-3xl font-bold text-gray-800">{session.number}</div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {session.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {session.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              セッション形式
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📅 スケジュール</h4>
                <p className="text-gray-600">週1回、約60分のセッション</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💻 開催方法</h4>
                <p className="text-gray-600">Zoomを使用したオンライン</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">👥 参加形式</h4>
                <p className="text-gray-600">個人セッション + グループ要素</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">📋 サポート</h4>
                <p className="text-gray-600">セッション間の課題とフォロー</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Sessions