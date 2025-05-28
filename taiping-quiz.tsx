"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, RotateCcw, Trophy, BookOpen } from "lucide-react"

type Question = {
  id: number
  question: string
  options: string[]
  correct: number
  explanation: string
  difficulty: "fácil" | "medio" | "difícil"
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Quién fue el líder principal de la Rebelión Taiping?",
    options: ["Li Hongzhang", "Hong Xiuquan", "Zeng Guofan", "Yuan Shikai"],
    correct: 1,
    explanation:
      "Hong Xiuquan fue el líder carismático que se proclamó hermano menor de Jesucristo y fundó el Reino Celestial de la Gran Paz.",
    difficulty: "fácil",
  },
  {
    id: 2,
    question: "¿En qué año comenzó oficialmente la Rebelión Taiping?",
    options: ["1848", "1850", "1851", "1853"],
    correct: 2,
    explanation:
      "La rebelión comenzó en 1851 en la provincia de Guangxi, aunque las tensiones venían gestándose desde 1850.",
    difficulty: "fácil",
  },
  {
    id: 3,
    question: "¿Cuál era el nombre del reino que establecieron los rebeldes taiping?",
    options: [
      "Reino de la Paz Eterna",
      "Reino Celestial de la Gran Paz",
      "Imperio del Dragón Dorado",
      "Reino de la Armonía Celestial",
    ],
    correct: 1,
    explanation:
      "El 'Taiping Tianguo' o Reino Celestial de la Gran Paz fue el estado que establecieron, con capital en Nanjing.",
    difficulty: "medio",
  },
  {
    id: 4,
    question: "¿Qué religión influyó principalmente en las creencias de Hong Xiuquan?",
    options: ["Budismo", "Taoísmo", "Cristianismo", "Confucianismo"],
    correct: 2,
    explanation:
      "Hong Xiuquan fue influenciado por textos cristianos misioneros, aunque desarrolló su propia interpretación muy particular del cristianismo.",
    difficulty: "fácil",
  },
  {
    id: 5,
    question: "¿Cuál fue la capital del Reino Celestial Taiping?",
    options: ["Beijing", "Shanghai", "Nanjing", "Guangzhou"],
    correct: 2,
    explanation:
      "Nanjing fue tomada en 1853 y se convirtió en la capital del reino taiping, siendo renombrada como 'Tianjing' (Capital Celestial).",
    difficulty: "medio",
  },
  {
    id: 6,
    question: "¿Aproximadamente cuántas personas murieron durante la Rebelión Taiping?",
    options: ["5-10 millones", "15-20 millones", "20-30 millones", "35-40 millones"],
    correct: 2,
    explanation:
      "Se estima que entre 20-30 millones de personas murieron, convirtiéndola en una de las guerras civiles más mortíferas de la historia.",
    difficulty: "difícil",
  },
  {
    id: 7,
    question: "¿Qué dinastía china gobernaba durante la Rebelión Taiping?",
    options: ["Ming", "Qing", "Song", "Tang"],
    correct: 1,
    explanation:
      "La dinastía Qing (manchú) gobernaba China desde 1644 y enfrentó esta gran rebelión que casi la derrocó.",
    difficulty: "fácil",
  },
  {
    id: 8,
    question: "¿Cuál era una de las reformas sociales más radicales propuestas por los taiping?",
    options: [
      "Abolición de la esclavitud",
      "Igualdad de género",
      "Democracia parlamentaria",
      "Libertad religiosa total",
    ],
    correct: 1,
    explanation:
      "Los taiping promovían la igualdad entre hombres y mujeres, incluyendo el derecho de las mujeres a ocupar cargos administrativos y militares.",
    difficulty: "medio",
  },
  {
    id: 9,
    question: "¿Quién fue el general imperial más importante en la derrota de los taiping?",
    options: ["Li Hongzhang", "Zeng Guofan", "Zuo Zongtang", "Todos los anteriores"],
    correct: 3,
    explanation:
      "Los tres generales fueron fundamentales: Zeng Guofan creó el Ejército de Hunan, Li Hongzhang el de Anhui, y Zuo Zongtang también contribuyó significativamente.",
    difficulty: "difícil",
  },
  {
    id: 10,
    question: "¿En qué año terminó la Rebelión Taiping?",
    options: ["1862", "1863", "1864", "1865"],
    correct: 2,
    explanation:
      "La rebelión terminó en 1864 con la caída de Nanjing y la muerte de Hong Xiuquan, quien se suicidó antes de la caída final.",
    difficulty: "medio",
  },
  {
    id: 11,
    question: "¿Qué nombre se daba Hong Xiuquan a sí mismo?",
    options: ["Emperador Celestial", "Hermano de Jesús", "Rey de la Paz", "Hijo del Cielo"],
    correct: 1,
    explanation:
      "Hong Xiuquan creía ser el hermano menor de Jesucristo, enviado por Dios para establecer el Reino Celestial en la Tierra.",
    difficulty: "medio",
  },
  {
    id: 12,
    question: "¿Cuál fue una causa importante del surgimiento de la rebelión?",
    options: ["Invasión extranjera", "Desastres naturales y hambrunas", "Revolución industrial", "Guerra del Opio"],
    correct: 1,
    explanation:
      "Las inundaciones del río Amarillo, sequías y hambrunas crearon condiciones desesperadas que facilitaron el surgimiento de la rebelión.",
    difficulty: "medio",
  },
  {
    id: 13,
    question: "¿Qué actitud tenían los taiping hacia el confucianismo?",
    options: ["Lo promovían activamente", "Lo toleraban", "Lo rechazaban completamente", "Lo reformaban"],
    correct: 2,
    explanation:
      "Los taiping rechazaban el confucianismo tradicional, considerándolo una doctrina corrupta que debía ser reemplazada por sus creencias cristianas adaptadas.",
    difficulty: "difícil",
  },
  {
    id: 14,
    question: "¿Cómo terminó Hong Xiuquan?",
    options: ["Murió en batalla", "Se suicidó", "Fue ejecutado", "Huyó al extranjero"],
    correct: 1,
    explanation:
      "Hong Xiuquan se suicidó en junio de 1864, poco antes de la caída final de Nanjing, posiblemente envenenándose.",
    difficulty: "medio",
  },
  {
    id: 15,
    question: "¿Qué impacto tuvo la rebelión en la dinastía Qing?",
    options: ["La fortaleció", "No tuvo impacto", "La debilitó severamente", "La modernizó"],
    correct: 2,
    explanation:
      "Aunque la dinastía Qing sobrevivió, quedó gravemente debilitada financiera y militarmente, acelerando su eventual caída en 1912.",
    difficulty: "difícil",
  },
]

export default function TaipingQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [gameFinished, setGameFinished] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false))

  const currentQ = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return
    setSelectedAnswer(answerIndex)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return

    setShowResult(true)
    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (selectedAnswer === currentQ.correct) {
      setScore(score + 1)
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    } else {
      setGameFinished(true)
    }
  }

  const resetGame = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setGameFinished(false)
    setAnsweredQuestions(new Array(questions.length).fill(false))
  }

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100
    if (percentage >= 90) return "¡Excelente! Eres un experto en la Rebelión Taiping 🏆"
    if (percentage >= 70) return "¡Muy bien! Tienes un buen conocimiento del tema 📚"
    if (percentage >= 50) return "Bien, pero puedes mejorar estudiando más 📖"
    return "Necesitas estudiar más sobre este fascinante período histórico 📝"
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "fácil":
        return "bg-green-100 text-green-800"
      case "medio":
        return "bg-yellow-100 text-yellow-800"
      case "difícil":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  if (gameFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <CardTitle className="text-3xl">¡Juego Completado!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="text-6xl font-bold text-blue-600">
              {score}/{questions.length}
            </div>
            <div className="text-xl text-gray-600">
              {Math.round((score / questions.length) * 100)}% de respuestas correctas
            </div>
            <div className="text-lg font-medium text-gray-800">{getScoreMessage()}</div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Datos curiosos sobre la Rebelión Taiping:</h3>
              <ul className="text-sm text-gray-600 space-y-1 text-left">
                <li>• Fue una de las guerras civiles más mortíferas de la historia mundial</li>
                <li>• Hong Xiuquan creía que era hermano de Jesucristo</li>
                <li>• Los taiping promovían la igualdad de género, algo revolucionario para la época</li>
                <li>• La rebelión duró 14 años (1850-1864)</li>
                <li>• Debilitó tanto a la dinastía Qing que contribuyó a su caída en 1912</li>
              </ul>
            </div>
            <Button onClick={resetGame} className="w-full" size="lg">
              <RotateCcw className="w-4 h-4 mr-2" />
              Jugar de Nuevo
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-red-600" />
              <CardTitle className="text-2xl">Rebelión Taiping (1850-1864)</CardTitle>
            </div>
            <Badge className={getDifficultyColor(currentQ.difficulty)}>{currentQ.difficulty}</Badge>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>
                Pregunta {currentQuestion + 1} de {questions.length}
              </span>
              <span>
                Puntuación: {score}/{answeredQuestions.filter(Boolean).length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="text-lg font-medium leading-relaxed">{currentQ.question}</div>

          <div className="space-y-3">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`
                  w-full p-4 text-left rounded-lg border-2 transition-all duration-200
                  ${
                    selectedAnswer === index
                      ? showResult
                        ? index === currentQ.correct
                          ? "border-green-500 bg-green-50 text-green-800"
                          : "border-red-500 bg-red-50 text-red-800"
                        : "border-blue-500 bg-blue-50"
                      : showResult && index === currentQ.correct
                        ? "border-green-500 bg-green-50 text-green-800"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }
                  ${showResult ? "cursor-default" : "cursor-pointer"}
                  ${currentQuestion === 1 && index === 1 ? "bg-yellow-50" : ""} // Subtle highlight for the second question's second option (1850)
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && (
                    <div>
                      {index === currentQ.correct && <CheckCircle className="w-5 h-5 text-green-600" />}
                      {selectedAnswer === index && index !== currentQ.correct && (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Explicación:</h4>
              <p className="text-blue-700 text-sm leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          <div className="flex gap-3">
            {!showResult ? (
              <Button onClick={handleSubmitAnswer} disabled={selectedAnswer === null} className="flex-1" size="lg">
                Confirmar Respuesta
              </Button>
            ) : (
              <Button onClick={handleNextQuestion} className="flex-1" size="lg">
                {currentQuestion < questions.length - 1 ? "Siguiente Pregunta" : "Ver Resultados"}
              </Button>
            )}

            <Button onClick={resetGame} variant="outline" size="lg">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
