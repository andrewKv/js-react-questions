import './App.css';

export default function DisplayCountry({country}:{country: string}) {
  return (
    <div className="Country-container">
      <div className="Country-flag">
        <p className='Country-text'>{country}</p>
      </div>
    </div>
  );
}
