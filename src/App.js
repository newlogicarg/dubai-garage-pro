import { useState, useEffect } from "react";
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
  X,
  Loader,
  Star,
  Users,
  Calendar,
  Github,
  GitBranch,
  GitCommit,
  GitPullRequest,
  ExternalLink,
  Code,
  Server,
  Database
} from "lucide-react";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [githubStats, setGithubStats] = useState({
    stars: 127,
    forks: 43,
    contributors: 8,
    lastCommit: "2 hours ago",
    repoUrl: "https://github.com/dubaigaragepro/website",
    deployStatus: "Deployed"
  });
  const [supabaseStatus, setSupabaseStatus] = useState("Connected");
  const [vercelStatus, setVercelStatus] = useState("Active");

  const services = [
    {
      title: "Установка гаражных дверей",
      description: "Профессиональная установка всех типов гаражных ворот с гарантией качества",
      icon: <Wrench className="w-8 h-8" />,
      features: ["Автоматизация", "Безопасность", "Энергоэффективность", "Современные технологии"],
      price: "от 3,500 AED"
    },
    {
      title: "Техническое обслуживание",
      description: "Регулярное обслуживание для продления срока службы ваших ворот",
      icon: <Shield className="w-8 h-8" />,
      features: ["Плановое ТО", "Диагностика", "Ремонт", "Консультации"],
      price: "от 450 AED"
    },
    {
      title: "Ремонт и модернизация",
      description: "Быстрый и качественный ремонт любых неисправностей",
      icon: <CheckCircle className="w-8 h-8" />,
      features: ["Срочный выезд", "Замена комплектующих", "Модернизация", "Гарантия на работы"],
      price: "от 800 AED"
    }
  ];

  const deploymentSteps = [
    {
      step: 1,
      title: "Создайте репозиторий на GitHub",
      description: "Зарегистрируйтесь на GitHub и создайте новый репозиторий для вашего проекта",
      icon: <Github className="w-6 h-6" />
    },
    {
      step: 2,
      title: "Загрузите код",
      description: "Добавьте весь код вашего сайта в репозиторий с помощью Git команд",
      icon: <GitCommit className="w-6 h-6" />
    },
    {
      step: 3,
      title: "Подключите к Vercel",
      description: "Импортируйте репозиторий в Vercel для автоматического развертывания",
      icon: <Server className="w-6 h-6" />
    },
    {
      step: 4,
      title: "Настройте Supabase",
      description: "Создайте проект на Supabase и добавьте переменные окружения",
      icon: <Database className="w-6 h-6" />
    },
    {
      step: 5,
      title: "Запустите сайт",
      description: "Ваш сайт автоматически развернется и будет доступен по ссылке",
      icon: <ArrowRight className="w-6 h-6" />
    }
  ];

  // Simulate fetching data from Supabase
  useEffect(() => {
    const fetchSupabaseData = async () => {
      console.log("Connecting to Supabase...");
      setTimeout(() => {
        console.log("Supabase connection established");
      }, 1000);
    };

    fetchSupabaseData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      console.log("Sending data to Supabase:", formData);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        preferredTime: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitStatus('');
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      setIsSubmitted(true);
      
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmitStatus('');
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} 
          />
        ))}
      </div>
    );
  };

  const DeploymentGuide = () => {
    return (
      <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 mb-16">
        <div className="flex items-center space-x-3 mb-8">
          <Github className="w-8 h-8 text-purple-400" />
          <h3 className="text-2xl font-bold">Развертывание через GitHub</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">GitHub Repository</h4>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm">dubaigaragepro/website</span>
                <button 
                  onClick={() => window.open(githubStats.repoUrl, '_blank')}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-purple-400">{githubStats.stars}</div>
                  <div className="text-xs text-gray-400 flex items-center justify-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z"/>
                    </svg>
                    Stars
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-400">{githubStats.forks}</div>
                  <div className="text-xs text-gray-400 flex items-center justify-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"/>
                    </svg>
                    Forks
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">{githubStats.contributors}</div>
                  <div className="text-xs text-gray-400 flex items-center justify-center">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
                    </svg>
                    Contributors
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-yellow-400">Active</div>
                  <div className="text-xs text-gray-400">Status</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">Интеграция сервисов</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-blue-400" />
                  <span>Supabase</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${supabaseStatus === 'Connected' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {supabaseStatus}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Server className="w-5 h-5 text-purple-400" />
                  <span>Vercel</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs ${vercelStatus === 'Active' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {vercelStatus}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Code className="w-5 h-5 text-yellow-400" />
                  <span>GitHub Actions</span>
                </div>
                <span className="px-2 py-1 rounded-full text-xs bg-blue-500 text-white">Active</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <h4 className="text-lg font-semibold">Пошаговое руководство по развертыванию</h4>
          
          {deploymentSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                {step.step}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="text-purple-400">
                    {step.icon}
                  </div>
                  <h5 className="font-semibold">{step.title}</h5>
                </div>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
          
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6">
            <h5 className="font-semibold mb-3">Команды Git для развертывания</h5>
            <div className="bg-black rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-100">
                # Инициализация репозитория<br/>
                git init<br/>
                git add .<br/>
                git commit -m "Initial commit"<br/>
                git branch -M main<br/>
                git remote add origin {githubStats.repoUrl}<br/>
                git push -u origin main
              </code>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button 
              onClick={() => window.open('https://github.com/new', '_blank')}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>Создать репозиторий</span>
            </button>
            <button 
              onClick={() => window.open('https://vercel.com/import', '_blank')}
              className="flex-1 bg-black border border-gray-600 hover:border-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Server className="w-5 h-5" />
              <span>Развернуть на Vercel</span>
            </button>
          </div>
        </div>
      </div>
    );
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
      <header className="relative z-50 bg-black bg-opacity-90 backdrop-blur-md border-b border-gray-800 sticky top-0">
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
              <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Главная</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Услуги</a>
              <a href="#github" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">GitHub</a>
              <a href="#reviews" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Отзывы</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">О нас</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">Контакты</a>
            </nav>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800 animate-fadeIn">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>Главная</a>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>Услуги</a>
                <a href="#github" className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>GitHub</a>
                <a href="#reviews" className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>Отзывы</a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>О нас</a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200 py-2" onClick={() => setIsMenuOpen(false)}>Контакты</a>
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
                <a href="#contact" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                  <span>Связаться с нами</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#github" className="border border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center hover:bg-gray-800 hover:bg-opacity-50">
                  Развернуть через GitHub
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

              {/* Customer Reviews Preview */}
              <div className="pt-6">
                <div className="flex items-center space-x-2 mb-2">
                  <StarRating rating={5} />
                  <span className="text-sm text-gray-400">на основе 87 отзывов</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>500+ клиентов</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>10+ лет на рынке</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://placehold.co/600x400/1a1a1a/4f46e5?text=Garage+Door+Installation" 
                  alt="Гаражные ворота в Дубае" 
                  className="rounded-2xl shadow-2xl w-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Гарантия 5 лет
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl filter blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Integration Section */}
      <section id="github" className="py-20 bg-gray-900 bg-opacity-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DeploymentGuide />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Комплексные решения для всех типов гаражных ворот с использованием передовых технологий и оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div className="mb-6">
                  <span className="text-lg font-semibold text-blue-400">{service.price}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200"
                >
                  Подробнее
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-900 bg-opacity-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Что говорят о нас наши клиенты в Дубае и по всем ОАЭ
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{review.comment}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.location}</div>
                  </div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://google.com/search?q=Dubai+Garage+Pro+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-semibold"
            >
              <span>Посмотреть все отзывы на Google</span>
              <ArrowRight className="w-4 h-4" />
            </a>
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
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
                    <p className="text-gray-300">Все работы выполняются сертифицированными специалистами с гарантией до 5 лет. Мы уверены в качестве своей работы.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Быстрое выполнение</h4>
                    <p className="text-gray-300">Срочный выезд в течение 2 часов и выполнение работ в установленные сроки. Работаем 24/7 для экстренных случаев.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Оригинальные комплектующие</h4>
                    <p className="text-gray-300">Используем только оригинальные детали от ведущих мировых производителей. Никаких подделок и низкокачественных компонентов.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Опытная команда</h4>
                    <p className="text-gray-300">Наши специалисты имеют более 10 лет опыта в установке и ремонте гаражных ворот различных типов и сложности.</p>
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
              <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-lg text-sm">
                Сертифицированные специалисты
              </div>
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
                      <p className="text-gray-400 text-sm mt-1">WhatsApp доступен</p>
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
                <div className="mt-4 p-3 bg-white bg-opacity-20 rounded-lg">
                  <p className="text-sm">Скидка 10% на первый заказ!</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              {isSubmitted ? (
                <div className={`text-center py-8 transition-all duration-500 ${submitStatus === 'success' ? 'animate-fadeIn' : 'animate-fadeIn'}`}>
                  <div className={`w-16 h-16 ${submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {submitStatus === 'success' ? 'Спасибо за заявку!' : 'Ошибка отправки'}
                  </h3>
                  <p className="text-gray-300">
                    {submitStatus === 'success' 
                      ? 'Наш специалист свяжется с вами в ближайшее время.' 
                      : 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Имя *</label>
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
                    <label className="block text-sm font-medium mb-2">Email *</label>
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
                    <label className="block text-sm font-medium mb-2">Телефон *</label>
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
                    <label className="block text-sm font-medium mb-2">Услуга *</label>
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
                      <option value="automation">Автоматизация ворот</option>
                      <option value="consultation">Консультация</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Предпочитаемое время звонка</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors duration-200"
                    >
                      <option value="">Любое время</option>
                      <option value="morning">Утро (8:00 - 12:00)</option>
                      <option value="afternoon">День (12:00 - 16:00)</option>
                      <option value="evening">Вечер (16:00 - 20:00)</option>
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
                      placeholder="Опишите вашу ситуацию или задайте вопрос..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <Loader className="w-5 h-5 mr-2 animate-spin" />
                        <span>Отправка...</span>
                      </div>
                    ) : (
                      "Отправить заявку"
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Нажимая кнопку, вы даете согласие на обработку персональных данных
                  </p>
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
              <div className="flex space-x-4 mb-4">
                <a 
                  href="https://wa.me/971501234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200 cursor-pointer"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 1.998-1.413.24-.694.24-1.289.165-1.413-.075-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-13.277c-1.302-1.302-3.02-1.998-4.823-1.996-3.745.002-6.786 3.041-6.788 6.786-.002 1.802.695 3.521 1.997 4.823l.001.001 4.21-4.21c.189-.189.499-.51.71-.722.211-.212.531-.52.72-.71l4.211-4.209z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/dubaigaragepro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 cursor-pointer"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.561-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/dubaigaragepro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-500 text-sm">
                Сертифицированный партнер ведущих производителей гаражных ворот
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Установка ворот</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Техническое обслуживание</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Ремонт ворот</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Автоматизация</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Консультации</a></li>
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
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Пн-Сб: 8:00 - 20:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dubai Garage Pro. Все права защищены.</p>
            <p className="text-sm mt-2">
              Полностью интегрировано с GitHub, Vercel и Supabase для бесшовного развертывания
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top button */}
      <a 
        href="#home" 
        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 z-50"
        aria-label="Back to top"
      >
        <ArrowRight className="w-5 h-5 transform rotate-90" />
      </a>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default App;
