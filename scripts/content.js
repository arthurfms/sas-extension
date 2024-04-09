window.addEventListener("load", () => {
  // Creating components
  const createComponent = (el, id = "added-element", classes) => {
    let newElement = document.createElement(el);
    id ? (newElement.id = id) : "";
    classes.length > 0
      ? classes.forEach((cl) => newElement.classList.add(cl))
      : "";

    document.querySelector("body").append(newElement);
    return id
      ? document.querySelector("body").querySelector(`#${id}`)
      : document.querySelector("body").querySelector("#added-element");
  };

  // Generating components
  const handleComponents = (optionsItems, element, container) => {
    container.classList.add("sas-extension");
    let styleEl = document.createElement("style");
    styleEl.textContent = `
    @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

* {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}
.sas-extension {
  display: flex;
  justify-content: center;
  align-items: center;
}
.extension-button {
  display: none;
}
.menu {
  width: 35%;
  min-height: 450px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #d4d4d4;
  border-radius: 8px;
  box-shadow: 3px 3px 5px 0px rgba(85, 85, 85, 0.25);
}
.menu-header {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px auto 15px;
}
.menu-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;
}
.menu-container {
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-container__header {
  width: 100%;
}
.menu-container__left {
  width: 35%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10%;
  row-gap: 5px;
}
.menu-container__right {
  width: 62%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10%;
  row-gap: 5px;
}
.menu-container__left_mid,
.menu-container__right_mid {
  width: 40%;
  margin-bottom: auto;
}
.menu-container__left_bigh,
.menu-container__right_bigh {
  height: 100%;
  min-height: 65px;
}
.menu-container__left_bigw,
.menu-container__right_bigw {
  width: 100%;
}
.menu-container__button {
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7.5px 5px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: #333333;
  background: #f9b417;
  cursor: pointer;
  transition: all 0.5s ease;
}
.menu-container__button:hover {
  opacity: 0.8;
  box-shadow: 3px 3px 5px 0px rgba(85, 85, 85, 0.25);
}
.menu-container__left
  .menu-container__button:not(.menu-container__button_delete),
.menu-container__left_mid
  .menu-container__button:not(.menu-container__button_delete),
.menu-container__right_mid
  .menu-container__button:not(.menu-container__button_delete) {
  width: 100%;
}
.menu-container__left
  .menu-container__button:first-child:not(.menu-container__button_delete) {
  width: 70%;
}
.menu-container__left_bigw .menu-container__button,
.menu-container__right_bigw .menu-container__button,
.menu-container__left_bigw .menu-container__input,
.menu-container__right_bigw .menu-container__input {
  width: 35%;
}
.menu-container__button_delete {
  width: 20%;
}
.menu-container__button_delete:hover {
  opacity: 0.8;
  box-shadow: 3px 3px 5px 0px rgba(85, 85, 85, 0.25);
}
.menu-container__button_delete svg {
  width: 15px;
  fill: #333333;
}
.menu-container__button_delete:first-child ~ .menu-container__button {
  width: 70%;
}
.menu-container__input {
  height: 100%;
  width: 100%;
  resize: none;
  font-size: 15px;
  text-align: center;
  padding: 5px 10px 0;
  border: none;
  border-radius: 4px;
  border-bottom: #333333 1px solid;
  background: #ffffff;
  text-align: left;
  font-size: 12px;
  text-wrap: nowrap;
  scrollbar-width: none;
}
.menu-container__result {
  scrollbar-color: #f9b317 transparent;
  scrollbar-width: thin;
}
.menu-container__input::-webkit-outer-spin-button,
.menu-container__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.menu-container__input:focus,
.menu-container__input:focus-visible,
.menu-container__input:hover {
  outline: none;
  border-bottom: #f9b317 1px solid;
}
.menu-footer {
  width: 90%;
  margin: 25px auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-footer__button {
  width: 35%;
  padding: 7.5px 5px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  color: #333333;
  background: #f9b417;
  cursor: pointer;
  transition: all 0.5s ease;
}
.menu-footer__button:hover {
  opacity: 0.8;
  box-shadow: 3px 3px 5px 0px rgba(85, 85, 85, 0.25);
}`;
    container.append(styleEl);
  };

  // Getting Options
  const getOptions = () => {
    chrome.storage.sync.get(
      {
        datafeed: true,
        sasUI: true,
        decoder: true,
        ftpCred: true,
        getMerchant: true,
        testMerchant: true,
        itp: true,
        getAffiliate: true,
        testAffiliate: true,
        backgroundColor: "#F4F5F4",
        textColor: "#333333",
        btnTextColor: "#333333",
        buttonColor: "#F9B417",
      },
      (items) => {
        // Handle the page
        let exIframe = createComponent("iframe", "sas-iframe", [
          "sas-extension",
        ]);
        handleComponents(items, exIframe, exIframe.contentWindow.document.body);
      }
    );
  };

  getOptions();
});
