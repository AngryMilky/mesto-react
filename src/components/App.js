import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from "../utils/api";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  const [cards, setCards] = React.useState([]);

  const [selectedCard, setSelectedCard] = React.useState({});


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {

        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);

        setCards(
          initialCards.map((item) => ({
            id: item._id,
            link: item.link,
            name: item.name,
            likes: item.likes.length,
          }))
        )
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div>
      <body className="page">
        <Header />

        <Main onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          userName={userName}
          userDescription={userDescription}
          userAvatar={userAvatar}
          onCardClick={handleCardClick}
          cards={cards}
        />

        <Footer />

        <PopupWithForm isOpen={isAddPlacePopupOpen} 
                       onClose={closeAllPopups} 
                       name='content_element' 
                       title='Новое место' 
        />

        <PopupWithForm isOpen={isEditProfilePopupOpen} 
                       onClose={closeAllPopups} 
                       name='content_profile' 
                       title='Редактировать профиль' 
        />
        
        <PopupWithForm isOpen={isEditAvatarPopupOpen} 
                       onClose={closeAllPopups} 
                       name='edit_avatar' 
                       title='Обновить аватар' 
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </body>
    </div>
  );
}

export default App;
