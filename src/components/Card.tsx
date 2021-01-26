import CardLabel from './CardLabel';

export interface CardProps {
  url: string;
  name: string;
  birthdate: string;
}
 
const Card: React.FC<CardProps> = ({ url, name, birthdate }) => {
  const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'whitesmoke',
    boxShadow: '10px 5px 5px #45560F',
    borderRadius: '1.2rem',
    padding: '1rem',
    margin: '1.5rem',
  };

  return (
    <div style={cardStyle}>
      <img src={url} style={{borderRadius: '50%'}}/>
      <CardLabel name={name} birthdate={birthdate} />
    </div>
  );
}
 
export default Card;