import { ArrowLeft, Copy, MessageSquare, Instagram, Twitter, Facebook, Lightbulb, Video, Image as ImageIcon, Bot, Search, Play, Send, Edit, CheckCircle } from 'lucide-react';
import { useState } from 'react';

interface InstructionsProps {
  onBack: () => void;
}

function Instructions({ onBack }: InstructionsProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(text);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const commands = [
    {
      command: '|tg_post',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Telegram пост',
      description: 'Создание поста, адаптированного под формат Telegram',
      example: '|tg_post создай пост на тему: Облачное хранилище нового поколения, встречайте - DexCloud.',
      color: 'from-blue-500/20 to-blue-600/10'
    },
    {
      command: '|ig_post',
      icon: <Instagram className="w-8 h-8" />,
      title: 'Instagram пост',
      description: 'Создание поста, адаптированного под формат Instagram',
      example: '|ig_post создай пост на тему: Миссия компании DexNet',
      color: 'from-pink-500/20 to-purple-600/10'
    },
    {
      command: '|x_post',
      icon: <Twitter className="w-8 h-8" />,
      title: 'X (Twitter) пост',
      description: 'Создание поста, адаптированного под формат X (Twitter)',
      example: '|x_post создай пост на тему: DexPn - Что это?',
      color: 'from-gray-500/20 to-gray-600/10'
    },
    {
      command: '|fb_post',
      icon: <Facebook className="w-8 h-8" />,
      title: 'Facebook пост',
      description: 'Создание поста, адаптированного под формат Facebook',
      example: '|fb_post создай пост на тему: Продукты Экосистемы DexNet',
      color: 'from-blue-600/20 to-blue-700/10'
    },
    {
      command: '|post_ideas',
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Идеи для постов',
      description: 'Получение идей для постов на основе материалов компании DexNet',
      example: '|post_ideas мне нужны идеи для постов',
      color: 'from-yellow-500/20 to-orange-600/10'
    },
    {
      command: '|video_ideas',
      icon: <Video className="w-8 h-8" />,
      title: 'Идеи для видео',
      description: 'Получение идей для видео на основе материалов компании DexNet',
      example: '|video_ideas мне нужны идеи для видео',
      color: 'from-red-500/20 to-red-600/10'
    },
    {
      command: '|create_video',
      icon: <Video className="w-8 h-8" />,
      title: 'Создание сценария',
      description: 'Создание сценария для видео по указанной теме',
      example: '|create_video Как DexNet создает революцию web 4.0',
      color: 'from-purple-500/20 to-purple-600/10'
    },
    {
      command: '|generate_image',
      icon: <ImageIcon className="w-8 h-8" />,
      title: 'Генерация изображений',
      description: 'Создание изображения по текстовому описанию или примеру',
      example: '|generate_image Лиса в лесу.',
      color: 'from-green-500/20 to-green-600/10'
    },
    {
      command: '|gpt',
      icon: <Bot className="w-8 h-8" />,
      title: 'Чат с ИИ',
      description: 'Общение с искусственным интеллектом для получения ответов на вопросы',
      example: '|gpt какие виды инвестирования существуют?',
      color: 'from-indigo-500/20 to-indigo-600/10'
    },
    {
      command: '|web',
      icon: <Search className="w-8 h-8" />,
      title: 'Поиск в интернете',
      description: 'Получение актуальной информации из интернета',
      example: '|web найди мне лучшие рестораны в Москве',
      color: 'from-teal-500/20 to-teal-600/10'
    }
  ];

  return (
    <div className="min-h-screen bg-[#101b24] text-[#d5ebea]">
      <header className="fixed top-0 w-full bg-[#101b24]/80 backdrop-blur-md z-50 border-b border-[#5b7171]/20">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#d5ebea] hover:text-[#01d1bc] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Назад
          </button>
          <div className="flex items-center">
            <img
              src="/logo-header-new.png"
              alt="DexNet Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Инструкция по <span className="text-[#01d1bc]">использованию</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#d5ebea]/80 leading-relaxed max-w-4xl mx-auto mb-12">
                Основные команды Dexi-Агента для создания контента и работы с Mini-App приложением
              </p>
              
              {/* Блок для видео инструкции */}
              <div className="max-w-4xl mx-auto mb-16 relative">
                {/* Анимированный градиент фон */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01d1bc] via-[#ffd700] to-[#01d1bc] rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1419] p-8 rounded-3xl border border-[#01d1bc]/30 overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Video className="w-8 h-8 text-[#01d1bc]" />
                      <h2 className="text-2xl md:text-3xl font-bold text-[#d5ebea]">
                        Видео инструкция
                      </h2>
                    </div>
                    
                    <div className="relative bg-[#0d1419] rounded-2xl overflow-hidden border border-[#5b7171]/20 group cursor-pointer hover:border-[#01d1bc]/50 transition-all duration-300">
                      {/* Placeholder для видео */}
                      <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-[#1a2332] to-[#0d1419]">
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#01d1bc]/20 rounded-full mb-4 group-hover:bg-[#01d1bc]/30 transition-colors">
                            <Play className="w-10 h-10 text-[#01d1bc] ml-1" />
                          </div>
                          <p className="text-[#d5ebea]/60 text-lg">
                            Видео инструкция будет размещена здесь
                          </p>
                        </div>
                      </div>
                      
                      {/* Overlay с информацией */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1419]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-semibold text-[#d5ebea] mb-2">
                            Как использовать Dexi-Agent
                          </h3>
                          <p className="text-sm text-[#d5ebea]/80">
                            Подробная видео инструкция по работе с командами и функциями агента
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-[#d5ebea]/70 text-sm md:text-base">
                        Посмотрите видео инструкцию для быстрого освоения всех возможностей Dexi-Agent
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Блок "Как использовать команды" после видео */}
            <div className="mb-16 relative">
              {/* Анимированный градиент фон */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#01d1bc] via-[#ffd700] to-[#01d1bc] rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              
              <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1419] p-6 rounded-3xl border border-[#01d1bc]/30">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-2 text-[#d5ebea]">
                    Как использовать <span className="text-[#01d1bc]">команды</span>
                  </h2>
                  <p className="text-sm text-[#d5ebea]/70">
                    Простые шаги для работы с Dexi-Agent
                  </p>
                </div>
                
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0088cc] rounded-full mb-3">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#d5ebea] mb-1">Откройте Telegram</h3>
                    <p className="text-xs text-[#d5ebea]/70">
                      Найдите Dexi-Agent
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#01d1bc] rounded-full mb-3">
                      <Edit className="w-6 h-6 text-[#030507]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#d5ebea] mb-1">Введите команду</h3>
                    <p className="text-xs text-[#d5ebea]/70">
                      Например, |tg_post
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ff6b35] rounded-full mb-3">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#d5ebea] mb-1">Добавьте тему</h3>
                    <p className="text-xs text-[#d5ebea]/70">
                      Опишите что нужно
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-[#4caf50] rounded-full mb-3">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-semibold text-[#d5ebea] mb-1">Получите результат</h3>
                    <p className="text-xs text-[#d5ebea]/70">
                      Готовый контент
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commands.map((cmd, index) => (
                <div 
                  key={index}
                  className={`group bg-gradient-to-br ${cmd.color} to-transparent p-6 rounded-2xl border border-[#5b7171]/30 hover:border-[#01d1bc]/50 transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-[#01d1bc]">{cmd.icon}</div>
                    <h3 className="text-xl font-bold">{cmd.title}</h3>
                  </div>
                  
                  <p className="text-[#d5ebea]/70 mb-4 leading-relaxed">
                    {cmd.description}
                  </p>
                  
                  <div className="bg-[#0d1419] rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#01d1bc] font-medium">Команда:</span>
                      <button
                        onClick={() => copyToClipboard(cmd.command)}
                        className="text-[#5b7171] hover:text-[#01d1bc] transition-colors"
                        title="Копировать команду"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                    <code className="text-[#01d1bc] font-mono text-lg">
                      {cmd.command}
                    </code>
                    {copiedCommand === cmd.command && (
                      <div className="text-xs text-green-400 mt-1">Скопировано!</div>
                    )}
                  </div>
                  
                  <div className="bg-[#5b7171]/10 rounded-lg p-4">
                    <span className="text-sm text-[#d5ebea]/60 font-medium block mb-2">Пример использования:</span>
                    <code className="text-sm text-[#d5ebea]/90 font-mono leading-relaxed">
                      {cmd.example}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0d1419] border-t border-[#5b7171]/20 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-4">
            <img
              src="/logo-header-new.png"
              alt="DexNet Logo"
              className="h-6 w-auto object-contain"
            />
          </div>
          <p className="text-[#5b7171]">2025 Dexi-Agent. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default Instructions;
