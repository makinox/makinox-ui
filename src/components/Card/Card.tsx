import { CardType } from './Card.types';

function Card({ title, secondary, text, buttons, children, ...props }: CardType) {
  return (
    <article {...props}>
      {children ? (
        children
      ) : (
        <>
          <div>
            <h6>{title}</h6>
            <span>{secondary}</span>
          </div>
          <div>
            <p>{text}</p>
          </div>
          <div>{buttons?.map((el) => el)}</div>
        </>
      )}
    </article>
  );
}

export default Card;
