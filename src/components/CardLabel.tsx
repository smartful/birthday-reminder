export interface CardLabelProps {
  name: string;
  birthdate: string;
}
 
const CardLabel: React.FC<CardLabelProps> = ({ name, birthdate }) => {
  const labelStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    marginLeft: '1rem',
  };

  return (
    <div style={labelStyle}>
      <div style={{fontSize: '2rem'}}>{name}</div>
      <div style={{fontSize: '1rem', color: '#555555'}}>{birthdate}</div>
    </div>
  );
}
 
export default CardLabel;