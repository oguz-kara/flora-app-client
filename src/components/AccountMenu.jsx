import '../style/account-menu.scss';

export default function AccountMenu() {
  return (
    <>
      <div className="account-menu__search p-6">
        <div className="account-menu__search-body">
          <div className="account-menu__section-title">Recently Searched:</div>
          <ul className="account-menu__list">
            <li className="account-menu__list-item">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="airpods"
                className="account-menu__list-image"
              />
              <div className="account-menu__list-content">
                <div className="account-menu__list-content__title">
                  Beats, headphones extra powered
                </div>
                <div className="account-menu__list-content__subtitle">
                  #45789
                </div>
              </div>
            </li>
            <li className="account-menu__list-item">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80"
                alt="airpods"
                className="account-menu__list-image"
              />
              <div className="account-menu__list-content">
                <div className="account-menu__list-content__title">
                  Watch, watch w very good design
                </div>
                <div className="account-menu__list-content__subtitle">
                  #45789
                </div>
              </div>
            </li>
            <li className="account-menu__list-item">
              <img
                src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="airpods"
                className="account-menu__list-image"
              />
              <div className="account-menu__list-content">
                <div className="account-menu__list-content__title">
                  Amazing sun glasses
                </div>
                <div className="account-menu__list-content__subtitle">
                  #45789
                </div>
              </div>
            </li>
            <li className="account-menu__list-item">
              <img
                src="https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80"
                alt="airpods"
                className="account-menu__list-image"
              />
              <div className="account-menu__list-content">
                <div className="account-menu__list-content__title">
                  Nikon, perfect pictures
                </div>
                <div className="account-menu__list-content__subtitle">
                  #45789
                </div>
              </div>
            </li>
            <li className="account-menu__list-item">
              <img
                src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="airpods"
                className="account-menu__list-image"
              />
              <div className="account-menu__list-content">
                <div className="account-menu__list-content__title">
                  Xbox gaming keyboard
                </div>
                <div className="account-menu__list-content__subtitle">
                  #45789
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
