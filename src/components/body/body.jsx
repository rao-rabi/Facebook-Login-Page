const Body = () => {
  return (
    <div style={{backgroundColor:"#f0f2f5", minHeight:"90vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5 col-12 mt-5 text-md-start text-center">
            <h1 className="fw-bold display-4 text-primary">facebook</h1>
            <p className="fs-3 fw-medium">
              Facebook helps you connect and share with the people in your life
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-12 text-center">
            <form action="submit" className="p-3 rounded-3 bg-white" style={{boxShadow:"0 2px 4px rgba(0, 0, 0 , .1)"}}>
              <input
                type="email"
                className="p-3 w-100 border border-dark-subtle rounded-3 form-control"
                style={{ outline: "none" }}
                placeholder="Email adress or Phone Number"
              />
              <input
                type="password"
                className="p-3 w-100 border border-dark-subtle mt-3 rounded-3 form-control"
                style={{ outline: "none" }}
                placeholder="Password"
              />
              <button className="bg-primary text-white fw-bold rounded-3 border-0 w-100 mt-3 p-3">
                Log In
              </button>
              <p className="text-primary text-center mt-2 mb-3 font-sans-serif">
                Forgotten Password?
              </p>
              <hr />
              <button
                className="text-white fw-bold rounded-3 fs-5 border-0 mt-3 p-2 px-3"
                style={{ backgroundColor: "#42b72a" }}
              >
                Create new account
              </button>
            </form>
            <p className="text-center py-3"><b>Create a Page</b> for a celebrity, brand or business.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
