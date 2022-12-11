import * as React from 'react';

import { questions } from './config';
import image from './img.png';

import './TestPage.css';

const TestPage = () => {
    const [curQuestion, setCurQuestion] = React.useState(0);
    const question = curQuestion >= questions.length ? null : questions[curQuestion];

    const click = () => setCurQuestion(curQuestion + 1);

    if (!question) {
        return <div className="test-page__final">
            <div className="test-page__final-title">
                Совместима ли ваша<br/>пара?
            </div>
            <div className="test-page__final-content">
                <h2 className="test-page__final-content-h2">Ваши результаты:</h2>
                <p>Поздравляем! У вас есть высокая совместимость и предрасположенность к долговременному счастливому браку. И вы, и ваш партнер прекрасно знаете друг друга. Взгляды на жизнь, на общее будущее у вас очень схожи. Ваши отношения — пример внимательного и чуткого отношения друг к другу. Такое взаимопонимание свидетельствует о том, что вы много времени проводите вместе и живо интересуетесь всем происходящим в жизни вашей половины.</p>
                <div className="test-page__ad">
                    <img className="test-page__ad-image" alt="ad" src={image} />
                    <div className="test-page__ad-banner">РЕКЛАМА</div>
                    <div className="test-page__ad-title">У ребенка ОРВИ - возьми Цитовир-3</div>
                    <div className="test-page__ad-button">Заказать в аптеке</div>
                </div>
            </div>
        </div>
    }

    return <div className="test-page">
        <div className="test-page__counter">Вопросы {curQuestion}/{questions.length}</div>
        <div className="test-page__question">
            {curQuestion + 1}. {question}
        </div>
        <>
            {curQuestion === questions.length - 1 && <>
                {Array.apply(null, Array(1000)).map(() =>  <div className="test-page__option" onClick={click}>
                    <div className="test-page__option-circle"/>
                    Да
                </div>)}
            </>}
            {curQuestion !== questions.length - 1 && <>
                <div className="test-page__option" onClick={click}>
                    <div className="test-page__option-circle"/>
                    Мы оба согласны
                </div>
                <div className="test-page__option" onClick={click}>
                    <div className="test-page__option-circle"/>
                    Мы оба не согласны
                </div>
                <div className="test-page__option" onClick={click}>
                    <div className="test-page__option-circle"/>
                    Согласен кто-то один из нас
                </div>
            </>}
        </>
        <div className="test-page__ad">
            <img className="test-page__ad-image" alt="ad" src={image} />
            <div className="test-page__ad-banner">РЕКЛАМА</div>
            <div className="test-page__ad-title">У ребенка ОРВИ - возьми Цитовир-3</div>
            <div className="test-page__ad-button">Заказать в аптеке</div>
        </div>
    </div>
};

export default TestPage;
