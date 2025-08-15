import { motion } from 'framer-motion'

const ProgramComparison = () => {
  const programs = [
    {
      name: "プチDAR",
      subtitle: "オンライン版",
      price: "5,000円",
      format: "Zoom",
      duration: "4セッション",
      schedule: "週1回、約60分",
      participants: "個人セッション + グループ要素",
      location: "自宅から参加",
      features: [
        "ゴール設定と行動設計・記録導入",
        "ライフストーリーの棚卸・作成", 
        "転機の深掘り",
        "未来設計＆DAへの架け橋"
      ],
      color: "blue",
      borderColor: "border-blue-200",
      bgColor: "from-blue-50 to-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "DAR合宿",
      subtitle: "リアル版",
      price: "20,000円", 
      format: "対面開催",
      duration: "2泊3日",
      schedule: "集中プログラム",
      participants: "4〜6人の少人数班制",
      location: "関東の自然豊かな場所",
      features: [
        "自己理解ワークショップ",
        "価値提供の場の実践",
        "キャンプファイヤー", 
        "シェア会"
      ],
      color: "orange",
      borderColor: "border-orange-200", 
      bgColor: "from-orange-50 to-orange-100",
      textColor: "text-orange-600"
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
            <span className="text-orange-500">2つのプログラム</span>
            から選択
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたのライフスタイルや目標に合わせて、最適なプログラムをお選びください
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg border-2 ${program.borderColor}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`bg-gradient-to-r ${program.bgColor} rounded-2xl p-6 mb-6`}>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {program.name}
                </h3>
                <p className={`text-lg ${program.textColor} font-medium mb-4`}>
                  {program.subtitle}
                </p>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {program.price}
                  </div>
                  <p className="text-gray-600">{program.format}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">期間</span>
                  <span className="text-gray-900">{program.duration}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">スケジュール</span>
                  <span className="text-gray-900">{program.schedule}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">参加形式</span>
                  <span className="text-gray-900">{program.participants}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="font-medium text-gray-700">開催場所</span>
                  <span className="text-gray-900">{program.location}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">プログラム内容</h4>
                <ul className="space-y-2">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <span className={`${program.textColor} text-lg font-bold mt-0.5`}>✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
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
          <div className="bg-white rounded-2xl p-8 shadow-md max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              どちらを選べばいい？
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-3">プチDARがおすすめな方</h4>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li>• まずは気軽に始めてみたい</li>
                  <li>• オンラインで完結したい</li>
                  <li>• 自分のペースで進めたい</li>
                  <li>• 移動時間を節約したい</li>
                </ul>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <h4 className="font-semibold text-orange-800 mb-3">DAR合宿がおすすめな方</h4>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>• 集中的に取り組みたい</li>
                  <li>• 他の参加者と交流したい</li>
                  <li>• 非日常空間で変化を起こしたい</li>
                  <li>• 価値提供の場を実践したい</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProgramComparison