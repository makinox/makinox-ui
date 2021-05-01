import { CardElevated, CardOutlined } from './Card.styles';
import { CardType } from './Card.types';

function Card({ title, secondary, text, buttons, children, media, use, maxWidth = '330px', ...props }: CardType) {
  const Child = children ? (
    children
  ) : (
    <>
      {media ? <div className="card-media" /> : <></>}
      {title || secondary ? (
        <div className="card-header">
          {title ? <h6 className="headline6">{title}</h6> : <></>}
          {secondary ? <span className="subtitle1">{secondary}</span> : <></>}
        </div>
      ) : (
        <></>
      )}
      {text ? (
        <div className="card-body">
          <p className="body2">{text}</p>
        </div>
      ) : (
        <></>
      )}
      {buttons ? <div className="card-bottom">{buttons?.map((el) => el)}</div> : <></>}
    </>
  );

  switch (use) {
    case 'elevated':
      return (
        <CardElevated maxWidth={maxWidth} media={media} {...props}>
          {Child}
        </CardElevated>
      );
    case 'outlined':
      return (
        <CardOutlined maxWidth={maxWidth} media={media} {...props}>
          {Child}
        </CardOutlined>
      );
    default:
      return (
        <CardElevated maxWidth={maxWidth} media={media} {...props}>
          {Child}
        </CardElevated>
      );
  }
}

export default Card;
