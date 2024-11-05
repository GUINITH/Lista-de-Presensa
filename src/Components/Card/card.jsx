import style from './card.module.css';

export function Card({ userName, timeUser }) {
    return (
        <div className={style.cardContainer}>
            <strong>{userName}</strong>
            <small>{timeUser}</small>

        </div>
    )
}