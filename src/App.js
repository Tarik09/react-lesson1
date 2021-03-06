import './App.css';
import Simpsons from "./component/simpson/Simpsons";

export default function App() {
    return (
        <div className="products">
            <Simpsons name={'Bart'} surname={'Simpsons'} age={10}
                      photo={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
                      info={'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpsons) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.'}
            />

            <Simpsons name={'Homer'} surname={'Simpsons'} age={40}
                      photo={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
                      info={'Гомер Джей Сімпсон (англ. Homer Jay Simpsons) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.'}
            />
            <Simpsons name={'Marge'} surname={'Simpsons'} age={38}
                      photo={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}
                      info={'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpsons) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.'}
            />
            <Simpsons name={'Lisa'} surname={'Simpsons'} age={9}
                      photo={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}
                      info={'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpsons) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.'}
            />
            <Simpsons name={'Maggie'} surname={'Simpsons'} age={1}
                      photo={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}
                      info={'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpsons) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.'}

            />
        </div>


    );
}


