import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlaylistImage1 from './images/ab67706c0000da849b2a754d40f458c24b1361a9.jpeg';
import PlaylistImage2 from './images/billie.jpeg';
import PlaylistImage3 from './images/imagenminiatura.jpeg';
import PlaylistImage4 from './images/selena.jpeg';
import { Search, Home, Library, Plus, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Maximize2, List, Volume2 } from 'lucide-react';

const MusicApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div className="vh-100">
      {!isLoggedIn ? (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Dashboard />
      )}
    </div>
  );
};

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Por favor complete todos los campos');
      return;
    }
    onLogin();
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" 
         style={{
           background: 'linear-gradient(135deg, #7928CA, #FF0080)',
           backgroundSize: 'cover'
         }}>
      <div className="card bg-dark bg-opacity-75 text-white" style={{ width: '24rem', backdropFilter: 'blur(10px)' }}>
        <div className="card-body p-4">
          <h1 className="text-center h3 mb-4 fw-bold">Music App</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control bg-dark border-secondary text-white"
                placeholder="Email address"
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control bg-dark border-secondary text-white"
                placeholder="Password"
              />
            </div>
            {error && (
              <div className="alert alert-danger py-2">{error}</div>
            )}
            <button
              type="submit"
              className="btn btn-primary w-100 fw-bold"
              style={{
                background: 'linear-gradient(to right, #7928CA, #FF0080)',
                border: 'none'
              }}
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const playlists = [
    {
      id: 1,
      title: 'Your favorite songs',
      description: 'Enjoy your favorite music',
      image: PlaylistImage1,
      songs: 15,
    },
    {
      id: 2,
      title: 'Pop music',
      description: 'The best hits',
      image: PlaylistImage2,
      songs: 15
    },
    {
      id: 3,
      title: 'Romantic songs',
      description: 'Your personalized list',
      image: PlaylistImage4,
      songs: 20
    },
  ];

  return (
    <div className="min-vh-100" style={{
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    }}>
      {/* Navbar */}
      <nav className="navbar navbar-dark" style={{
        background: 'rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)'
      }}>
        <div className="container-fluid px-4">
          <a className="navbar-brand fs-3 fw-bold" href="#">
            Music App
          </a>
          <div className="d-flex gap-3 align-items-center">
            <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="form-control bg-dark bg-opacity-10 border-0 text-white"
                type="search"
                placeholder="Buscar playlist..."
                aria-label="Search"
              />
            </form>
            <button className="btn text-white fw-bold" style={{
              background: 'linear-gradient(to right, #7928CA, #FF0080)',
              border: 'none'
            }}>
              Get Premium
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        <div className="row g-4">
          {playlists.map(playlist => (
            <div key={playlist.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 bg-dark bg-opacity-10 border-0 text-white" 
                   style={{ backdropFilter: 'blur(10px)' }}>
                <div className="position-relative">
                  <img
                    src={playlist.image}
                    alt={playlist.title}
                    className="card-img-top"
                    style={{height: '300px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 end-0 m-2">
                    <span className="badge" style={{
                      background: 'linear-gradient(to right, #7928CA, #FF0080)'
                    }}>
                      {playlist.songs} canciones
                    </span>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{playlist.title}</h5>
                  <p className="card-text text-muted">
                    {playlist.description}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-sm text-white" style={{
                      background: 'linear-gradient(to right, #7928CA, #FF0080)'
                    }}>
                      <Play size={16} className="me-1" /> Reproducir
                    </button>
                    <button className="btn btn-sm btn-outline-light">
                      <i className="bi bi-heart"></i> Me gusta ♥
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Player Bar */}
      <div className="fixed-bottom" style={{
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div className="container-fluid p-3">
          <div className="row align-items-center">
            <div className="col-md-4 d-flex align-items-center">
              <img
                src={PlaylistImage3}
                alt="Album Cover"
                className="rounded me-3"
                style={{ width: '56px', height: '56px', objectFit: 'cover' }}
              />
              <div>
                <p className="mb-0 text-white">Moscow Mule</p>
                <small className="text-secondary">Bad Bunny</small>
              </div>
            </div>

            <div className="col-md-4">
              <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
                <Shuffle size={20} className="text-secondary hover-white cursor-pointer" />
                <SkipBack size={20} className="text-secondary hover-white cursor-pointer" />
                <div className="rounded-circle p-2 d-flex justify-content-center align-items-center cursor-pointer"
                     style={{
                       background: 'linear-gradient(to right, #7928CA, #FF0080)'
                     }}>
                  <Play size={20} className="text-white" />
                </div>
                <SkipForward size={20} className="text-secondary hover-white cursor-pointer" />
                <Repeat size={20} className="text-secondary hover-white cursor-pointer" />
              </div>
              <div className="d-flex align-items-center gap-2">
                <small className="text-secondary">0:02</small>
                <div className="progress flex-grow-1" style={{ height: '4px', background: 'rgba(255,255,255,0.1)' }}>
                  <div className="progress-bar" role="progressbar" style={{
                    width: '25%',
                    background: 'linear-gradient(to right, #7928CA, #FF0080)'
                  }}></div>
                </div>
                <small className="text-secondary">4:05</small>
              </div>
            </div>

            <div className="col-md-4 d-flex justify-content-end align-items-center gap-3">
              <Volume2 size={20} className="text-secondary hover-white cursor-pointer" />
              <div className="progress" style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.1)' }}>
                <div className="progress-bar" role="progressbar" style={{
                  width: '50%',
                  background: 'linear-gradient(to right, #7928CA, #FF0080)'
                }}></div>
              </div>
              <Maximize2 size={20} className="text-secondary hover-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hover-white:hover {
          color: white !important;
          transition: color 0.2s ease;
        }
        .cursor-pointer {
          cursor: pointer;
        }
        .card {
          transition: transform 0.2s ease-in-out;
        }
        .card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </div>
  );
};

export default MusicApp;