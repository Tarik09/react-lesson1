export default function Simpsons({name,surname,age,info,photo}) {

    return (
      <div className={'simpsons'}>
        <h2>{name} {surname} - {age}</h2>
        <img src={photo} alt=""/>
        <p>{info}</p>
      </div>
  );
}