export default function ImagePopup({selectedCard, onClose}) { 
  return ( 
    <div className = {`modal modal_type_image ${selectedCard ? 'modal_is-open' : null}`}> 
        <figure className = "modal__figure"> 
          <button className = "form__close-button form__close-button_type-image" onClick = {onClose} aria-label = "Close button" type = "button"></button> 
          <img className = "modal__image" src= {selectedCard ? selectedCard.link : null} alt = {selectedCard ? selectedCard.name : null}/> 
          <figcaption className = "modal__image-title">{selectedCard ? selectedCard.name : null}</figcaption> 
        </figure> 
      </div> 
  ) 
} 