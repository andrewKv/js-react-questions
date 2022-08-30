import './App.css';

export default function DisplayIP({ip}:{ip: string}) {
  return (
    <div className="IP-container">
      <p className='IP-text'>Your IP: {ip} </p>
    </div>
  );
}
