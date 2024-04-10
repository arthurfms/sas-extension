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

  // Handling events
  const eventsHandler = (target, elements, event, callBack) => {
    target.addEventListener(event, (evt) => {
      callBack(elements);
    });
  };
  // Handling Options
  const handleOptions = (options, container) => {
    let extensionButton = document.createElement("div");
    extensionButton.classList.add("extension-button");
    extensionButton.innerHTML = `
    <svg
        class="extension-button__logo"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 182.24 347.97"
        style="enable-background: new 0 0 182.24 347.97"
        xml:space="preserve">
        <g>
          <path
            class="extension-button__logo-path"
            d="M182.24,301.91c-13.65,6.12-26.55,13.7-39.84,20.51c-11.98,6.15-23.84,12.52-35.77,18.78
		c-5.02,2.63-10.19,4.79-15.79,5.98c-17.38,3.68-29.45-5.61-30.51-23.44c-0.58-9.78,1.75-19.19,3.32-28.68
		c3.67-22.14,7.6-44.23,11.49-66.34c0.47-2.66,0.05-4.66-2.03-6.67c-18.65-18.06-37.18-36.26-55.79-54.37
		c-5.02-4.89-9.92-9.85-13.36-16.05c-8.11-14.6-3.55-28.06,11.69-34.95c10.06-4.55,20.94-5.06,31.59-6.67
		c21.53-3.25,43.09-6.31,64.66-9.33c3.09-0.43,4.91-1.69,6.32-4.59c11.71-24.07,23.62-48.05,35.45-72.06
		c3.18-6.47,6.93-12.53,12.37-17.37c4.61-4.11,9.85-6.77,16.21-6.65C182.24,100.64,182.24,201.27,182.24,301.91z" />
        </g>
      </svg>
      <svg
        class="extension-button__close-button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512">
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    `;
    container.append(extensionButton);

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
    //adding element attributes
    element.title = "SAS Internal Extension";
    element.style =
      "width: 40px; height: 70px; position: fixed; bottom: 75px; right: 0px; border: none; background: transparent; z-index: 100";

    // Create style elements
    let styleLink = document.createElement("link");
    styleLink.type = "text/css";
    styleLink.rel = "stylesheet";
    styleLink.href =
      "https://arthurfms.github.io/sas-extension/source/source.css";
    let resetLink = document.createElement("link");
    resetLink.type = "text/css";
    resetLink.rel = "stylesheet";
    resetLink.href =
      "https://arthurfms.github.io/sas-extension/source/reset.css";

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
    element.contentWindow.document.head.append(resetLink);
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

        let iframeBody = exIframe.contentWindow.document.body;
        let handlerButton = iframeBody.querySelector(".extension-button");
        eventsHandler(handlerButton, [exIframe, iframeBody], "click", (el) => {
          el[1].classList.toggle("sas-extension_active");
          if (el[1].classList.contains("sas-extension_active")) {
            (el[0].style.width = "445px"), (el[0].style.height = "455px");
          } else {
            (el[0].style.width = "40px"), (el[0].style.height = "70px");
          }
        });
      }
    );
  };

  getOptions();
});
