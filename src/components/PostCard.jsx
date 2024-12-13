const apiUrl = import.meta.env.VITE_APP_URL;

export default function PostCard({ titolo, immagine, tags, descrizione }) {
  return (
    <div className="card mb-3 shadow">
      <img src={apiUrl + immagine} className="card-img-top" alt={titolo} />
      <div className="card-body">
        <h5 className="card-title mb-3">{titolo}</h5>
        <p className="card-text mb-3">{descrizione}</p>
        <p className="card-text">
          <small className="text-body-secondary">{tags}</small>
        </p>
      </div>
    </div>
  );
}

//# ALTRE VERSIONI DELLA CARD

{
  /* <div className="card mb-3">
      <img src={apiUrl + immagine} className="card-img-top " alt={titolo} />
      <div className="card-body">
        <h5 className="card-title">{titolo}</h5>
        <p className="card-text">{descrizione}</p>
        <p className="card-text">{tags.join(", ")}</p>
      </div>
    </div> */
}

{
  /* 
<div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={apiUrl + immagine}
            className="img-fluid rounded-start"
            alt={titolo}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titolo}</h5>
            <p className="card-text">{descrizione}</p>
            <p className="card-text">
              <small className="text-body-secondary">{tags}</small>
            </p>
          </div>
        </div>
      </div>
    </div> */
}
