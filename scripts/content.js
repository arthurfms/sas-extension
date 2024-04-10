window.addEventListener("load", () => {
  // Creating components
  const createComponent = (el, id = "added-element", classes) => {
    let newElement = document.createElement(el);
    newElement.id = id;
    classes.length > 0
      ? classes.forEach((cl) => newElement.classList.add(cl))
      : "";

    document.querySelector("body").append(newElement);
    return id
      ? document.querySelector("body").querySelector(`#${id}`)
      : document.querySelector("body").querySelector("#added-element");
  };

  // Handling Options
  const handleOptions = (options, container) => {
    let contentBody = document.createElement("div");
    contentBody.classList.add("menu");
    contentBody.innerHTML = `
    <!-- menu-header -->
    <div class="menu-header">
      <img
        class="menu-header__logo"
        src="https://theme.zdassets.com/theme_assets/11797871/fd12ce8894cfe6d1ac3d51c12751f0764d93522d.png"
        alt="ShareASale logo image" />
    </div>
    <!-- end menu-header -->
    <!-- menu-content -->
    <div class="menu-content">
    </div>
    <!-- end menu-content -->
    `;
    let contentContainer = contentBody.querySelector(".menu-content");

    // Create First Container (SASUI & DATAFEED)
    if (options.sasUI && options.datafeed) {
      let firstContainer = document.createElement("div");
      firstContainer.classList.add("menu-container");
      firstContainer.innerHTML = `
      <a class="menu-container__button" id="sas-ui" href="#">SAS UI</a>
      <a class="menu-container__button" id="datafeed" href="#">Datafeed</a>
      `;
      contentContainer.append(firstContainer);
    } else if (options.sasUI || options.datafeed) {
      let firstContainer = document.createElement("div");
      firstContainer.classList.add("menu-container");
      firstContainer.innerHTML = options.sasUI
        ? `<a class="menu-container__button" id="sas-ui" href="#">SAS UI</a>`
        : `<a class="menu-container__button" id="datafeed" href="#">Datafeed</a>`;
      contentContainer.append(firstContainer);
    }

    // Create Second Container (DECODER & FTP)
    if (options.decoder && options.ftpCred) {
      let secondContainer = document.createElement("div");
      secondContainer.classList.add("menu-container");
      secondContainer.innerHTML = `
      <div class="menu-container__left">
        <button class="menu-container__button" id="decoder">
          Decode URL
        </button>
        <div class="menu-container__button menu-container__button_delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </svg>
        </div>
        <button class="menu-container__button" id="ftp">
          Generate FTP Cred.
        </button>
      </div>
      <div class="menu-container__right menu-container__right_bigh">
        <textarea
          class="menu-container__input menu-container__result"
          name="result"
          placeholder="URL or FTP Credentials"></textarea>
      </div>
      `;
      contentContainer.append(secondContainer);
    } else if (options.decoder || options.ftpCred) {
      let secondContainer = document.createElement("div");
      secondContainer.classList.add("menu-container");
      secondContainer.innerHTML = options.decoder
        ? `
        <div class="menu-container__left">
          <button class="menu-container__button" id="decoder">
            Decode URL
          </button>
          <div class="menu-container__button menu-container__button_delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </div>
        </div>
        <div class="menu-container__right menu-container__right_bigh">
          <textarea
            class="menu-container__input menu-container__result"
            name="result"
            placeholder="URL or FTP Credentials"></textarea>
        </div>
        `
        : `
        <div class="menu-container__left">
          <button class="menu-container__button" id="decoder">
            Decode URL
          </button>
          <div class="menu-container__button menu-container__button_delete">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </div>
        </div>
        <div class="menu-container__right menu-container__right_bigh">
          <textarea
            class="menu-container__input menu-container__result"
            name="result"
            placeholder="URL or FTP Credentials"></textarea>
        </div>
        `;
      contentContainer.append(secondContainer);
    }

    // Create Third Container (MERCHANT & AFFILIATE)
    if (
      options.getMerchant ||
      options.testMerchant ||
      options.itp ||
      options.getAffiliate ||
      options.testAffiliate
    ) {
      let thirdContainer = document.createElement("div");
      thirdContainer.classList.add("menu-container");

      if (options.getMerchant || options.testMerchant || options.itp) {
        let leftCont = document.createElement("div");
        leftCont.classList.add("menu-container__left");
        leftCont.classList.add("menu-container__left");
        leftCont.innerHTML = `
      <div class="menu-container__header">
        <h4 class="menu-container__title">Merchant</h4>
      </div>
      `;

        options.getMerchant || options.itp
          ? (leftCont.innerHTML += `
        <textarea
        class="menu-container__input menu-container__input_merchant"
        name="Merchant"
        placeholder="Merchant ID"></textarea>
      `)
          : "";

        options.getMerchant
          ? (leftCont.innerHTML += `
        <button class="menu-container__button" id="get-merchant">
          Get Merchant
        </button>
      `)
          : "";

        options.itp
          ? (leftCont.innerHTML += `
        <button class="menu-container__button" id="itp-merchant">
          Check ITP
        </button>
      `)
          : "";

        options.testMerchant
          ? (leftCont.innerHTML += `
        <button class="menu-container__button" id="test-merchant">
          Test Merchant
        </button>
      `)
          : "";
        thirdContainer.append(leftCont);
      }
      if (options.getAffiliate || options.testAffiliate) {
        let rightCont = document.createElement("div");
        rightCont.classList.add("menu-container__right");
        rightCont.classList.add("menu-container__right_mid");
        rightCont.innerHTML = `
      <div class="menu-container__header">
        <h4 class="menu-container__title">Affiliate</h4>
      </div>
      `;

        options.getAffiliate
          ? (rightCont.innerHTML += `
          <textarea
          class="menu-container__input menu-container__input_affiliate"
          name="Affiliate"
          placeholder="Affiliate ID"></textarea>
          <button class="menu-container__button" id="get-affiliate">
            Get Affiliate
          </button>
      `)
          : "";

        options.testAffiliate
          ? (rightCont.innerHTML += `
        <button class="menu-container__button" id="test-affiliate">
          Test Affiliate
        </button>
      `)
          : "";
        thirdContainer.append(rightCont);
      }
      contentContainer.append(thirdContainer);
    }
    let footer = document.createElement("div");
    footer.classList.add("menu-footer");
    footer.innerHTML = `<p class="menu-footer__button">Close Extension</p>`;
    contentBody.append(footer);
    container.append(contentBody);
  };

  // Generating components
  const handleComponents = (optionsItems, element, container) => {
    console.log(optionsItems);
    //adding element attributes
    element.title = "SAS Internal Extension";
    element.style =
      "width: 455px; height: 505px; position: fixed; bottom: 5px; right: 5px; border: none; background: transparent;";

    // Create style elements
    let styleLink = document.createElement("link");
    styleLink.type = "text/css";
    styleLink.rel = "stylesheet";
    styleLink.href =
      "https://arthurfms.github.io/sas-extension/source/source.css";

    let font1 = document.createElement("link");
    let font2 = document.createElement("link");
    let font3 = document.createElement("link");
    font1.rel = "preconnect";
    font1.href = "https://fonts.googleapis.com";
    font2.rel = "preconnect";
    font2.href = "https://fonts.gstatic.com";
    font3.rel = "stylesheet";
    font3.href =
      "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";

    // Append style elements
    element.contentWindow.document.head.append(font1);
    element.contentWindow.document.head.append(font2);
    element.contentWindow.document.head.append(font3);
    element.contentWindow.document.head.append(styleLink);

    //Handling body
    container.classList.add("sas-extension");
    handleOptions(optionsItems, container);
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
          "sas-extension-iframe",
        ]);
        handleComponents(items, exIframe, exIframe.contentWindow.document.body);
      }
    );
  };

  getOptions();
});
