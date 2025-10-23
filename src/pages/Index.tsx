import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Сергей Есенин</h1>
            <div className="hidden md:flex gap-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('biography')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Биография
              </button>
              <button 
                onClick={() => scrollToSection('works')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Творчество
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Галерея
              </button>
              <button 
                onClick={() => scrollToSection('facts')}
                className="text-foreground hover:text-accent transition-colors"
              >
                Интересное
              </button>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
            >
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </nav>
      </header>

      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/512353f9-1c8b-49fd-9aa6-6e4fd60233bc/files/d06dcbca-741a-4532-a25e-053332cef453.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <img 
              src="https://cdn.poehali.dev/projects/512353f9-1c8b-49fd-9aa6-6e4fd60233bc/files/b1f4b6c5-8599-4e53-9450-24b68af328ff.jpg"
              alt="Сергей Есенин"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto mb-8 border-4 border-accent shadow-2xl object-cover"
            />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Сергей Александрович Есенин
            </h2>
            <p className="text-xl md:text-2xl text-white/90 italic mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              «Не жалею, не зову, не плачу,<br />
              Всё пройдёт, как с белых яблонь дым»
            </p>
            <p className="text-lg text-white/80 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              1895 — 1925
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('biography')}
              className="bg-accent hover:bg-accent/90 text-foreground animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              Узнать больше <Icon name="ArrowDown" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section id="biography" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Биография</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Жизненный путь великого русского поэта
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="Sunrise" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">1895-1912: Детство</h3>
                    <p className="text-muted-foreground mb-3">Рязанская губерния</p>
                    <p className="leading-relaxed">
                      Родился в селе Константиново Рязанской губернии. Воспитывался в патриархальной крестьянской семье. 
                      С детства был окружён красотой русской природы, которая стала главной темой его поэзии.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="BookOpen" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">1912-1917: Начало пути</h3>
                    <p className="text-muted-foreground mb-3">Москва и Петербург</p>
                    <p className="leading-relaxed">
                      Переезд в Москву, затем в Петербург. Знакомство с Блоком, Городецким. Публикация первых стихов. 
                      Быстрое признание в литературных кругах как яркого представителя новокрестьянской поэзии.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="Feather" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">1917-1923: Расцвет</h3>
                    <p className="text-muted-foreground mb-3">Революция и творческий пик</p>
                    <p className="leading-relaxed">
                      Революционные годы. Создание лучших поэм. Брак с Айседорой Дункан, путешествие по Европе и Америке. 
                      Период наивысшей популярности и творческой зрелости поэта.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Icon name="Star" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">1923-1925: Последние годы</h3>
                    <p className="text-muted-foreground mb-3">Философское осмысление</p>
                    <p className="leading-relaxed">
                      Трагический финал в гостинице «Англетер» в Ленинграде. Несмотря на короткую жизнь, оставил 
                      грандиозное поэтическое наследие, которое продолжает вдохновлять поколения.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="works" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Творчество</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Избранные произведения и темы лирики
          </p>

          <Tabs defaultValue="poems" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="poems">Стихотворения</TabsTrigger>
              <TabsTrigger value="themes">Темы лирики</TabsTrigger>
            </TabsList>
            
            <TabsContent value="poems" className="space-y-6">
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">«Гой ты, Русь, моя родная...»</h3>
                  <p className="italic text-muted-foreground mb-4">1914</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="leading-relaxed italic">
                      Гой ты, Русь, моя родная,<br />
                      Хаты — в ризах образа...<br />
                      Не видать конца и края —<br />
                      Только синь сосёт глаза.
                    </p>
                  </div>
                  <p className="mt-4 text-sm">
                    Патриотическое стихотворение, воспевающее красоту и величие Руси.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">«Письмо матери»</h3>
                  <p className="italic text-muted-foreground mb-4">1924</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="leading-relaxed italic">
                      Ты жива еще, моя старушка?<br />
                      Жив и я. Привет тебе, привет!<br />
                      Пусть струится над твоей избушкой<br />
                      Тот вечерний несказанный свет.
                    </p>
                  </div>
                  <p className="mt-4 text-sm">
                    Одно из самых трогательных стихотворений о любви к матери и родному дому.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">«Не жалею, не зову, не плачу...»</h3>
                  <p className="italic text-muted-foreground mb-4">1921</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="leading-relaxed italic">
                      Не жалею, не зову, не плачу,<br />
                      Всё пройдёт, как с белых яблонь дым.<br />
                      Увяданья золотом охваченный,<br />
                      Я не буду больше молодым.
                    </p>
                  </div>
                  <p className="mt-4 text-sm">
                    Философское размышление о быстротечности жизни и принятии неизбежного.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">«Шаганэ ты моя, Шаганэ...»</h3>
                  <p className="italic text-muted-foreground mb-4">1924</p>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <p className="leading-relaxed italic">
                      Шаганэ ты моя, Шаганэ!<br />
                      Потому, что я с севера, что ли,<br />
                      Я готов рассказать тебе поле,<br />
                      Про волнистую рожь при луне.
                    </p>
                  </div>
                  <p className="mt-4 text-sm">
                    Лирическое стихотворение из цикла «Персидские мотивы», полное нежности и тоски.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="themes" className="space-y-6">
              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Trees" className="text-accent mt-1" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Родина и природа</h3>
                      <p className="text-muted-foreground">
                        Русская деревня, берёзы, поля и луга — центральные образы поэзии Есенина. 
                        Природа для него — живое существо, способное чувствовать и переживать.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Heart" className="text-accent mt-1" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Любовь и лирика</h3>
                      <p className="text-muted-foreground">
                        Любовная лирика Есенина отличается искренностью и глубиной чувств. 
                        От нежности до отчаяния — вся гамма человеческих переживаний.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-accent mt-1" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Время и бренность</h3>
                      <p className="text-muted-foreground">
                        Философские размышления о быстротечности жизни, юности, неизбежности старения. 
                        Тема уходящего времени проходит через всё творчество поэта.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Home" className="text-accent mt-1" size={32} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Дом и семья</h3>
                      <p className="text-muted-foreground">
                        Образы матери, отчего дома, родного села. Тоска по утраченному раю детства 
                        и невозможность вернуться в прошлое.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Галерея</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Фотографии и рукописи поэта
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/512353f9-1c8b-49fd-9aa6-6e4fd60233bc/files/b1f4b6c5-8599-4e53-9450-24b68af328ff.jpg"
                alt="Портрет Есенина"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Портрет поэта</p>
                  <p className="text-white/80 text-sm">1920-е годы</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/512353f9-1c8b-49fd-9aa6-6e4fd60233bc/files/864a25fa-7185-4cf2-a45c-eda539adb355.jpg"
                alt="Рукописи"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Рукописи стихов</p>
                  <p className="text-white/80 text-sm">Архив</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <img 
                src="https://cdn.poehali.dev/projects/512353f9-1c8b-49fd-9aa6-6e4fd60233bc/files/d06dcbca-741a-4532-a25e-053332cef453.jpg"
                alt="Константиново"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Родное село</p>
                  <p className="text-white/80 text-sm">Константиново</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <Icon name="Image" size={48} className="text-muted-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">С Айседорой Дункан</p>
                  <p className="text-white/80 text-sm">1922 год</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <Icon name="Image" size={48} className="text-muted-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">В литературном кругу</p>
                  <p className="text-white/80 text-sm">1915 год</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <div className="w-full h-64 bg-muted flex items-center justify-center">
                <Icon name="Image" size={48} className="text-muted-foreground" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold">Памятник в Москве</p>
                  <p className="text-white/80 text-sm">Современность</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">Интересные факты</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Малоизвестное о великом поэте
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="Sparkles" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Первая публикация в 17 лет</h3>
                    <p className="text-muted-foreground">
                      В 1914 году, когда Есенину было всего 17 лет, его первое стихотворение «Берёза» 
                      было опубликовано в журнале «Мирок». Это стало началом блестящей литературной карьеры.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="Globe" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Путешествия по миру</h3>
                    <p className="text-muted-foreground">
                      Вместе с Айседорой Дункан Есенин посетил Германию, Францию, Бельгию, Италию и США. 
                      Поездка вдохновила его на создание цикла стихов о зарубежье, где он ярко выразил тоску по России.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="Palette" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Цветовая символика</h3>
                    <p className="text-muted-foreground">
                      Есенин мастерски использовал цветовую символику: золотой — символ России, синий — небесного, 
                      розовый — молодости. Его стихи наполнены яркими красками русской природы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="Music" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Музыкальность стихов</h3>
                    <p className="text-muted-foreground">
                      На стихи Есенина написано более 200 песен и романсов. Его поэзия настолько музыкальна, 
                      что легко ложится на музыку и до сих пор звучит в исполнении многих артистов.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="BookMarked" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Влияние на литературу</h3>
                    <p className="text-muted-foreground">
                      Есенин оказал огромное влияние на русскую поэзию XX века. Его образность, искренность 
                      и народность вдохновляли многих поэтов и продолжают влиять на современную литературу.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="School" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Музей-заповедник</h3>
                    <p className="text-muted-foreground">
                      В родном селе Константиново создан государственный музей-заповедник С.А. Есенина. 
                      Ежегодно его посещают тысячи поклонников творчества поэта со всего мира.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-2 rounded-full flex-shrink-0">
                    <Icon name="Award" className="text-accent" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Наследие поэта</h3>
                    <p className="text-muted-foreground">
                      За свою короткую жизнь (30 лет) Есенин создал около 400 произведений. Его творчество 
                      переведено на множество языков мира и входит в золотой фонд русской литературы.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <Separator className="mb-6 bg-primary-foreground/20" />
          <div className="text-center">
            <p className="text-lg mb-2">
              «Моя лирика жива одной большой любовью — любовью к Родине»
            </p>
            <p className="text-sm opacity-80 mb-4">— Сергей Есенин</p>
            <p className="text-sm opacity-60">
              © 2025 Образовательный портал о С.А. Есенине. Для школьников и любителей поэзии.
            </p>
            <p className="text-sm opacity-50 mt-2">
              Создатель сайта: Глеб Кузнецов
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;