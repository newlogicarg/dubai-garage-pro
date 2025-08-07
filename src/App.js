import { useState } from "react";
import { 
  Home, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  Wrench, 
  CheckCircle, 
  ArrowRight, 
  Menu, 
  X 
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const services = [
    {
      title: "Установка гаражных дверей",
      description: "Профессиональная установка всех типов гаражных ворот с гарантией качества",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Автоматизация", "Безопасность", "Энергоэффективность", "Современные технологии"]
    },
    {
      title: "Техническое обслуживание",
      description: "Регулярное обслуживание для продления срока службы ваших ворот",
      icon: <Shield className="w-8 h-8" />,
      features: ["Плановое ТО", "Диагностика", "Ремонт", "Консультации"]
    },
    {
      title: "Ремонт и модернизация",
      description: "Быстрый и качественный ремонт любых неисправностей",
      icon: <CheckCircle className="w-8 h-8" />,
      features: ["Срочный выезд", "Замена комплектующих", "Модернизация", "Гарантия на работы"]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Home className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dubai Garage Pro
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Главная</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Услуги</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">О нас</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Контакты</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Главная</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Услуги</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">О нас</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Контакты</a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Профессиональные услуги по <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">гаражным воротам</span> в Дубае
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Высокотехнологичные решения для установки, обслуживания и ремонта гаражных ворот. 
                  Быстро, надежно и с гарантией качества.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Связаться с нами</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#services" className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center">
                  Наши услуги
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm text-gray-400">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-400">Удовлетворенных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">24/7</div>
                  <div className="text-sm text-gray-400">Поддержка</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://placehold.co/600x400/1a1a1a/4f46e5?text=Garage+Door+Installation" 
                  alt="Гаражные ворота в Дубае" 
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl filter blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-900 bg-opacity-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения для всех типов гаражных ворот с использованием передовых технологий и оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Почему выбирают нас</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Мы предлагаем высокотехнологичные решения для гаражных ворот в Дубае с использованием 
                передовых материалов и инновационных систем автоматизации.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
                    <p className="text-gray-300">Все работы выполняются сертифицированными специалистами с гарантией до 5 лет</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Быстрое выполнение</h4>
                    <p className="text-gray-300">Срочный выезд в течение 2 часов и выполнение работ в установленные сроки</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Оригинальные комплектующие</h4>
                    <p className="text-gray-300">Используем только оригинальные детали от ведущих мировых производителей</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://placehold.co/600x400/1a1a1a/8b5cf6?text=Professional+Team" 
                alt="Наша команда" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl filter blur-3xl opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 bg-opacity-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">Оставьте заявку и наш специалист свяжется с вами в течение 15 минут</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Телефон</h4>
                      <p className="text-gray-300">+971 50 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-300">info@dubaigaragepro.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Адрес</h4>
                      <p className="text-gray-300">Дубай, ОАЭ, Бизнес-центр, этаж 15</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold mb-2">Режим работы</h4>
                <p className="text-blue-100">Пн-Сб: 8:00 - 20:00</p>
                <p className="text-blue-100">Вс: 9:00 - 18:00</p>
                <p className="text-blue-100 mt-2 font-semibold">Срочный выезд 24/7</p>
              </div>
            </div>
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Спасибо за заявку!</h3>
                  <p className="text-gray-300">Наш специалист свяжется с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Ваш email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                      placeholder="Ваш телефон"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Услуга</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    >
                      <option value="">Выберите услугу</option>
                      <option value="installation">Установка гаражных ворот</option>
                      <option value="maintenance">Техническое обслуживание</option>
                      <option value="repair">Ремонт и модернизация</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200 resize-none"
                      placeholder="Опишите вашу ситуацию..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Отправить заявку
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Home className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Dubai Garage Pro
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Лидер в области установки и обслуживания гаражных ворот в Дубае. 
                Высокотехнологичные решения для вашего комфорта и безопасности.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors duration-200 cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.561-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors duration-200">Установка ворот</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Техническое обслуживание</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Ремонт ворот</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Автоматизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Консультации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 50 123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@dubaigaragepro.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Дубай, ОАЭ</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dubai Garage Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
