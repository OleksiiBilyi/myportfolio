import React, { Component } from "react";

export class ContactsBlock extends Component {
  render() {
    return (
      <div className="page__contacts-block contacts-block">
        <div className="contacts-block__container container">
          <h1 className="contacts-block__title">Contacts</h1>
          <div className="contacts-block__info">
            <h2 className="contacts-block__info-title">Location</h2>
            <h6 className="contacts-block__info-href">
              <a href="https://goo.gl/maps/KViaceVYcKySQf746" className="contacts-block__info-link">Krakow, Poland</a>
            </h6>
          </div>
          <div className="contacts-block__info">
            <h2 className="contacts-block__info-title">Telegram</h2>
            <h6 className="contacts-block__info-href">
              <a href="https://t.me/vilnaukraina_admin" className="contacts-block__info-link">+380731828039</a>
            </h6>
          </div>
          <div className="contacts-block__info">
            <h2 className="contacts-block__info-title">Email</h2>
            <h6 className="contacts-block__info-href">
              <a href="mailto:thyrxne@gmail.com" className="contacts-block__info-link">thyrxne@gmail.com</a>
            </h6>
          </div>
        </div>
      </div>
    )
  }
}