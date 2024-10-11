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
      callBack(elements, evt);
    });
  };
  // Decode URL
  const decodeUrl = (inp, container) => {
    let decodedUrl = decodeURIComponent(inp);
    let mainUrl =
      decodedUrl.indexOf("?") > 0 ? decodedUrl.split("?")[0] : false;
    let queryParams = mainUrl
      ? decodedUrl.split("?")[1].split("&")
      : decodedUrl.split("&");
    container.value = "";
    container.value = `${decodedUrl}\n\n`;
    queryParams.forEach((param, index) => {
      index == 0
        ? (container.value = container.value + `${param}`)
        : (container.value = container.value + `\n${param}`);
    });
    container.scrollTop = 0;
    container.scrollLeft = 0;
  };
  // Generate FTP Credentials
  let generateFTP = (input, container) => {
    container.value = "";
    let output;
    const inputString = input;

    const containsUsernameOrPassword = /Username:|Password:/i.test(inputString);
    const noCredFound = /No Username or Password found/i.test(inputString);

    if (containsUsernameOrPassword) {
      let newInput = input.replace(/(\r\n|\n|\r)/gm, "");
      newInput = newInput.replace("Username: ", "<br>Username: <strong>");
      newInput = newInput.replace(
        "Password: ",
        "</strong> \n<br>Password: <strong>"
      );
      newInput = newInput + "</strong>";
      output = `FTP Credentials. \n${newInput}`;
    }

    if (!noCredFound) {
      container.value = output
        ? output
        : `No Username or Password found.\n\n${input}`;
    } else {
      container.value = input;
    }
    container.scrollTop = 0;
    container.scrollLeft = 0;
  };
  // Cleaning Inputs
  const cleanInputs = (element) => {
    let inputs = element.querySelectorAll("input");
    element.querySelector("#get-merchant")
      ? element
          .querySelector("#get-merchant")
          .classList.add("menu-container__button_deactive")
      : "";
    element.querySelector("#itp-merchant")
      ? element
          .querySelector("#itp-merchant")
          .classList.add("menu-container__button_deactive")
      : "";
    element.querySelector("#get-affiliate")
      ? element
          .querySelector("#get-affiliate")
          .classList.add("menu-container__button_deactive")
      : "";
    inputs.forEach((inp) => {
      inp.value = "";
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

    // Create First Container (SASUI & DATAFEED & TEST ACCOUNTS)
    if (
      options.sasUI ||
      options.datafeed ||
      options.testMerchant ||
      options.testAffiliate
    ) {
      let firstContainer = document.createElement("div");
      firstContainer.classList.add("menu-container");
      firstContainer.classList.add("menu-container_buttons");
      options.sasUI
        ? (firstContainer.innerHTML += `
          <a class="menu-container__button" id="sas-ui" href="https://account.shareasale.com/admin/index.cfm" target="_parent">SAS UI</a>`)
        : "";
      options.datafeed
        ? (firstContainer.innerHTML += `
          <a class="menu-container__button" id="datafeed" href="https://account.shareasale.com/admin/datafeedqueue.cfm" target="_parent">Datafeed</a>`)
        : "";
      options.testMerchant
        ? (firstContainer.innerHTML += `
        <a class="menu-container__button" id="test-merchant" href="https://account.shareasale.com/admin/adminDetailsMerchant.cfm?merchantId=44911&searchby=44911" target="_parent" >
          Test Merchant
        </a>
      `)
        : "";
      options.testAffiliate
        ? (firstContainer.innerHTML += `
        <a class="menu-container__button" id="test-affiliate" href="https://account.shareasale.com/admin/adminDetailsAffiliate.cfm?userid=178&searchby=178" target="_parent" >
          Test Affiliate
        </a>
      `)
        : "";
      contentContainer.append(firstContainer);
    }

    // Create Second Container (DECODER & FTP)
    if (options.decoder || options.ftpCred) {
      let secondContainer = document.createElement("div");
      secondContainer.classList.add("menu-container");
      secondContainer.classList.add("menu-container_textarea");
      let leftDiv = document.createElement("div");
      leftDiv.classList.add("menu-container__left");

      options.ftpCred
        ? (leftDiv.innerHTML += `
        <button class="menu-container__button" id="ftp">
          Generate FTP Cred.
        </button>
        <div class="menu-container__button menu-container__button_delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </svg>
        </div>
        
      `)
        : "";
      options.decoder
        ? (leftDiv.innerHTML += `
        <button class="menu-container__button" id="decoder">
          Decode URL
        </button>        
      `)
        : "";
      !options.ftpCred
        ? (leftDiv.innerHTML += `
        <div class="menu-container__button menu-container__button_delete">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
          </svg>
        </div>
        
      `)
        : "";
      secondContainer.append(leftDiv);
      secondContainer.innerHTML += `
      <div class="menu-container__right">
        <textarea
          class="menu-container__input menu-container__result" 
          id="dec-ftp-input" 
          name="result"
          placeholder="URL or FTP Credentials"></textarea>
      </div>
      `;
      contentContainer.append(secondContainer);
    }

    // Create Third Container (MERCHANT & AFFILIATE)
    if (options.getMerchant || options.itp || options.getAffiliate) {
      let thirdContainer = document.createElement("div");
      thirdContainer.classList.add("menu-container");

      if (options.getMerchant || options.itp) {
        let leftCont = document.createElement("div");
        leftCont.classList.add("menu-container__left");
        leftCont.classList.add("menu-container__left_mid");
        leftCont.innerHTML = `
      <div class="menu-container__header">
        <h4 class="menu-container__title">Merchant</h4>
      </div>
      `;

        options.getMerchant || options.itp
          ? (leftCont.innerHTML += `
        <input
        type="text"
        class="menu-container__input menu-container__input_merchant"
        name="input_0${Math.floor(Math.random() * 100000)}"
        placeholder="Merchant ID"></input>
      `)
          : "";

        options.getMerchant
          ? (leftCont.innerHTML += `
        <a class="menu-container__button menu-container__button_deactive" id="get-merchant" href="#" target="_parent" >
          Get Merchant
        </a>
      `)
          : "";

        options.itp
          ? (leftCont.innerHTML += `
        <a class="menu-container__button menu-container__button_deactive" id="itp-merchant" href="#" target="_parent" >
          Check ITP
        </a>
      `)
          : "";

        options.getAffiliate
          ? ""
          : (leftCont.classList.remove("menu-container__left_mid"),
            leftCont.classList.add("menu-container__left_full"));
        thirdContainer.append(leftCont);
      }
      if (options.getAffiliate) {
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
          <input
          type="text"
          class="menu-container__input menu-container__input_affiliate"
          name="input_1${Math.floor(Math.random() * 100000)}"
          placeholder="Affiliate ID"></input>
          <a class="menu-container__button menu-container__button_deactive" id="get-affiliate" href="#" target="_parent" >
            Get Affiliate
          </a>
      `)
          : "";

        options.getMerchant || options.itp
          ? ""
          : (rightCont.classList.remove("menu-container__left_mid"),
            rightCont.classList.add("menu-container__left_full"));
        thirdContainer.append(rightCont);
      }
      contentContainer.append(thirdContainer);
    }

    let footer = document.createElement("div");
    footer.classList.add("menu-footer");
    footer.innerHTML = `<p class="menu-footer__button">Hide Extension</p>`;
    contentBody.append(footer);
    container.append(contentBody);

    // Handle Merchant Buttons and input
    if (options.getMerchant || options.itp) {
      let merchantInput = contentBody.querySelector(
        ".menu-container__input_merchant"
      );
      let merchantGet = options.getMerchant
        ? contentBody.querySelector("#get-merchant")
        : "";
      let merchantItp = options.itp
        ? contentBody.querySelector("#itp-merchant")
        : "";
      merchantInput.onkeyup = (evt) => {
        if (options.getMerchant) {
          merchantGet.href =
            /^\d+$/.test(evt.target.value.trim()) &&
            parseInt(evt.target.value.trim()) > 95
              ? `https://account.shareasale.com/admin/adminDetailsMerchant.cfm?merchantId=${evt.target.value.trim()}&searchby=${evt.target.value.trim()}`
              : `https://account.shareasale.com/admin/index.cfm?searchby=${evt.target.value.trim()}&blnUserSearch=1&searchFor=merchants`;

          parseInt(evt.target.value.trim().length) > 1
            ? merchantGet.classList.remove("menu-container__button_deactive")
            : merchantGet.classList.add("menu-container__button_deactive");
        }
        if (options.itp) {
          merchantItp.href = `https://account.shareasale.com/admin/itp.cfm?merchantid=${evt.target.value.trim()}`;

          /^\d+$/.test(evt.target.value.trim()) &&
          parseInt(evt.target.value.trim()) > 95
            ? merchantItp.classList.remove("menu-container__button_deactive")
            : merchantItp.classList.add("menu-container__button_deactive");
        }
      };
    }
    // Handle Affiliate Buttons and input
    if (options.getAffiliate) {
      let affiliateInput = contentBody.querySelector(
        ".menu-container__input_affiliate"
      );
      let affiliateGet = contentBody.querySelector("#get-affiliate");
      affiliateInput.onkeyup = (evt) => {
        affiliateGet.href =
          /^\d+$/.test(evt.target.value.trim()) &&
          parseInt(evt.target.value.trim()) > 24
            ? `https://account.shareasale.com/admin/adminDetailsAffiliate.cfm?userid=${evt.target.value.trim()}&searchby=${evt.target.value.trim()}`
            : `https://account.shareasale.com/admin/index.cfm?searchby=${evt.target.value.trim()}&blnUserSearch=1&searchFor=users`;

        parseInt(evt.target.value.trim().length) > 1
          ? affiliateGet.classList.remove("menu-container__button_deactive")
          : affiliateGet.classList.add("menu-container__button_deactive");
      };
    }
    // Handle Decoder and FTP Buttons and input
    if (options.decoder || options.ftpCred) {
      let decftpInput = contentBody.querySelector("#dec-ftp-input");
      let decButton = options.decoder
        ? contentBody.querySelector("#decoder")
        : "";
      let ftpButton = options.ftpCred ? contentBody.querySelector("#ftp") : "";
      let deleteButton = contentBody.querySelector(
        ".menu-container__button_delete"
      );

      options.decoder
        ? decButton.addEventListener("click", () => {
            decodeUrl(decftpInput.value, decftpInput);
          })
        : "";
      options.ftpCred
        ? ftpButton.addEventListener("click", () => {
            decftpInput.value.length > 15
              ? generateFTP(decftpInput.value, decftpInput)
              : "";
          })
        : "";
      deleteButton.addEventListener("click", () => {
        decftpInput.value = "";
        decftpInput.scrollTop = 0;
        decftpInput.scrollLeft = 0;
      });
    }
  };

  // Generating components
  const handleComponents = (optionsItems, element, container) => {
    //adding element attributes
    element.title = "SAS Internal Extension";

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

  //Handling Transactions #here
  const handleTransactions = (options, resElements, filtersCont) => {
    let activeOptions = [];
    let pg;
    options.forEach((opt) => {
      opt.querySelector("input") ? pg = opt.querySelector("input").value : "";
      opt.querySelector(".transactions-option__box_active") ? activeOptions.push(opt.querySelector("p").textContent) : "";
    });
    getTransactions(activeOptions, resElements, pg, filtersCont);
  }
  // Getting Transactions
  const getTransactions = (options, resultEl, pages, filtersCont) => {
    let addColumn = (container, data) => {
      let tempCol = document.createElement("p");
      tempCol.classList.add("transactions-result__column");
      tempCol.textContent = data;
      container.append(tempCol);
    }
    const returnResult = (ordersObj, resultCont, filter = "All Orders") => {
      let resultHeader = resultCont.parentElement.querySelector(".transactions-result__title").querySelector("span");

      resultHeader.innerHTML = ` | ${filter}`;
      resultCont.textContent = "";

      let headerRow = document.createElement("div");
        headerRow.classList.add("transactions-result__row");

        // each option >> create column
        addColumn(headerRow, "Date");
        options.includes("Amount") ? addColumn(headerRow, "Amount") : "";
        options.includes("Order ID") ? addColumn(headerRow, "Order ID") : "";
        options.includes("Version") ? addColumn(headerRow, "Version") : "";
        options.includes("Affiliate") ? addColumn(headerRow, "Affiliate") : "";
        options.includes("Type") ? addColumn(headerRow, "Type") : "";
        options.includes("Voided") ? addColumn(headerRow, "Voided") : "";
        options.includes("Commission") ? addColumn(headerRow, "Commission") : "";
        options.includes("Comment") ? addColumn(headerRow, "Comment") : "";
        options.includes("Hash") ? addColumn(headerRow, "Hash") : "";
        options.includes("Referer") ? addColumn(headerRow, "Referer") : "";
        options.includes("Tracking Pixel") ? addColumn(headerRow, "Tracking Pixel") : "";

        resultCont.append(headerRow);

        ordersObj.forEach((order) => {
          let validOrder;
          console.log(filter.toUpperCase().includes("NO VERSION"));
          if (filter.includes("Version:") && !filter.toUpperCase().includes("NO VERSION")) {
            validOrder = filter == `Version: ${order.version}`;
          } else if (filter.toUpperCase().includes("NO VERSION")) {
            validOrder = order.version == null;
          } else if (filter.includes("Type:")) {
            validOrder = filter == `Type: ${order.type}`;
          } else if (filter == "Has Order ID") {
            validOrder = order.orderID != "";
          } else if (filter == "No Order ID") {
            validOrder = order.orderID == "";
          } else {
            validOrder = true;
          }
          
          if (validOrder) {
            // each order >> create row
            let row = document.createElement("div");
            row.classList.add("transactions-result__row");

            // each option >> create column
            addColumn(row, order.date);
            options.includes("Amount") ? addColumn(row, order.amount) : "";
            options.includes("Order ID") ? addColumn(row, order.orderID) : "";
            options.includes("Version") ? addColumn(row, order.version) : "";
            options.includes("Affiliate") ? addColumn(row, `${order.affiliateName}: ${order.affiliateID}`) : "";
            options.includes("Type") ? addColumn(row, order.type) : "";
            options.includes("Voided") ? addColumn(row, `Voided: ${order.voided}`) : "";
            options.includes("Commission") ? addColumn(row, `$${order.commission} (${order.commissionPerc}%)`) : "";
            options.includes("Comment") ? addColumn(row, order.comment) : "";
            options.includes("Hash") ? addColumn(row, `${order.iphash} (${order.ipCountry})`) : "";
            options.includes("Referer") ? addColumn(row, order.referer) : "";
            options.includes("Tracking Pixel") ? addColumn(row, order.pixel) : "";
            
            resultCont.append(row);
          }
        });
    }
    
    // FETCHING TRANSACTIONS
    let pagesToGet = pages;

  let orderObject = [];
  for (let page = 1; page <= pagesToGet; page++) {
      // START FETCH
      fetch(`https://account.shareasale.com/m-accountactivity.cfm?&pageNumber=${page}`)
      .then((res) => {return res.text()})
      .then((html) => {
          let orders = [];
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          doc.querySelectorAll(".showMe").forEach((transaction) => {
              transaction.querySelector(".transRptRow") ? orders.push(transaction.querySelector(".transDetails")) : "";
          });
          return orders;
      })
      .then((orders) => {
          orders.forEach((order) => {
              let orderHeader = order.querySelector(".rowHdr");
              let orderBody = order.querySelector(".bdy");
              let orderAff = order.querySelector(".affCont").querySelector(".nameIdContainer");
              let detailsContainer = orderBody.querySelector(".detailsContainer").querySelectorAll(".item");
              let thisOrd = {};
              thisOrd.amount = orderBody.querySelector(".tDspAmount") ? orderBody.querySelector(".tDspAmount").textContent.replace("$", "").trim() : "";
              thisOrd.orderID = orderHeader.querySelector(".orderId input") ? orderHeader.querySelector(".orderId input").value : "";
              thisOrd.transID = orderHeader.querySelector(".trnsId") ? orderHeader.querySelector(".trnsId").textContent.replace("Transaction ID: ","").trim() : "";
              thisOrd.date = orderHeader.querySelector(".tDate") ? orderHeader.querySelector(".tDate").textContent.replace("2024", "2024 ").replace("2023", "2023 ").replace("2022", "2022 ").replace("2021", "2021 ").replace("2020", "2020 ").trim() : "";
              thisOrd.lock = orderBody.querySelector(".transStatus") ? orderBody.querySelector(".transStatus").textContent.replace("LOCK DATE: ", "").trim() : "";
              thisOrd.voided = orderBody.querySelector(".voided") ? true : false;
              thisOrd.commission = orderBody.querySelector(".commDollar") ? orderBody.querySelector(".commDollar").textContent.replace("$", "").trim() : "";
              thisOrd.commissionPerc = orderBody.querySelector(".commPercent") ? orderBody.querySelector(".commPercent").textContent.replace("%", "").trim() : "";
              thisOrd.comment = orderBody.querySelector(`#commentField_${thisOrd.transID}`) ? orderBody.querySelector(`#commentField_${thisOrd.transID}`).value.trim() : "";
              thisOrd.type = orderBody.querySelector(".tType") ? orderBody.querySelector(".tType").textContent : "";
              thisOrd.affiliateName = orderAff.querySelector('.name') ? orderAff.querySelector('.name').textContent.trim() : "";
              thisOrd.affiliateID = orderAff.querySelector('.id') ? orderAff.querySelector('.id').textContent.replace("Affiliate ID: ", "").trim() : "";
              detailsContainer.forEach((item) => {
                  if (item.textContent.toUpperCase().includes("HASH")) {
                      thisOrd.iphash = item.querySelector("a") ? item.querySelector("a").textContent.trim() : "";
                      thisOrd.ipCountry = item.querySelector("img") ? item.querySelector("img").alt : "";
                  } else if (item.textContent.toUpperCase().includes("HTTP")) {
                      thisOrd.referer = item.querySelector("input").value;
                  } else if (item.textContent.toUpperCase().includes("PIXEL")) {
                      thisOrd.pixel = decodeURIComponent(item.querySelector("input").value);
                      let urlParams = new URLSearchParams(thisOrd.pixel);
                      thisOrd.version = urlParams.get('v');
                      thisOrd.newCustomer = urlParams.get('newcustomer');
                      thisOrd.currency = urlParams.get('currency');
                  }
              });
              orderObject.push(thisOrd);
          });
          return orderObject;
      })
      .then((ordersObj) => {
        // Handle JSON Result
        let returnEl = resultEl[0].querySelector(".transactions-result__result")
        returnEl.textContent = "";
        ordersObj.forEach((order) => {
          returnEl.textContent = `${returnEl.textContent}\n${JSON.stringify(order).replaceAll(`,"`, `,\n"`).replace(`{`, `{\n`)},`;
        });
        return ordersObj;
      })
      .then((ordersObj) => {
        // Handle results
        let resultCont = resultEl[1].querySelector(".transactions-result__result");
        
        returnResult(ordersObj, resultCont);
        
        return ordersObj;
      })
      .then((ordersObj) => {
        const handleFilter = (orderData, dataToGet, nullValue, filters) => {
          let tempF = orderData[dataToGet] != null ? `${dataToGet.charAt(0).toUpperCase() + dataToGet.slice(1)}: ${orderData[dataToGet]}` : `${dataToGet.charAt(0).toUpperCase() + dataToGet.slice(1)}: ${nullValue}`;
          if (filters[`${tempF}`] == undefined) {
            filters[`${tempF}`] = {
              count: 1,
              transactions: [orderData],
            };
          } else {
            filters[`${tempF}`].count++,
            filters[`${tempF}`].transactions.push(orderData);
          }
        }
        let filtersObj = {
          "All Orders": {
            count: ordersObj.length,
            transactions: ordersObj,
          },
          "Has Order ID": {
            count: 0,
            transactions: [],
          },
          "No Order ID": {
            count: 0,
            transactions: [],
          }
        };
        ordersObj.forEach((order) => {
          // Order ID
          if (order.orderID) {
            filtersObj["Has Order ID"].count++,
            filtersObj["Has Order ID"].transactions.push(order);
          } else {
            filtersObj["No Order ID"].count++,
            filtersObj["No Order ID"].transactions.push(order);
          }
          // Version
          handleFilter(order, "version", "No version", filtersObj);
          // Type
          handleFilter(order, "type", "No type", filtersObj);
        });

        return [filtersObj, ordersObj];
      })
      .then((returnArray) => {
        let hasFilter = filtersCont.querySelectorAll(".transactions-details__result");
        hasFilter.forEach((filter) => {
          filter.remove();
        });
        let filters = returnArray[0];
        let ordersObj = returnArray[1];
        Object.keys(filters).forEach(key => {
          //filtersCont.innerHTML = "";
          let tempEl = document.createElement("p");
          tempEl.classList.add("transactions-details__result");
          tempEl.innerHTML = `
          ${key}<span>${filters[key].count}</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
          `;
          filtersCont.append(tempEl);
          tempEl.addEventListener("click", () => {
            returnResult(ordersObj, resultEl[1].querySelector(".transactions-result__result"), key);
          })
        });
      })
      .catch((error) => {console.log(error)});
      // ENDING FETCH
      }
    }

  // Getting Options
  const getOptions = () => {
    chrome.storage.sync.get(
      {
        menucontext: true,
        extension: true,
        merContext: true,
        itpContext: true,
        affContext: true,
        datafeed: true,
        sasUI: true,
        transactionsScript: true,
        decoder: true,
        ftpCred: true,
        getMerchant: true,
        testMerchant: true,
        itp: true,
        getAffiliate: true,
        testAffiliate: true,
      },
      (items) => {
        if (
          items.extension &&
          (items.datafeed ||
            items.sasUI ||
            items.transactionsScript ||
            items.decoder ||
            items.ftpCred ||
            items.getMerchant ||
            items.testMerchant ||
            items.itp ||
            items.getAffiliate ||
            items.testAffiliate)
        ) {
          // Handle the page
          let styleElement = createComponent("style", "sas-iframe-style", []);
          styleElement.innerHTML = `
          #sas-iframe.sas-extension-iframe {
            width: 35px;
            height: 70px;
            position: fixed;
            bottom: 75px;
            right: 0px;
            border: none;
            background: transparent;
            z-index: 100;
            border-radius: 40px 0px 0px 40px;
            background: rgba(244, 244, 244, 0.35);
            box-shadow: -2px 2px 3px 0px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            cursor: pointer;
            transition: all 0.35s ease;
            z-index: 100000000;
          }
          #sas-iframe.sas-extension-iframe:hover {
            box-shadow: -3px 2px 3px 0px rgba(0, 0, 0, 0.2);
          }
            #sas-transactions-iframe.sas-transactions-iframe {
              width: 250px;
              height: 35px;
              position: fixed;
              bottom: 0px;
              left: 55px;
              border: none;
              background: transparent;
              z-index: 100;
              border-radius: 40px 40px 0px 0px;
              background: rgba(225, 225, 225, 0.75);
              box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
              backdrop-filter: blur(10px);
              -webkit-backdrop-filter: blur(10px);
              cursor: pointer;
              transition: all 0.35s ease;
              z-index: 100000000;
            }
            #sas-transactions-iframe.sas-transactions-iframe:hover {
              box-shadow: 1.25px -.5px 3px 0px rgba(0, 0, 0, 0.2);
            }
            #sas-transactions-iframe.sas-transactions-iframe.sas-transactions-iframe_active {
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 0;
            }
          `;
          let exIframe = createComponent("iframe", "sas-iframe", [
            "sas-extension-iframe",
          ]);

          handleComponents(
            items,
            exIframe,
            exIframe.contentWindow.document.body
          );

          // Adding Openning and closing Event Listener
          let iframeBody = exIframe.contentWindow.document.body;
          let handlerButton = iframeBody.querySelector(".extension-button");
          // Open and close by clicking at the button
          eventsHandler(
            handlerButton,
            [exIframe, iframeBody],
            "click",
            (el) => {
              el[1].classList.toggle("sas-extension_active");
              if (el[1].classList.contains("sas-extension_active")) {
                (el[0].style.width = "445px"),
                  (el[0].style.height = `${
                    el[1].querySelector(".menu").scrollHeight + 120
                  }px`);
                el[0].classList.add("sas-extension-iframe_active");
              } else {
                (el[0].style.width = "35px"), (el[0].style.height = "70px");
                cleanInputs(el[1]);
                el[0].classList.remove("sas-extension-iframe_active");
              }
            }
          );
          // Close when clicking out of the iframe
          eventsHandler(
            document,
            [exIframe, iframeBody],
            "click",
            (el, evt) => {
              (el[0].style.width = "35px"), (el[0].style.height = "70px");
              el[1].classList.remove("sas-extension_active");
              cleanInputs(el[1]);
              el[0].classList.remove("sas-extension-iframe_active");
            }
          );
          // Close when clicking at close button
          let closeButton = iframeBody.querySelector(".menu-footer__button");
          eventsHandler(closeButton, [exIframe], "click", (el, evt) => {
            el[0].remove();
          });

          // TRANSACTIONS SCRIPT FUNCTION
          if (items.transactionsScript && window.location.href.includes("account.shareasale.com/m")) {
            let transIframe = createComponent("iframe", "sas-transactions-iframe", [
              "sas-transactions-iframe",
            ]);
            let transIframeBody = transIframe.contentWindow.document.body;
            transIframeBody.classList.add("transaction-body");
            let popupStyle = document.createElement("link");
            popupStyle.type = "text/css";
            popupStyle.rel = "stylesheet";

            popupStyle.href =
              "https://arthurfms.github.io/sas-extension/source/source.css";
            
            transIframeBody.innerHTML = `
            <div class="transactions-header">
              <p class="transactions-header__title">Transactions</p>
              <p class="transactions-header__get-button">Get Transactions</p>
              <svg
                  class="transactions-header__close-button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
          </div>
          <div class="transactions-popup">
              <div class="transactions-options">
                  <p class="transactions-options__title">Options</p>
                  <div class="transactions-option" id="pages">
                      <p>Pages to Get</p>
                      <input class="transactions-option__box" type="number"  min="1" max="25" step="1" value="1" />
                  </div>
                  <div class="transactions-option" id="orderid">
                      <p>Order ID</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="version">
                      <p>Version</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="amount">
                      <p>Amount</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="type">
                      <p>Type</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="affiliate">
                      <p>Affiliate</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="referer">
                      <p>Referer</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="pixel">
                      <p>Tracking Pixel</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="hash">
                      <p>Hash</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="commission">
                      <p>Commission</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="voided">
                      <p>Voided</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
                  <div class="transactions-option" id="comment">
                      <p>Comment</p>
                      <span class="transactions-option__box transactions-option__box_active"></span>
                  </div>
              </div>
              <div class="transactions-details">
                  <p class="transactions-details__title">Filters</p>
                  <div class="transactions-details__list"></div>
              </div>
              <div class="transactions-results">
                  <div class="transactions-result transactions-result_json">
                      <p class="transactions-result__title">All Transactions (Object)</p>
                      <textarea class="transactions-result__result" disabled="disabled"></textarea>
                  </div>
                  <div class="transactions-result transactions-result_box">
                      <p class="transactions-result__title">Result List <span></span><svg class="result-download" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg></p>
                      <div class="transactions-result__result">
                      </div>
                  </div>
              </div>
            </div>
            `;

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
            transIframe.contentWindow.document.head.append(font1),
            transIframe.contentWindow.document.head.append(font2),
            transIframe.contentWindow.document.head.append(font3),
            transIframe.contentWindow.document.head.append(resetLink);
            transIframe.contentWindow.document.head.append(popupStyle);

            //Handle Events
            //Options clicks
            let openTransButton = transIframeBody.querySelector(".transactions-header__title");
            let getTransButton = transIframeBody.querySelector(".transactions-header__get-button");
            let transCloseButton = transIframeBody.querySelector(".transactions-header__close-button");
            let transOptions = transIframeBody.querySelectorAll(".transactions-option");
            let filtersContainer = transIframeBody.querySelector(".transactions-details .transactions-details__list");
            let downloadButton = transIframeBody.querySelector(".result-download");

            // Options event
            transOptions.forEach((opt) => {
                eventsHandler(opt, [opt.querySelector(".transactions-option__box")], "click", (el, evt) => {
                  el[0].querySelector("input") ? "" : el[0].classList.toggle("transactions-option__box_active");
                });
            });
            // Open button event
            eventsHandler(openTransButton, [transIframe, transIframeBody], "click", (el, evt) => {
              el[0].classList.add("sas-transactions-iframe_active");
              el[1].classList.add("transaction-body_active");
              document.querySelector("body").style.overflow = "hidden";
            });
            // Close button event
            eventsHandler(transCloseButton, [transIframe, transIframeBody], "click", (el, evt) => {
              el[0].classList.remove("sas-transactions-iframe_active");
              el[1].classList.remove("transaction-body_active");
              document.querySelector("body").style.overflow = "inherit";
            });
            // Run trans script
            eventsHandler(getTransButton, [], "click", (evt) => {
              handleTransactions(transOptions, transIframeBody.querySelectorAll(".transactions-result"), filtersContainer);
            });
            // Transactions Download handler
            const downloadTransactions = (cont) => {
              let container = cont.querySelector(".transactions-result__result").querySelectorAll(".transactions-result__row");
              if (container.length > 0) {
                let data = [];
                
                container.forEach((row) => {
                  let currRow = [];
                  row.querySelectorAll(".transactions-result__column").forEach((dt) => {
                    currRow.push(dt.textContent);
                  });
                  data.push(currRow);
                  
                });    
        
                const csvContent = data.map(e => e.join(",")).join("\n");
                const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
                const link = document.createElement("a");
                const url = URL.createObjectURL(blob);

                let currentDate = new Date();

                link.setAttribute("href", url);
                
                link.setAttribute("download", `transactions-${currentDate.getFullYear()}_${currentDate.getMonth() + 1}_${currentDate.getDate()}.csv`);
        
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
            }

            // Download Event Listener
              eventsHandler(downloadButton, [], "click", (evt) => {
                let el = downloadButton.parentElement.parentElement;
                downloadTransactions(el);
              });
            
          }
          // Handle Dark theme
          if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme:dark)").matches &&
            document.querySelector("html").attributes["data-dark-theme"] !=
              undefined &&
            document.querySelector("html").attributes["data-color-mode"] !=
              undefined
          ) {
            if (
              document.querySelector("html").attributes["data-dark-theme"]
                .value == "dark" &&
              document.querySelector("html").attributes["data-color-mode"]
                .value == "auto"
            ) {
              exIframe.classList.add("sas-extension-iframe_dark");
              iframeBody
                .querySelector(".extension-button")
                .classList.add("extension-button_dark");
            }
          }
        }
      }
    );
  };

  

  getOptions();
});
