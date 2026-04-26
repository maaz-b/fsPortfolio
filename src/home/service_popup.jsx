function ServicePopup({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="servicePopupBackdrop" onClick={onClose}>
      <div
        className="servicePopup"
        onClick={(e) => e.stopPropagation()}
      >
        <h3>{service.title}</h3>
        <p>{service.description}</p>

        <button className="popupCloseBtn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ServicePopup;
