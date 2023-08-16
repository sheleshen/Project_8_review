// ТЕСТ!
import './style.scss'
import {carusel} from '/carusel.js'


export default function App() {
    return (
        <div class="review-item">
        <p id="title-review" class="title-review">
            Отзыв о туре “${review.title}”
        </p>
        <p id="description-review" class="description-review">
            ${review.text}
        </p>
        <div class="flex-line cntr-object author-review">
            <img id="author-foto" src="/src/images/review-author.png" alt="">
            <div class="flex-column indent-left20">
                <p class="author-name" id="author-name">
                    ${review.name}
                </p>
                <p class="date-review" id="date-review">
                    ${review.date}
                </p>
            </div>
        </div>
    </div>

    )
}