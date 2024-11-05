import style from './card.module.css';

export function Card({name, time}) {
    return (
        <div className={style.cardContainer}>
            <strong>{name}</strong>
            <small>{time}</small>

        </div>
    )
}