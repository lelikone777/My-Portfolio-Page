const ContactsPage = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>World</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">WhatsApp</h2>
                        <p><a href="tel:+79859609798">+7 (985)960 97 98</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram</h2>
                        <p><a href="https://t.me/rspav">@rspav</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto: 2257855@gmail.com">2257855@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    )
}

export default ContactsPage;