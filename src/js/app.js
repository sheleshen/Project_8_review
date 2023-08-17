import Reviews from './script';

function App() {
    return (
        <main>
            <section className="review-section container">
                <h1>Отзывы наших путешественников</h1>
                <div className="review">
                    <img
                        className="image-review position-image-review"
                        src="/review-image.9d82d2a3.png"
                        alt="фото отзыва"
                    ></img>
                    <div className="left-alignment">
                        <div className="review-list">
                            <Reviews />
                        </div>
                    </div>
                    <div className="btn-icon-list">
                        <div id="btn-prev" className="prev-btn">
                            <img src="/src/icons/left.png" alt="кнопка назад" />
                        </div>
                        <div id="btn-next" className="next-btn">
                            <img
                                src="/src/icons/right.png"
                                alt="кнопка вперед"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
