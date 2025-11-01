import { ArrowRight, Sparkles, Zap, Users, TrendingUp, MessageSquare, Image as ImageIcon, Video, Search, Database, Link, Bot, CheckCircle, Target, Crown, RefreshCw, Send, Trophy } from 'lucide-react';
import { useState } from 'react';
import Instructions from './Instructions';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'instructions'>('home');

  const goToInstructions = () => {
    setCurrentPage('instructions');
    // Прокрутка наверх при переходе на страницу инструкций
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const goToHome = () => {
    setCurrentPage('home');
    // Прокрутка наверх при возврате на главную
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  if (currentPage === 'instructions') {
    return <Instructions onBack={goToHome} />;
  }
  return (
    <div className="min-h-screen bg-[#101b24] text-[#d5ebea]">
      <header className="fixed top-0 w-full bg-[#101b24]/80 backdrop-blur-md z-50 border-b border-[#5b7171]/20">
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <div className="flex items-center">
            <img
              src="/logo-header-new.png"
              alt="DexNet Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <a 
              href="https://t.me/dexi_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#5b7171]/20 to-transparent border border-[#5b7171]/30 text-[#d5ebea] rounded-lg font-medium hover:border-[#01d1bc]/50 hover:text-[#01d1bc] transition-all text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              <Send className="w-4 h-4" />
              <span className="hidden xs:inline">@dexi_agent</span>
              <span className="xs:hidden">Telegram</span>
            </a>
          <button 
            onClick={goToInstructions}
            className="px-4 sm:px-6 py-2 bg-[#01d1bc] text-[#030507] rounded-lg font-semibold hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto"
          >
            <span className="hidden sm:inline">Инструкция по использованию</span>
            <span className="sm:hidden">Инструкция</span>
          </button>
          </div>
        </nav>
      </header>

      <main className="pt-24 sm:pt-20">
        <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              <div className="lg:w-1/3 flex justify-center lg:justify-start order-2 lg:order-1">
                <img
                  src="/dexi-mascot-final.png"
                  alt="Dexi Assistant"
                  className="w-auto h-64 sm:h-80 lg:h-96 object-contain animate-scale-in"
                />
              </div>
              <div className="lg:w-2/3 text-center flex flex-col justify-center items-center order-1 lg:order-2">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center mb-6 sm:mb-8 px-2">
                  <span className="block mb-2">Ваш личный помощник</span>
                  <span className="block">в развитии <span className="text-[#01d1bc] animate-gradient">DexNet</span></span>
                </h1>
                
                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl lg:text-2xl text-[#d5ebea]/80 leading-relaxed text-center px-2">
                  <p className="font-medium">
                    Я сочетаю удобное приложение и интерактивную поддержку в <span className="text-[#01d1bc]">Telegram</span>, помогая профессионально расти, строить сеть, создавать контент для соцсетей и эффективно взаимодействовать с экосистемой компании.
                  </p>
                  
                  <p>
                    Упрощаю задачи для <strong className="text-[#d5ebea]">новичков и лидеров</strong>, экономя время и обеспечивая доступ к актуальной информации.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 relative max-w-4xl mx-auto">
            {/* Анимированный градиент фон */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#01d1bc] via-[#ffd700] to-[#01d1bc] rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1419] p-6 sm:p-8 rounded-3xl border border-[#01d1bc]/30">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                
                {/* Экономия времени */}
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-[#5b7171]/20" />
                      <circle
                        cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                        className="text-[#01d1bc] transition-all duration-1000 ease-out"
                        style={{
                          strokeDasharray: `${2 * Math.PI * 45}`,
                          strokeDashoffset: `${2 * Math.PI * 45 * (1 - 80 / 100)}`,
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-lg font-bold text-[#01d1bc]">80%</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#d5ebea] mb-2">Экономия времени</h3>
                </div>

                {/* Вовлеченность */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-t from-[#01d1bc]/10 to-transparent rounded-lg border border-[#01d1bc]/20 flex items-end justify-center p-2">
                    <div className="flex items-end justify-center h-full gap-1">
                      <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#01d1bc]/70 rounded-t animate-scale-in" style={{height: '30%', animationDelay: '0ms'}}></div>
                      <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#01d1bc]/70 rounded-t animate-scale-in" style={{height: '45%', animationDelay: '200ms'}}></div>
                      <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#ffd700] rounded-t animate-scale-in" style={{height: '65%', animationDelay: '400ms'}}></div>
                      <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#ffd700] rounded-t animate-scale-in" style={{height: '80%', animationDelay: '600ms'}}></div>
                      <div className="w-2 bg-gradient-to-t from-[#ffd700] to-[#ffd700] rounded-t animate-scale-in" style={{height: '95%', animationDelay: '800ms'}}></div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#d5ebea] mb-2">Вовлеченность</h3>
                  <div className="text-xl font-bold text-[#01d1bc]">5x</div>
                </div>

                {/* Эффективность */}
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Crown className="w-12 h-12 text-[#ffd700] animate-pulse" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#d5ebea] mb-2">Эффективность</h3>
                  <div className="text-xl font-bold text-[#01d1bc]">70%</div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#101b24] to-[#0d1419]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex justify-center mb-12 sm:mb-16">
              <div className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#01d1bc] to-transparent"></div>
            </div>
            
            {/* Блок "Для кого этот инструмент" */}
            <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 px-4">
                Для кого этот <span className="text-[#01d1bc]">инструмент</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <AudienceCard
                  icon={<Users className="w-10 sm:w-12 h-10 sm:h-12" />}
                  title="Новички"
                  description="Которые только начинают развивать свою сеть и нуждаются в структурированном подходе"
                />
                <AudienceCard
                  icon={<TrendingUp className="w-10 sm:w-12 h-10 sm:h-12" />}
                  title="Лидеры команд"
                  description="Активные лидеры, стремящиеся к масштабированию и повышению эффективности"
                />
                <AudienceCard
                  icon={<Zap className="w-10 sm:w-12 h-10 sm:h-12" />}
                  title="Амбициозные"
                  description="Пользователи, желающие профессионально расти и строить связи в DexNet"
                />
              </div>
            </div>

            {/* Разделитель */}
            <div className="flex justify-center mb-12 sm:mb-16">
              <div className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#01d1bc] to-transparent"></div>
            </div>

            <div className="max-w-6xl mx-auto">
              
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-[#01d1bc]" />
                  <h2 className="text-4xl md:text-5xl font-bold">
                    С какими задачами <span className="text-[#01d1bc]">помогает?</span>
                  </h2>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#5b7171]/10 to-transparent rounded-xl border border-[#5b7171]/20 hover:border-[#01d1bc]/40 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-[#01d1bc] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#d5ebea]/90 leading-relaxed">
                      Как представить компанию и её продукты ясно и структурированно для новой аудитории?
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#5b7171]/10 to-transparent rounded-xl border border-[#5b7171]/20 hover:border-[#01d1bc]/40 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-[#01d1bc] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#d5ebea]/90 leading-relaxed">
                      Как быстро находить идеи, создавать контент и поддерживать активность в социальных сетях?
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#5b7171]/10 to-transparent rounded-xl border border-[#5b7171]/20 hover:border-[#01d1bc]/40 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-[#01d1bc] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#d5ebea]/90 leading-relaxed">
                      Как легко и быстро делиться актуальной информацией и ссылками в удобном приложении Mini-App?
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#5b7171]/10 to-transparent rounded-xl border border-[#5b7171]/20 hover:border-[#01d1bc]/40 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-[#01d1bc] flex-shrink-0 mt-1" />
                    <p className="text-lg text-[#d5ebea]/90 leading-relaxed">
                      Как соблюдать профессиональный стиль общения и формировать личный бренд?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <blockquote className="text-2xl md:text-3xl font-medium text-[#d5ebea] italic leading-relaxed max-w-4xl mx-auto">
                  "Dexi-Agent решает эти вопросы, предоставляя инструменты для быстрого старта и вашего роста как эксперта."
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-16">
              <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-[#01d1bc] to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0d1419] to-[#101b24]">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 px-4">
              Основные функции и <span className="text-[#01d1bc]">возможности</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <FeatureCard
                icon={<MessageSquare className="w-8 h-8" />}
                title="Мультиязычный консультант DexNet"
                description="Агент помогает новым пользователям познакомиться с экосистемой DexNet, отвечает на вопросы о компании и её продуктах, обеспечивая мультиязычную поддержку."
              />
              <FeatureCard
                icon={<Link className="w-8 h-8" />}
                title="Taplink"
                description="Персональная страница пользователя с добавлением соцсетей, Telegram-канала и контактных данных для мгновенной и прямой связи с вами."
              />
              <FeatureCard
                icon={<Database className="w-8 h-8" />}
                title="CRM-система"
                description="Отображает дату регистрации, выбранный язык и статус пользователя, позволяя быстро начать диалог с новым участником одним нажатием."
              />
              <FeatureCard
                icon={<TrendingUp className="w-8 h-8" />}
                title="Создание постов"
                description="Генерирует тексты для Telegram, Instagram, Facebook и X на основе свежих данных компании"
              />
              <FeatureCard
                icon={<Video className="w-8 h-8" />}
                title="Сценарии для видео"
                description="Предоставляет готовые сценарии для Reels и Shorts с креативной структурой и идеями"
              />
              <FeatureCard
                icon={<Sparkles className="w-8 h-8" />}
                title="Генератор идей"
                description="Подсказывает темы для постов и видео, адаптируя под разные форматы и ниши"
              />
              <FeatureCard
                icon={<Search className="w-8 h-8" />}
                title="Поиск информации"
                description="Ищет свежие факты и тренды в интернете для релевантного контента"
              />
              <FeatureCard
                icon={<ImageIcon className="w-8 h-8" />}
                title="Генерация изображений"
                description="Генерирует изображения по тексту или референсу для оформления ваших публикаций и создания личного бренда"
              />
              <FeatureCard
                icon={<Bot className="w-8 h-8" />}
                title="Чат GPT"
                description="Генерация идей и текстов для разных форматов и ниш с помощью интеллектуального помощника."
              />
            </div>
          </div>
        </section>
        
        <div className="flex justify-center py-12">
          <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-[#01d1bc] to-transparent"></div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Преимущества для вашего <span className="text-[#01d1bc]">роста</span>
              </h2>
              <div className="space-y-6">
                <BenefitCard
                  number="01"
                  text="Экономите до 80% времени на подготовку контента: агент предлагает идеи и материалы, позволяя сосредоточиться на реализации"
                />
                <BenefitCard
                  number="02"
                  text="Сразу предоставляете новичкам все необходимые ссылки и информацию о продуктах, повышая их вовлеченность до 5 раз"
                />
                <BenefitCard
                  number="03"
                  text="Обеспечиваете доступ к вашему профилю через Taplink: новые пользователи легко находят контакты куратора, соцсети и способы связи"
                />
                <BenefitCard
                  number="04"
                  text="Поддерживаете единые стандарты коммуникации и оформления в команде, формируя профессиональный имидж"
                />
                <BenefitCard
                  number="05"
                  text="Повышаете эффективность взаимодействий на 70%, оптимизируя рабочий процесс"
                />
              </div>
            </div>
          </div>
        </section>
        

        {/* Блок подписки */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#0d1419] to-[#101b24]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                Выберите свой <span className="text-[#01d1bc]">план</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#d5ebea]/70 max-w-2xl mx-auto px-4">
                Получите доступ ко всем возможностям Dexi-Agent
              </p>
            </div>

            <div className="max-w-lg mx-auto px-4">
              <div className="relative group">
                {/* Анимированный градиент фон */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01d1bc] via-[#ffd700] to-[#01d1bc] rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
                
                <div className="relative bg-gradient-to-br from-[#1a2332] to-[#0d1419] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#01d1bc]/30">
                  {/* Заголовок с короной */}
                  <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6">
                    <Crown className="w-6 sm:w-8 h-6 sm:h-8 text-[#ffd700] animate-pulse" />
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#01d1bc] to-[#ffd700] bg-clip-text text-transparent">
                      Pro Plan
                    </h3>
                    <Crown className="w-6 sm:w-8 h-6 sm:h-8 text-[#ffd700] animate-pulse" />
                  </div>

                  {/* Цена */}
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d5ebea] mb-2">$200</div>
                    <div className="text-base sm:text-lg text-[#01d1bc] font-semibold">Бессрочная лицензия</div>
                  </div>

                  {/* Особенности */}
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-[#5b7171]/10 rounded-xl">
                      <CheckCircle className="w-5 sm:w-6 h-5 sm:h-6 text-[#01d1bc] flex-shrink-0" />
                      <span className="text-sm sm:text-base text-[#d5ebea]">700 запросов включено</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-[#5b7171]/10 rounded-xl">
                      <RefreshCw className="w-5 sm:w-6 h-5 sm:h-6 text-[#01d1bc] flex-shrink-0" />
                      <span className="text-sm sm:text-base text-[#d5ebea]">Дополнительные 700 запросов за $30</span>
        </div>

                    <div className="flex items-center gap-3 p-3 sm:p-4 bg-[#5b7171]/10 rounded-xl">
                      <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#01d1bc] flex-shrink-0" />
                      <span className="text-sm sm:text-base text-[#d5ebea]">Все функции Pro-версии</span>
                    </div>
                  </div>

                  {/* Кнопка */}
                  <button className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#01d1bc] to-[#ffd700] text-[#030507] rounded-xl font-bold text-sm sm:text-base lg:text-lg hover:scale-105 transition-transform shadow-lg shadow-[#01d1bc]/30">
                    <span className="hidden sm:inline">Приобрести можно в Mini-App агента</span>
                    <span className="sm:hidden">Купить в Mini-App</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Реферальная система */}
            <div className="mt-8 sm:mt-12 text-center">
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#5b7171]/10 rounded-full border border-[#01d1bc]/20 mx-4">
                <Users className="w-4 sm:w-5 h-4 sm:h-5 text-[#01d1bc]" />
                <span className="text-[#d5ebea]/80 text-xs sm:text-sm text-center">
                  <strong className="text-[#01d1bc]">Реферальная система:</strong> 10% за рекомендацию (1 уровень)
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <button 
              onClick={goToInstructions}
              className="px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-[#01d1bc] text-[#030507] rounded-lg font-bold text-base sm:text-lg lg:text-xl hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-lg shadow-[#01d1bc]/30"
            >
              <span className="hidden sm:inline">Инструкция по использованию</span>
              <span className="sm:hidden">Инструкция</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#0d1419] border-t border-[#5b7171]/20 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
            <div className="flex items-center">
            <img
              src="/logo-header-new.png"
              alt="DexNet Logo"
                className="h-5 sm:h-6 w-auto object-contain"
            />
            </div>
            <p className="text-[#5b7171] text-sm sm:text-base">2025 Dexi-Agent. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function StatCard({ value, label, type, percentage }: { value: string; label: string; type: 'circle' | 'bar' | 'wave'; percentage: number }) {
  const renderChart = () => {
    switch (type) {
      case 'circle':
        return (
          <div className="relative w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" className="text-[#5b7171]/20" />
              <circle
                cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                className="text-[#01d1bc] transition-all duration-1000 ease-out"
                style={{
                  strokeDasharray: `${2 * Math.PI * 45}`,
                  strokeDashoffset: `${2 * Math.PI * 45 * (1 - percentage / 100)}`,
                }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#01d1bc] group-hover:scale-110 transition-transform">{value}</div>
            </div>
          </div>
        );
      
      case 'bar':
        return (
          <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto mb-4 relative">
            {/* Фон для графика */}
            <div className="w-full h-full bg-gradient-to-t from-[#01d1bc]/10 to-transparent rounded-lg border border-[#01d1bc]/20">
              {/* Столбчатая диаграмма роста */}
              <div className="flex items-end justify-center h-full p-2 gap-1">
                <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#01d1bc]/70 rounded-t animate-scale-in" style={{height: '30%', animationDelay: '0ms'}}></div>
                <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#01d1bc]/70 rounded-t animate-scale-in" style={{height: '45%', animationDelay: '200ms'}}></div>
                <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#ffd700] rounded-t animate-scale-in" style={{height: '65%', animationDelay: '400ms'}}></div>
                <div className="w-2 bg-gradient-to-t from-[#01d1bc] to-[#ffd700] rounded-t animate-scale-in" style={{height: '80%', animationDelay: '600ms'}}></div>
                <div className="w-2 bg-gradient-to-t from-[#ffd700] to-[#ffd700] rounded-t animate-scale-in relative" style={{height: '95%', animationDelay: '800ms'}}>
                  <TrendingUp className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 text-[#ffd700]" />
                </div>
              </div>
            </div>
            {/* Значение внутри блока */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-sm sm:text-base lg:text-lg font-bold text-[#d5ebea] bg-[#101b24]/80 px-2 py-1 rounded">
                {value}
              </div>
            </div>
          </div>
        );
      
      case 'wave':
        return (
          <div className="relative w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 mx-auto mb-4">
            {/* Фон кубка */}
            <div className="w-full h-full bg-gradient-to-b from-[#ffd700]/20 to-[#ffd700]/5 rounded-lg border border-[#ffd700]/30 flex flex-col items-center justify-center p-2">
              {/* Кубок */}
              <div className="relative mb-2">
                <Trophy className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 text-[#ffd700] group-hover:scale-110 transition-transform" />
                {/* Блеск */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full animate-pulse"></div>
              </div>
              {/* Процент */}
              <div className="text-sm sm:text-base lg:text-lg font-bold text-[#01d1bc]">
                {value}
              </div>
            </div>
            {/* Декоративные элементы */}
            <div className="absolute -top-1 -right-1">
              <Sparkles className="w-2 h-2 text-[#ffd700] animate-pulse" />
            </div>
            <div className="absolute -bottom-1 -left-1">
              <Sparkles className="w-1.5 h-1.5 text-[#01d1bc] animate-pulse delay-500" />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="text-center animate-scale-in group">
      {renderChart()}
      <div className="text-xs sm:text-sm md:text-base text-[#d5ebea]/70 font-medium">{label}</div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-gradient-to-br from-[#5b7171]/10 to-transparent p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-[#5b7171]/30 hover:border-[#01d1bc]/50 transition-all duration-300 hover:scale-105">
      <div className="text-[#01d1bc] mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{title}</h3>
      <p className="text-sm sm:text-base text-[#d5ebea]/70 leading-relaxed">{description}</p>
    </div>
  );
}

function BenefitCard({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-4 sm:gap-6 items-start bg-gradient-to-r from-[#5b7171]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#5b7171]/20 hover:border-[#01d1bc]/40 transition-all duration-300 hover:translate-x-2">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#01d1bc] opacity-50 flex-shrink-0">{number}</div>
      <p className="text-sm sm:text-base lg:text-lg text-[#d5ebea]/90 leading-relaxed pt-1 sm:pt-2">{text}</p>
    </div>
  );
}

function AudienceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-[#5b7171]/10 to-transparent rounded-xl sm:rounded-2xl border border-[#5b7171]/30 hover:border-[#01d1bc]/50 transition-all duration-300 hover:scale-105">
      <div className="inline-flex items-center justify-center w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 bg-[#01d1bc]/10 rounded-full text-[#01d1bc] mb-4 sm:mb-6">
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-[#d5ebea]/70 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
