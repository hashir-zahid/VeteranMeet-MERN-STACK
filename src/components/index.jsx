import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const services = [
  { title: "Public Talks", desc: "General meetups and discussions" },
  { title: "Plantation Drives", desc: "Green initiatives by NGOs or Veterans" },
  { title: "Motivational Talks", desc: "Inspire employees or students" },
  { title: "Orphanage Visits", desc: "Spread joy to children" },
  { title: "Professional Tasks", desc: "Monitoring and policy decision making" },
  { title: "Book Discussions", desc: "Engaging book club sessions" }
];

const Index = () => {
  return (
    <div className="veteran-meet-app d-flex flex-column min-vh-100">

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">VeteranMeet</a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#stars">Veteran Tiers</a></li>
              <li className="nav-item ms-lg-3">
                <button className="btn btn-outline-light">Login</button>
              </li>
              <li className="nav-item ms-lg-2">
                <button className="btn btn-warning">Join Now</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-light py-5 border-bottom">
        <div className="container px-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold">Connecting Wisdom with Community</h1>
              <p className="lead text-muted">
                VeteranMeet connects retired professionals to socialize, mentor,
                and contribute to community service.
              </p>

              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg">Veteran Registration</button>
                <button className="btn btn-outline-secondary btn-lg">Organization Portal</button>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                   style={{ width: 350, height: 350 }}>
                <h3 className="text-center">Socialize<br />& Serve</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="py-5" id="services">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Our Platform Modules</h2>
            <p className="text-muted">Features for veterans and organizations</p>
          </div>

          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow p-4">
                <h4>Veteran Module</h4>
                <ul>
                  <li>Create professional profile</li>
                  <li>Post photos and updates</li>
                  <li>Follow veterans & organizations</li>
                  <li>Search nearby events</li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 mb-4">
              <div className="card h-100 shadow p-4 bg-dark text-white">
                <h4 className="text-warning">Community Module</h4>
                <ul>
                  <li>NGO & institution profiles</li>
                  <li>Create service events</li>
                  <li>Invite veterans by interest</li>
                  <li>Reward attendance with stars</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Community Services</h2>

          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 shadow-sm text-center p-3">
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking */}
      <section className="py-5" id="stars">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Veteran Ranking System</h2>

          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-primary">
                <tr>
                  <th>Category</th>
                  <th>Stars Required</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Silver Veteran</td><td>25,000</td></tr>
                <tr><td>Ruby Veteran</td><td>40,000</td></tr>
                <tr><td>Golden Veteran</td><td>50,000</td></tr>
                <tr><td>Diamond Veteran</td><td>60,000</td></tr>
                <tr><td>Eternal Sage</td><td>100,000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3 mt-auto">
        <div className="container d-flex justify-content-between">
          <small>© 2025 VeteranMeet</small>
          <small>
            <a href="#!" className="text-white me-2">Privacy</a>
            <a href="#!" className="text-white">Terms</a>
          </small>
        </div>
      </footer>

    </div>
  );
};

export default Index;
